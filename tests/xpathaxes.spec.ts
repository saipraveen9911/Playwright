import { test, expect } from "@playwright/test";

/*
ancestor ->
      // tagname[@attribute='value']/ancestor::tagname[@attribute='value']
      // or
      // tagname[@attribute='value']/ancestor::tagname

parent ->
      // tagname[@attribute='value']/parent::tagname[@attribute='value']
      // or
      // tagname[@attribute='value']/parent::tagname

sibling -> 
      following-sibling -> 
          // tagname[@attribute='value']/following-sibling::tagname[@attribute='value']
          // or
          // tagname[@attribute='value']/following-sibling::tagname
      
      preceding-sibling ->
          // tagname[@attribute='value']/preceding-sibling::tagname[@attribute='value']
          // or
          // tagname[@attribute='value']/preceding-sibling::tagname

child ->
      // tagname[@attribute='value']/child::tagname[@attribute='value']
      // or
      // tagname[@attribute='value']/child::tagname


descendant ->
      // tagname[@attribute='value']/descendant::tagname[@attribute='value']
      // or
      // tagname[@attribute='value']/descendant::tagname

      *** tagname[@attribute='value'] => can also use any xpath supported methods  ****
*/

test("xpath axes", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  await page.locator("//input[@id='name']").fill("praveen");

  console.log("++++++++++++++++++ preceding sibling +++++++++++++++");
  //preceding sibling
  console.log(
    await page
      .locator("//input[@id='name']/preceding-sibling::label")
      .innerText(),
  );
  console.log("++++++++++++++++++ following - sibling +++++++++++++++");
  // following- sibling
  //input[@id='name']/following-sibling::label
  console.log(
    await page
      .locator("//input[@id='name']/following-sibling::label")
      .nth(0)
      .innerText(),
  );
  console.log("++++++++++++++++++ parent +++++++++++++++");
  //parent
  console.log(
    await page.locator("//table[@name='BookTable']/parent::div").innerText(),
  );

  // ancestor
  page.locator("//table[@name='BookTable']/ancestor::div"); // retruns 14 tags
  console.log("++++++++++++++++++ child +++++++++++++++");
  //child
  console.log(
    await page
      .locator("//table[@name='BookTable']/child::tbody/child::tr")
      .nth(5)
      .innerText(),
  );

  // descendant
  console.log("++++++++++++++++++ descendant +++++++++++++++");

  console.log(
    await page
      .locator("//table[@name='BookTable']/descendant::th")
      .nth(2)
      .innerText(),
  );

  await page.waitForTimeout(5000);
});
