from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

# Run webdriver + make sure everything is configured properly
driver = webdriver.Firefox() # Customize browser here
driver.get("https://go.sfss.ca/clubs/list")
assert "SFSS Go" in driver.title
print("\n\n\nRun Success!\n\n\n")

# Open files
clubList = open("club_links.txt", "w+")
imageList = open("club_images.txt", "w")
emailList = open("club_emails.txt", "w")
websiteList = open("club_websites.txt", "w")
nameList = open("club_names.txt", "w")
descriptionList = open("club_descriptions.txt", "w")

clubArray = []

table = driver.find_element(By.ID, "club_listing")
td = table.find_element(By.CLASS_NAME, "logo")
# a = tr.find_element(By.TAG_NAME, "a")
img = td.find_element(By.TAG_NAME, "img")
print(img.get_attribute("src"))

for tr in table.find_elements(By.TAG_NAME, "tr"):
    a = tr.find_element(By.TAG_NAME, "a")
    td = tr.find_element(By.TAG_NAME, "td")

    # Add SFSS page
    clubList.write(a.get_attribute("href"))
    clubList.write("\n")

    clubArray.append(a.get_attribute("href"))

    # Add image
    try:
        img = td.find_element(By.TAG_NAME, "img")
        imageList.write(img.get_attribute("src"))
        imageList.write("\n")
    except:
        imageList.write("No Image Provided\n")


for line in clubArray:
    driver.get(line)

    div = driver.find_element(By.CLASS_NAME, "col-lg-12") 
    a_tags = div.find_elements(By.TAG_NAME, "a") # Create a list of all links

    # Add  email
    email = a_tags[0]
    emailList.write(email.text)
    emailList.write("\n")

    # Add website
    try:
        website = a_tags[1]
        websiteList.write(website.get_attribute("href"))
        websiteList.write("\n")
    except:
        websiteList.write("No Website Provided\n")

    # Add name
    h1 = div.find_element(By.TAG_NAME, "h1")
    nameList.write(h1.text)
    nameList.write("\n")

    # Add description
    p = div.find_element(By.TAG_NAME, "p")
    descriptionList.write(p.text)
    descriptionList.write("\n")


driver.close()
