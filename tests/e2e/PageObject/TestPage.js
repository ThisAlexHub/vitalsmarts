class TestPage {

  getSignUpLabel() {
    return cy.get('body > div > div:nth-child(2) > form > legend');
  }


  getFullNameInput() {
    return cy.get('#form-stacked-text');
  }

  getCourseSelectionOptions() {
    return cy.get('#course-select');
  }

  getAgreeCheckBox() {
    return cy.get('body > div > div:nth-child(2) > form > div.uk-margin.uk-grid-small.uk-child-width-auto.uk-grid > label > input');
  }

  getSubmitButton() {
    return cy.get('body > div > div:nth-child(2) > form > div:nth-child(6) > input');
  }


}
export default TestPage;