import { cn } from "../lib/cn";
import { THEMES, type ThemeId } from "../lib/theme";

export function ThemeSettingsPanel({
  themeId,
  onThemeChange,
}: {
  themeId: ThemeId;
  onThemeChange: (next: ThemeId) => void;
}) {
  return (
    <div role="radiogroup" aria-label="Theme" className="grid gap-3 sm:grid-cols-2">
      {THEMES.map((theme) => {
        const selected = themeId === theme.id;
        return (
          <button
            key={theme.id}
            type="button"
            role="radio"
            aria-checked={selected}
            onClick={() => onThemeChange(theme.id)}
            className={cn(
              "rounded-xl border bg-card p-4 text-left transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring/30",
              selected ? "border-2 border-primary" : "border-border hover:border-foreground/40",
            )}
          >
            <p className="text-xs font-bold tracking-[0.08em]" style={{ color: theme.preview.title }}>
              {theme.label}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">{theme.description}</p>
            <div className="mt-4 space-y-1.5 rounded p-2" style={{ background: theme.preview.canvas }} aria-hidden>
              <div className="h-4 rounded" style={{ background: theme.preview.nav }} />
              <div className="flex h-20 gap-1.5">
                <div className="w-8 rounded" style={{ background: theme.preview.side }} />
                <div className="flex flex-1 flex-col gap-1.5">
                  <div className="h-10 rounded" style={{ background: theme.preview.main }} />
                  <div className="h-6 rounded" style={{ background: theme.preview.card }} />
                  <div className="h-0.5 w-2/3" style={{ background: theme.preview.accent }} />
                </div>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}

