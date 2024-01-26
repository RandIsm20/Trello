class updateListNameAssertions {
  checkListNameisUpdated(ListsName) {
    for (let i = 0; i<3;i++) {
     cy.get('#board [data-testid="list-wrapper"]').find('[data-testid="list-name-textarea"]').eq(i).should("contain",ListsName[i])
      
  }}}
    // cy.get('#board [data-testid="list-wrapper"]').find('[data-testid="list-name-textarea"]').eq(0).should("contain",ListsName[0])
    // cy.get('#board [data-testid="list-wrapper"]').find('[data-testid="list-name-textarea"]').eq(1).should("contain",ListsName[1])
    // cy.get('#board [data-testid="list-wrapper"]').find('[data-testid="list-name-textarea"]').eq(2).should("contain",ListsName[2])

export default updateListNameAssertions;
