import { test, expect } from "@playwright/test";

test("Dropdown ", async ({ page }) => {
  await page.goto(
    "https://playwrightautomation.com/practice.html#section-dropdowns",
  );

  const dropdown = page.getByTestId("dropdown-country");
  //by visible text
  //await dropdown.selectOption('Canada')

  // by using value attribute

  //await dropdown.selectOption({value:'germany'})
  // by using index

  //await dropdown.selectOption({index: 1})

  // by using label
  await dropdown.selectOption({ label: "Japan" });

  await page.waitForTimeout(5000);
});

test("multi select Dropdown ", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const dropdown = page.locator("#colors");

  //await dropdown.selectOption(['Blue','Green'])

  //await dropdown.selectOption([{ label: "Red" }, { label: "White" }]);

  // assignment -  with index
  //await dropdown.selectOption([{index:2},{index:4}])
  
  //assignment with value
  await dropdown.selectOption([{value:'blue'},{value:'yellow'}])


  await page.waitForTimeout(5000);
});



test.only("Auto suggest Dropdown ", async ({ page }) => {
  await page.goto("https://www.flipkart.com/");

  await page.waitForTimeout(5000);

  await page.locator("input[name='q']").nth(0).fill("smart");

  await page.waitForTimeout(3000);
  const Dropdownlist = page.locator("ul>li");
  const count = await Dropdownlist.count();

  //console.log(await Dropdownlist.nth(5).innerText())

  for (let i = 0; i < count; i++) {
    console.log(await Dropdownlist.nth(i).innerText());
  }
  let text = "";


  for (let i = 0; i < count; i++) {
    text = await Dropdownlist.nth(i).innerText();

    if (text.trim() == "smartphone") {
      await Dropdownlist.nth(i).click();
      break;
    }
  }

  await page.waitForTimeout(5000);
});
