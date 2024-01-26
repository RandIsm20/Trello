Feature: Check Add a new list functionality

    The user can be add a new list successfully

    Scenario: Verify that the user can create a new list successfully

    Given navigate to the board page
    When click on a add another list plus icon
    And type title for the list
    And click on add list button 
    Then the list created successfully
