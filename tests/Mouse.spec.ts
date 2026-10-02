import { test, expect } from "@playwright/test";

test("Hover", async ({ page }) => {
  await page.goto(
    "https://www.playwrightautomation.com/practice.html#section-mouse",
  );
  const mousehover = page.getByRole("button", { name: "Point Me" });
  await mousehover.hover();

  //finding the hower locator using CSS selector
  const mobilehover = page.locator("[data-testid='hover-item-mobiles']");
  await mobilehover.hover();
  await expect(mobilehover).toBeVisible();

  await page.waitForTimeout(2000);
});

test.only("Right click", async ({ page }) => {
    await page.goto("https://www.playwrightautomation.com/practice.html#section-mouse")
    const Mouseright=page.getByRole("button",{name: 'Right Click Me'})
    const rightmenu=page.getByRole("menuitem",{name:'Edit'})
   
    await expect(Mouseright).toBeVisible()
    await Mouseright.click({button:'right'})
     await rightmenu.hover()

    await expect(rightmenu).toBeVisible()
    page.screenshot({path: './screenshot.png'})
    await rightmenu.click()
    await expect(page.locator("#context-menu-result")).toHaveText("Edit")
    page.screenshot({path: './screenshot1.png'})
    await page.waitForTimeout(3000)
});
