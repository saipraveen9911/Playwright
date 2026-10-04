import { test, expect } from "@playwright/test";

test("Key baord Actions", async ({ page }) => {
  await page.goto("https://www.playwrightautomation.com/practice.html", {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });
  await expect(page).toHaveTitle(
    "Practice Playground · Playwright Automation Practice",
  );

  const textbox1 = page.getByPlaceholder("Enter your name");

  // similar to click () function but used for key baord actions
  // moves focus or cursor to that locator
  await textbox1.focus();

  // entering the data in the locator area
  await page.keyboard.insertText("praveen");

  //holding the control key
  // for mac: command key use "Meta"
  // for windows: controll key use "Control"
  await page.keyboard.down("Meta");

  // cmd+A => select text in locator
  // one time click operation on "A"
  await page.keyboard.press("A");

  // release the CMD key
  await page.keyboard.up("Meta");

  //or
  // await page.keyboard.press("Meta+A")

  // cmd+c

  await page.keyboard.press("Meta+C");

  /*

await page.keyboard.down("Meta")
await page.keyboard.press("C")
await page.keyboard.up("Meta")

*/

  const textbox2 = page.getByPlaceholder("Enter your email");

  await textbox2.focus();
  page.keyboard.press("Meta+V");

  await page.waitForTimeout(5000);
});
