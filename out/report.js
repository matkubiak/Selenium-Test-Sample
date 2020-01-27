$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("google-text-search.feature");
formatter.feature({
  "line": 1,
  "name": "Google search",
  "description": "",
  "id": "google-search",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "user can search any keyword",
  "description": "",
  "id": "google-search;user-can-search-any-keyword",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "an open browser with google.com",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "a keyword selenium is entered in input field",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "the first one should contain selenium",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "GoogleSearch.openGoogleSearch()"
});
formatter.result({
  "duration": 12055248200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "selenium",
      "offset": 10
    }
  ],
  "location": "GoogleSearch.enterKeyword(String)"
});
formatter.result({
  "duration": 1533712500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "selenium",
      "offset": 29
    }
  ],
  "location": "GoogleSearch.theFirstOneShouldContainKeyword(String)"
});
formatter.result({
  "duration": 241400,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.closeBrowser()"
});
formatter.result({
  "duration": 782972500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "",
  "description": "",
  "id": "google-search;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "an open browser with google.com",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "a keyword \u003ckeyword\u003e is entered in input field",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the first one should contain \u003cexpectedWord\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "close browser",
  "keyword": "And "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "google-search;;",
  "rows": [
    {
      "cells": [
        "keyword",
        "expectedWord"
      ],
      "line": 19,
      "id": "google-search;;;1"
    },
    {
      "cells": [
        "Karol",
        "Karol"
      ],
      "line": 20,
      "id": "google-search;;;2"
    },
    {
      "cells": [
        "Jacek",
        "Jacek"
      ],
      "line": 21,
      "id": "google-search;;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "",
  "description": "",
  "id": "google-search;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "an open browser with google.com",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "a keyword Karol is entered in input field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the first one should contain Karol",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "GoogleSearch.openGoogleSearch()"
});
formatter.result({
  "duration": 10633372400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Karol",
      "offset": 10
    }
  ],
  "location": "GoogleSearch.enterKeyword(String)"
});
formatter.result({
  "duration": 1971825400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Karol",
      "offset": 29
    }
  ],
  "location": "GoogleSearch.theFirstOneShouldContainKeyword(String)"
});
formatter.result({
  "duration": 82100,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.closeBrowser()"
});
formatter.result({
  "duration": 1009072500,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "",
  "description": "",
  "id": "google-search;;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "an open browser with google.com",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "a keyword Jacek is entered in input field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the first one should contain Jacek",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "location": "GoogleSearch.openGoogleSearch()"
});
formatter.result({
  "duration": 10527451500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jacek",
      "offset": 10
    }
  ],
  "location": "GoogleSearch.enterKeyword(String)"
});
formatter.result({
  "duration": 1653187300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jacek",
      "offset": 29
    }
  ],
  "location": "GoogleSearch.theFirstOneShouldContainKeyword(String)"
});
formatter.result({
  "duration": 173800,
  "status": "passed"
});
formatter.match({
  "location": "GoogleSearch.closeBrowser()"
});
formatter.result({
  "duration": 716724100,
  "status": "passed"
});
});