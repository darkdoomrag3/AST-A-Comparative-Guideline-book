from selenium import webdriver
from selenium.webdriver import ActionChains
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC, wait
import time


driver = webdriver.Chrome()
driver.maximize_window()
driver.get("https://rahulshettyacademy.com/AutomationPractice/")
driver.implicitly_wait(4)

driver.find_element(By.XPATH,'//*[@id="openwindow"]').click()

windows = driver.window_handles

# for window in windows:
#     print(window)
#     driver.switch_to.window(window)

driver.switch_to.window(driver.window_handles[1])

driver.find_element(By.XPATH,'//*[@id="navbarSupportedContent"]/ul/li[3]/a').click()
