//Login page
/// <reference types="cypress" />
export class BitlyLogin{
  userEmail(){
  return cy.get('#sign-in > .susi-fields-wrapper > fieldset > [type="text"]');
  }
  password(){
    return cy.get('#sign-in > .susi-fields-wrapper > fieldset > .pw');
    }
  loginButton(){
   return cy.get('#sign-in > .susi-fields-wrapper > fieldset > .button');
   }
   
 }