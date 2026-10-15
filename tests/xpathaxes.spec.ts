
import { test, expect } from "@playwright/test";

/*
ancestor
parent
sibling
child
descendant
*/
test("Download Text file", async ({ page }) => {
  await page.goto(
    "https://testautomationpractice.blogspot.com/",
  );

  await page.locator("//input[@id='name']").fill("praveen")



  ////table[@name="BookTable"]/descendant::td[text()='Learn Selenium'] 

  await page.waitForTimeout(5000);
})
