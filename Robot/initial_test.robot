*** Settings ***
Library    SeleniumLibrary

*** Test Cases ***
Open Browser and Test API Connection
    Open Browser    http://localhost:3000    Chrome
    Maximize Browser Window
    Test API Connection
    Close Browser

*** Keywords ***
Test API Connection
    # Testing that page has text home
    Wait Until Page Contains    Home
