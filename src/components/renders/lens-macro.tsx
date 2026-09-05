import { useId } from "react";
import { cn } from "@/lib/utils";

/**
 * A macro of the optical assembly, shot head-on. Concentric machined rings
 * around a coated element, with the purple and blue coating flares that give
 * the range its signature. Used full-bleed as a cinematic section subject.
 */
export function LensMacro({ className }: { className?: string }) {
  const uid = useId().replace(/:/g, "");
  const id = (name: string) => `lens-${name}-${uid}`;

  return (
    <svg
      viewBox="0 0 640 640"
      role="img"
      aria-label="Macro detail of a Quick Fast 2 You camera lens assembly"
      className={cn("h-auto w-full", className)}
      fill="none"
    >
      <defs>
        <radialGradient id={id("barrel")} cx="34%" cy="26%" r="76%">
          <stop offset="0%" stopColor="#5c5d67" />
          <stop offset="40%" stopColor="#2e2f37" />
          <stop offset="76%" stopColor="#15161b" />
          <stop offset="100%" stopColor="#08080c" />
        </radialGradient>

        <radialGradient id={id("ring")} cx="36%" cy="28%" r="74%">
          <stop offset="0%" stopColor="#7e7f8a" />
          <stop offset="46%" stopColor="#33343c" />
          <stop offset="100%" stopColor="#101015" />
        </radialGradient>

        {/* Coated element: violet core falling to deep blue at the rim */}
        <radialGradient id={id("coat")} cx="40%" cy="34%" r="78%">
          <stop offset="0%" stopColor="#4c3f8a" />
          <stop offset="30%" stopColor="#241d४6" />
          <stop offset="34%" stopColor="#241d46" />
          <stop offset="62%" stopColor="#111a3a" />
          <stop offset="86%" stopColor="#070a1a" />
          <stop offset="100%" stopColor="#03040a" />
        </radialGradient>

        <linearGradient id={id("flarePurple")} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
        </linearGradient>

        <linearGradient id={id("flareBlue")} x1="1" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
        </linearGradient>

        <filter id={id("soft")} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
        <filter id={id("glow")} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="18" />
        </filter>
      </defs>

      {/* Outer machined barrel */}
      <circle cx="320" cy="320" r="300" fill={`url(#${id("barrel")})`} />
      <circle cx="320" cy="320" r="300" stroke="#4a4b55" strokeWidth="1.5" opacity="0.5" />

      {/* Knurling: fine radial ticks around the barrel */}
      <g opacity="0.5">
        {Array.from({ length: 72 }, (_, i) => {
          const a = (i / 72) * Math.PI * 2;
          const x1 = 320 + Math.cos(a) * 270;
          const y1 = 320 + Math.sin(a) * 270;
          const x2 = 320 + Math.cos(a) * 288;
          const y2 = 320 + Math.sin(a) * 288;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#6a6b76"
              strokeWidth="2"
              opacity={0.25 + 0.55 * Math.max(0, Math.cos(a + 2.4))}
            />
          );
        })}
      </g>

      {/* Stepped rings */}
      <circle cx="320" cy="320" r="252" fill={`url(#${id("ring")})`} />
      <circle cx="320" cy="320" r="252" stroke="#0a0a0e" strokeWidth="3" />
      <circle cx="320" cy="320" r="222" fill="#101016" />
      <circle cx="320" cy="320" r="222" stroke="#55565f" strokeWidth="1.4" opacity="0.7" />
      <circle cx="320" cy="320" r="200" fill="#08080c" />

      {/* Coated glass element */}
      <circle cx="320" cy="320" r="188" fill={`url(#${id("coat")})`} />

      {/* Coating flares */}
      <ellipse
        cx="238"
        cy="234"
        rx="104"
        ry="52"
        fill={`url(#${id("flarePurple")})`}
        transform="rotate(-38 238 234)"
        opacity="0.6"
        filter={`url(#${id("soft")})`}
      />
      <ellipse
        cx="410"
        cy="418"
        rx="112"
        ry="56"
        fill={`url(#${id("flareBlue")})`}
        transform="rotate(-38 410 418)"
        opacity="0.55"
        filter={`url(#${id("soft")})`}
      />

      {/* Specular arc across the element */}
      <path
        d="M186 268a188 188 0 0 1 108-72"
        stroke="#e8efff"
        strokeWidth="9"
        strokeLinecap="round"
        opacity="0.7"
        filter={`url(#${id("soft")})`}
      />

      {/* Aperture blades */}
      <g opacity="0.9">
        {Array.from({ length: 8 }, (_, i) => {
          const a = (i / 8) * Math.PI * 2;
          const r0 = 62;
          const r1 = 122;
          const x1 = 320 + Math.cos(a) * r0;
          const y1 = 320 + Math.sin(a) * r0;
          const x2 = 320 + Math.cos(a + 0.7) * r1;
          const y2 = 320 + Math.sin(a + 0.7) * r1;
          return (
            <path
              key={i}
              d={`M320 320 L${x1} ${y1} L${x2} ${y2} Z`}
              fill="#05060c"
              opacity="0.55"
            />
          );
        })}
      </g>

      {/* Pupil */}
      <circle cx="320" cy="320" r="58" fill="#020306" />
      <circle cx="320" cy="320" r="58" stroke="#2b2c36" strokeWidth="1.4" />
      <circle
        cx="296"
        cy="296"
        r="13"
        fill="#ffffff"
        opacity="0.92"
        filter={`url(#${id("soft")})`}
      />

      {/* Coloured spill at the outer edges */}
      <g filter={`url(#${id("glow")})`} opacity="0.4">
        <ellipse cx="120" cy="150" rx="70" ry="60" fill="#7c3aed" />
        <ellipse cx="528" cy="500" rx="76" ry="64" fill="#2563eb" />
      </g>
    </svg>
  );
}
