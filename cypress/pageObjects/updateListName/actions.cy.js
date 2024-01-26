class updateListNameActions{

clickOnListNameAndModify(ListsName) {


    for (let i =0; i<3 ; i++){
        cy.get('#board [data-testid="list-wrapper"]').find('[data-testid="list-name-textarea"]').eq(i).click({force:true}).type(ListsName[i],"{enter}");
            
    
      }

  cy.wait(6000)
}


}

export default updateListNameActions;