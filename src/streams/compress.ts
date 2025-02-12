import { createReadStream, createWriteStream } from "node:fs";
import { pipeline } from "node:stream/promises";
import { createGzip } from "node:zlib";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Get current directory (ESM alternative to __dirname)
const __dirname = dirname(fileURLToPath(import.meta.url));

// Paths (navigate up from /src/streams to /assets)
const inputFile = join(__dirname, "..", "..", "assets", "file.txt");
const outputFile = join(__dirname, "..", "..", "assets", "file.txt.gz");

export async function compressFile() {
  try {
    await pipeline(
      createReadStream(inputFile),
      createGzip(),
      createWriteStream(outputFile)
    );
    console.log("✅ file.txt.gz created in /assets!");
  } catch (err) {
    if (err instanceof Error) {
      console.error("❌ Error:", err.message);
    } else {
      console.error("❌ Unknown error:", err);
    }
  }
}
