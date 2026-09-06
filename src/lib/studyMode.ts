export type StudyMode = "mix" | "new_only" | "review_only";

export const STUDY_MODE_OPTIONS: ReadonlyArray<{ value: StudyMode; label: string }> = [
  { value: "mix", label: "Mix" },
  { value: "new_only", label: "New cards" },
  { value: "review_only", label: "Review only" },
];

