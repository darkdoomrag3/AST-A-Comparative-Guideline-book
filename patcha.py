import requests
import undetected_chromedriver
from selenium import webdriver
from selenium.webdriver import ActionChains
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC, wait
import time


# captcha cloudflare
driver = webdriver.Chrome()
driver.maximize_window()
driver.get("Https://it-ir--appointment.visametric.com/ir/home")
driver.implicitly_wait(4)
# time.sleep(10)
#
# WebDriverWait(driver, 20).until(EC.frame_to_be_available_and_switch_to_it((By.XPATH,"//iframe[@title='Widget containing a Cloudflare security challenge']")))
# time.sleep(5)
# WebDriverWait(driver, 20).until(EC.element_to_be_clickable((By.CSS_SELECTOR, '#challenge-stage'))).click()



