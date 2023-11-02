from configparser import ConfigParser


# config = ConfigParser()
#
# config.read("config.ini")
#
# print(config.get("locator","password"))
# print(config.get("basic info","browser"))

def readConfig(section, key):
    config = ConfigParser()
    config.read("config.ini")
    return config.get(section, key)


print(readConfig("locator", "password"))
