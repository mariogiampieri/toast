import type { ComponentProps, FC, SVGProps } from "react";
import { cn } from "@/utils/cn";

export type Position =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right";

const Logo: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 256 256"
    {...props}
  >
    <path d="M224 71.1a8 8 0 01-10.78-3.42 94.13 94.13 0 00-33.46-36.91 8 8 0 118.54-13.54 111.46 111.46 0 0139.12 43.09A8 8 0 01224 71.1zM35.71 72a8 8 0 007.1-4.32 94.13 94.13 0 0133.46-36.91 8 8 0 10-8.54-13.54 111.46 111.46 0 00-39.12 43.09A8 8 0 0035.71 72zm186.1 103.94A16 16 0 01208 200h-40.8a40 40 0 01-78.4 0H48a16 16 0 01-13.79-24.06C43.22 160.39 48 138.28 48 112a80 80 0 01160 0c0 26.27 4.78 48.38 13.81 63.94zM150.62 200h-45.24a24 24 0 0045.24 0zM208 184c-10.64-18.27-16-42.49-16-72a64 64 0 00-128 0c0 29.52-5.38 53.74-16 72z" />
  </svg>
);

export const SparkleSvg = ({
  position,
  className,
}: {
  position: Position;
  className?: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(
        "absolute z-10 size-4 fill-black",
        position === "top-right" && "-right-2 -top-2",
        position === "bottom-left" && "-bottom-2 -left-2",
        position === "bottom-right" && "-bottom-2 -right-2",
        position === "top-left" && "-left-2 -top-2",
        className,
      )}
    >
      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z"></path>
    </svg>
  );
};

const Github = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 256 250"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z" />
  </svg>
);

const X = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 1200 1227"
    {...props}
  >
    <path
      fill="currentColor"
      d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"
    />
  </svg>
);

const Nextjs = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 180 180"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask
      id="mask0_408_139"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={180}
      height={180}
    >
      <circle cx={90} cy={90} r={90} fill="black" />
    </mask>
    <g mask="url(#mask0_408_139)">
      <circle
        cx={90}
        cy={90}
        r={87}
        fill="black"
        stroke="white"
        strokeWidth={6}
      />
      <path
        d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
        fill="url(#paint0_linear_408_139)"
      />
      <rect
        x={115}
        y={54}
        width={12}
        height={72}
        fill="url(#paint1_linear_408_139)"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_408_139"
        x1={109}
        y1={116.5}
        x2={144.5}
        y2={160.5}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset={1} stopColor="white" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="paint1_linear_408_139"
        x1={121}
        y1={54}
        x2={120.799}
        y2={106.875}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset={1} stopColor="white" stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);

const Remix = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 256 297" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M141.675 0C218.047 0 256 36.35 256 94.414c0 43.43-26.707 71.753-62.785 76.474 30.455 6.137 48.259 23.604 51.54 58.065l.474 6.337.415 5.924.358 5.542.249 4.179.267 4.93.138 2.814.198 4.47.159 4.222.079 2.427.107 3.888.092 4.446.033 2.148.06 6.226.02 6.496v3.885h-78.758l.004-1.62.028-3.147.047-3.065.136-7.424.035-2.489.027-3.902-.004-2.496-.023-2.617-.032-2.054-.064-2.876-.094-3.05-.125-3.242-.16-3.455-.096-1.813-.16-2.833-.186-2.976-.287-4.204-.247-3.342a116.56 116.56 0 0 0-.247-3.02l-.202-1.934c-2.6-22.827-11.655-32.157-27.163-35.269l-1.307-.245a60.184 60.184 0 0 0-2.704-.408l-1.397-.164c-.236-.025-.472-.05-.71-.073l-1.442-.127-1.471-.103-1.502-.081-1.514-.058-1.544-.039-1.574-.018L0 198.74V136.9h127.62c2.086 0 4.108-.04 6.066-.12l1.936-.095 1.893-.122 1.85-.15c.305-.028.608-.056.909-.086l1.785-.193a86.3 86.3 0 0 0 3.442-.475l1.657-.28c20.709-3.755 31.063-14.749 31.063-36.2 0-24.075-16.867-38.666-50.602-38.666H0V0h141.675ZM83.276 250.785c10.333 0 14.657 5.738 16.197 11.23l.203.79.167.782.109.617.046.306.078.603.058.59.023.29.031.569.01.278.008.54v29.507H0v-46.102h83.276Z"
      fill="currentColor"
      fillRule="nonzero"
    />
  </svg>
);

const Astro = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 256 366"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <path
      fill="currentColor"
      d="M182.022 9.147c2.982 3.702 4.502 8.697 7.543 18.687L256 246.074a276.467 276.467 0 0 0-79.426-26.891L133.318 73.008a5.63 5.63 0 0 0-10.802.017L79.784 219.11A276.453 276.453 0 0 0 0 246.04L66.76 27.783c3.051-9.972 4.577-14.959 7.559-18.654a24.541 24.541 0 0 1 9.946-7.358C88.67 0 93.885 0 104.314 0h47.683c10.443 0 15.664 0 20.074 1.774a24.545 24.545 0 0 1 9.95 7.373Z"
    />
    <path
      fill="#FF5D01"
      d="M189.972 256.46c-10.952 9.364-32.812 15.751-57.992 15.751-30.904 0-56.807-9.621-63.68-22.56-2.458 7.415-3.009 15.903-3.009 21.324 0 0-1.619 26.623 16.898 45.14 0-9.615 7.795-17.41 17.41-17.41 16.48 0 16.46 14.378 16.446 26.043l-.001 1.041c0 17.705 10.82 32.883 26.21 39.28a35.685 35.685 0 0 1-3.588-15.647c0-16.886 9.913-23.173 21.435-30.48 9.167-5.814 19.353-12.274 26.372-25.232a47.588 47.588 0 0 0 5.742-22.735c0-5.06-.786-9.938-2.243-14.516Z"
    />
  </svg>
);

const NPM = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" {...props}>
    <path
      fill="#cb3837"
      d="M2 38.5h124v43.71H64v7.29H36.44v-7.29H2Zm6.89 36.43h13.78V53.07h6.89v21.86h6.89V45.79H8.89Zm34.44-29.14v36.42h13.78v-7.28h13.78V45.79Zm13.78 7.29H64v14.56h-6.89Zm20.67-7.29v29.14h13.78V53.07h6.89v21.86h6.89V53.07h6.89v21.86h6.89V45.79Z"
    />
  </svg>
);

const TailwindCSS = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 256 154"
    width="1em"
    height="1em"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <defs>
      <linearGradient
        x1="-2.778%"
        y1="32%"
        x2="100%"
        y2="67.556%"
        id="gradient"
      >
        <stop stopColor="#2298BD" offset="0%" />
        <stop stopColor="#0ED7B5" offset="100%" />
      </linearGradient>
    </defs>
    <path
      d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z"
      fill="url(#gradient)"
    />
  </svg>
);

const TanStack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 633 633"
    {...props}
  >
    <defs>
      <linearGradient id="b" x1="50%" x2="50%" y1="0%" y2="71.65%">
        <stop offset="0%" stopColor="#6BDAFF"></stop>
        <stop offset="31.922%" stopColor="#F9FFB5"></stop>
        <stop offset="70.627%" stopColor="#FFA770"></stop>
        <stop offset="100%" stopColor="#FF7373"></stop>
      </linearGradient>
      <linearGradient id="d" x1="43.996%" x2="53.441%" y1="8.54%" y2="93.872%">
        <stop offset="0%" stopColor="#673800"></stop>
        <stop offset="100%" stopColor="#B65E00"></stop>
      </linearGradient>
      <linearGradient id="e" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#2F8A00"></stop>
        <stop offset="100%" stopColor="#90FF57"></stop>
      </linearGradient>
      <linearGradient id="f" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#2F8A00"></stop>
        <stop offset="100%" stopColor="#90FF57"></stop>
      </linearGradient>
      <linearGradient id="g" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#2F8A00"></stop>
        <stop offset="100%" stopColor="#90FF57"></stop>
      </linearGradient>
      <linearGradient id="h" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#2F8A00"></stop>
        <stop offset="100%" stopColor="#90FF57"></stop>
      </linearGradient>
      <linearGradient id="i" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#2F8A00"></stop>
        <stop offset="100%" stopColor="#90FF57"></stop>
      </linearGradient>
      <linearGradient id="j" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#2F8A00"></stop>
        <stop offset="100%" stopColor="#90FF57"></stop>
      </linearGradient>
      <linearGradient id="k" x1="92.9%" x2="8.641%" y1="45.768%" y2="54.892%">
        <stop offset="0%" stopColor="#EE2700"></stop>
        <stop offset="100%" stopColor="#FF008E"></stop>
      </linearGradient>
      <linearGradient id="l" x1="61.109%" x2="43.717%" y1="3.633%" y2="43.072%">
        <stop offset="0%" stopColor="#FFF400"></stop>
        <stop offset="100%" stopColor="#3C8700"></stop>
      </linearGradient>
      <linearGradient id="m" x1="50%" x2="50%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFDF00"></stop>
        <stop offset="100%" stopColor="#FF9D00"></stop>
      </linearGradient>
      <linearGradient id="n" x1="127.279%" x2="0%" y1="49.778%" y2="50.222%">
        <stop offset="0%" stopColor="#FFA400"></stop>
        <stop offset="100%" stopColor="#FF5E00"></stop>
      </linearGradient>
      <linearGradient id="o" x1="127.279%" x2="0%" y1="47.531%" y2="52.469%">
        <stop offset="0%" stopColor="#FFA400"></stop>
        <stop offset="100%" stopColor="#FF5E00"></stop>
      </linearGradient>
      <linearGradient id="p" x1="127.279%" x2="0%" y1="46.195%" y2="53.805%">
        <stop offset="0%" stopColor="#FFA400"></stop>
        <stop offset="100%" stopColor="#FF5E00"></stop>
      </linearGradient>
      <linearGradient id="q" x1="127.279%" x2="0%" y1="35.33%" y2="64.67%">
        <stop offset="0%" stopColor="#FFA400"></stop>
        <stop offset="100%" stopColor="#FF5E00"></stop>
      </linearGradient>
      <linearGradient id="r" x1="127.279%" x2="0%" y1="4.875%" y2="95.125%">
        <stop offset="0%" stopColor="#FFA400"></stop>
        <stop offset="100%" stopColor="#FF5E00"></stop>
      </linearGradient>
      <linearGradient id="s" x1="78.334%" x2="31.668%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFA400"></stop>
        <stop offset="100%" stopColor="#FF5E00"></stop>
      </linearGradient>
      <linearGradient id="t" x1="57.913%" x2="44.88%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFA400"></stop>
        <stop offset="100%" stopColor="#FF5E00"></stop>
      </linearGradient>
      <linearGradient id="u" x1="50.495%" x2="49.68%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="#FFA400"></stop>
        <stop offset="100%" stopColor="#FF5E00"></stop>
      </linearGradient>
      <circle id="a" cx="308.5" cy="308.5" r="308.5"></circle>
      <circle id="v" cx="307.5" cy="308.5" r="316.5"></circle>
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(9 8)">
      <mask id="c" fill="#fff">
        <use xlinkHref="#a"></use>
      </mask>
      <use xlinkHref="#a" fill="url(#b)"></use>
      <ellipse
        cx="81.5"
        cy="602.5"
        fill="#015064"
        stroke="#00CFE2"
        strokeWidth="25"
        mask="url(#c)"
        rx="214.5"
        ry="185.968"
      ></ellipse>
      <ellipse
        cx="535.5"
        cy="602.5"
        fill="#015064"
        stroke="#00CFE2"
        strokeWidth="25"
        mask="url(#c)"
        rx="214.5"
        ry="185.968"
      ></ellipse>
      <ellipse
        cx="81.5"
        cy="640.5"
        fill="#015064"
        stroke="#00A8B8"
        strokeWidth="25"
        mask="url(#c)"
        rx="214.5"
        ry="185.968"
      ></ellipse>
      <ellipse
        cx="535.5"
        cy="640.5"
        fill="#015064"
        stroke="#00A8B8"
        strokeWidth="25"
        mask="url(#c)"
        rx="214.5"
        ry="185.968"
      ></ellipse>
      <ellipse
        cx="81.5"
        cy="676.5"
        fill="#015064"
        stroke="#007782"
        strokeWidth="25"
        mask="url(#c)"
        rx="214.5"
        ry="185.968"
      ></ellipse>
      <ellipse
        cx="535.5"
        cy="676.5"
        fill="#015064"
        stroke="#007782"
        strokeWidth="25"
        mask="url(#c)"
        rx="214.5"
        ry="185.968"
      ></ellipse>
      <g mask="url(#c)">
        <path
          fill="url(#d)"
          stroke="#6E3A00"
          strokeWidth="6.088"
          d="M98.318 88.007q11.537 55.656 26.856 106.013t46.07 106.088l-51.903 11.67q-15.085-90.015-21.525-117.487T77.727 94.934l20.591-6.927"
          transform="scale(-1 1)rotate(25 -300.37 -553.013)"
        ></path>
        <g stroke="#2F8A00">
          <path
            fill="url(#e)"
            strokeWidth="9.343"
            d="M108.544 66.538s-13.54-21.305-37.417-27.785q-23.875-6.481-54.048 13.892Q41.657 72.64 58.405 75.28c16.749 2.64 50.14-8.74 50.14-8.74Z"
            transform="rotate(1 -6061.691 5926.397)"
          ></path>
          <path
            fill="url(#f)"
            strokeWidth="9.343"
            d="M108.544 67.138s-47.187-5.997-81.077 19.936Q-6.424 113.006 1.502 187.369q42.63-43.83 61.016-64.846c18.387-21.016 46.026-55.385 46.026-55.385Z"
            transform="rotate(1 -6061.691 5926.397)"
          ></path>
          <path
            fill="url(#g)"
            strokeWidth="9.343"
            d="M108.544 66.538q-2.94-32.557 17.82-48.94Q147.123 1.212 170.303 0q-7.298 32.29-22.524 44.361-15.227 12.072-39.236 22.177Z"
            transform="rotate(1 -6061.691 5926.397)"
          ></path>
          <path
            fill="url(#h)"
            strokeWidth="9.343"
            d="M108.544 67.138q44.757-47.23 93.669-33.869 48.91 13.36 56.787 55.827-52.347-5.486-75.228-8.058-22.881-2.574-75.228-13.9Z"
            transform="rotate(1 -6061.691 5926.397)"
          ></path>
          <path
            fill="url(#i)"
            strokeWidth="9.343"
            d="M108.544 67.138q52.302-14.072 88.905 17.17t45.762 77.571q-59.439-11.36-86.322-37.624a395 395 0 0 1-48.345-57.117Z"
            transform="rotate(1 -6061.691 5926.397)"
          ></path>
          <path
            fill="url(#j)"
            strokeWidth="9.343"
            d="M108.544 67.138Q60.037 90.331 52.75 135.436t13.698 98.462q37.31-62.127 42.096-89.849 4.787-27.721 0-76.91Z"
            transform="rotate(1 -6061.691 5926.397)"
          ></path>
          <path
            strokeLinecap="round"
            strokeWidth="5.91"
            d="M211.284 173.477q-20.776 32.987-28.32 60.093t-9.436 45.216"
          ></path>
          <path
            strokeLinecap="round"
            strokeWidth="5.91"
            d="M209.814 176.884q-35.973 3.847-56.428 23.714-20.458 19.867-29.536 38.674m95.195-71.973q43.542-11.584 65.831-7.352 22.289 4.233 35.842 14.51m-109.408-1.839q30.436 13.66 54.186 29.837 23.75 16.178 35.643 30.617"
          ></path>
        </g>
        <path
          stroke="#830305"
          strokeLinecap="round"
          strokeLinejoin="bevel"
          strokeWidth="6.937"
          d="m409.379 398.157-23.176 18.556m-58.163-41.197-22.313 28.398m7.177-50.216 53.18 59.816"
        ></path>
        <path
          fill="url(#k)"
          d="M67.585 27.463H5.68Q0 28.49 0 34.16t5.68 7.293h67.17l41.751-30.356q3.731-3.97.92-8.006c-2.811-4.036-4.6-3.626-8.177-2.803l-39.76 27.174Z"
          transform="scale(-1 1)rotate(-9 2092.128 2856.854)"
        ></path>
        <path
          fill="#D8D8D8"
          stroke="#FFF"
          strokeLinecap="round"
          strokeLinejoin="bevel"
          strokeWidth="4.414"
          d="m402.861 391.51.471-4.088m-21.122 1.33.472-4.087m-21.136.739.485-3.845m-24.441-9.676 2.56-2.498m-15.874-9.818 2.56-2.497"
        ></path>
      </g>
      <ellipse
        cx="308.5"
        cy="720.5"
        fill="url(#l)"
        mask="url(#c)"
        rx="266"
        ry="316.5"
      ></ellipse>
      <ellipse
        cx="308.5"
        cy="720.5"
        stroke="#6DA300"
        strokeOpacity="0.502"
        strokeWidth="26"
        mask="url(#c)"
        rx="253"
        ry="303.5"
      ></ellipse>
      <g mask="url(#c)">
        <g transform="translate(389 -32)">
          <circle cx="168.5" cy="113.5" r="113.5" fill="url(#m)"></circle>
          <circle
            cx="168.5"
            cy="113.5"
            r="106"
            stroke="#FFC900"
            strokeOpacity="0.529"
            strokeWidth="15"
          ></circle>
          <path
            stroke="url(#n)"
            strokeLinecap="round"
            strokeLinejoin="bevel"
            strokeWidth="12"
            d="M30 113H0"
          ></path>
          <path
            stroke="url(#o)"
            strokeLinecap="round"
            strokeLinejoin="bevel"
            strokeWidth="12"
            d="M33.5 79.5 7 74"
          ></path>
          <path
            stroke="url(#p)"
            strokeLinecap="round"
            strokeLinejoin="bevel"
            strokeWidth="12"
            d="m34 146-29 8"
          ></path>
          <path
            stroke="url(#q)"
            strokeLinecap="round"
            strokeLinejoin="bevel"
            strokeWidth="12"
            d="m45 177-24 13"
          ></path>
          <path
            stroke="url(#r)"
            strokeLinecap="round"
            strokeLinejoin="bevel"
            strokeWidth="12"
            d="m67 204-20 19"
          ></path>
          <path
            stroke="url(#s)"
            strokeLinecap="round"
            strokeLinejoin="bevel"
            strokeWidth="12"
            d="m94.373 227-13.834 22.847"
          ></path>
          <path
            stroke="url(#t)"
            strokeLinecap="round"
            strokeLinejoin="bevel"
            strokeWidth="12"
            d="M127.5 243.5 120 268"
          ></path>
          <path
            stroke="url(#u)"
            strokeLinecap="round"
            strokeLinejoin="bevel"
            strokeWidth="12"
            d="m167.5 252.5.5 24.5"
          ></path>
        </g>
      </g>
      <circle
        cx="307.5"
        cy="308.5"
        r="304"
        stroke="#000"
        strokeWidth="25"
      ></circle>
    </g>
  </svg>
);

export { X, Logo, Github, Nextjs, Remix, Astro, NPM, TailwindCSS, TanStack };
