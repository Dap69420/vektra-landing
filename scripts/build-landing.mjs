import { copyFile, mkdir, rm, cp } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const outRoot = path.join(root, "dist");

await rm(outRoot, { recursive: true, force: true });
await mkdir(path.join(outRoot, "assets"), { recursive: true });
await copyFile(path.join(root, "index.html"), path.join(outRoot, "index.html"));
await cp(path.join(root, "assets"), path.join(outRoot, "assets"), { recursive: true });
