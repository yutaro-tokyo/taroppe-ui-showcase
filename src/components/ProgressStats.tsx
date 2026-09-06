import { Clock, Flame, Target, TrendingUp, type LucideIcon } from "lucide-react";
import { cn } from "../lib/cn";

type StatItem = {
  label: string;
  value: string;
  icon: LucideIcon;
  tone: "primary" | "amber" | "easy" | "good";
};

const TONE_CLASSES: Record<StatItem["tone"], string> = {
  primary: "bg-primary/10 text-primary",
  amber: "bg-amber/10 text-amber",
  easy: "bg-easy/10 text-easy",
  good: "bg-good/10 text-good",
};

export function ProgressStats({
  todayReviews,
  dueCards,
  streak,
  accuracy,
}: {
  todayReviews: number;
  dueCards: number;
  streak: number;
  accuracy: number;
}) {
  const items: StatItem[] = [
    { label: "Reviewed today", value: String(todayReviews), icon: TrendingUp, tone: "primary" },
    { label: "Due cards", value: String(dueCards), icon: Clock, tone: "easy" },
    { label: "Day streak", value: String(streak), icon: Flame, tone: "amber" },
    { label: "Accuracy", value: `${accuracy}%`, icon: Target, tone: "good" },
  ];

  return (
    <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.label} className="rounded-2xl border border-border bg-card p-4 shadow-sm">
            <div className={cn("flex size-9 items-center justify-center rounded-xl", TONE_CLASSES[item.tone])}>
              <Icon className="size-4" />
            </div>
            <p className="mt-3 text-2xl font-semibold tabular-nums md:text-3xl">{item.value}</p>
            <p className="mt-1 text-xs text-muted-foreground">{item.label}</p>
          </div>
        );
      })}
    </div>
  );
}

