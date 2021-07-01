class HomePage {

  getTestButton() {
    return cy.get('body > div > div.uk-container.uk-margin-bottom > a:nth-child(2)');
  }

  getHomeButton() {
    return cy.get('body > div > div.uk-container.uk-margin-bottom > a.router-link-exact-active.router-link-active');
  }

  getWelcomeLabel() {
    return cy.get('body > div > div:nth-child(2) > h1');
  }

  getParagraph() {
    return cy.get('body > div > div:nth-child(2) > div > p');
  }




}
export default HomePage;