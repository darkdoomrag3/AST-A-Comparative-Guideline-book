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
driver.get("https://www.espncricinfo.com/series/the-marsh-cup-2023-24-1391769/points-table-standings")
driver.implicitly_wait(4)

rows = driver.find_elements(By.XPATH,'//tbody/tr')
total_rows = len(rows)

cols = driver.find_elements(By.XPATH,'/tbody/tr[1]/td')
total_cols = len(cols)
print(total_rows,total_cols)

start_xpath = "//tbody/tr["
mid_xpath = "]/td["
end_path = "]"

for row in range(1,total_rows+1):
    for col in range(1,total_cols+1):
        print(driver.find_element(By.XPATH,start_xpath+str(row)+mid_xpath+str(col)+end_path).text)
