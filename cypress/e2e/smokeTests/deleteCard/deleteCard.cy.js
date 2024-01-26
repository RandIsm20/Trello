// <reference types="cypress" />

import deleteCardActions from "../../../pageObjects/deleteCard/actions.cy";
import deleteCardAssertions from "../../../pageObjects/deleteCard/assertions.cy";
import SharedActions from "../../../pageObjects/shared/actions.cy";
import SharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";

import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const sharedDataUtils = new SharedDataUtils();
const sharedActions = new SharedActions();
const deleteCardAction = new deleteCardActions();
const deleteCardAssertion= new deleteCardAssertions();
const boardName = "Rand Board" + Math.floor(Math.random() * 100);
const cardTitle = "Rand Card";

beforeEach(() => {
  cy.loginTrello();

  sharedDataUtils.createNewBoard(boardName).as("boardResponse");
  cy.get("@boardResponse").then((data) => {
    sharedDataUtils.getLists(data.body.id).as("listResponse");
  });

  cy.get("@listResponse").then((data) => {
    sharedDataUtils.createCard(data.body[0].id);
  });
});

Given("navigate to the board page", () => {
  cy.get("@boardResponse").then((data) => {
    sharedActions.openBoard(data.body.url);
  });
});

Given("click on card name", () => {
deleteCardAction.clickOnCardName();
  // cy.get('[data-testid ="card-name"]').should("not.be.visible");
});

When("click on a Archive", () => {
deleteCardAction.clickOnArchiveButton();
});

When("click on delete", () => {
 deleteCardAction.clickOnDeleteButton();

});

When("confirm delete card", () => {
 deleteCardAction.confirmDeleteCard();
});

 Then("the card deleted successfully",()=>{
  deleteCardAssertion.checkCardisDeleted();
 

})

after(()=>{
   
  cy.get("@boardResponse").then((data) => {
  sharedDataUtils.deleteBoard(data.body.id);
  cy.wait(6000);
  }
  )
  })