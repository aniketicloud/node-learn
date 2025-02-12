import { createReadStream, createWriteStream } from "node:fs";
import { dirname, join } from "node:path";
import { pipeline } from "node:stream/promises";
import { fileURLToPath } from "node:url";
import { createGunzip } from "node:zlib";

const __dirname = dirname(fileURLToPath(import.meta.url));
const inputFile = join(__dirname, "..", "..", "assets", "file.txt.gz");
const outputFile = join(
  __dirname,
  "..",
  "..",
  "assets",
  "decompressed-file.txt"
);

export async function decompressFile() {
  try {
    await pipeline(
      createReadStream(inputFile),
      createGunzip(),
      createWriteStream(outputFile)
    );
    console.log("✅ Decompression successful!");
  } catch (err) {
    if (err instanceof Error) {
      console.error(`❌ An error occurred: ${err.message}`);
    } else {
      console.error(`❌ An error occurred: ${err}`);
    }
  }
}
