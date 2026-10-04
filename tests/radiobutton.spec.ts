import { test, expect } from "@playwright/test";

test("Radio Button", async ({ page }) => {
  await page.goto(
    "https://www.playwrightautomation.com/practice.html#section-radios",
  );
  const Gender = ["#gender-male", "#gender-female", "#gender-nonbinary"];
  const GenderRB = Gender.map((m) => page.locator(m));
  for (let i = 0; i < GenderRB.length; i++) {
    if (i === 0) {
      await GenderRB[i].check();
      await expect(GenderRB[i + 1]).not.toBeChecked();
      await expect(GenderRB[i + 2]).not.toBeChecked();
    } else if (i === 1) {
      await GenderRB[i].check();
      await expect(GenderRB[i + 1]).not.toBeChecked();
      await expect(GenderRB[i - 1]).not.toBeChecked();
    } else {
      await GenderRB[i].check();
      await expect(GenderRB[i - 1]).not.toBeChecked();
      await expect(GenderRB[i - 2]).not.toBeChecked();
    }
  }
});
