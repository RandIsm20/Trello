class createNewTemplateAssertions {
  checkTempCardVisiblity() {
    cy.get("[data-testid='card-name']").should("be.visible");
  }
}

export default createNewTemplateAssertions;
