import { test, expect, Locator } from "@playwright/test";

test("test using page.getbyRole", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.locator("#datepicker").click();
  const Year = 2030;
  const Month = "November";
  const Day = "20";

  const MonthElement = page.locator(".ui-datepicker-month");
  const YearElement = page.locator(".ui-datepicker-year");

  const previousarrow = page.locator("[data-handler='prev']");
  const Nextarrow = page.locator("[data-handler='next']");
  const dateelements = await page
    .locator(".ui-datepicker-calendar td[data-handler='selectDay']")
    .all();
  while (true) {
    if (
      Year.toString() === (await YearElement.textContent()) &&
      Month === (await MonthElement.textContent())
    ) {
      break;
    } else if (Number(await YearElement.textContent()) > Year) {
      await previousarrow.click();
    } else if (Number(await YearElement.textContent()) < Year) {
      await Nextarrow.click();
    } else {
      if (Month != (await MonthElement.textContent())) {
        await Nextarrow.click();
      } else {
        await previousarrow.click();
      }
    }
  }
  for (let date of dateelements) {
    if ((await date.innerText()) === Day.toString()) {
      date.click();
      break;
    }
  }
  await page.waitForTimeout(5000);
});
