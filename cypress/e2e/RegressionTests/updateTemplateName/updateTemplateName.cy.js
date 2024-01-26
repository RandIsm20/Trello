/// <reference types="cypress" />
import SharedActions from "../../../pageObjects/shared/actions.cy";
import SharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";

import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import updateTempNameActions from "../../../pageObjects/updateTemplateName/actions.cy";
import updateTemplateNameAssertions from "../../../pageObjects/updateTemplateName/assertions.cy";


const sharedDataUtils = new SharedDataUtils();
const sharedActions = new SharedActions();
const updateTempNameAction = new updateTempNameActions();
const updateTempNameAssertion=new updateTemplateNameAssertions();
const boardName = "Rand Board" + Math.floor(Math.random() * 100);
const newTempName = "QA";

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


  When("click on the card template name",()=>{

    sharedActions.clickOnCardTempName();
  })

  And("modify card template name",()=>{

  updateTempNameAction.modifyCardTempName(newTempName)

  })

  And("click on close icon",()=>{
  sharedActions.clickOnCloseIcon();

  })

  Then("the card template name updated successfully",()=>{

    updateTempNameAssertion.checkNewTempName(newTempName);

    
  })

  after(()=>{
   
    cy.get("@boardResponse").then((data) => {
       sharedDataUtils.deleteBoard(data.body.id);
       cy.wait(6000);
       }
       )
       })

