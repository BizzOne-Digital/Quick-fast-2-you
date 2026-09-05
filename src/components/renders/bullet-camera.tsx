import { useId } from "react";
import { cn } from "@/lib/utils";

/**
 * Vector B5 bullet camera, three-quarter view: a machined cylinder with a
 * specular band along the top, a sunshade, and a recessed glass element.
 */
export function BulletCamera({ className }: { className?: string }) {
  const uid = useId().replace(/:/g, "");
  const id = (name: string) => `bullet-${name}-${uid}`;

  return (
    <svg
      viewBox="0 0 640 460"
      role="img"
      aria-label="Vector B5 bullet security camera"
      className={cn("h-auto w-full", className)}
      fill="none"
    >
      <defs>
        {/* Cylinder shading across the barrel */}
        <linearGradient id={id("barrel")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0d0d12" />
          <stop offset="10%" stopColor="#3f4048" />
          <stop offset="24%" stopColor="#75767f" />
          <stop offset="38%" stopColor="#4c4d56" />
          <stop offset="66%" stopColor="#26272e" />
          <stop offset="88%" stopColor="#121218" />
          <stop offset="100%" stopColor="#08080c" />
        </linearGradient>

        <linearGradient id={id("shade")} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5a5b64" />
          <stop offset="45%" stopColor="#2c2d34" />
          <stop offset="100%" stopColor="#101015" />
        </linearGradient>

        <linearGradient id={id("arm")} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#101016" />
          <stop offset="38%" stopColor="#43444d" />
          <stop offset="62%" stopColor="#2a2b32" />
          <stop offset="100%" stopColor="#0c0c11" />
        </linearGradient>

        <radialGradient id={id("glass")} cx="36%" cy="30%" r="80%">
          <stop offset="0%" stopColor="#2e3a58" />
          <stop offset="40%" stopColor="#151b2d" />
          <stop offset="80%" stopColor="#080a12" />
          <stop offset="100%" stopColor="#03040a" />
        </radialGradient>

        <linearGradient id={id("rimPurple")} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
          <stop offset="40%" stopColor="#8b5cf6" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
        </linearGradient>

        <linearGradient id={id("rimBlue")} x1="1" y1="0" x2="0" y2="0">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
          <stop offset="45%" stopColor="#3b82f6" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </linearGradient>

        <filter id={id("glow")} x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="14" />
        </filter>
        <filter id={id("soft")} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="4" />
        </filter>
      </defs>

      <g filter={`url(#${id("glow")})`} opacity="0.5">
        <ellipse cx="196" cy="150" rx="70" ry="50" fill="#7c3aed" opacity="0.5" />
        <ellipse cx="470" cy="268" rx="76" ry="54" fill="#2563eb" opacity="0.5" />
      </g>

      {/* Contact shadow */}
      <ellipse
        cx="330"
        cy="418"
        rx="150"
        ry="20"
        fill="#000"
        opacity="0.85"
        filter={`url(#${id("soft")})`}
      />

      {/* Mount base */}
      <ellipse cx="330" cy="400" rx="112" ry="19" fill="#15151b" />
      <ellipse
        cx="330"
        cy="395"
        rx="112"
        ry="19"
        fill="#1c1d23"
        stroke="#3c3d47"
        strokeWidth="1.4"
      />

      {/* Mount arm */}
      <path
        d="M306 392h48l-8-118h-32Z"
        fill={`url(#${id("arm")})`}
        stroke="#33343d"
        strokeWidth="1.2"
      />
      {/* Knuckle joint */}
      <circle cx="330" cy="268" r="26" fill="#1a1b21" stroke="#4a4b55" strokeWidth="1.6" />
      <circle cx="330" cy="268" r="9" fill="#0a0a0e" />
      <circle cx="325" cy="263" r="3" fill="#6e6f79" opacity="0.75" />

      {/* Sunshade sitting proud of the barrel */}
      <path
        d="M154 168h326a26 26 0 0 1 26 26v10H154Z"
        fill={`url(#${id("shade")})`}
      />

      {/* Barrel */}
      <rect
        x="150"
        y="186"
        width="358"
        height="112"
        rx="56"
        fill={`url(#${id("barrel")})`}
      />

      {/* Specular band along the top of the cylinder */}
      <rect
        x="176"
        y="200"
        width="300"
        height="12"
        rx="6"
        fill="#ffffff"
        opacity="0.3"
        filter={`url(#${id("soft")})`}
      />

      {/* Machined seams */}
      <path d="M262 190v104M300 190v104" stroke="#0a0a0e" strokeWidth="2" opacity="0.55" />

      {/* Rim light along the top edge, purple */}
      <path
        d="M186 187h300"
        stroke={`url(#${id("rimPurple")})`}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      {/* Rim light along the underside, blue */}
      <path
        d="M204 296h286"
        stroke={`url(#${id("rimBlue")})`}
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Front bezel and glass */}
      <ellipse cx="502" cy="242" rx="30" ry="58" fill="#191a20" stroke="#4d4e58" strokeWidth="1.8" />
      <ellipse cx="504" cy="242" rx="22" ry="47" fill={`url(#${id("glass")})`} />
      <path
        d="M494 208a47 47 0 0 0-6 26"
        stroke="#dbe6ff"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.7"
      />
      <ellipse
        cx="508"
        cy="258"
        rx="10"
        ry="18"
        fill="#3b82f6"
        opacity="0.4"
        filter={`url(#${id("soft")})`}
      />
      <ellipse cx="504" cy="242" r="1" rx="8" ry="16" fill="#04050a" />

      {/* Infrared ring around the bezel */}
      <circle cx="502" cy="200" r="3.5" fill="#241c3d" />
      <circle cx="502" cy="284" r="3.5" fill="#241c3d" />

      {/* Cable exit */}
      <path
        d="M150 250c-28 0-40 26-64 26"
        stroke="#1e1f26"
        strokeWidth="9"
        strokeLinecap="round"
      />

      {/* Status indicator */}
      <circle cx="212" cy="242" r="4" fill="#8b5cf6" />
      <circle
        cx="212"
        cy="242"
        r="9"
        fill="#8b5cf6"
        opacity="0.35"
        filter={`url(#${id("soft")})`}
      />
    </svg>
  );
}
