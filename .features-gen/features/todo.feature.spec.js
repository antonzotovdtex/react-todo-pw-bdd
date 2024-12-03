/** Generated from: features/todo.feature */
import { test } from "playwright-bdd";

test.describe("Todo Management", () => {

  test("User logs in, creates a todo, edits the todo, deletes the todo, and logs out", async ({ Given, page, When, Then }) => {
    await Given("a user is on the login page", null, { page });
    await When("the user logs in with valid credentials", null, { page });
    await Then("the user should see the welcome message", null, { page });
    await When("the user creates a new todo with title \"New Todo\"", null, { page });
    await Then("the user should see the todo with title \"New Todo\"", null, { page });
    await When("the user edits the todo with title \"New Todo\" to have title \"Updated Todo\"", null, { page });
    await Then("the user should see the todo with title \"Updated Todo\"", null, { page });
    await When("the user deletes the todo with title \"Updated Todo\"", null, { page });
    await Then("the user should not see the todo with title \"Updated Todo\"", null, { page });
    await When("the user clicks the sign out button", null, { page });
    await Then("the user should be redirected to the login page", null, { page });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("features/todo.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "User logs in, creates a todo, edits the todo, deletes the todo, and logs out": {"pickleLocation":"4:1"},
};