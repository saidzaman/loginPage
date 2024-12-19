const locators = require("./login_page_locator.js");

// This is Page File. A Page File encapsulates all the interactions that can be performed 
// on a specific page of your application. The Page file will contain
// locators (not the implementation of locators), functions and assertions wherever needed

exports.goToLoginPage = () => {
  cy.visit("/");
  cy.contains(locators.login_with_password).click();
}

exports.verifyUserIsInSignInPage = () => {
  cy.get(locators.signin_button).should('exist');
}

exports.enterCredential = () => {
  cy.get(locators.login_id).shadow().find(locators.login_input_id_field).click({ position: 'top' }).type('szaman1@example.com');
  cy.get(locators.login_password).shadow().find(locators.login_input_password_field).click({ position: 'top' }).type('fake_password');
}

exports.errorMessageShown = () => {
  cy.get(locators.error_message_alert).should('contain.text', 'The email address and/or password you specified are not correct.');
}

exports.signIn = () => {
  cy.get(locators.signin_button).shadow().find(locators.signin_submit).click({ position: 'top' });
}

exports.clickForgotPassword = () => {
  cy.get(locators.forgot_password_id).click();
}

exports.clickResetPassword = () => {
  cy.get(locators.reset_password_email).shadow().find(locators.reset_password_email_input).click({ position: 'top' }).type('qa@example.com');
  cy.get(locators.reset_password_button).shadow().find(locators.reset_button_submit).click({ position: 'top' });
}

exports.verifyEmailSentMessage = () => {
  cy.contains(locators.reset_message_alert).should('exist');
}
