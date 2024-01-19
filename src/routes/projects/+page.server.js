import { projects } from "../../lib/data.js";

export function load() {
  return {
    summaries: projects.map((Project) => ({
      title: Project.title,
      text: Project.text,
      slug: Project.slug,
      cover: Project.cover,
      image: Project.image[0].url,
    })),
  };
}
