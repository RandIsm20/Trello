class createNewTemplateActions {
  clickOnCreateTempIcon() {
    cy.get("#board [data-testid='card-template-list-button']").eq(0).click();
    cy.wait(1000);
    return this;
  }

  clickOnCreateTempButton() {
    cy.get("[data-testid='create-new-template-card-button']").click();
    cy.wait(1000);
    return this;
  }

  typeTempTitle(tempName) {
    cy.get("[data-testid='create-template-card-composer']").type(tempName);
    return this;
  }

  clickOnAddButton() {
    cy.get("[data-testid='new-template-card-submit-button']").click();
    return this;
  }
}

export default createNewTemplateActions;
