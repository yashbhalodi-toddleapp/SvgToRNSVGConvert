#!/bin/bash

directory_path="./output"
index_file_path="${directory_path}/index.js"

# Remove existing index file if present
if [ -f "$index_file_path" ]; then
  rm "$index_file_path"
fi

# Loop through each file in the directory
components=()
for file in "${directory_path}"/*.js; do
  filename=$(basename "$file")
  component_name=$(echo "$filename" | sed 's/\.js$//')

  # Append import statement to index file
  echo "import $component_name from './$filename';" >> "$index_file_path"
  
  components+=("$component_name")
done

# Append export statements to index file
echo "" >> "$index_file_path"
echo "export {" >> "$index_file_path"
for component_name in "${components[@]}"; do
  echo "  $component_name," >> "$index_file_path"
done
echo "};" >> "$index_file_path"

echo "Index file generated at $index_file_path"
