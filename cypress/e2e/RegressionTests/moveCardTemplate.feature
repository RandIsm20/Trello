Feature: Check move card template functionality

    The user can be move card template successfully

    Scenario: Verify that the user move card template successfully

    Given navigate to the board page
    When click on a card template name
    And click on move button
    And select list destenation
    And confirm move card template 
    And click on close icon
    Then the card template name moved successfully