# some general info about tests

For this test BaseURL is in cypress config file

As requested - We covered following generic cases

1) Select "Login with Password" on the welcome page
2) Attempt login with incorrect credentials (If you try to login with same email too many times - the account might get locked. In that case, change the email in the code and run it again. In a practical use case, we may opt to use a random email address to avoid this issue entirely.)
3) Verify error message for incorrect login
4) Test "Forgot Password" functionality

check the feature file to see all the test cases.

# Relevant files

1) login.feature (feature file)
2) login.js (Step Definition File)
3) login_page (Page File)
4) login_page_locator (relevant locators)
5) cypress.config.js (Configuration file)
6) mochawesome report (report of all the tests)

# Technology Used

Cypress automation framework with cucumber 

# Set up and execution

1. Clone the repository
2. Go to the folder that you created for the repository and run `npm install`
3. Run `npx cypress run`

