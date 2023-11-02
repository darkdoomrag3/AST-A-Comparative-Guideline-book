from selenium import webdriver
from selenium.webdriver import ActionChains
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC, wait
import time


driver = webdriver.Chrome()
driver.maximize_window()
driver.get("https://www.w3schools.com/css/default.asp")
driver.implicitly_wait(4)

print(driver.find_element(By.XPATH,"//*[@id=\"leftmenuinnerinner\"]/a[3]").value_of_css_property("font-family"))
print(driver.find_element(By.XPATH,"//*[@id=\"leftmenuinnerinner\"]/a[3]").value_of_css_property("font-size"))
print(driver.find_element(By.XPATH,"//*[@id=\"leftmenuinnerinner\"]/a[3]").value_of_css_property("line-height"))
