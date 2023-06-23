import {BitlyLogin} from '../page-objects/bitly-login.page';
import {BitlyCreateURL} from '../page-objects/bitly-create-url.page'
const login = new BitlyLogin();
const createUrl = new BitlyCreateURL();

describe('url shortener', () => {
  it('login', () => {
    cy.visit('https://app.bitly.com/Bn6m56U9fvw/create/');

    login.userEmail().type('foryforx@gmail.com');
    login.password().type('ThisIsaTest');
    login.loginButton().click();

    const randomNumber = Math.floor(Math.random() * 1000); // Generate a random number
    const destinationUrl = `www.google.com${randomNumber}`; // Append the random number to circumvent error for duplicate url

    createUrl.destinationUrlTestBox().type(destinationUrl);
    createUrl.createButton().click();
    
    // const shortenedUrl = createUrl.getShortenedUrl(destinationUrl); // This is the shortened Url

    // With more time, we could add more validations like clicking on 
    // the shortened Url is taking the test to the same url as given as input by looking for some UI element in the page.

  })
})