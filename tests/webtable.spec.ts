import { test, expect, chromium } from "@playwright/test";

test("Web Tables", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const table = page.locator("[name='BookTable'] tbody");

  await expect(table).toBeVisible();
  // count number of rows
  //const rows=await page.locator("[name='BookTable'] tbody tr").all() // returns all <tr> locators

  //console.log(`no of rows = ${rows.length}`)

  //or

  //using count method
/*
  const rows = table.locator("tr");

  //console.log(`no of rows = ${await rows.count()}`);

  expect(await rows.count()).toBe(7);

  // count columns number
  //const columns= rows.locator("th")  or

  const columns = page.locator("[name='BookTable'] tbody tr th");

  expect(await columns.count()).toBe(4);

  // read data from 4th row (index - 3)

  const row4_Cells = rows.nth(3).locator("td");
  const row4_Cells_text = await row4_Cells.allInnerTexts(); // return the visible text

  //console.log(`the text in row4 = ${row4_Cells_text}`);
  
  for(let element_text of row4_Cells_text)
  {
    console.log(element_text)
  }
*/
  // complete Table data without table header
  const Allrows=await page.locator("[name='BookTable'] tbody tr").all()
  for (const Row of Allrows.slice(1))
  {
    const alltext=await Row.locator("td").allInnerTexts()
    //console.log(`the text in each cell = ${alltext}`)
    console.log(alltext.join("\t")) // adds the spce to each element
  }

  await page.waitForTimeout(5000);
});
