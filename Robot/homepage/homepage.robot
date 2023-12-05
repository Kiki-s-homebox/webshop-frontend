*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${BROWSER}    headlesschrome
${BASE_URL}    http://localhost:3000

*** Test Cases ***

Click Home Mover Kit checkout phase
    Open Browser    ${BASE_URL}    ${BROWSER}
    Maximize Browser Window
    Click Element    xpath=//a[contains(@href, '/products/home-mover-kit')]
    Wait Until Page Contains    text=Start life in your new home the easy way with our Home Mover kit. Packed with stylish, high-quality essentials, this kit offers everything you need at an affordable price, without the hassle of store and product searches. Rest assured that every product has been tested and approved for your peace of mind. Move in and start living with confidence!
    Click Button    Add to cart
    Wait for while
    Wait Until Page Contains    text=CART
    Close Browser
    
Edit options in order
    Open Browser    ${BASE_URL}    ${BROWSER}
    Maximize Browser Window
    Click Element    xpath=//a[contains(@href, '/products/sauna-pack')]
    Wait Until Page Contains    text=Our Sauna Pack is the perfect way to experience the unique sauna journey of Finland. Crafted with premium materials, this gift is ideal for newcomers looking to immerse themselves in the culture of the sauna capital of the world. With our Sauna Pack, you can enjoy the ultimate sauna experience with unparalleled comfort and luxury.
    Click Button    Add to cart
    Wait for while
    Wait Until Page Contains    text=CART
    Close Browser

Test search

    Open Browser    ${BASE_URL}    ${BROWSER}
    Maximize Browser Window
    Wait for while
    Click Element  xpath=//a[@href='#search-aside']
    
    Close Browser

*** Keywords ***

Wait for while
    Sleep    3