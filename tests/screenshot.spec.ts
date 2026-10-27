import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://www.playwrightautomation.com/practice.html");
});

test("screenshot - 1 ", async ({ page }) => {
  await page.screenshot({ path: "./screenshot/1_Image_png.png" });
  await page.screenshot({ path: "./screenshot/1_Image_jpg.jpg" });
  await page.screenshot({ path: "./screenshot/1_Image_webp.png" });
});

test("screenshot - 2 using type parameter and quality", async ({ page }) => {
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

test("Full page screenshot - 3 ", async ({ page }) => {
  await page.screenshot({
    path: "./screenshot/3_Image_fullpage.jpg",
    type: "jpeg",
    quality: 100,
    fullPage: true,
  });
});

test("page screenshot - 4 Specific area ", async ({ page }) => {
  await page.screenshot({
    path: "./screenshot/4_Specific_area.png",
    clip: {
      x: 100,
      y: 100,
      width: 500,
      height: 300,
    },
  });
});

test("page screenshot - 5 masking ", async ({ page }) => {
  const masklocator = page.getByTestId("input-address");
  await page.screenshot({
    path: "./screenshot/5_mask_locator.png",
    mask: [masklocator],
    maskColor: "#878282",
  });
});
test("page screenshot - 6 disable animation ", async ({ page }) => {
  await page.screenshot({
    path: "./screenshot/6_No_Animation.png",
    animations: "disabled",
  });
});
test("page screenshot - 7 buffer ", async ({ page }) => {
  const screenbuffer = await page.screenshot();
  console.log(screenbuffer.length);
});
test.only("Element screenshot - 8 ", async ({ page }) => {
  const locator = page.getByTestId("input-address");
  await locator.screenshot({ path: "./screenshot/8_Element screenshot.png" });
});
test.only(" screenshot - 9 without background", async ({ page }) => {
  const locator = page.getByTestId("input-address");
  await locator.screenshot({
    path: "./screenshot/8_Element screenshot.png",
    omitBackground: true,
  });
});
