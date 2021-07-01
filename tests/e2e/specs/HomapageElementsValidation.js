import HomePage from '../PageObject/HomePage';
const homePage = new HomePage();


describe('Homapage elements validation', function () {

  it('User should not be able to sign in without course selection', function () {
    cy.visit("http://localhost:8087/");

    homePage.getWelcomeLabel().should('have.text', "Welcome to the VitalSmarts QA Test");

    homePage.getTestButton().should('have.text', "QA Test");


    homePage.getHomeButton().should('have.text', "Home");

  })

})
