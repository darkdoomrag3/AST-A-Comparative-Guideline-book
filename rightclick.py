from selenium import webdriver
from selenium.webdriver import ActionChains
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC, wait
import time


driver = webdriver.Chrome()
driver.maximize_window()
driver.get("https://deluxe-menu.com/popup-mode-sample.html")
driver.implicitly_wait(4)
img = driver.find_element(By.XPATH,"/html/body/div/table/tbody/tr/td[2]/div[2]/table[1]/tbody/tr/td[3]/p[2]/img")
ActionChains(driver).context_click(img).perform()
first_element = driver.find_element(By.XPATH,'//*[@id="dm2m1i1tdT"]')
ActionChains(driver).move_to_element(first_element).perform()
secound_element = driver.find_element(By.XPATH,'//*[@id="dm2m2i1tdT"]')
ActionChains(driver).move_to_element(secound_element).perform()
third_element = driver.find_element(By.XPATH,'//*[@id="dm2m3i1tdT"]')
ActionChains(driver).move_to_element(third_element).perform()
