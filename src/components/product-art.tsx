import {
  Cable,
  Camera,
  Cctv,
  CircleDot,
  DoorOpen,
  HardDrive,
  Lightbulb,
  Network,
  Plug,
  BatteryCharging,
  ScanLine,
  Video,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { DomeCamera } from "@/components/renders/dome-camera";
import { BulletCamera } from "@/components/renders/bullet-camera";
import type { ArtKey } from "@/lib/catalog";

const glyphs: Record<ArtKey, LucideIcon> = {
  dome: Cctv,
  turret: CircleDot,
  bullet: Video,
  ptz: Camera,
  fisheye: CircleDot,
  lpr: ScanLine,
  nvr: HardDrive,
  hdd: HardDrive,
  switchbox: Network,
  injector: Plug,
  ups: BatteryCharging,
  doorbell: DoorOpen,
  floodlight: Lightbulb,
  intercom: DoorOpen,
  cable: Cable,
  mount: Wrench,
};

/**
 * The subject inside a product tile's lit stage. Two lines are drawn as full
 * studio renders; everything else falls back to a large lit glyph so the grid
 * stays even until the rest of the renders are drawn.
 */
export function ProductArt({ art }: { art: ArtKey }) {
  if (art === "dome") return <DomeCamera className="max-w-[15rem]" />;
  if (art === "bullet") return <BulletCamera className="max-w-[15rem]" />;

  const Glyph = glyphs[art];
  return (
    <span
      aria-hidden="true"
      className="relative flex size-32 items-center justify-center"
    >
      <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_35%_28%,color-mix(in_srgb,var(--purple)_38%,transparent),transparent_68%)] blur-lg" />
      <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_72%_78%,color-mix(in_srgb,var(--blue)_34%,transparent),transparent_66%)] blur-lg" />
      <Glyph className="relative size-16 text-frost/85" strokeWidth={1.1} />
    </span>
  );
}
