type LightCreamLineworkProps = {
  className?: string;
};

export default function LightCreamLinework({ className = "" }: LightCreamLineworkProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden mix-blend-multiply [mask-image:radial-gradient(ellipse_at_center,transparent_0%,transparent_40%,black_62%,black_100%)] ${className}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 1100 1000"
        fill="none"
        className="absolute -right-[12%] top-[-10%] h-[136%] w-[60%] min-w-[520px] text-[#AA7F4F] opacity-[0.1] md:opacity-[0.12]"
      >
        <g stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.66">
          <path d="M720 52c76 64 116 164 112 280-3 97-36 170-98 246-59 72-141 118-242 145" />
          <path d="M786 96c63 52 97 140 96 241-1 89-27 153-80 220-50 64-122 106-216 132" />
          <path d="M851 138c52 44 81 118 80 206-1 77-23 136-68 193-43 55-106 92-189 116" />
          <path d="M915 184c43 35 67 97 67 176 0 66-19 118-57 167-37 48-91 81-162 102" />
          <path d="M638 170c48 9 92 30 130 62 40 34 69 82 84 136 18 60 17 123-3 186-15 47-40 88-76 124" />
          <path d="M606 238c56 11 103 38 139 79 37 43 58 100 60 164 2 57-11 108-38 154-23 39-54 72-93 99" />
          <path d="M577 306c58 13 106 42 141 85 35 43 53 97 52 154-1 50-16 94-43 133-24 35-57 64-99 88" />
          <path d="M548 374c56 13 101 40 133 79 31 38 47 85 45 136-1 43-15 82-41 116-24 31-56 56-97 76" />
          <path d="M519 444c52 12 93 35 122 68 27 31 40 70 38 113-2 36-15 68-37 96-21 26-50 47-87 63" />
          <path d="M862 282l95 58M804 344l138 80M745 414l176 101M678 488l189 108M610 560l169 97M567 626l126 74" />
          <path d="M913 235l122 68M857 315l154 90M795 390l180 102M732 465l188 108M676 534l170 99M630 603l132 77" />
          <path d="M607 217l57 35M580 283l78 45M552 351l94 54M529 419l99 58M515 490l94 56M511 560l79 48" />
        </g>
      </svg>

      <svg
        viewBox="0 0 900 760"
        fill="none"
        className="absolute -left-[18%] bottom-[-44%] h-[100%] w-[54%] min-w-[420px] text-[#AA7F4F] opacity-[0.1] md:opacity-[0.12]"
      >
        <g stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.66">
          <path d="M-120 686c86-131 221-207 405-227 194-21 364 27 512 146" />
          <path d="M-86 714c82-118 205-186 370-204 179-20 335 23 470 128" />
          <path d="M-44 742c76-103 186-162 333-179 160-18 301 20 424 113" />
          <path d="M10 758c67-83 160-131 281-145 132-15 251 17 359 95" />
          <path d="M58 760c57-66 133-104 230-116 104-12 200 13 289 74" />
          <path d="M98 760c48-50 110-80 186-89 81-10 157 10 229 58" />
          <path d="M142 760c37-38 86-61 147-68 65-8 127 8 186 44" />
          <path d="M302 644c32-44 78-72 136-83 62-12 122-1 180 31" />
          <path d="M344 626c26-35 62-57 107-67 49-10 97-2 145 23" />
          <path d="M386 610c19-26 46-42 78-49 36-8 72-2 107 16" />
          <path d="M236 676l78-31M274 700l96-38M325 724l105-42M390 742l99-39M464 754l82-33" />
        </g>
      </svg>
    </div>
  );
}
