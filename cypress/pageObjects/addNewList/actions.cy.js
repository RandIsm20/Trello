class addNewListActions{

clickOnAddAnotherListIcon() {

cy.get("[data-testid='list-composer-button']").click();

return this;

    }

    typeTitleForTheList(listName){

cy.get('[name="Enter list title…"]').clear().type(listName);

    }

clickOnAddListButton() {
cy.get('[data-testid="list-composer-add-list-button"]').click();
cy.wait(1000)
return this;


}

}
export default addNewListActions;