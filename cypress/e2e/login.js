const { When, Then, Given } = require("@badeball/cypress-cucumber-preprocessor");
const login_page = require("./login_page.js"); 

//This is step definition file. The purpose of the step definition file is to map the 
//natural language steps in the feature file to executable code. In this case it is mapping
//all the steps in the login.feature file. The benefit of step definition file is that
//it centralizes the actions that should happen for each step. This helps with reusability and
//and maintainability.

Given("I click on login with a password in the welcome page", () => {
  login_page.goToLoginPage();
});

Then("I am redirected to Sign In Page", () => {
  login_page.verifyUserIsInSignInPage();
});

Then("I attempt to login with incorrect login", () => {
  login_page.enterCredential();
  login_page.signIn();
});

Then("it should display error message for incorrect login", () => {
  login_page.errorMessageShown();
});

Then("I click on Forgot password", () => {
  login_page.clickForgotPassword();
});

Then("I type the email where password will be sent and click reset password", () => {
  login_page.clickResetPassword();
});

Then("it should display that text that email was sent", () => {
  login_page.verifyEmailSentMessage();
});