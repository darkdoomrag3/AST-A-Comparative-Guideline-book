import time

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.ui import Select
import random
import json


driver = webdriver.Chrome()
driver.get("https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_submit_get")

driver.switch_to.frame('iframeResult')
button = driver.find_element(By.ID,'mySubmit')

driver.execute_script("arguments[0].style.border = '2px solid red';", button)

time.sleep(6)

driver.quit()

