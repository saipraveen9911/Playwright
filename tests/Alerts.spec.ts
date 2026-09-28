import { test, expect, Locator } from "@playwright/test";

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
