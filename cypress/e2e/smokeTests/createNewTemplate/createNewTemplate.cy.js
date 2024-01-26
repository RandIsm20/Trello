///<reference types="cypress" />

import createNewTemplateActions from "../../../pageObjects/createNewTemplate/actions.cy";
import createNewTemplateAssertions from "../../../pageObjects/createNewTemplate/assertions.cy";
import SharedActions from "../../../pageObjects/shared/actions.cy";
import SharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";

import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
const createNewTemplateAction = new createNewTemplateActions();
const sharedDataUtils = new SharedDataUtils();
const sharedActions = new SharedActions();
const createNewTemplateAssertion = new createNewTemplateAssertions();
const boardName = "Rand Board" + Math.floor(Math.random() * 100);
const tempName = "Rand Card";

beforeEach(() => {
  cy.loginTrello();
  sharedDataUtils.createNewBoard(boardName).as("boardResponse");
});

Given("navigate to the board page", () => {
  cy.get("@boardResponse").then((data) => {
    sharedActions.openBoard(data.body.url);
  });
});

When("click on a create from template icon", () => {
  createNewTemplateAction.clickOnCreateTempIcon();
});

And("click on create a new template button", () => {
  createNewTemplateAction.clickOnCreateTempButton();
});

And("type template title", () => {
  createNewTemplateAction.typeTempTitle(tempName);
});

And("click on add button", () => {
  createNewTemplateAction.clickOnAddButton();
});

And("click on close icon", () => {
  sharedActions.clickOnCloseIcon();
});

Then("card template created successfully", () => {
  createNewTemplateAssertion.checkTempCardVisiblity();
});

after(() => {
  cy.wait(6000);
  cy.get("@boardResponse").then((data) => {
    sharedDataUtils.deleteBoard(data.body.id);
  
  });
});
