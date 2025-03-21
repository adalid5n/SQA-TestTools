import { test, expect } from "@playwright/test";

test("Test Case 1", async ({ page }) => {
  await page.goto('https://sqademosatp.net/watch/');
  await page.locator('#box-1857').getByText('Royal London 41003-').click();
  await page.waitForTimeout(1000);
  await page.locator('#btn-cart').getByRole('button', { name: 'Add to Basket' }).click();
  await page.locator('.qty > .qty-box > .bigger').click();
  await page.waitForTimeout(1000);
  await page.locator('.qty > .qty-box > .bigger').click();
  await page.waitForTimeout(1000);
  await expect(page.locator('input[name="cart_quantity\\[\\]"]')).toHaveValue('3');
  await page.locator('.pop-up-close').click();
  await page.locator('#cart-box').hover();
  await page.locator('#cart-box').getByRole('link', { name: 'Checkout' }).click();
  await page.locator('#login-email_address').click();
  await page.locator('#login-email_address').fill('adalid.guzman@hotmail.com');
  await page.locator('#login-password').click();
  await page.locator('#login-password').fill('Contraseña12');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('radio', { name: '£102.06 Total' }).check();
  await page.waitForTimeout(1000);
  await page.getByRole('radio', { name: 'Cash on Delivery' }).check();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'Confirm and pay' }).click();
  await expect(page.locator('#box-36757')).toContainText('We\'ll send you order status update by email');
});
