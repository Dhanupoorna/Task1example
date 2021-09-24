$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/Login.Feature");
formatter.feature({
  "name": "Verfying Adactin details",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "verifying the Login Functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user is on the adactin page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefination.user_is_on_the_adactin_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter username and password",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_should_enter_username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify succues method",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_should_verify_succues_method()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verfying signup functionaliy",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity,"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "name": "user is the adactin page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefination.user_is_the_adactin_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter firstname  and lastname and password and confirm password",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_should_enter_firstname_and_lastname_and_password_and_confirm_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify success message",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_should_verify_success_message()"
});
formatter.result({
  "status": "passed"
});
});