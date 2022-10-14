Feature: Performing visual regression on volvo campaign

    As a user, on the campaign page
    we need to make sure the look and feel

Background: Volvo campaign page visual testing

Scenario: Homepage image comparison
    Given I open the campaign page
    When Page gets loaded capture screen
    Then captured image compared with baseline
