Feature: Check create template functionality

    The user can be create template successfully

    Scenario: Verify that the user can create template successfully

    Given navigate to the board page
    When click on a create from template icon
    And click on create a new template button
    And type template title
    And click on add button
    And click on close icon
    Then card template created successfully
  