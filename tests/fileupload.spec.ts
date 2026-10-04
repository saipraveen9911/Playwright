import { test, expect } from "@playwright/test";

test("Single file upload", async ({ page }) => {
  await page.goto(
    "https://www.playwrightautomation.com/practice.html#section-upload-standard",
  );
  const singlefile = page.locator("#upload-single");
  await singlefile.setInputFiles("/Users/praveen/Desktop/upload_draft.txt");

  const status = page.locator("#upload-single-status");
  const result = page.locator(".mt-2.text-xs.text-slate-600");
  console.log(await result.first().innerText());
  console.log(await status.innerText());

  await expect(status).toHaveText("✓ File Uploaded Successfully");
  await expect(result.first()).toHaveText("Selected File: upload_draft.txt");
});

test.only("Multiple file upload", async ({ page }) => {
  await page.goto(
    "https://www.playwrightautomation.com/practice.html#section-upload-standard",
  );
  const multifile = page.locator("#upload-multiple");
  await multifile.setInputFiles([
    "/Users/praveen/Desktop/upload_draft.txt",
    "/Users/praveen/Desktop/upload_draft copy.txt",
  ]);

  const status = page.locator("#upload-multiple-status");
  const result = page.locator("#upload-multiple-result");
  console.log(await result.innerText());
  console.log(await status.innerText());

  await expect(status).toHaveText("✓ 2 Files Uploaded Successfully");
  console.log(
    await page.locator("p.mt-2.text-xs.text-slate-600").last().innerText(),
  );
  expect(
    await page.locator("p.mt-2.text-xs.text-slate-600").last().innerText(),
  ).toContain("2");
  await expect(result).toHaveText("upload_draft.txt, upload_draft copy.txt");
});
