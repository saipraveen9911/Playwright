import { test, expect } from "@playwright/test";
import * as fs from "fs";

test("authrntication popup",async ({browser})=>
{
    const contextA=await browser.newContext({
        httpCredentials:{username:'admin',password:'admin'}
    })
    const Masterpage=await contextA.newPage()

   // await Masterpage.goto("http://admin:admin@the-internet.herokuapp.com/basic_auth") // not recommended
    // https://username:password@the-internet.herokuapp.com/basic_auth
    
    await Masterpage.goto("http://the-internet.herokuapp.com/basic_auth")
    /*
    await Masterpage.waitForLoadState()
    await expect(Masterpage.locator("#content p")).toBeVisible()
    
*/
    await Masterpage.waitForTimeout(5000)
})