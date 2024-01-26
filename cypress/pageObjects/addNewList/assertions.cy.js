class addNewListAssertions {
    // methods needed for assertions in login page 
    checkVisiblityOfTheList(listName) {
       /// cy.get(".mKJWg6W_CLHoiO .KLvU2mDGTQrsWG").contains(listName).should("contain",listName)

     cy.get('[data-testid="list"]').eq(3).contains(listName).should("be.visible")

      }
    
    }
  
  export default addNewListAssertions;