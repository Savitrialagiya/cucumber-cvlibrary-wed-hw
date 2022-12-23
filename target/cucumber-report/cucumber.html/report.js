$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("jobsearch.feature");
formatter.feature({
  "line": 1,
  "name": "Job Search Test",
  "description": "As a user I would like to do job search in to CV Library website",
  "id": "job-search-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "verify Job Search Result Using Different Data Set",
  "description": "",
  "id": "job-search-test;verify-job-search-result-using-different-data-set",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I accept I frame alert",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter Job Title \"\u003cjobTitle\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter Location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select distance \"\u003cdistance\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on more search option link",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter Min salary \"\u003csalaryMin\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter Maximum salary \"\u003csalaryMax\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select salary type \"\u003csalaryType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select job type \"\u003cjobType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on fin job button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify results \"\u003cresults\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "job-search-test;verify-job-search-result-using-different-data-set;",
  "rows": [
    {
      "cells": [
        "jobTitle",
        "location",
        "distance",
        "salaryMin",
        "salaryMax",
        "salaryType",
        "jobType",
        "results"
      ],
      "line": 20,
      "id": "job-search-test;verify-job-search-result-using-different-data-set;;1"
    },
    {
      "cells": [
        "Tester",
        "Harrow",
        "up to 5 miles",
        "30000",
        "50000",
        "Per annum",
        "Permanent",
        "Permanent Tester jobs in Harrow on the Hill"
      ],
      "line": 21,
      "id": "job-search-test;verify-job-search-result-using-different-data-set;;2"
    },
    {
      "cells": [
        "Tester",
        "Edgware",
        "up to 5 miles",
        "40000",
        "50000",
        "Per annum",
        "Permanent",
        "Permanent Tester jobs in Edgware"
      ],
      "line": 22,
      "id": "job-search-test;verify-job-search-result-using-different-data-set;;3"
    },
    {
      "cells": [
        "Test Engineer",
        "Kingswood",
        "up to 10 miles",
        "30000",
        "40000",
        "Per annum",
        "Permanent",
        "Permanent Test Engineer jobs in Kingswood"
      ],
      "line": 23,
      "id": "job-search-test;verify-job-search-result-using-different-data-set;;4"
    },
    {
      "cells": [
        "Test Manager",
        "Newport",
        "up to 10 miles",
        "60000",
        "70000",
        "Per annum",
        "Permanent",
        "Permanent Test Manager jobs in Newport"
      ],
      "line": 24,
      "id": "job-search-test;verify-job-search-result-using-different-data-set;;5"
    },
    {
      "cells": [
        "Accountant",
        "Hammersmith",
        "up to 15 miles",
        "50000",
        "60000",
        "Per annum",
        "Permanent",
        "Permanent Accountant jobs in Hammersmith"
      ],
      "line": 25,
      "id": "job-search-test;verify-job-search-result-using-different-data-set;;6"
    },
    {
      "cells": [
        "Finance Assistant",
        "King\u0027s Cross",
        "up to 5 miles",
        "30000",
        "40000",
        "Per annum",
        "Permanent",
        "Permanent Finance Assistant jobs in King\u0027s Cross"
      ],
      "line": 26,
      "id": "job-search-test;verify-job-search-result-using-different-data-set;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5808298400,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "verify Job Search Result Using Different Data Set",
  "description": "",
  "id": "job-search-test;verify-job-search-result-using-different-data-set;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I accept I frame alert",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter Job Title \"Tester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter Location \"Harrow\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select distance \"up to 5 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on more search option link",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter Min salary \"30000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter Maximum salary \"50000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select salary type \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select job type \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on fin job button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify results \"Permanent Tester jobs in Harrow on the Hill\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 173319300,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iAcceptIFrameAlert()"
});
formatter.result({
  "duration": 25194688300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 2094777800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harrow",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 51464700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 5 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 61077800,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptionLink()"
});
formatter.result({
  "duration": 58984700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iEnterMinSalary(String)"
});
formatter.result({
  "duration": 183074800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50000",
      "offset": 24
    }
  ],
  "location": "JobSearchSteps.iEnterMaximumSalary(String)"
});
formatter.result({
  "duration": 50047000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 64188800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 82823000,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFinJobButton()"
});
formatter.result({
  "duration": 81689200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Tester jobs in Harrow on the Hill",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iVerifyResults(String)"
});
formatter.result({
  "duration": 4917740800,
  "status": "passed"
});
formatter.after({
  "duration": 772250700,
  "status": "passed"
});
formatter.before({
  "duration": 3096659100,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "verify Job Search Result Using Different Data Set",
  "description": "",
  "id": "job-search-test;verify-job-search-result-using-different-data-set;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I accept I frame alert",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter Job Title \"Tester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter Location \"Edgware\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select distance \"up to 5 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on more search option link",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter Min salary \"40000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter Maximum salary \"50000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select salary type \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select job type \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on fin job button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify results \"Permanent Tester jobs in Edgware\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 21000,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iAcceptIFrameAlert()"
});
formatter.result({
  "duration": 25135781600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 2080115600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Edgware",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 60147700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 5 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 62612300,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptionLink()"
});
formatter.result({
  "duration": 54429000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iEnterMinSalary(String)"
});
formatter.result({
  "duration": 180445200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50000",
      "offset": 24
    }
  ],
  "location": "JobSearchSteps.iEnterMaximumSalary(String)"
});
formatter.result({
  "duration": 50816700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 47614500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 72652200,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFinJobButton()"
});
formatter.result({
  "duration": 85540700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Tester jobs in Edgware",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iVerifyResults(String)"
});
formatter.result({
  "duration": 3914448300,
  "status": "passed"
});
formatter.after({
  "duration": 695955700,
  "status": "passed"
});
formatter.before({
  "duration": 3205675400,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "verify Job Search Result Using Different Data Set",
  "description": "",
  "id": "job-search-test;verify-job-search-result-using-different-data-set;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I accept I frame alert",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter Job Title \"Test Engineer\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter Location \"Kingswood\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select distance \"up to 10 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on more search option link",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter Min salary \"30000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter Maximum salary \"40000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select salary type \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select job type \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on fin job button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify results \"Permanent Test Engineer jobs in Kingswood\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 27600,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iAcceptIFrameAlert()"
});
formatter.result({
  "duration": 25109095400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Engineer",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 2094555600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kingswood",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 47312900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 10 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 52832600,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptionLink()"
});
formatter.result({
  "duration": 53918600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iEnterMinSalary(String)"
});
formatter.result({
  "duration": 185078200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40000",
      "offset": 24
    }
  ],
  "location": "JobSearchSteps.iEnterMaximumSalary(String)"
});
formatter.result({
  "duration": 58386400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 50684200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 68401400,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFinJobButton()"
});
formatter.result({
  "duration": 78107400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Test Engineer jobs in Kingswood",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iVerifyResults(String)"
});
formatter.result({
  "duration": 4734609600,
  "status": "passed"
});
formatter.after({
  "duration": 705070100,
  "status": "passed"
});
formatter.before({
  "duration": 3059597900,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "verify Job Search Result Using Different Data Set",
  "description": "",
  "id": "job-search-test;verify-job-search-result-using-different-data-set;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I accept I frame alert",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter Job Title \"Test Manager\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter Location \"Newport\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select distance \"up to 10 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on more search option link",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter Min salary \"60000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter Maximum salary \"70000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select salary type \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select job type \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on fin job button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify results \"Permanent Test Manager jobs in Newport\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 22800,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iAcceptIFrameAlert()"
});
formatter.result({
  "duration": 25139433100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Manager",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 2066426400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Newport",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 53336100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 10 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 52709900,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptionLink()"
});
formatter.result({
  "duration": 62674200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "60000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iEnterMinSalary(String)"
});
formatter.result({
  "duration": 177382000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "70000",
      "offset": 24
    }
  ],
  "location": "JobSearchSteps.iEnterMaximumSalary(String)"
});
formatter.result({
  "duration": 49562400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 44209600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 81992700,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFinJobButton()"
});
formatter.result({
  "duration": 79627500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Test Manager jobs in Newport",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iVerifyResults(String)"
});
formatter.result({
  "duration": 3235009900,
  "status": "passed"
});
formatter.after({
  "duration": 675884200,
  "status": "passed"
});
formatter.before({
  "duration": 2559870800,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "verify Job Search Result Using Different Data Set",
  "description": "",
  "id": "job-search-test;verify-job-search-result-using-different-data-set;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I accept I frame alert",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter Job Title \"Accountant\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter Location \"Hammersmith\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select distance \"up to 15 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on more search option link",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter Min salary \"50000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter Maximum salary \"60000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select salary type \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select job type \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on fin job button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify results \"Permanent Accountant jobs in Hammersmith\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 13700,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iAcceptIFrameAlert()"
});
formatter.result({
  "duration": 25168454400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Accountant",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 2086038100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hammersmith",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 64035100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 15 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 52739900,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptionLink()"
});
formatter.result({
  "duration": 62992600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iEnterMinSalary(String)"
});
formatter.result({
  "duration": 183594700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "60000",
      "offset": 24
    }
  ],
  "location": "JobSearchSteps.iEnterMaximumSalary(String)"
});
formatter.result({
  "duration": 51180100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 51484900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 65520900,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFinJobButton()"
});
formatter.result({
  "duration": 83296700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Accountant jobs in Hammersmith",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iVerifyResults(String)"
});
formatter.result({
  "duration": 5034928300,
  "status": "passed"
});
formatter.after({
  "duration": 677969400,
  "status": "passed"
});
formatter.before({
  "duration": 2967037600,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "verify Job Search Result Using Different Data Set",
  "description": "",
  "id": "job-search-test;verify-job-search-result-using-different-data-set;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I accept I frame alert",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter Job Title \"Finance Assistant\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter Location \"King\u0027s Cross\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select distance \"up to 5 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on more search option link",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter Min salary \"30000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter Maximum salary \"40000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select salary type \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select job type \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I click on fin job button",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I verify results \"Permanent Finance Assistant jobs in King\u0027s Cross\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 20900,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iAcceptIFrameAlert()"
});
formatter.result({
  "duration": 25097058100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Finance Assistant",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 2074083600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "King\u0027s Cross",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 52529700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 5 miles",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectDistance(String)"
});
formatter.result({
  "duration": 52312500,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnMoreSearchOptionLink()"
});
formatter.result({
  "duration": 61082500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 20
    }
  ],
  "location": "JobSearchSteps.iEnterMinSalary(String)"
});
formatter.result({
  "duration": 192982100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "40000",
      "offset": 24
    }
  ],
  "location": "JobSearchSteps.iEnterMaximumSalary(String)"
});
formatter.result({
  "duration": 49278100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 48684500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 69168500,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFinJobButton()"
});
formatter.result({
  "duration": 78691000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Finance Assistant jobs in King\u0027s Cross",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iVerifyResults(String)"
});
formatter.result({
  "duration": 2846424900,
  "status": "passed"
});
formatter.after({
  "duration": 671358000,
  "status": "passed"
});
});