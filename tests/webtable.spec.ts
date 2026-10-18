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
  const Allrows = await page.locator("[name='BookTable'] tbody tr").all();
  for (const Row of Allrows.slice(1)) {
    const alltext = await Row.locator("td").allInnerTexts();
    //console.log(`the text in each cell = ${alltext}`)
    console.log(alltext.join("\t")); // adds the spce to each element
  }

  await page.waitForTimeout(5000);
});

test("Web Tables operations", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const table = (await page.locator("[name='BookTable'] tbody tr").all()).slice(
    1,
  );
  let value = 0;
  for (let row of table) {
    const columns = await row.locator("td").all();

    if ((await columns[1].innerText()) === "Mukesh") {
      console.log(`Book Name : ${await columns[0].innerText()}`);
      value += Number(await columns[3].innerText());
    }
  }
  console.log(`Total price of Books by author Mukesh is Rs.${value}/-`);
});

test.only("Dynamic tables", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const table = page.locator("#taskTable");
  const header = table.locator("#headers th");
  const Header_Row = await header.allTextContents();
  const Header_Row2 = Header_Row.map((m) => m.trim());
  const table_rows = await table.locator("#rows tr").all();

  //read the Chrome CPU load Value
  const Chrome_CPU = await page
    .locator("#displayValues .chrome-cpu")
    .innerText();
  // read firefox memory value
  const firefox_memory = await page
    .locator("#displayValues .firefox-memory")
    .innerText();

  // read chrome network speed
  const chrome_network = await page
    .locator("#displayValues .chrome-network")
    .innerText();

  // read firefox disk space
  const firefox_disk = await page
    .locator("#displayValues .firefox-disk")
    .innerText();

  await table.hover();
  //Approach 1

  /*
  let Column_Memory_index = 0,
    Column_Disk_index = 0,
    Column_Network_index = 0,
    Column_CPU_index = 0;
  let Row_chrome_index = 0,
    Row_Firefox_index = 0,
    Row_IE_index = 0,
    Row_System_Index = 0;

  
  let count = 1;
  const header_column = (await header.allInnerTexts()).slice(
    1,
  );
  for (let i of header_column) {
    switch (i) {
      case "Memory (MB)":
        Column_Memory_index = count;
        console.log(`Column_Memory_index = ${count}`);
        break;
      case "Disk (MB/s)":
        Column_Disk_index = count;
        console.log(`Column_Disk_index = ${count}`);
        break;
      case "Network (Mbps)":
        Column_Network_index = count;
        console.log(`Column_Network_index = ${count}`);
        break;
      case "CPU (%)":
        Column_CPU_index = count;
        console.log(`Column_CPU_index = ${count}`);
        break;
      default:
        break;
    }
    count += 1;
  }

  let count1 = 0;
  for (let row of table_rows) {
    switch (await row.locator("td").nth(0).innerText()) {
      case "Chrome":
        Row_chrome_index = count1;
        console.log(`Row_chrome_index = ${count1}`);
        break;
      case "Firefox":
        Row_Firefox_index = count1;
        console.log(`Row_Firefox_index = ${count1}`);
        break;
      case "Internet Explorer":
        Row_IE_index = count1;
        console.log(`Row_IE_index = ${count1}`);
        break;
      case "System":
        Row_System_Index = count1;
        console.log(`Row_System_Index = ${count1}`);
        break;
      default:
        break;
    }
    count1++;
  }

  await page.screenshot({ path: "image1.png" });
  console.log(
    await table_rows[Row_chrome_index].locator("td")
      .nth(Column_CPU_index)
      .innerText(),
  );
  expect(
    await table_rows[Row_chrome_index].locator("td")
      .nth(Column_CPU_index)
      .innerText(),
  ).toBe(Chrome_CPU);

  */

  //Approach - 2
  console.log(Header_Row2);
  console.log(Header_Row);

  let Column_Memory_index = Header_Row2.indexOf("Memory (MB)".trim()),
    Column_Disk_index = Header_Row2.indexOf("Disk (MB/s)".trim()),
    Column_Network_index = Header_Row2.indexOf("Network (Mbps)".trim()),
    Column_CPU_index = Header_Row2.indexOf("CPU (%)".trim());
  console.log(`Column_Memory_index = ${Column_Memory_index}`);
  console.log(`Column_Disk_index = ${Column_Disk_index}`);
  console.log(`Column_Network_index = ${Column_Network_index}`);
  console.log(`Column_CPU_index = ${Column_CPU_index}`);

  let Row_chrome_index = 0,
    Row_Firefox_index = 0,
    Row_IE_index = 0,
    Row_System_Index = 0;
  let count1 = 0;
  for (let row of table_rows) {
    switch (await row.locator("td").nth(0).innerText()) {
      case "Chrome":
        Row_chrome_index = count1;
        console.log(`Row_chrome_index = ${count1}`);
        break;
      case "Firefox":
        Row_Firefox_index = count1;
        console.log(`Row_Firefox_index = ${count1}`);
        break;
      case "Internet Explorer":
        Row_IE_index = count1;
        console.log(`Row_IE_index = ${count1}`);
        break;
      case "System":
        Row_System_Index = count1;
        console.log(`Row_System_Index = ${count1}`);
        break;
      default:
        break;
    }
    count1++;
  }

  await page.screenshot({ path: "image1.png" });
  console.log(
    await table_rows[Row_chrome_index].locator("td")
      .nth(Column_CPU_index)
      .innerText(),
  );
  expect(
    await table_rows[Row_chrome_index].locator("td")
      .nth(Column_CPU_index)
      .innerText(),
  ).toBe(Chrome_CPU);
});
