import { test, expect, Locator } from "@playwright/test";

test("test using page.getbyRole", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  // get by place holder method
  const Username: Locator = page.getByRole("textbox", { name: "Username" });
  const password: Locator = page.getByRole("textbox", { name: "Password" });
  const LoginBTN: Locator = page.getByRole("button", { name: "Login" });
  await Username.fill("standard_user");
  await password.fill("secret_sauce");
  await LoginBTN.click();

  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});

test("Test using Page.getByPlaceholder()", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  const Username: Locator = page.getByPlaceholder("Username");
  const password: Locator = page.getByPlaceholder("Password");
  // get byrole method
  const LoginBTN: Locator = page.getByRole("button", { name: "Login" });
  await Username.fill("standard_user");
  await password.fill("secret_sauce");
  await LoginBTN.click();

  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
});

test("Test using getbyText",async ({page}) =>
{
    await page.goto("https://www.saucedemo.com/");
  const Username: Locator = page.getByPlaceholder("Username");
  const password: Locator = page.getByPlaceholder("Password");

  // get by text method
  const LoginBTN: Locator = page.getByText("Login");
  await Username.fill("standard_user");
  await password.fill("secret_sauce");
  await LoginBTN.click();

  await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
})


