import { useState } from "react";
import { Button } from "./components/Button";
import { PageHeading } from "./components/PageHeading";
import { ProgressStats } from "./components/ProgressStats";
import { StudyModeSelect } from "./components/StudyModeSelect";
import { ThemeSettingsPanel } from "./components/ThemeSettingsPanel";
import type { StudyMode } from "./lib/studyMode";
import type { ThemeId } from "./lib/theme";

export function DemoPage() {
  const [theme, setTheme] = useState<ThemeId>("oku");
  const [studyMode, setStudyMode] = useState<StudyMode>("mix");

  return (
    <main data-theme={theme} className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-5xl space-y-10 px-5 py-10 md:px-8 md:py-16">
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            Frontend-only component demo
          </p>
          <PageHeading>Taroppe UI Showcase</PageHeading>
          <p className="max-w-2xl text-sm leading-7 text-muted-foreground">
            This page uses fixed sample values. It has no API, authentication, database,
            YouTube integration, or environment variables.
          </p>
        </header>

        <section className="space-y-4">
          <h2 className="text-sm font-medium">Progress cards</h2>
          <ProgressStats todayReviews={24} dueCards={8} streak={17} accuracy={91} />
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-5">
            <h2 className="mb-4 text-sm font-medium">Theme</h2>
            <ThemeSettingsPanel themeId={theme} onThemeChange={setTheme} />
          </div>
          <div className="space-y-4">
            <StudyModeSelect value={studyMode} onChange={setStudyMode} />
            <div className="flex flex-wrap gap-2 rounded-2xl border border-border bg-card p-5">
              <Button>Primary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Secondary</Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

