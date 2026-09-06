import type { StudyMode } from "../lib/studyMode";
import { STUDY_MODE_OPTIONS } from "../lib/studyMode";

export function StudyModeSelect({
  value,
  onChange,
}: {
  value: StudyMode;
  onChange: (mode: StudyMode) => void;
}) {
  return (
    <section className="rounded-2xl border border-border bg-card p-5">
      <label htmlFor="study-mode" className="text-sm font-medium">
        Study mode
      </label>
      <select
        id="study-mode"
        value={value}
        onChange={(event) => onChange(event.target.value as StudyMode)}
        className="mt-3 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring/20"
      >
        {STUDY_MODE_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </section>
  );
}

