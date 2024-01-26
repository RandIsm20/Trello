class updateTempNameActions {
  modifyCardTempName(newTempName) {
    cy.get(".mod-card-back-title")
      .click()
      .clear()
      .type(newTempName, { force: true });
    return this;
  }

  clickOnCloseIcon() {
    cy.get(".js-close-window").click();
    return this;
  }
}

export default updateTempNameActions;
