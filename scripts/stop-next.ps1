$ErrorActionPreference = "SilentlyContinue"

$workspace = (Resolve-Path "$PSScriptRoot\..").Path
$killed = @{}

function Stop-NodeProcess([int]$targetPid, [string]$reason) {
  if ($killed.ContainsKey($targetPid)) {
    return
  }

  $proc = Get-Process -Id $targetPid -ErrorAction SilentlyContinue
  if (-not $proc) {
    return
  }

  $cim = Get-CimInstance Win32_Process -Filter "ProcessId=$targetPid" -ErrorAction SilentlyContinue
  $cmd = if ($cim) { $cim.CommandLine } else { "" }

  if ($proc.ProcessName -ne "node") {
    return
  }

  if ($cmd -and $cmd -notmatch "next") {
    return
  }

  Stop-Process -Id $targetPid -Force
  $killed[$targetPid] = $true
  Write-Host "Stopped next process PID $targetPid ($reason)"
}

foreach ($port in @(3000, 3001, 3002)) {
  $listeners = Get-NetTCPConnection -LocalPort $port -State Listen -ErrorAction SilentlyContinue
  foreach ($listener in $listeners) {
    Stop-NodeProcess -targetPid $listener.OwningProcess -reason "port $port"
  }
}

$nextProcesses = Get-CimInstance Win32_Process -ErrorAction SilentlyContinue |
  Where-Object {
    $_.Name -eq "node.exe" -and
    $_.CommandLine -match "next" -and
    $_.CommandLine -match [regex]::Escape($workspace)
  }

foreach ($np in $nextProcesses) {
  Stop-NodeProcess -targetPid $np.ProcessId -reason "workspace process sweep"
}
