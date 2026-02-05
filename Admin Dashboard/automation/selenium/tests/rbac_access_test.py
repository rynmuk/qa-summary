def test_staff_cannot_access_user_management(driver):
    driver.get("https://example.com/admin/login")

    driver.find_element("id", "username").send_keys("staff_user")
    driver.find_element("id", "password").send_keys("password123")
    driver.find_element("id", "loginBtn").click()

    driver.get("https://example.com/admin/users")

    error_message = driver.find_element("class name", "alert-danger").text
    assert "Access Denied" in error_message
