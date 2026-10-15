import { test, expect, chromium } from "@playwright/test";

test("Multipage Handling", async ({}) => {
  const chromeBrowser = await chromium.launch();
  const context1 = await chromeBrowser.newContext();
  const masterPage = await context1.newPage();
  await masterPage.goto("https://testautomationpractice.blogspot.com/");

  const [childPage] = await Promise.all([
    context1.waitForEvent("page"),
    masterPage.getByRole("button", { name: "New Tab" }).click(),
  ]);

  console.log(await childPage.title());
  console.log(await masterPage.title());

  chromeBrowser.close();
});

test.only(" popup window handling", async () => {
  const Browser = await chromium.launch();
  const contextA = await Browser.newContext();
  const masterPage = await contextA.newPage();
  await masterPage.goto("https://testautomationpractice.blogspot.com/");

  const [popuppage] = await Promise.all([
    masterPage.waitForEvent("popup"),
    masterPage.getByText("Popup Windows").click(),
  ]);

  const popupwindow=contextA.pages()
 console.log(popupwindow.length)
 for(let a of popupwindow)
 {
 console.log(await a.title());
 }
  await popuppage.waitForTimeout(5000);
  Browser.close();
});
