// This script finds and fixes Image components that are missing width and height properties
const fs = require("fs");
const glob = require("glob");

// Find all TSX files in the app directory
const files = glob.sync("app/**/*.tsx");

// Process each file
files.forEach((file) => {
  console.log(`Processing ${file}...`);

  // Read the file content
  let content = fs.readFileSync(file, "utf8");

  // Check if the file uses Image components
  if (content.includes("<Image")) {
    console.log(`Found Image components in ${file}`);

    // First, make sure the file imports Image from next/image
    if (!content.includes("import Image from 'next/image'") &&
      !content.includes('import Image from "next/image"') &&
      !content.includes('import { Image }')) {

      // Find the last import statement
      const importRegex = /^import .+$/gm;
      const imports = [...content.matchAll(importRegex)];

      if (imports.length > 0) {
        const lastImport = imports[imports.length - 1][0];
        const lastImportIndex = content.indexOf(lastImport) + lastImport.length;

        // Insert Image import after the last import
        content = content.slice(0, lastImportIndex) +
          '\nimport Image from "next/image";' +
          content.slice(lastImportIndex);

        console.log(`Added Image import to ${file}`);
      }
    }

    // Use a more comprehensive regex to find Image components missing width or height
    // This regex looks for Image tags that don't have width= or height= attributes
    let modified = false;

    // First pattern: <Image ... src="..." ... > (no closing tag)
    content = content.replace(/<Image([^>]*)src="([^"]*)"([^>]*)>/g, (match, beforeSrc, src, afterSrc) => {
      // Skip if it already has width and height
      if (match.includes('width=') && match.includes('height=')) {
        return match;
      }

      modified = true;

      // Extract alt text if it exists
      const altMatch = match.match(/alt="([^"]*)"/);
      const alt = altMatch ? altMatch[1] : 'Image';

      // Check if alt is already in the tag
      const hasAlt = beforeSrc.includes('alt=') || afterSrc.includes('alt=');

      // Create the Image component with width and height
      return `<Image${beforeSrc}src="${src}"${afterSrc}${!match.includes('width=') ? ' width={500}' : ''}${!match.includes('height=') ? ' height={300}' : ''}${hasAlt ? '' : ` alt="${alt}"`} />`;
    });

    // Second pattern: <Image ... src="..." ... /> (self-closing)
    content = content.replace(/<Image([^>]*)src="([^"]*)"([^>]*?)\/>/g, (match, beforeSrc, src, afterSrc) => {
      // Skip if it already has width and height
      if (match.includes('width=') && match.includes('height=')) {
        return match;
      }

      modified = true;

      // Extract alt text if it exists
      const altMatch = match.match(/alt="([^"]*)"/);
      const alt = altMatch ? altMatch[1] : 'Image';

      // Check if alt is already in the tag
      const hasAlt = beforeSrc.includes('alt=') || afterSrc.includes('alt=');

      // Create the Image component with width and height
      return `<Image${beforeSrc}src="${src}"${afterSrc}${!match.includes('width=') ? ' width={500}' : ''}${!match.includes('height=') ? ' height={300}' : ''}${hasAlt ? '' : ` alt="${alt}"`} />`;
    });

    if (modified) {
      // Write the modified content back to the file
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Updated Image components in ${file}`);
    } else {
      console.log(`No changes needed in ${file}`);
    }
  }
});

console.log("Image component fixes complete!");
