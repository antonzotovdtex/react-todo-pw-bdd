# features/todo.feature
Feature: Todo Management

Scenario: User logs in, creates a todo, edits the todo, deletes the todo, and logs out
  Given a user is on the login page
  When the user logs in with valid credentials
  Then the user should see the welcome message

  When the user creates a new todo with title "New Todo"
  Then the user should see the todo with title "New Todo"

  When the user edits the todo with title "New Todo" to have title "Updated Todo"
  Then the user should see the todo with title "Updated Todo"

  When the user deletes the todo with title "Updated Todo"
  Then the user should not see the todo with title "Updated Todo"

  When the user clicks the sign out button
  Then the user should be redirected to the login page