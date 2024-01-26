class createNewCardActions{
  
    clickOnAddCardIcon(){
   
    cy.get("[data-testid='list-footer'] > button").contains("Add a card").click();


    return this;


    }

    typeTitleForTheCard(cardTitle){

    cy.get('[placeholder="Enter a title for this card…"]').type(cardTitle);
         
    return this;

    }
    clickOnAddCardButton(){

    cy.contains("button","Add card").click();
    cy.wait(1000)
    return this;


    }


}

export default createNewCardActions