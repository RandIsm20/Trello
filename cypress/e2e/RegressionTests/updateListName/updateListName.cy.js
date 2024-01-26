// <reference types="cypress" />

import SharedActions from "../../../pageObjects/shared/actions.cy";
import SharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import updateListNameActions from "../../../pageObjects/updateListName/actions.cy";
import updateListNameAssertions from "../../../pageObjects/updateListName/assertions.cy";

const sharedDataUtils = new SharedDataUtils();
const sharedActions = new SharedActions();
const updateListNameAction = new updateListNameActions();
const updateListNameAssertion = new updateListNameAssertions();
const boardName = "Rand Board" + Math.floor(Math.random() * 100);

const ListsName = ["Doing", "Done", "To Do"];
beforeEach(() => {
  cy.loginTrello();

  sharedDataUtils.createNewBoard(boardName).as("boardResponse");
});

Given("navigate to the board page", () => {
  cy.get("@boardResponse").then((data) => {
    sharedActions.openBoard(data.body.url);
  });
});

When("click on the list name and modify it", () => {
  updateListNameAction.clickOnListNameAndModify(ListsName);
});

Then("the list name updated", () => {
  updateListNameAssertion.checkListNameisUpdated(ListsName);
});

after(() => {
  cy.get("@boardResponse").then((data) => {
    sharedDataUtils.deleteBoard(data.body.id);
    cy.wait(6000);
  });
});
