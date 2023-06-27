console.log("Hi");
const fs = require("fs");

function getFoldersInDirectory(path) {
  try {
    // Read the contents of the parent directory
    const files = fs.readdirSync(path);

    // Filter out the folders
    const folders = files.filter((file) => {
      const filePath = `${path}/${file}`;
      return fs.statSync(filePath).isDirectory();
    });

    return folders;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}

// Usage example:
const parentFolderPath = `D:\\MY_CODE\\Javascript\\Basics`;
const folders = getFoldersInDirectory(parentFolderPath);

// console.log("Folders:", folders);

const filteredList = folders.filter((str) => !str.startsWith("."));
console.log(filteredList);
console.log(filteredList.length);