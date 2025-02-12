// src/index.ts
import { compressFile } from './streams/compress.js';
import { decompressFile } from './streams/decompress.js';

// 🚀 Toggle between examples by uncommenting one:
async function main() {
  // await compressFile(); // Run compression example
  await decompressFile(); // Run decompression example
}

main().catch((err) => {
  if (err instanceof Error) {
    console.error('❌ Global Error:', err.message);
  } else {
    console.error('❌ Unknown Global Error:', err);
  }
});