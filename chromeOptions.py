from selenium import webdriver
from selenium.webdriver import ActionChains
from selenium.webdriver.common.alert import Alert
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC, wait
import time
from selenium.webdriver.chrome.options import Options

chrome_options = Options()

pref = {"profile.default_content_setting_values.notifications":2}
chrome_options.add_experimental_option("pref",pref)
driver = webdriver.Chrome()
driver.maximize_window()
driver.get("https://www.agoda.com/?site_id=1891458&tag=24bd4b3f-b6a1-50d5-e639-d9c49ca41c49&device=c&network=g&adid=577200902100&rand=17641535371797691488&expid=&adpos=&aud=kwd-2230651387&gclid=Cj0KCQjwmvSoBhDOARIsAK6aV7gNezJuDWg9jlHFtuRHolyer3QEvhTk8OP5jNf2kOP8qZ-Gq3oxxNkaAhRbEALw_wcB&pslc=1")
driver.implicitly_wait(4)

time.sleep(7)

