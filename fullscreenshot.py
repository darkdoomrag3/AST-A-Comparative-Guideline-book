from selenium import webdriver
from selenium.webdriver.common.by import By
import time
from selenium.webdriver.chrome.options import Options

options = Options()
options.add_argument('--headless=new')
driver = webdriver.Chrome(options=options)

driver.maximize_window()
driver.implicitly_wait(3)

driver.maximize_window()
driver.get("https://www.way2automation.com/")
driver.implicitly_wait(4)

S = lambda X: driver.execute_script('return document.body.parentNode.scroll' + X)
driver.set_window_size(S('Width'), S('Height'))
driver.find_element(By.TAG_NAME, "body").screenshot("./screenshot/fullpage.png")


