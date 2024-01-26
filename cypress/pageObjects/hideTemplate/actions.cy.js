class hideTemplateActions {


clickOnArchiveButton(){
cy.get("[title='Archive']").click()
cy.wait(6000);
return this;

}



}

export default hideTemplateActions;