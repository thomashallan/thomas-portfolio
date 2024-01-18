import { projects } from "../../lib/data.js";

export function load() {
  return {
    summaries: projects.map((Project) => ({
      title: Project.title,
      text: Project.text,
    })),
  };
}
