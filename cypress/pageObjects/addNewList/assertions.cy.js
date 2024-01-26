class addNewListAssertions {
  checkVisiblityOfTheList(listName) {
    cy.get('[data-testid="list"]')
      .eq(3)
      .contains(listName)
      .should("be.visible");
  }
}

export default addNewListAssertions;
