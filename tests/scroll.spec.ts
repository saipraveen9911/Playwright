import { test, expect, chromium } from "@playwright/test";

test("Scrolling", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  await page.locator("#comboBox").click();

  //.  //div[@id='dropdown']/child::div[text()='Item 76'] =>> xpath

  // #dropdown div:nth-child(76). or  #dropdown > div:nth-child(76) =>> CSS

  await page.locator("#dropdown > div:nth-child(76)").click(); // applicable only when elements present in DOM

  await page.waitForTimeout(5000);
});

test.only("Lazy Scrolling", async ({ page }) => {
  await page.goto("https://www.booksbykilo.in/books");

  const book = page.getByAltText(" A Slow Fire Burning -by-Paula Hawkins ");
  while (true) {
    if (await book.isVisible()) {
      break;
    } else {
      await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight);
      });
    }
  }
  //await book.click();
  await book.hover()
  await page.waitForTimeout(6000);
  await page.screenshot({ path: "image1.png" });
});
