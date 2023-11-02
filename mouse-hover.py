#
# jalase mouse over and try
# from selenium import webdriver
# from selenium.webdriver import ActionChains
# from selenium.webdriver.common.keys import Keys
# from selenium.webdriver.common.by import By
# from selenium.webdriver.support.wait import WebDriverWait
# from selenium.webdriver.support import expected_conditions as EC, wait
# import time
#
# driver = webdriver.Firefox()
# driver.maximize_window()
# driver.get("https://www.way2automation.com/")
# driver.implicitly_wait(2)
# menue = driver.find_element(By.XPATH, '//*[@id="menu-item-27617"]/a/span[2]')
#
# action = ActionChains(driver)
# action.move_to_element(menue).perform()
#
#  driver.find_element(By.XPATH,"//li[@id='menu-item-27618']//span[@class='menu-text'][normalize-space()='Practice Site 1']").click()
#
#
# try:
#     element = WebDriverWait(driver, 10).until(
#         EC.visibility_of_element_located((By.XPATH, '/html/body/div[3]/div/div[4]'))
#     )
#     element.click()
# finally:
#     driver.quit()


