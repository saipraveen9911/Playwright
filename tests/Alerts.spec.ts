import { test, expect, Locator } from "@playwright/test";

// test for Simple alert Box
test("Simple Alert TC", async ({ page }) => {
  // Launch the URL
  await page.goto("https://demo.automationtesting.in/Alerts.html");

  const simplealertBtn: Locator = page.getByRole("button", {
    name: "click the button to display an  alert box:",
  });

  // Creating the alert handler befor perfoming click action
  page.on("dialog", async (dialog) => {
    // Reading the Dialog type and storing
    const alertType = dialog.type();

    // reading the Dialog Message and store in the Variable
    const alertMessage = dialog.message();

    console.log(`The type of dialog is ${alertType}`);
    console.log(`The messgae in dialog is ${alertMessage}`);

    // Asserting the alert type
    expect(alertType).toContain("alert");

    // Asserting the message in dalog box
    expect(alertMessage).toContain("I am an alert box!");

    // waiting for 5 sec after dialog box launchs
    await page.waitForTimeout(5000);

    // clicking the Ok button on Dialog box
    dialog.accept();
  });

  // clicking the button to launch the dialog
  await simplealertBtn.click();
});

// Test for Confirmation Alert box

test("Confirmation Alert Box", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Alerts.html");
  const confirmAlert = page.getByText("Alert with OK & Cancel ");
  const AlertBtn = page.getByRole("button", {
    name: "click the button to display a confirm box ",
  });
  const confirmtxt = page.getByText("You pressed Ok");
  page.on("dialog", async (dialog) => {
    const alerttype = dialog.type();
    const alertmessage = dialog.message();

    console.log(`The type of dialog is ${alerttype}`);
    console.log(`The messgae in dialog is ${alertmessage}`);

    expect(alerttype).toContain("confirm");
    expect(alertmessage).toContain("Press a Button !");

    dialog.accept();
  });
  const frameele = page.frameLocator("#aswift_5");
  await confirmAlert.click();
  await page.waitForTimeout(10000);
  await expect(frameele.getByRole("button", { name: "close" })).toBeVisible();
  await frameele.getByRole("button", { name: "close" }).click();

  await AlertBtn.click();

  expect(confirmtxt).toHaveText("You pressed Ok");
});

// Test for Prompt Alert box
test.only("Prompt Alert Box", async ({ page }) => {
  await page.goto("https://demo.automationtesting.in/Alerts.html");
  const PromptAlert = page.getByText("Alert with Textbox ");
  const promptAlertBtn = page.getByRole("button", {
    name: "click the button to demonstrate the prompt box ",
  });
  const promptText = page.locator("#demo1");
  page.on("dialog", async (dialog) => {
    const alerttype = dialog.type();
    const alertmessage = dialog.message();

    console.log(`The type of dialog is ${alerttype}`);
    console.log(`The messgae in dialog is ${alertmessage}`);

    dialog.accept("everyone");
  });

  // handling frame
  const frameele = page.frameLocator("#aswift_5");
  await PromptAlert.click();
  await expect(frameele.getByRole("button", { name: "close" })).toBeVisible();
  await frameele.getByRole("button", { name: "close" }).click();
  await promptAlertBtn.click();
  console.log(`Confirmation point: ${await promptText.innerText()}`);
  await expect(promptText).toHaveText("Hello everyone How are you today");
});
