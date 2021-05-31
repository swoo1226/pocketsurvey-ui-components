import json
from selenium import webdriver
from webdriver_manager.firefox import GeckoDriverManager
from selenium.webdriver.common.keys import Keys
from tqdm import tqdm

driver = webdriver.Firefox(executable_path=GeckoDriverManager().install())

driver.get(url='https://colordesigner.io/gradient-generator')
driver.implicitly_wait(3)

color_start = 'FFA507' 
color_end = 'FBF1B9'

start_index = 1
end_index = 26

def setting_start_color():
    start_color_div_xpath = '//*[@id="__layout"]/div/main/section[1]/div/div/div[1]/div/div/div[1]/div[1]/div'
    start_color_input_xpath = '//*[@id="pane-color-picker"]/div/div/div[3]/div/div/div[9]/input'

    driver.find_element_by_xpath(start_color_div_xpath).click()
    driver.implicitly_wait(1)

    start_color_input = driver.find_element_by_xpath(start_color_input_xpath)
    start_color_input.clear()
    driver.implicitly_wait(1)
    start_color_input.send_keys(color_start)

def setting_end_color():
    end_color_div_xpath = '//*[@id="__layout"]/div/main/section[1]/div/div/div[1]/div/div/div[1]/div[3]/div'
    end_color_input_xpath = '//*[@id="pane-color-picker"]/div/div/div[3]/div/div/div[9]/input'

    driver.find_element_by_xpath(end_color_div_xpath).click()
    driver.implicitly_wait(1)

    end_color_input = driver.find_element_by_xpath(end_color_input_xpath)
    end_color_input.clear()
    driver.implicitly_wait(1)
    end_color_input.send_keys(color_end)
    driver.implicitly_wait(1)
    driver.find_element_by_xpath(end_color_div_xpath).click()

def clear_number_input():
    input_number.send_keys(Keys.BACK_SPACE)  
    driver.implicitly_wait(1)
    input_number.send_keys(Keys.BACK_SPACE)  
    driver.implicitly_wait(1)
    input_number.send_keys(Keys.BACK_SPACE)  


 
input_number_xpath = '//*[@id="__layout"]/div/main/section[1]/div/div/div[1]/div/div/div[3]/div[1]/div/div/input'
input_number = driver.find_element_by_xpath(input_number_xpath)

setting_start_color()
setting_end_color()

hex_dictionary = {}

for i in tqdm(range(start_index, end_index+1)):
    clear_number_input()
    driver.implicitly_wait(3)

    input_number.send_keys(str(i))
    driver.implicitly_wait(3)


    color_list = driver.find_elements_by_class_name('color-list__color-value')
    hex_list = []

    for color in color_list[0::3]:
        hex_list.append(color.text.splitlines()[1])

    hex_dictionary[i] = hex_list
    
with open('hex.json', 'w') as fp:
    json.dump(hex_dictionary, fp, sort_keys=True, indent=4)
