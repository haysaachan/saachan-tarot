import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  duration: string;
  price: string;
  description: string;
  className?: string;
}

export const ServiceCard = ({
  title,
  duration,
  price,
  description,
  className,
}: ServiceCardProps) => {
  return (
    <div
      className={cn(
        "relative group rounded-xl border border-accent/30 bg-card/40 backdrop-blur-sm p-6 md:p-8",
        "hover:border-accent/60 transition-all duration-300",
        "hover:shadow-lg hover:shadow-accent/20",
        className
      )}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-b from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div className="relative z-10">
        <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground mb-2">
          {title}
        </h3>

        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <span className="text-accent">⏱</span> {duration}
          </span>
          <span className="flex items-center gap-1">
            <span className="text-accent"> 💰</span> {price}
          </span>
        </div>

        <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
