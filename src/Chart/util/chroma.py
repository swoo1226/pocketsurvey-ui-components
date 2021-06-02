import json
from selenium import webdriver
from webdriver_manager.firefox import GeckoDriverManager
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC
from tqdm import tqdm 
from colormap import rgb2hex
import time

colors = ["f6822c","fac62d","ffed86"]
start_index = 1
end_index = 26

color_url = ",".join(colors)
driver = webdriver.Firefox(executable_path=GeckoDriverManager().install())
driver.get(url=f"https://gka.github.io/palettes/#/{start_index}|s|f6822c,fac62d,ffed86|ffffe0,ff005e,93003a|1|1")

# number_of_color_input_xpath = "/html/body/div/div[2]/div/div/div[2]/input"
# number_of_color_input = driver.find_element_by_xpath(number_of_color_input_xpath)

# def clear_number_input():
#     number_of_color_input.send_keys(Keys.BACK_SPACE)
#     driver.implicitly_wait(1)
#     number_of_color_input.send_keys(Keys.BACK_SPACE)
#     driver.implicitly_wait(1)
#     number_of_color_input.send_keys(Keys.BACK_SPACE)

def parse_rgb(style):
    index = [style.find("(")+1, style.find(")")]
    rgb = style[index[0]:index[1]]
    rgb = rgb.split(',')
    return list(map(int, rgb))

hex_dictionary = {}

for i in tqdm(range(start_index, end_index + 1)):
    # print("i:",i, ','.join(colors))
    # print("url:", f"https://gka.github.io/palettes/#/{str(i)}|s|{','.join(colors)}|ffffe0,ff005e,93003a|1|1")
    driver.get(url=f"https://gka.github.io/palettes/#/{i}|s|f6822c,fac62d,ffed86|ffffe0,ff005e,93003a|1|1")
 # color_list = driver.find_elements_by_class_name("step svelte-iwtfhk")[1:]

    colors = []
    while True:
        color_list = driver.find_elements_by_class_name("svelte-iwtfhk")[1:]
        time.sleep(0.5)
        print(len(color_list), i)
        if(len(color_list) == i):
            colors = color_list
            break
        
    hex_list = []
    for color in colors:
        rgb = parse_rgb(color.get_attribute("style"))
        hex = rgb2hex(rgb[0],rgb[1],rgb[2])
        hex_list.append(hex)
    print(hex_list)
    hex_dictionary[i] = hex_list
 

with open("chroma.json", "w") as fp:
    json.dump(hex_dictionary, fp, sort_keys=True, indent=4)

print(hex_dictionary)