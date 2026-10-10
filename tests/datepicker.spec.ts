import { test, expect, Locator } from "@playwright/test";

test("Date Picker Type 1", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.locator("#datepicker").click();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const Year = 2027; // required Year
  const Month = months[10]; // required month November

  // reading dates from the webpage

  const MonthElement = page.locator(".ui-datepicker-month");
  const YearElement = page.locator(".ui-datepicker-year");
  const previousarrow = page.locator("[data-handler='prev']");
  const Nextarrow = page.locator("[data-handler='next']");

  // reading the Date webelements from webpage
  const dateelements = await page
    .locator(".ui-datepicker-calendar td[data-handler='selectDay']")
    .all();

  while (true) {
    let currentmonth = await MonthElement.innerText(); //Reading the month value from webpage and stored in variable
    let currentyear = await YearElement.innerText(); // Reading the Year value from webpage and stored in variable
    if (Year.toString() === currentyear && Month === currentmonth) {
      //console.log("break loop")
      break;
    } else if (Number(currentyear) != Year) //checks for required year matching
    {
      if (
        Number(currentyear) > Year
      ) //checks for year is greater than required year
      {
        console.log(`${Number(currentyear)} > ${Year}`);
        await previousarrow.click();
      } else if (
        Number(currentyear) < Year
      ) //checks for year is less than required year
      {
        console.log(`${Number(currentyear)} < ${Year}`);
        await Nextarrow.click();
      }
    } else if (Year.toString() === currentyear && Month != currentmonth) {
      //console.log(`${Number(currentyear)} === ${Year}`)
      if (
        months.indexOf(currentmonth) > months.indexOf(Month)
      ) //checks for month is greater than required month using the array.indexof method
      {
        console.log(
          `${months.indexOf(currentmonth)} > ${months.indexOf(Month)}`,
        );
        await previousarrow.click();
      } else if (
        months.indexOf(currentmonth) < months.indexOf(Month)
      ) //checks for month is less than required month using the array.indexof method
      {
        console.log(
          `${months.indexOf(currentmonth)} > ${months.indexOf(Month)}`,
        );
        await Nextarrow.click();
      }
    }
  }
  const Day = await page
    .locator(".ui-datepicker-calendar td[data-handler='selectDay']")
    .allTextContents();

  console.log(Day);
  for (let date of dateelements) {
    if ((await date.innerText()) === Day[19].toString()) {
      //selecting date 20
      date.click();
      break;
    }
  }
  await page.waitForTimeout(5000);
});

test("Date Picker Type 1 optimised", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const monthsArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const Year = 2023; // required Year
  const Month = "November"; // required month November
  const date = 19; //required date 19

  await page.locator("#datepicker").isVisible({ timeout: 3000 });
  await page.locator("#datepicker").click();

  const MonthElement = page.locator(".ui-datepicker-month");
  const YearElement = page.locator(".ui-datepicker-year");
  const previousarrow = page.locator("[data-handler='prev']");
  const Nextarrow = page.locator("[data-handler='next']");

  while (true) {
    let currentmonth = await MonthElement.innerText(); //Reading the month value from webpage and stored in variable
    let currentyear = await YearElement.innerText(); // Reading the Year value from webpage and stored in variable

    console.log(`${currentyear} and ${currentmonth}`);

    if (Year.toString() === currentyear && Month === currentmonth) {
      console.log("break loop");
      break;
    } else if (
      Number(currentyear) != Year ||
      Month != currentmonth
    ) //checks for required year matching
    {
      if (
        Number(currentyear) > Year ||
        (Number(currentyear) === Year &&
          monthsArray.indexOf(currentmonth) > monthsArray.indexOf(Month))
      ) //checks for year is greater than required year
      {
        await previousarrow.click();
        console.log("previous button is clicked");
      } else {
        await Nextarrow.click();
        console.log("next button is clicked");
      }
    }
  }
  const dateelements = await page
    .locator(".ui-datepicker-calendar td[data-handler='selectDay']")
    .all();

  for (let day of dateelements) {
    if ((await day.innerText()) === date.toString()) {
      //selecting date 20
      await day.click();
      break;
    }
  }

  expect(await page.locator("#datepicker").inputValue()).toContain(
    `${monthsArray.indexOf(Month) + 1}/${date}/${Year}`,
  );
  await page.waitForTimeout(5000);
});

test.only("Date picker type 2 dropdown ", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.locator("#txtDate").click();
  const Year = 2030;
  const Month = 10;
  const date=20;
  await page
    .locator("[data-handler='selectMonth']")
    .selectOption({ value: Month.toString() }); //November
    await page.waitForTimeout(3000)
  await page
    .locator("[data-handler='selectYear']")
    .selectOption({ value: Year.toString() }); //2030
    await page.waitForTimeout(3000)

await page.locator(`.ui-datepicker-calendar td a[data-date='${date}']`).click()


await page.waitForTimeout(2000)

 expect(await page.locator("#txtDate").inputValue()).toContain(
    `${date}/${Month+1}/${Year}`,
  );
await page.waitForTimeout(5000)

});
