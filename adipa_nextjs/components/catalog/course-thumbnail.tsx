import Image from "next/image";

type CourseThumbnailProps = {
  className?: string;
  mode?: string;
  showBadge?: boolean;
};

export function CourseThumbnail({
  className = "",
  mode = "En Vivo",
  showBadge = true,
}: CourseThumbnailProps) {
  return (
    <div
      className={`relative overflow-hidden bg-[#ddd2ff] ${className}`.trim()}
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#ddd2ff_0%,#d4c6ff_55%,#c9bbff_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.5),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.28),transparent_35%)]" />
      <div className="absolute inset-0 flex items-center justify-center px-4 md:px-6">
        <Image
          alt="ADIPA"
          className="h-auto w-[102px] opacity-95 md:w-[118px]"
          height={42}
          src="/assets/logo-colombia.webp"
          width={118}
        />
      </div>

      {showBadge ? (
        <div className="absolute bottom-2.5 right-0 flex h-8 items-center gap-2 rounded-l-[6px] border border-r-0 border-[#dcd8ef] bg-white px-2.5 text-[10px] font-medium text-[#2d2948] shadow-[0_4px_12px_rgba(31,22,87,0.12)] md:bottom-3 md:h-9 md:px-3 md:text-[11px]">
          <span className="size-2 rounded-full bg-[#25b233]" />
          <span>{mode === "En Vivo" ? "En vivo" : mode}</span>
          <span className="flex size-4 items-center justify-center rounded-full border border-[#7552ff] text-[10px] font-bold text-[#7552ff]">
            !
          </span>
        </div>
      ) : null}
    </div>
  );
}
