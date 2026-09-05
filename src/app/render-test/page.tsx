import { DomeCamera } from "@/components/renders/dome-camera";

export default function RenderTest() {
  return (
    <div className="q-shell q-band">
      <div className="q-stage q-grain aspect-[4/3] max-w-3xl">
        <div className="q-stage__key" />
        <div className="q-stage__vignette" />
        <div className="q-stage__subject flex h-full items-center justify-center p-12">
          <DomeCamera className="max-w-[34rem]" />
        </div>
      </div>
    </div>
  );
}
