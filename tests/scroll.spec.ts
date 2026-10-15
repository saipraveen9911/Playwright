import { test, expect, chromium } from "@playwright/test";

test("Scrolling", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  await page.locator("#comboBox").click();

  //.  //div[@id='dropdown']/child::div[text()='Item 76'] =>> xpath

  // #dropdown div:nth-child(76). or  #dropdown > div:nth-child(76) =>> CSS

  await page.locator("#dropdown > div:nth-child(76)").click(); // applicable only when elements present in DOM

  await page.waitForTimeout(5000);
});
