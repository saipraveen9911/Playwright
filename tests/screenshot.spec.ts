import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.playwrightautomation.com/practice.html");
});

test("screenshot - 1 ", async ({ page }) => {
  await page.screenshot({ path: "./screenshot/1_Image_png.png" });
  await page.screenshot({ path: "./screenshot/1_Image_jpg.jpg" });
  await page.screenshot({ path: "./screenshot/1_Image_webp.png" });
});

test("screenshot - 2 using type parameter and quality", async ({
  page,
}) => {
  await page.screenshot({
    path: "./screenshot/2_Image.jpg",
    type: "jpeg",
    quality: 70,
  });
  await page.screenshot({
    path: "./screenshot/2_Image.png",
    type: "png",
  });
  await page.screenshot({
    path: "./screenshot/2_Image.webp",
    type: "webp",
    quality: 70,
  });
});

test.only("Full page screenshot - 3 ", async ({ page }) => {
  await page.screenshot({
    path: "./screenshot/3_Image_fullpage.jpg",
    type: "jpeg",
    quality: 100,
    fullPage: true,
  });
});
