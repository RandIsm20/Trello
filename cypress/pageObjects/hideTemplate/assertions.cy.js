class hideTemplateAssertions{

checkCardHided(){

cy.get("[data-testid='list-cards']").eq(0).should("be.empty");
cy.wait(1000)
cy.get(".board-header [data-testid='OverflowMenuHorizontalIcon']").click();
cy.get("a").contains("Archived items").click();
cy.get("[data-testid='card-name']").should("be.visible");
   }
}

export default hideTemplateAssertions;