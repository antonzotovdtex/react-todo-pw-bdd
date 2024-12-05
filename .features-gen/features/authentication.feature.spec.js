/** Generated from: features/authentication.feature */
import { test } from "playwright-bdd";

test.describe("User Authentication", () => {

  test("User logs in and logs out", async ({ Given, page, When, Then }) => {
    await Given("a user is on the login page", null, { page });
    await When("the user logs in with valid credentials", null, { page });
    await Then("the user should see the welcome message", null, { page });
    await When("the user clicks the sign out button", null, { page });
    await Then("the user should be redirected to the login page", null, { page });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use("features/authentication.feature"),
  $bddFileMeta: ({}, use) => use(bddFileMeta),
});

const bddFileMeta = {
  "User logs in and logs out": {"pickleLocation":"4:1"},
};