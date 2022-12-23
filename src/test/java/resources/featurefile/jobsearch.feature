Feature:  Job Search Test
  As a user I would like to do job search in to CV Library website

  @smoke
  @regression
  Scenario Outline: verify Job Search Result Using Different Data Set
    Given I am on Homepage
    When I accept I frame alert
    And I enter Job Title "<jobTitle>"
    And I enter Location "<location>"
    And I select distance "<distance>"
    And I click on more search option link
    And I enter Min salary "<salaryMin>"
    And I enter Maximum salary "<salaryMax>"
    And I select salary type "<salaryType>"
    And I select job type "<jobType>"
    And I click on fin job button
    Then I verify results "<results>"
    Examples:
   | jobTitle          | location    | distance       | salaryMin  | salaryMax  | salaryType  | jobType   | results                                          |
   | Tester            | Harrow      | up to 5 miles  | 30000      | 50000      | Per annum   | Permanent | Permanent Tester jobs in Harrow on the Hill      |
   | Tester            | Edgware     | up to 5 miles  | 40000      | 50000      | Per annum   | Permanent | Permanent Tester jobs in Edgware                 |
   | Test Engineer     | Kingswood   | up to 10 miles | 30000      | 40000      | Per annum   | Permanent | Permanent Test Engineer jobs in Kingswood        |
   | Test Manager      | Newport     | up to 10 miles | 60000      | 70000      | Per annum   | Permanent | Permanent Test Manager jobs in Newport           |
   | Accountant        | Hammersmith | up to 15 miles | 50000      | 60000      | Per annum   | Permanent | Permanent Accountant jobs in Hammersmith         |
   | Finance Assistant |King's Cross | up to 5 miles  | 30000      | 40000      | Per annum   | Permanent | Permanent Finance Assistant jobs in King's Cross |

