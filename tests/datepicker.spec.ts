import { test, expect, Locator } from "@playwright/test";

test("test using page.Locator", async ({ page }) => {
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
  const Year = 2027;
  const Month = months[10]; // November
  const Day = await page
    .locator(".ui-datepicker-calendar td[data-handler='selectDay']")
    .allTextContents();

  console.log(Day);

  const MonthElement = page.locator(".ui-datepicker-month");
  const YearElement = page.locator(".ui-datepicker-year");

  const previousarrow = page.locator("[data-handler='prev']");
  const Nextarrow = page.locator("[data-handler='next']");
  const dateelements = await page
    .locator(".ui-datepicker-calendar td[data-handler='selectDay']")
    .all();


  while (true) 
    {
        let currentmonth=await MonthElement.innerText() //Reading the month value from webpage and stored in variable
        let currentyear=await YearElement.innerText() // Reading the Year value from webpage and stored in variable
        if (Year.toString() === (currentyear) && Month === (currentmonth) )
        {
            //console.log("break loop")
            break;
        } 
        else if (Number(currentyear) != Year)  //checks for required year matching
        {
            if (Number(currentyear) > Year) //checks for year is greater than required year
            {
                console.log(`${Number(currentyear)} > ${Year}`)
                await previousarrow.click();
            } 
            else if (Number(currentyear) < Year) //checks for year is less than required year
            {
            console.log(`${Number(currentyear)} < ${Year}`)
            await Nextarrow.click();
            } 
        }
        else if(Year.toString() === (currentyear) && Month != (currentmonth))
        { //console.log(`${Number(currentyear)} === ${Year}`)
            if (months.indexOf(currentmonth) > months.indexOf(Month)) 
            {
                console.log(`${months.indexOf(currentmonth) } > ${months.indexOf(Month)}`)
                await previousarrow.click();
            } 
            else if (months.indexOf(currentmonth) < months.indexOf(Month)) //checks for month is less than required month using the array.indexof method
            {
                console.log(`${months.indexOf(currentmonth) } > ${months.indexOf(Month)}`)
                await Nextarrow.click();
            }
        }

    }
  
    for (let date of dateelements) 
    {
        if ((await date.innerText()) === Day[19].toString()) 
        { //selecting date 20
        date.click();
        break;
        }
    }
  await page.waitForTimeout(5000);
});
