// Create a CommonJS script since we're running it with Node directly
// We're ignoring linter errors since this is a utility script not part of the Next.js app
const fs = require("fs");
const glob = require("glob");

// Find all TSX files in the app directory
const files = glob.sync("app/**/*.tsx");

// Process each file
files.forEach((file) => {
  console.log(`Processing ${file}...`);

  // Read the file content
  let content = fs.readFileSync(file, "utf8");

  // Check if the file uses img tags
  if (content.includes("<Image")) {
    // Check if the file already imports Image from next/image
    const hasImageImport =
      content.includes("import Image from 'next/image'") ||
      content.includes('import Image from "next/image"') ||
      content.includes("import { Image }");

    // Add Image import if it doesn't exist
    if (!hasImageImport) {
      // Find the last import statement
      const importRegex = /^import .+$/gm;
      const imports = [...content.matchAll(importRegex)];

      if (imports.length > 0) {
        const lastImport = imports[imports.length - 1][0];
        const lastImportIndex = content.indexOf(lastImport) + lastImport.length;

        // Insert Image import after the last import
        content =
          content.slice(0, lastImportIndex) +
          '\nimport Image from "next/image";' +
          content.slice(lastImportIndex);
      }
    }

    // Replace img tags with Image components
    content = content.replace(
      /<Image([^>]*)src="([^"]*)"([^>]*)>/g,
      (match, beforeSrc, src, afterSrc) => {
        // Extract alt text if it exists
        const altMatch = match.match(/alt="([^"]*)"/);
        const alt = altMatch ? altMatch[1] : "Image";

        // Check if alt is already in the tag
        const hasAlt = beforeSrc.includes("alt=") || afterSrc.includes("alt=");

        // Create the Image component
        return `<Image${beforeSrc}src="${src}"${afterSrc} width={500} height={300}${hasAlt ? "" : ` alt="${alt}"`} />`;
      },
    );

    // Write the modified content back to the file
    fs.writeFileSync(file, content, "utf8");
    console.log(`Updated ${file}`);
  }
});

console.log("Image conversion complete!");
