import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function GlassCard({
  children,
  className,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        `
        rounded-3xl
        border
        border-white/[0.08]
        bg-white/[0.03]
        backdrop-blur-xl
        shadow-[0_20px_80px_rgba(0,0,0,.35)]
        smooth-transition
        `,
        className
      )}
    >
      {children}
    </div>
  );
}