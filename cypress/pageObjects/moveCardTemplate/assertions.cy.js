class moveCardTemplateAssertions {
  checkMoveCardTemp(tempName) {
    cy.get("[data-testid='list']").eq(1).should("contain", tempName);
  }
}

export default moveCardTemplateAssertions;
