Feature: Login tests

# The following line in the background clause that will be executed in every single scenario
# since it is common to all scenarios
Background:
    Given I click on login with a password in the welcome page

  #This handles scenario #1 in the instruction. Selecting 'Login with Password' leads to welcome page.
  #Note: Background clause above is being executed here.
  Scenario: Verify clicking on login with a password in welcome page leads to login page
    Then I am redirected to Sign In Page

  #This handles scenario #2 and #3 in the instruction. #2) Attempting to login with invalid credential
  #and 3) Verifying error message for incorrect login 
  Scenario: Verify that attempting to login with incorrect credential leads to error message
    Then I attempt to login with incorrect login
    Then it should display error message for incorrect login

  #This handles scenario #4 in the instruction. 4) Verifying 'forgot password' functionality.
  #Note: We are not testing the case where the email field is empty and invalid email address because the validation occurs at browser-level
  Scenario: Verify that clicking on 'forgot password' sends the email
    Then I click on Forgot password
    Then I type the email where password will be sent and click reset password
    Then it should display that text that email was sent

  