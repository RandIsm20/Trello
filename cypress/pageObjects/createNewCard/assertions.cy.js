class createNewCardAssertions {
  checkVisiblityOfTheCard() {
    cy.get('[data-testid ="card-name"]').should("be.visible");
  }
}

export default createNewCardAssertions;
