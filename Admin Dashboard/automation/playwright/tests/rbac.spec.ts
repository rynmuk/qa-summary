import { test, expect } from '@playwright/test';

test('Staff cannot access user management page', async ({ page }) => {
  await page.goto('/admin/login');

  await page.fill('#username', 'staff_user');
  await page.fill('#password', 'password123');
  await page.click('#loginBtn');

  await page.goto('/admin/users');

  await expect(page.locator('.alert-danger'))
    .toContainText('Access Denied');
});
