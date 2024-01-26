class SharedActions {
  openBoard(url) {
    cy.visit(url);
    return this;
  }
  clickOnCardTempName() {
    cy.get("[data-testid='trello-card']").click();
    cy.wait(1000);
    return this;
  }
  clickOnCloseIcon() {
    cy.get(".js-close-window").click();
    cy.wait(6000);
    return this;
  }
}

export default SharedActions;
