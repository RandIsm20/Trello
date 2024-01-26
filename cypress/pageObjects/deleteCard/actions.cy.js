class deleteCardActions{

    clickOnCardName(){
        cy.get("[data-testid='trello-card']").click();
        cy.wait(1000);
        return this;

    }

clickOnArchiveButton(){
    cy.get(".button-link [title='Archive']").click();
    cy.wait(6000);
    return this;
}

clickOnDeleteButton(){
    cy.get("[title='Delete']").click();
    return this;

}

confirmDeleteCard(){
    cy.get(".no-back [type='submit']").click();
    cy.wait(1000);
    return this;

}
}

export default deleteCardActions;

  


  
  
  
  