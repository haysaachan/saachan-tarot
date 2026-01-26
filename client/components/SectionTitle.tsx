import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionTitle = ({
  title,
  subtitle,
  className,
}: SectionTitleProps) => {
  return (
    <div className={cn("text-center mb-12 md:mb-16", className)}>
      <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
