from selenium import webdriver
from selenium.webdriver import ActionChains
from selenium.webdriver.common.alert import Alert
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC, wait
import pytest
import allure
from allure_commons.types import AttachmentType


@pytest.fixture()
def log_on_failure(request, chrome_browser):
    driver = chrome_browser
    yield
    item = request.node
    if item.rep_call.failed:
        allure.attach(driver.get_screenshot_as_png(), name="report", attachment_type=AttachmentType.PNG)


def get_data():
    return [
        ("emadbay@gmail.com", "asldjas;ldk"),
        ("emadmay@gmail.com", "dudemnjasd"),
        ("emadhay@gmail.com", "lolojsjdasd")
    ]


@pytest.mark.usefixtures("log_on_failure")
@pytest.mark.parametrize("username,password", get_data())
def test_login(username, password, chrome_browser):
    driver = chrome_browser
    driver.find_element(By.ID, "").send_keys(username)
    driver.find_element(By.ID, "").send_keys(password)
