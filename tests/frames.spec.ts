import {test,expect} from '@playwright/test'

test("Frame Handling",async ({page})=>
{
await page.goto("https://ui.vision/demo/webtest/frames/")

const frame1=page.frameLocator("[src='frame_1.html']")
const frame2=page.frame({url:'https://ui.vision/demo/webtest/frames/frame_2'})
const frame3=page.frameLocator("[src='frame_3.html']")
const frame4=page.frame({url:"https://ui.vision/demo/webtest/frames/frame_4"})
const frame5=page.frameLocator("[src='frame_5.html']")

if(frame1)
{
    await frame1.locator("[name='mytext1']").fill("hello")
     expect(await frame1.locator("[name='mytext1']").inputValue()).toContain("hello")
}

if(frame2)
{
    
    await frame2.locator("[name='mytext2']").fill("world")
    expect(await frame2.locator("[name='mytext2']").inputValue()).toContain("world")
}

if(frame4)
{
    await frame4.locator("[name='mytext4']").fill("myworld")
    expect(await frame4.locator("[name='mytext4']").inputValue()).toContain("myworld")
}

if(frame5)
{
    await frame5.locator("[name='mytext5']").fill("myworld")
    expect(await frame5.locator("[name='mytext5']").inputValue()).toContain("myworld")
}

if(frame3)
{
    const innerframe3= frame3.frameLocator("[src='https://docs.google.com/forms/d/e/1FAIpQLSf5WiH3jEQApYku0Rl_nreU6_YMuLKAH5ffHuASyykQSIBjmg/viewform?embedded=true']")
    if(innerframe3)
    {
    await innerframe3.getByRole("radio",{name:'I am a human'}).check()
    await expect(innerframe3.getByLabel("I am a human")).toBeChecked()
    await innerframe3.getByRole("checkbox",{name:'Form Autofilling'}).check()
    await expect(innerframe3.getByLabel("Form Autofilling")).toBeChecked()
    }
}
await page.waitForTimeout(5000)
})