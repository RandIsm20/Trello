class deleteCardAssertions{

    checkCardisDeleted(){
    cy.get("[data-testid='list-cards']").eq(0).should("be.empty")


    }


}
export default deleteCardAssertions;