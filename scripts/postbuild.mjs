import { cp, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";

const cssFiles = [
  {
    source: resolve("src/styles.css"),
    target: resolve("dist/styles.css"),
  },
  {
    source: resolve("src/styles.tailwind.css"),
    target: resolve("dist/styles.tailwind.css"),
  },
];

for (const file of cssFiles) {
  await mkdir(dirname(file.target), { recursive: true });
  await cp(file.source, file.target);
}
