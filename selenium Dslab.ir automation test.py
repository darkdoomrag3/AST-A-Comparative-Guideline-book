from selenium import webdriver
from selenium.webdriver import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.support.ui import WebDriverWait
import pdb


driver = webdriver.Chrome()
driver.maximize_window()
driver.get("https://dsalab.ir/")

A_click= driver.find_element(By.CSS_SELECTOR,"#primary-menu > li.menu-item.menu-item-type-post_type.menu-item-object-page.menu-item-261")
A_click.click()

input_select= driver.find_element(By.CSS_SELECTOR,"#page > div.masthead.inline-header.center.widgets.full-height.shadow-decoration.shadow-mobile-header-decoration.small-mobile-menu-icon.dt-parent-menu-clickable.show-sub-menu-on-hover.show-device-logo.show-mobile-logo.sticky-off.fixed-masthead > header > div.mini-widgets > div > form > a")
input_select.click()
input_insert= driver.find_element(By.NAME,"s")
input_insert.send_keys("database")
input_select.submit()
pdb.set_trace()

