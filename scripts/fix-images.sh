#!/bin/bash

# Find all TSX files in the app directory
FILES=$(find app -name "*.tsx")

# Process each file
for file in $FILES; do
  echo "Processing $file..."
  
  # Check if the file uses Image tags without width/height
  if grep -q "<Image" "$file"; then
    echo "Found Image tags in $file"
    
    # Check if the file already imports Image from next/image
    if ! grep -q "import Image from ['\"]next/image['\"]" "$file" && ! grep -q "import { Image }" "$file"; then
      # Find the last import line
      LAST_IMPORT=$(grep -n "^import " "$file" | tail -1 | cut -d: -f1)
      
      # Add Image import after the last import
      if [ ! -z "$LAST_IMPORT" ]; then
        sed -i '' "${LAST_IMPORT}a\\
import Image from \"next/image\";" "$file"
        echo "Added Image import to $file"
      fi
    fi
    
    # Replace Image tags without width/height with proper Image components
    # First, check for Image tags without width property
    if grep -q "<Image[^>]*src=\"[^\"]*\"[^>]*>" "$file" && ! grep -q "<Image[^>]*width=" "$file"; then
      # Add width and height properties to Image components
      sed -i '' 's/<Image\([^>]*\)src="\([^"]*\)"\([^>]*\)>/<Image\1src="\2"\3 width={500} height={300} alt="Image" \/>/g' "$file"
      echo "Added width and height to Image tags in $file"
    fi
    
    # Also handle img tags that might still be present
    if grep -q "<img" "$file"; then
      sed -i '' 's/<img\([^>]*\)src="\([^"]*\)"\([^>]*\)>/<Image\1src="\2"\3 width={500} height={300} alt="Image" \/>/g' "$file"
      echo "Converted remaining img tags in $file"
    fi
  fi
  
  # Also check for any remaining img tags in files
  if grep -q "<img" "$file"; then
    echo "Found img tags in $file"
    
    # Check if the file already imports Image from next/image
    if ! grep -q "import Image from ['\"]next/image['\"]" "$file" && ! grep -q "import { Image }" "$file"; then
      # Find the last import line
      LAST_IMPORT=$(grep -n "^import " "$file" | tail -1 | cut -d: -f1)
      
      # Add Image import after the last import
      if [ ! -z "$LAST_IMPORT" ]; then
        sed -i '' "${LAST_IMPORT}a\\
import Image from \"next/image\";" "$file"
        echo "Added Image import to $file"
      fi
    fi
    
    # Replace img tags with Image components
    sed -i '' 's/<img\([^>]*\)src="\([^"]*\)"\([^>]*\)>/<Image\1src="\2"\3 width={500} height={300} alt="Image" \/>/g' "$file"
    echo "Updated img tags in $file"
  fi
done

echo "Image conversion complete!" 