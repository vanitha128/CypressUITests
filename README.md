# Description
* This is a cypress typescript test project developed for testing bitly happy case functionality
* This project uses page object pattern to avoid tests being too sensitive to UI changes.

To run the tests, goto project root directory and run "npx cypress run --spec="./cypress/e2e/bitlytest.cy.ts""

# Test cases included:
1. Convert a given url to a shortened bitly url.
# How to run
Prerequisite: 
1. Install NodeJS - https://nodejs.org/en/download
2. Install cypress 
```
npm install cypress --save-dev
```
3. Install typescript 
```
npm i typescript
```

test run command: 
```
npx cypress run --spec="./cypress/e2e/bitlytest.cy.ts"
```


# Test run results - 
See test run video available at cypress/videos/bitlytest.cy.ts.mp4
![Video](./cypress/videos/bitlytest.cy.ts.mp4)

- [ ] Include clicking link from the bitly page
- [ ] Include more cases like
  - Add same link twice to validate that error message is shown that this link has a short link already.
  - Deleting an existing link and trying to recreate for the same link again and this time it should not throw error.
  - Reaching the link limit for a particular account tier(like free tier) and validating the error message.
  - Entering an invalid email and validating that error message is shown.
  - Use an unverified email and try to hit the limit of number of links user can create and validate the error message in UI.
