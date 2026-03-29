import { spawnSync } from "node:child_process";
import process from "node:process";

if (process.platform !== "win32") {
  console.log("[stop:next] Non-Windows environment detected, skipping stop script.");
  process.exit(0);
}

const result = spawnSync(
  "powershell",
  ["-NoProfile", "-ExecutionPolicy", "Bypass", "-File", "./scripts/stop-next.ps1"],
  { stdio: "inherit" },
);

if (result.error) {
  console.warn(`[stop:next] Unable to run PowerShell script: ${result.error.message}`);
  process.exit(0);
}

process.exit(result.status ?? 0);
