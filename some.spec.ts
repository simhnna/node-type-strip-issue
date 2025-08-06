import { promises } from "fs";
import readFile = promises.readFile;

describe("File reading tests", () => {
  it("should read a file and return its content", async () => {
    const filePath = "package.json"; // Adjust the path as necessary
    const content = await readFile(filePath, "utf8");
    const parsed = JSON.parse(content);
    console.log(parsed.version);
    // Add assertions here to verify the content if needed
  });
});
