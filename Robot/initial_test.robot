*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${BROWSER}    headlesschrome
${BASE_URL}    http://localhost:3000

*** Test Cases ***
Open Browser and Test API Connection
    Open Browser    ${BASE_URL}    browser=${BROWSER}
    Maximize Browser Window
    Test API Connection
    Close Browser

*** Keywords ***
Test API Connection
    # Testing that page has text home
    Wait Until Page Contains    Home
