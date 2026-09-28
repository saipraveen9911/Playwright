import { test, expect, Locator } from "@playwright/test";

test("playwright Alt Text locator", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/");
  await page.waitForTimeout(10000);
  const locat = page.locator(
    "input[aria-label='Verify you are human']",
  );

  await expect(locat).toBeVisible();
  await locat.click();
  const AltTextLocator: Locator = page.getByAltText("nopCommerce demo store");
  await page.waitForTimeout(50000);
  await expect(AltTextLocator).toBeVisible();
});
