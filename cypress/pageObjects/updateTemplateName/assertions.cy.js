class updateTemplateNameAssertions{

    checkNewTempName(newTempName){

 cy.get("[data-testid='trello-card']").should("contain",newTempName)
    }
}

export default updateTemplateNameAssertions;