Feature: Benefits Dashboard
  As an Employer, I want to input my employee data so that I can get a preview of benefit costs.

  Background:
    Given user goes to "/login.html" page
    Then user is taken to the "Login" page
    When user enters "testUser" into the "Username" field
    And user enters "Test1234" into the "Password" field
    And user clicks on the "Login" button
    Then user is taken to the "Benefits Dashboard" page

  @Add
  Scenario Outline: Add Employee
    Given user clicks on the "Add Employee" button
    And user waits for modal to appear
    When user enters "<firstName>" into the "First Name" field
    And user enters "<lastName>" into the "Last Name" field
    And user enters "<dependents>" into the "Dependents" field
    And user clicks on the "Submit" button
    Then user validates that employee is added in row 2 of the table
    And user validates that the benefit cost calculation is correct

    Examples:
      | firstName | lastName | dependents |
      | Jorge     | Lopez    | 3          |
      | Arriane   | Arellano | 3          |

  @Add
  Scenario Outline: Add Employee with Discount
    Given user clicks on the "Add Employee" button
    And user waits for modal to appear
    When user enters "<firstName>" into the "First Name" field
    And user enters "<lastName>" into the "Last Name" field
    And user enters "<dependents>" into the "Dependents" field
    And user clicks on the "Submit" button
    Then user validates that employee is added in row 2 of the table
    And the employee has a 10% discount
    And user validates that the benefit cost calculation is correct

    Examples:
      | firstName | lastName | dependents |
      | Jorge     | Lopez    | 3          |
      | Arriane   | Arellano | 3          |

  @Edit
  Scenario: Edit Employee
    Given user clicks on the "Edit Employee" button
    And user waits for modal to appear
    When user enters "Jerry" into the "First Name" field
    And user enters "Lang" into the "Last Name" field
    And user enters "1" into the "Dependents" field
    And user clicks on the "Submit" button
    Then user validates that employee is edited in row 1 of the table

  @Delete
  Scenario: Delete Employee
    Given user clicks on the "Delete Employee" button
    Then user validates employee is deleted