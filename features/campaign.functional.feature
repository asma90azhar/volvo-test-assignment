Feature: Performing Navigations on volvo campaign

    As a user on the campaign page
    We need to make sure the navigations and backlinks

Background: Volvo campaign page nativations
    
Scenario: Display cookie policy popup
    Given I open the Campaign page
    Then I expect cookie popup is displayed

Scenario: Accept cookies
    When I click accept button
    Then I expect cookie popup is not displayed
    
Scenario: Open the car model page from header menu 
    When I clicked Our Cars from hearder
    Then I expect the Model items is displayed