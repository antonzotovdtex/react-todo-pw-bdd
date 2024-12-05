# features/authentication.feature
Feature: User Authentication

Scenario: User logs in and logs out
  Given a user is on the login page
  When the user logs in with valid credentials
  Then the user should see the welcome message

  When the user clicks the sign out button
  Then the user should be redirected to the login page