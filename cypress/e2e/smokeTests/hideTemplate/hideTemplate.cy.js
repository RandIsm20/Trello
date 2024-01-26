/// <reference types="cypress" />
import SharedActions from "../../../pageObjects/shared/actions.cy";
import SharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";
import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import hideTemplateActions from "../../../pageObjects/hideTemplate/actions.cy";
import hideTemplateAssertions from "../../../pageObjects/hideTemplate/assertions.cy";

const sharedDataUtils = new SharedDataUtils();
const sharedActions = new SharedActions();
const hideTemplateAction = new hideTemplateActions();
const hideTemplateAsertion = new hideTemplateAssertions();
const boardName = "Rand Board" + Math.floor(Math.random() * 100);

beforeEach(() => {
  cy.loginTrello();

  sharedDataUtils.createNewBoard(boardName).as("boardResponse");
  cy.get("@boardResponse").then((data) => {
    sharedDataUtils.getLists(data.body.id).as("listResponse");
  });

  cy.get("@listResponse").then((data) => {
    sharedDataUtils.createTemp(data.body[0].id);
  });
});
Given("navigate to the board page", () => {
  cy.get("@boardResponse").then((data) => {
    sharedActions.openBoard(data.body.url);
  });
});

When("click on a card template name", () => {
  sharedActions.clickOnCardTempName();
});

And("click on Archive button", () => {
  hideTemplateAction.clickOnArchiveButton();
});

And("click on close icon", () => {
  sharedActions.clickOnCloseIcon();
});

Then("card template hided successfully", () => {
  hideTemplateAsertion.checkCardHided();
});

after(() => {
  cy.get("@boardResponse").then((data) => {
    sharedDataUtils.deleteBoard(data.body.id);
    cy.wait(6000);
  });
});
