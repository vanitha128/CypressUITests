//Create URL page
/// <reference types="cypress" />
export class BitlyCreateURL{
  destinationUrlTestBox(){
  return cy.get('.destination-url-input > .orb-input-field > [data-test="input-field"]');
  }
  createButton(){
    return cy.get('#create-link-cta');
    }
  getShortenedUrl(sourceURL: string){
    // const hrefValue = "https://www.google.com92/";
    const hrefValue = sourceURL;
    cy.get(`a[href='${hrefValue}']`).invoke('text').then((linkText)=> {
      return linkText;
    });
}
  }
  
 