import { useId } from "react";
import { cn } from "@/lib/utils";

/**
 * Aperture D8 dome camera, rendered as a lit studio subject: a key light from
 * the upper left, purple and blue rim light on opposing edges, and a glass
 * element with a specular arc. Sits inside a .q-stage.
 */
export function DomeCamera({ className }: { className?: string }) {
  const uid = useId().replace(/:/g, "");
  const id = (name: string) => `dome-${name}-${uid}`;

  return (
    <svg
      viewBox="0 0 640 520"
      role="img"
      aria-label="Aperture D8 four-kilobyte dome security camera"
      className={cn("h-auto w-full", className)}
      fill="none"
    >
      <defs>
        {/* Dome shell: key light upper-left, deep falloff to the lower right */}
        <radialGradient id={id("shell")} cx="34%" cy="26%" r="82%">
          <stop offset="0%" stopColor="#6f7078" />
          <stop offset="26%" stopColor="#4a4b53" />
          <stop offset="58%" stopColor="#26262d" />
          <stop offset="82%" stopColor="#14141a" />
          <stop offset="100%" stopColor="#0a0a0e" />
        </radialGradient>

        {/* Brushed metal base, shaded as a cylinder */}
        <linearGradient id={id("base")} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0b0b0f" />
          <stop offset="14%" stopColor="#33343c" />
          <stop offset="34%" stopColor="#5c5d67" />
          <stop offset="52%" stopColor="#41424a" />
          <stop offset="74%" stopColor="#22232a" />
          <stop offset="100%" stopColor="#0a0a0e" />
        </linearGradient>

        <linearGradient id={id("plate")} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#101016" />
          <stop offset="40%" stopColor="#2c2d35" />
          <stop offset="62%" stopColor="#1e1f26" />
          <stop offset="100%" stopColor="#0b0b10" />
        </linearGradient>

        {/* Glass: iridescent, cooler toward the rim */}
        <radialGradient id={id("glass")} cx="38%" cy="32%" r="78%">
          <stop offset="0%" stopColor="#2a3550" />
          <stop offset="42%" stopColor="#141a2b" />
          <stop offset="78%" stopColor="#080a12" />
          <stop offset="100%" stopColor="#04050a" />
        </radialGradient>

        {/* Sweeping highlight across the dome */}
        <linearGradient id={id("sweep")} x1="0" y1="0" x2="0.7" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.34" />
          <stop offset="46%" stopColor="#ffffff" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>

        <linearGradient id={id("rimPurple")} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
          <stop offset="45%" stopColor="#8b5cf6" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
        </linearGradient>

        <linearGradient id={id("rimBlue")} x1="1" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
          <stop offset="48%" stopColor="#3b82f6" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
        </linearGradient>

        <filter id={id("glow")} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="14" />
        </filter>

        <filter id={id("soft")} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="4" />
        </filter>

        <clipPath id={id("domeClip")}>
          <circle cx="320" cy="250" r="176" />
        </clipPath>
      </defs>

      {/* Coloured spill hugging the subject, not a floating blob */}
      <g filter={`url(#${id("glow")})`} opacity="0.5">
        <ellipse
          cx="188"
          cy="182"
          rx="66"
          ry="58"
          fill="#7c3aed"
          opacity="0.55"
        />
        <ellipse
          cx="452"
          cy="322"
          rx="72"
          ry="60"
          fill="#2563eb"
          opacity="0.5"
        />
      </g>

      {/* Contact shadow */}
      <ellipse
        cx="320"
        cy="452"
        rx="196"
        ry="26"
        fill="#000"
        opacity="0.85"
        filter={`url(#${id("soft")})`}
      />

      {/* Mount plate */}
      <ellipse cx="320" cy="424" rx="176" ry="30" fill={`url(#${id("plate")})`} />
      <ellipse
        cx="320"
        cy="418"
        rx="176"
        ry="30"
        fill="#16161c"
        stroke="#3a3b45"
        strokeWidth="1.5"
      />

      {/* Base collar, a short cylinder */}
      <path
        d="M152 400a168 28 0 0 0 336 0v-24a168 28 0 0 1-336 0Z"
        fill={`url(#${id("base")})`}
      />
      <ellipse
        cx="320"
        cy="376"
        rx="168"
        ry="28"
        fill="#1a1b21"
        stroke="#43444f"
        strokeWidth="1.5"
      />

      {/* Fixing screws */}
      <circle cx="196" cy="392" r="5" fill="#08080c" />
      <circle cx="196" cy="390.5" r="2" fill="#5a5b66" opacity="0.8" />
      <circle cx="444" cy="392" r="5" fill="#08080c" />
      <circle cx="444" cy="390.5" r="2" fill="#5a5b66" opacity="0.8" />

      {/* Dome shell */}
      <circle cx="320" cy="250" r="176" fill={`url(#${id("shell")})`} />

      <g clipPath={`url(#${id("domeClip")})`}>
        {/* Broad specular sweep */}
        <ellipse
          cx="238"
          cy="150"
          rx="150"
          ry="104"
          fill={`url(#${id("sweep")})`}
          transform="rotate(-24 238 150)"
        />
        {/* Tight highlight */}
        <ellipse
          cx="216"
          cy="126"
          rx="46"
          ry="22"
          fill="#ffffff"
          opacity="0.42"
          transform="rotate(-26 216 126)"
          filter={`url(#${id("soft")})`}
        />
        {/* Interior shading toward the base */}
        <ellipse cx="320" cy="470" rx="230" ry="150" fill="#000" opacity="0.7" />
      </g>

      {/* Rim light, purple upper-left */}
      <path
        d="M320 74a176 176 0 0 0-171 136"
        stroke={`url(#${id("rimPurple")})`}
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Rim light, blue lower-right */}
      <path
        d="M492 300a176 176 0 0 1-141 125"
        stroke={`url(#${id("rimBlue")})`}
        strokeWidth="4.5"
        strokeLinecap="round"
      />

      {/* Dome seam */}
      <circle
        cx="320"
        cy="250"
        r="176"
        stroke="#54555f"
        strokeWidth="1.5"
        opacity="0.55"
      />

      {/* Camera module inside the dome, tilted toward the viewer */}
      <g transform="rotate(-10 352 288)">
        <ellipse cx="352" cy="288" rx="104" ry="98" fill="#07070b" />
        <ellipse
          cx="352"
          cy="288"
          rx="104"
          ry="98"
          stroke="#2e2f38"
          strokeWidth="2"
        />
        {/* Lens barrel rings */}
        <ellipse cx="352" cy="288" rx="82" ry="78" fill="#0b0b11" />
        <ellipse
          cx="352"
          cy="288"
          rx="82"
          ry="78"
          stroke="#3d3e48"
          strokeWidth="1.5"
        />
        <ellipse cx="352" cy="288" rx="66" ry="63" fill={`url(#${id("glass")})`} />

        {/* Specular arc on the glass */}
        <path
          d="M306 246a66 63 0 0 1 62-14"
          stroke="#dbe6ff"
          strokeWidth="5"
          strokeLinecap="round"
          opacity="0.75"
        />
        {/* Iridescent flare */}
        <ellipse
          cx="326"
          cy="262"
          rx="20"
          ry="13"
          fill="#8b5cf6"
          opacity="0.5"
          transform="rotate(-30 326 262)"
          filter={`url(#${id("soft")})`}
        />
        <ellipse
          cx="382"
          cy="316"
          rx="26"
          ry="16"
          fill="#3b82f6"
          opacity="0.4"
          transform="rotate(-30 382 316)"
          filter={`url(#${id("soft")})`}
        />
        {/* Aperture */}
        <circle cx="352" cy="288" r="22" fill="#020306" />
        <circle cx="344" cy="279" r="5" fill="#ffffff" opacity="0.9" />
      </g>

      {/* Status indicator */}
      <circle cx="320" cy="404" r="4.5" fill="#3b82f6" />
      <circle
        cx="320"
        cy="404"
        r="10"
        fill="#3b82f6"
        opacity="0.35"
        filter={`url(#${id("soft")})`}
      />
    </svg>
  );
}
