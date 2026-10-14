import { test, expect } from "@playwright/test";
import * as fs from "fs";

test("Download Text file", async ({ page }) => {
  await page.goto(
    "https://testautomationpractice.blogspot.com/p/download-files_25.html",
  );

  await page.locator("#inputText").fill("I am the text present .txt file");
  await page
    .getByRole("button", { name: "Generate and Download Text File" })
    .click();

  const [download] = await Promise.all([
    page.waitForEvent("download"),
    page.getByRole("link", { name: "Download Text File" }).click(),
  ]);

  const path1 = "test_downloadfile/newdownload_1.txt";
  const path = "test_downloadfile/";
  // saves the file in name we want
  //await download.saveAs(path + download.suggestedFilename());

  // returns the default file name which is downloaded
  console.log(download.suggestedFilename());

  // checks for file exist or not
  const isFileExist = fs.existsSync(path + download.suggestedFilename());
  console.log(isFileExist);
  //await expect(isFileExist).toBeTruthy();

  if (isFileExist) {
    // delete the file
    fs.unlinkSync(path + download.suggestedFilename());
    await download.saveAs(path1);
    console.log(fs.existsSync(path1));
  } else {
    
    await download.saveAs(path1);
    console.log(fs.existsSync(path1));
  }

  // readFileSync() used to read the data present in text file
console.log(fs.readFileSync(path1,"utf-8"))
  //  writeFileSync()
});

// Assignment implement same on the pdf file browser open file
