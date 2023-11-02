from selenium import webdriver
from selenium.webdriver import ActionChains
from selenium.webdriver.common.alert import Alert
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC, wait
import time

driver = webdriver.Chrome()
driver.maximize_window()
driver.get("https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_submit_get")
driver.implicitly_wait(4)


def capture_screenshot(d, path):
    file_name = path + "screenshot_" + time.asctime().replace(":", "_") + ".png"
    d.save_screenshot(file_name)


driver.switch_to.frame('iframeResult')
# driver.find_element(By.XPATH,"/html/body/button").click()
driver.execute_script("myFunction()")
elem = driver.find_element(By.ID, "mySubmit")
driver.execute_script("arguments[0].style.border='3px solid red'", elem)
time.sleep(5)

driver.switch_to.default_content()

frames = driver.find_elements(By.TAG_NAME, "iframe")
capture_screenshot(driver, "../screenshot/")

time.sleep(5)
