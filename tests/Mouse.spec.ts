import {test,expect} from '@playwright/test'

test("Hover",async ({page})=>
{
 await page.goto("https://www.playwrightautomation.com/practice.html#section-mouse")
 const mousehover=page.getByRole("button",{name: "Point Me"})
 await mousehover.hover()

 
 const mobilehover=page.locator("[data-testid='hover-item-mobiles']")
 await mobilehover.hover()
 await expect(mobilehover).toBeVisible()

// Captures the current viewport and saves it as a file
await page.screenshot({ path: 'screenshot.png' });

 await page.waitForTimeout(2000)


})

test("Right click",async ({page})=>
{
    
})