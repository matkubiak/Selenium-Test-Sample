$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/Cucumber/Features/BDD.feature");
formatter.feature({
  "line": 1,
  "name": "Change user information after login",
  "description": "",
  "id": "change-user-information-after-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Change user birthday date, gender and sign up for a newsletter",
  "description": "",
  "id": "change-user-information-after-login;change-user-birthday-date,-gender-and-sign-up-for-a-newsletter",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User is logged in to CodersLab shop",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User goes to UserInformationPage",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User signs up for our newsletter",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User saves information",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User sees \"Information successfully updated.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ChangeUserInfoSteps.userIsLooggedInToCodersLabShop()"
});
formatter.result({
  "duration": 15501588900,
  "status": "passed"
});
formatter.match({
  "location": "ChangeUserInfoSteps.userGoesToUserInformationPage()"
});
formatter.result({
  "duration": 979604800,
  "status": "passed"
});
formatter.match({
  "location": "ChangeUserInfoSteps.userSignsUpForOurNewsletter()"
});
formatter.result({
  "duration": 33868700,
  "status": "passed"
});
formatter.match({
  "location": "ChangeUserInfoSteps.userSavesInformation()"
});
formatter.result({
  "duration": 1104912200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Information successfully updated.",
      "offset": 11
    }
  ],
  "location": "ChangeUserInfoSteps.userSees(String)"
});
formatter.result({
  "duration": 703123900,
  "status": "passed"
});
});