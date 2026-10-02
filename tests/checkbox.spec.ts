import { test, expect } from "@playwright/test";

test("Checkbox", async ({ page }) => {
  await page.goto(
    "https://www.playwrightautomation.com/practice.html#section-checkboxes",
  );
  const selectallCB = page.getByRole("checkbox", { name: "Select all days" });
  //Sunday locator

  const DaysArray = [
    " Sunday ",
    " Monday ",
    " Tuesday ",
    " Wednesday ",
    " Thursday ",
    " Friday ",
    " Saturday ",
  ];
  const DaysCB = DaysArray.map((day) => page.getByLabel(day));

  console.log(DaysCB);

  /*
  const sundayCB = page.getByRole("checkbox", { name: "sunday" });
  //monday locator
  const mondayCB = page.getByRole("checkbox", { name: " Monday " });
  //Tuesday
  const TuesdayCB = page.getByLabel(" Tuesday ");
  //Wednesday
  const WednesdayCB = page.getByLabel(" Wednesday ");
  //Thursday
  const ThursdayCB = page.getByLabel(" Thursday ");
  //Friday
  const FridayCB = page.getByLabel(" Friday ");
  //Saturday
  const SaturdayCB = page.getByLabel(" Saturday ");
*/
  await selectallCB.check();
  for (const CB of DaysCB) {
    await expect(CB).toBeChecked();
    /*
  await expect(sundayCB).toBeChecked();
  await expect(mondayCB).toBeChecked();
  await expect(TuesdayCB).toBeChecked();
  await expect(WednesdayCB).toBeChecked();
  await expect(ThursdayCB).toBeChecked();
  await expect(FridayCB).toBeChecked();
  await expect(SaturdayCB).toBeChecked();
  */
  }

  await page.waitForTimeout(3000);
});

test.only("Partial checked", async ({ page }) => {
  await page.goto(
    "https://www.playwrightautomation.com/practice.html#section-checkboxes",
  );
  const selectallCB = page.getByRole("checkbox", { name: "Select all days" });
  const DaysArray = [
    " Sunday ",
    " Monday ",
    " Tuesday ",
    " Wednesday ",
    " Thursday ",
    " Friday ",
    " Saturday ",
  ];
  const DaysCB = DaysArray.map((day) => page.getByLabel(day));
  await selectallCB.check();
  for (const day in DaysCB.slice(0, 5)) {
    await DaysCB[day].uncheck();
    console.log(`unchecked ${day}`)
  }

  await page.waitForTimeout(3000);

  for (const day of DaysCB.slice(0, 5)) {
    await expect(day).not.toBeChecked();
  }
  for (const day of DaysCB.slice(5, 7)) {
    await expect(day).toBeChecked();
  }
});
