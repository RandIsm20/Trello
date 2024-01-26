// <reference types="cypress" /> 
import addNewListActions from "../../../pageObjects/addNewList/actions.cy";
import addNewListAssertions from "../../../pageObjects/addNewList/assertions.cy";
import SharedActions from "../../../pageObjects/shared/actions.cy";
import SharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";

import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

const sharedDataUtils = new SharedDataUtils();
const sharedActions = new SharedActions();
const addNewListAction = new addNewListActions();
const addNewListAssertion=new addNewListAssertions();
const  boardName= 'Rand Board'+Math.floor(Math.random()*100);
const listName="To Do";

beforeEach(()=>{
   
  
    cy.loginTrello();
 
    sharedDataUtils.createNewBoard(boardName).as('boardResponse');

    });
 
  Given("navigate to the board page",() => {
  
 cy.get("@boardResponse").then((data) => {
  sharedActions.openBoard(data.body.url);
  cy.screenshot({capture:"fullPage"});
  cy.wait(3000);
 })
 
  })


  When("click on a add another list plus icon",()=>{

    addNewListAction.clickOnAddAnotherListIcon();

  })

  When("type title for the list",()=>{

  addNewListAction.typeTitleForTheList(listName);
 
  })
  
  When("click on add list button",()=>{

    addNewListAction.clickOnAddListButton();
  })

  Then("the list created successfully",()=>{

   addNewListAssertion.checkVisiblityOfTheList(listName);
  })


  after(()=>{
   
    cy.get("@boardResponse").then((data) => {
    sharedDataUtils.deleteBoard(data.body.id);
    cy.wait(6000);
    }
    )
    })