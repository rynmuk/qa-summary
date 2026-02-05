test('Admin can create a new user', async ({ page }) => {
  await page.goto('/admin/login');

  await page.fill('#username', 'admin');
  await page.fill('#password', 'password123');
  await page.click('#loginBtn');

  await page.goto('/admin/users/create');

  await page.fill('#name', 'QA User');
  await page.fill('#email', 'qa.user@mail.com');
  await page.click('#saveBtn');

  await expect(page.locator('.alert-success'))
    .toContainText('User created successfully');
});
