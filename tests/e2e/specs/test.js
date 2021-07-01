import HomePage from '../PageObject/HomePage';
import TestPage from '../PageObject/TestPage';


const homePage = new HomePage();
const testPage = new TestPage();

beforeEach(() => {
  cy.visit("http://localhost:8080/");

  homePage.getTestButton().click();

  testPage.getSignUpLabel().should('have.text', "Sign Up for a course");

})



describe('User Sign in test', function () {


  it('User should be able to sign in with valid full name credentials and course 1 selection', function () {


    testPage.getFullNameInput().clear();
    testPage.getFullNameInput().type('Alex Sumak');
    testPage.getCourseSelectionOptions().select('Course 1');
    testPage.getAgreeCheckBox().click();
    testPage.getSubmitButton().click();

    homePage.getWelcomeLabel().should('have.text', "Welcome to the VitalSmarts QA Test");
  })


  it('User should be able to sign in with valid full name credentials and course 2 selection', function () {


    testPage.getFullNameInput().clear();
    testPage.getFullNameInput().type('Alex Sumak');
    testPage.getCourseSelectionOptions().select('Course 2');

    testPage.getAgreeCheckBox().click();
    testPage.getSubmitButton().click();

    homePage.getWelcomeLabel().should('have.text', "Welcome to the VitalSmarts QA Test");

  })

  it('User should not be able to sign in without full name', function () {


    testPage.getFullNameInput().clear();

    testPage.getCourseSelectionOptions().select('Course 2');

    testPage.getAgreeCheckBox().click();
    testPage.getSubmitButton().click();

    // shouldn't be able to sign up 

  })

  it('User should not be able to sign in without course selection', function () {


    testPage.getFullNameInput().clear();
    testPage.getFullNameInput().type('Alex Sumak');


    testPage.getAgreeCheckBox().click();
    testPage.getSubmitButton().click();

    // shouldn't be able to sign up 


  })

})


