class updateListNameAssertions {
  checkListNameisUpdated(ListsName) {
    for (let i = 0; i < 3; i++) {
      cy.get('#board [data-testid="list-wrapper"]')
        .find('[data-testid="list-name-textarea"]')
        .eq(i)
        .should("contain", ListsName[i]);
    }
  }
}

export default updateListNameAssertions;
