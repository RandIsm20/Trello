/// <reference types="cypress" />
import SharedActions from "../../../pageObjects/shared/actions.cy";
import SharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";

import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import updateTempNameActions from "../../../pageObjects/updateTemplateName/actions.cy";
import updateTemplateNameAssertions from "../../../pageObjects/updateTemplateName/assertions.cy";
import moveCardTemplateActions from "../../../pageObjects/moveCardTemplate/actions.cy";
import moveCardTemplateAssertions from "../../../pageObjects/moveCardTemplate/assertions.cy";

const sharedDataUtils = new SharedDataUtils();
const sharedActions = new SharedActions();
const moveCardTemplateAction=new moveCardTemplateActions();
const moveCardTemplateAssertion=new moveCardTemplateAssertions();
const boardName = "Rand Board" + Math.floor(Math.random() * 100);
const tempName="Rand Card";

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


  When("click on a card template name",()=>{

    sharedActions.clickOnCardTempName();
  })

  And("click on move button",()=>{

  moveCardTemplateAction.clickOnMoveButton();

  })

  And("select list destenation",()=>{
  moveCardTemplateAction.selectListDestenation();

  })

  And("confirm move card template",()=>{

    moveCardTemplateAction.confirmMoveCard();


  })


  And("click on close icon",()=>{

    sharedActions.clickOnCloseIcon();
  })

  Then("the card template name moved successfully",()=>{

    moveCardTemplateAssertion.checkMoveCardTemp(tempName);

    
  })

  after(()=>{
   
    cy.get("@boardResponse").then((data) => {
       sharedDataUtils.deleteBoard(data.body.id);
       cy.wait(6000);
       }
       )
       })


