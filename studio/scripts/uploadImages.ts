/**
 * Upload local images to Sanity and patch them into the landing page document.
 *
 * Usage:
 *   cd studio
 *   npx sanity exec scripts/uploadImages.ts --with-user-token
 */

import { getCliClient } from "sanity/cli";
import { createReadStream } from "fs";
import path from "path";

const client = getCliClient({ apiVersion: "2024-01-01" });

const ASSETS_DIR = path.resolve(__dirname, "../../src/assets");

interface ImageMapping {
  file: string;
  /** Dot-notation path to the image field in the landingPage document */
  field: string;
}

const images: ImageMapping[] = [
  // Case study images
  { file: "matt-steadman.jpg", field: "mattStory.image" },
  { file: "catherine-lemon-cherry.jpg", field: "catherineStory.image" },
  { file: "will-barker.jpg", field: "willStory.image" },
  // Testimonial poster images
  { file: "testimonial-professional-services.jpg", field: "testimonials[0].image" },
  { file: "testimonial-consulting.jpg", field: "testimonials[1].image" },
  { file: "testimonial-financial-services.jpg", field: "testimonials[2].image" },
  // Client cards
  { file: "matt-steadman.jpg", field: "clientCards[0].image" },
  { file: "catherine-lemon-cherry.jpg", field: "clientCards[1].image" },
  { file: "will-barker.jpg", field: "clientCards[2].image" },
];

async function uploadAndPatch() {
  // Track uploaded assets to avoid re-uploading the same file
  const uploadedAssets: Record<string, string> = {};

  for (const { file, field } of images) {
    console.log(`Processing: ${file} → ${field}`);

    let assetId = uploadedAssets[file];

    if (!assetId) {
      const filePath = path.join(ASSETS_DIR, file);
      const asset = await client.assets.upload("image", createReadStream(filePath), {
        filename: file,
      });
      assetId = asset._id;
      uploadedAssets[file] = assetId;
      console.log(`  Uploaded: ${assetId}`);
    } else {
      console.log(`  Reusing: ${assetId}`);
    }

    // Build the patch - handle array fields differently
    const arrayMatch = field.match(/^(.+)\[(\d+)\]\.(.+)$/);

    if (arrayMatch) {
      const [, arrayField, indexStr, imageField] = arrayMatch;
      const index = parseInt(indexStr, 10);

      // Fetch the current document to get the array item _key
      const doc = await client.fetch(
        `*[_id == "landingPage"][0]{${arrayField}}`
      );
      const arr = doc?.[arrayField];
      if (!arr || !arr[index]) {
        console.log(`  Skipping: ${arrayField}[${index}] not found`);
        continue;
      }
      const key = arr[index]._key;

      await client
        .patch("landingPage")
        .set({
          [`${arrayField}[_key=="${key}"].${imageField}`]: {
            _type: "image",
            asset: { _type: "reference", _ref: assetId },
          },
        })
        .commit();
    } else {
      await client
        .patch("landingPage")
        .set({
          [field]: {
            _type: "image",
            asset: { _type: "reference", _ref: assetId },
          },
        })
        .commit();
    }

    console.log(`  Patched: ${field}`);
  }

  console.log("\nDone! All images uploaded and linked.");
}

uploadAndPatch().catch((err) => {
  console.error("Failed:", err);
  process.exit(1);
});
