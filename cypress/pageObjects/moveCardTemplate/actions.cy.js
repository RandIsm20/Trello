class moveCardTemplateActions {
  clickOnMoveButton() {
    cy.get("[title='Move']").click();
  }

  selectListDestenation() {
    cy.get("[data-testid='move-card-popover-select-list-destination']").select(1);
 
  }

  confirmMoveCard() {
    cy.get("[data-testid='move-card-popover-move-button']").click();
  }
}

export default moveCardTemplateActions;
