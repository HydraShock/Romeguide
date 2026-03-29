import Link from "next/link";

type TourBreadcrumbsProps = {
  currentTitle: string;
};

export default function TourBreadcrumbs({ currentTitle }: TourBreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="relative isolate overflow-hidden border-b border-[#C79A62]/24 bg-[linear-gradient(180deg,#f8efe4_0%,#f5eadc_100%)]"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-multiply [background-image:url('/porco.png')] [background-size:900px_auto] [background-position:center]" />
      <div className="mx-auto flex w-[min(100%,1200px)] items-center px-4 py-3 md:px-6">
        <ol className="flex flex-wrap items-center gap-1.5 font-sans text-[0.72rem] tracking-[0.06em] text-[#6F5443] md:text-[0.78rem]">
          <li>
            <Link
              href="/"
              className="rounded-sm transition hover:text-[#3B2B24] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6925E]/58 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f6ebdd]"
            >
              Home
            </Link>
          </li>
          <li aria-hidden className="text-[#9f7f5f]">
            &rsaquo;
          </li>
          <li>
            <Link
              href="/#requested-tours-heading"
              className="rounded-sm transition hover:text-[#3B2B24] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B6925E]/58 focus-visible:ring-offset-2 focus-visible:ring-offset-[#f6ebdd]"
            >
              Tours
            </Link>
          </li>
          <li aria-hidden className="text-[#9f7f5f]">
            &rsaquo;
          </li>
          <li className="font-semibold text-[#3B2B24]">{currentTitle}</li>
        </ol>
      </div>
    </nav>
  );
}
