Feature: Check deleteCard functionality

    The user can be login successfully

    Scenario: Verify that the user can delete exist card successfully

    Given navigate to the board page
    When  click on card name 
    And   click on a Archive
    And   click on delete 
    And   confirm delete card
    Then  the card deleted successfully