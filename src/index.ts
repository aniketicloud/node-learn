// src/index.ts
import { fetchJiraProjects } from "./jira/index.ts";
import { compressFile } from "./streams/compress.ts";
import { decompressFile } from "./streams/decompress.ts";

// 🚀 Toggle between examples by uncommenting one:
async function main() {
  // await compressFile(); // Run compression example
  // await decompressFile(); // Run decompression example
  await fetchJiraProjects(); // Run Jira API example
}

main().catch((err) => {
  if (err instanceof Error) {
    console.error("❌ Global Error:", err.message);
  } else {
    console.error("❌ Unknown Global Error:", err);
  }
});
