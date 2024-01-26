/// <reference types="cypress" />

import createNewCardActions from "../../../pageObjects/createNewCard/actions.cy";
import createNewCardAssertions from "../../../pageObjects/createNewCard/assertions.cy";
import SharedActions from "../../../pageObjects/shared/actions.cy";
import SharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";

import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const sharedDataUtils = new SharedDataUtils();
const sharedActions = new SharedActions();
const createNewCardAction = new createNewCardActions();
const createNewCardAssertion = new createNewCardAssertions();
const boardName = "Rand Board" + Math.floor(Math.random() * 100);
const cardTitle = "Rand Card";

beforeEach(() => {
  cy.loginTrello();

  sharedDataUtils.createNewBoard(boardName).as("boardResponse");
});

Given("navigate to the board page", () => {
  cy.get("@boardResponse").then((data) => {
    sharedActions.openBoard(data.body.url);
  });
});

When("click on a add card plus icon", () => {
  createNewCardAction.clickOnAddCardIcon();
});

When("type title for the card", () => {
  createNewCardAction.typeTitleForTheCard(cardTitle);
});

When("click on add card button", () => {
  createNewCardAction.clickOnAddCardButton();
});

Then("the card created successfully", () => {
  createNewCardAssertion.checkVisiblityOfTheCard();
});

after(() => {
  cy.get("@boardResponse").then((data) => {
    sharedDataUtils.deleteBoard(data.body.id);
    cy.wait(6000);
  });
});
