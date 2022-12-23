package uk.co.library.cucumber.steps;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import uk.co.library.pages.HomePage;
import uk.co.library.pages.ResultPage;

public class JobSearchSteps {
    @Given("^I am on Homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I accept I frame alert$")
    public void iAcceptIFrameAlert() throws InterruptedException {
        Thread.sleep(5000);
        new HomePage().acceptIFrameAlert();
    }

    @And("^I enter Job Title \"([^\"]*)\"$")
    public void iEnterJobTitle(String jobTitle) throws InterruptedException {
        Thread.sleep(2000);
        new HomePage().enterJobTitle(jobTitle);

    }

    @And("^I enter Location \"([^\"]*)\"$")
    public void iEnterLocation(String location)  {
        new HomePage().enterLocation(location);
    }

    @And("^I select distance \"([^\"]*)\"$")
    public void iSelectDistance(String distance)  {
        new HomePage().selectDistance(distance);
    }

    @And("^I click on more search option link$")
    public void iClickOnMoreSearchOptionLink() {
        new HomePage().clickOnMoreSearchOptionLink();
    }

    @And("^I enter Min salary \"([^\"]*)\"$")
    public void iEnterMinSalary(String salaryMin)  {
        new HomePage().enterMinSalary(salaryMin);
    }

    @And("^I enter Maximum salary \"([^\"]*)\"$")
    public void iEnterMaximumSalary(String salaryMax)  {
        new HomePage().enterMaxSalary(salaryMax);
    }

    @And("^I select salary type \"([^\"]*)\"$")
    public void iSelectSalaryType(String salaryType)  {
        new HomePage().selectSalaryType(salaryType);
    }

    @And("^I select job type \"([^\"]*)\"$")
    public void iSelectJobType(String jobType)  {
        new HomePage().selectJobType(jobType);
    }

    @And("^I click on fin job button$")
    public void iClickOnFinJobButton() {
        new HomePage().clickOnFindJobsButton();
    }

    @Then("^I verify results \"([^\"]*)\"$")
    public void iVerifyResults(String result)  {
        new ResultPage().verifyTheResults(result);
    }
}
