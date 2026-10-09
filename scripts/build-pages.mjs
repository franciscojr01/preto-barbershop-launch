import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const viteCli = fileURLToPath(new URL("../node_modules/vite/bin/vite.js", import.meta.url));
const result = spawnSync(process.execPath, [viteCli, "build"], {
  env: { ...process.env, NITRO_PRESET: "cloudflare_pages" },
  stdio: "inherit",
});

process.exit(result.status ?? 1);
