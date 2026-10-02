import { test, expect } from "@playwright/test";

test("Hover", async ({ page }) => {
  await page.goto(
    "https://www.playwrightautomation.com/practice.html#section-mouse",
  );
  //finding the locator using getByRole
  const mousehover = page.getByRole("button", { name: "Point Me" });

  // performing mouse hovering on WebElement
  await mousehover.hover();

  //finding the locator using CSS selector
  const mobilehover = page.locator("[data-testid='hover-item-mobiles']");

  // performing mouse hovering on WebElement
  await mobilehover.hover();
  // asserting the element is present or not from submenu when we hover
  await expect(mobilehover).toBeVisible();
});

test("Right click", async ({ page }) => {
  await page.goto(
    "https://www.playwrightautomation.com/practice.html#section-mouse",
  );

  //locators
  const Mouseright = page.getByRole("button", { name: "Right Click Me" });
  const rightmenu = page.getByRole("menuitem", { name: "Edit" });

  //Assertion
  await expect(Mouseright).toBeVisible();

  //mouse Right click
  await Mouseright.click({ button: "right" });

  // Mouse Hover
  await rightmenu.hover();

  await expect(rightmenu).toBeVisible();

  await rightmenu.click();
  await expect(page.locator("#context-menu-result")).toHaveText("Edit");
  page.screenshot({ path: "./screenshot1.png" });
  await page.waitForTimeout(3000);
});

test.only("Double Click", async ({ page }) => {
  await page.goto(
    "https://www.playwrightautomation.com/practice.html#section-mouse",
  );

  // textbox
  const dbltextbox2 = page.locator("#field2");

  // double click button
  const dblbutton = page.getByRole("button", { name: "Copy Text" });

  // performing double click action
  await dblbutton.dblclick();

  console.log(await dbltextbox2.inputValue());

  //Assertion on text in textbox
  await expect(dbltextbox2).toHaveValue("Hello Automation!");
  await page.waitForTimeout(3000);
});
