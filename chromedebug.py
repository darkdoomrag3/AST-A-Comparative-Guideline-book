import time

from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys


chrome_options = Options()
chrome_options.add_experimental_option("debuggerAddress", "localhost:9222")

driver = webdriver.Chrome(options=chrome_options)
# driver.maximize_window()

# driver.get("https://gmail.com/")
# time.sleep(7)
driver.find_element(By.ID,"identifierId").send_keys("dude@gmail.com")
time.sleep(4)

