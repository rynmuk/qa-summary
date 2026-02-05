def test_admin_create_user(driver):
    driver.get("https://example.com/admin/login")

    driver.find_element("id", "username").send_keys("admin")
    driver.find_element("id", "password").send_keys("password123")
    driver.find_element("id", "loginBtn").click()

    driver.get("https://example.com/admin/users/create")

    driver.find_element("id", "name").send_keys("QA User")
    driver.find_element("id", "email").send_keys("qa.user@mail.com")
    driver.find_element("id", "saveBtn").click()

    success_message = driver.find_element("class name", "alert-success").text
    assert "User created successfully" in success_message
