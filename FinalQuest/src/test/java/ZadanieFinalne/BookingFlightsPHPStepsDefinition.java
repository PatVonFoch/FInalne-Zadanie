package ZadanieFinalne;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Instant;

public class BookingFlightsPHPStepsDefinition {
    WebDriver driver;
    WebDriverWait wait = new WebDriverWait(driver,10);


    @Given("an open PHP Travels page")
    public void anOpenPHPTravelsPage() {
        System.setProperty("webdriver.gecko.driver",
                    "src/test/resources/geckodriver");
        driver =new FirefoxDriver();
        driver.manage().window().maximize();
        driver.get("https://www.phptravels.net/demo/");
    }


    @When("^main page opened user clicks flights menu$")
    public void mainPageOpenedUserClicksFlightsMenu() {
        driver.findElement(By.cssSelector(".nav-tabs > li:nth-child(2) > a:nth-child(1)")).click();
    }

   @And("^user enters location from \"([^\"]*)\", location to \"([^\"]*)\",$")
   public void userEntersLocationFromLocationTo(String arg0, String arg1) throws Throwable {
        driver.switchTo().frame(0);
        WebElement PoleMiejscaWYlotu = driver.findElement(By.xpath("/html/body/div[5]/section/div[2]/div/div/div[2]/div[1]/div[1]/form/div[1]/div/div/div[2]/div/div/input"));
        PoleMiejscaWYlotu.click();

       //WebElement MiejsceWylotu = wait.until(ExpectedConditions.elementToBeClickable((By.id(""))));
       // MiejsceWylotu.clear();
       PoleMiejscaWYlotu.sendKeys(arg0);


        WebElement PoleMiejscaPrzylotu = driver.findElement(By.cssSelector(""));
        PoleMiejscaPrzylotu.click();
        WebElement MiejscePrzylotu = driver.findElement(By.xpath("/html/body/div[19]/div/input"));
        MiejscePrzylotu.clear();
        MiejscePrzylotu.sendKeys(arg1);
    }

    @And("^clicks ROUND TRIP,$")
    public void clicksROUNDTRIP() {
        WebElement tripTypeRadio = driver.findElement(By.className("checkbox triptype"));
        tripTypeRadio.click();

   }

    @And("^departure date \"([^\"]*)\" and Return date \"([^\"]*)\"$")
    public void departureDateAndReturnDate(String arg0, String arg1) throws Throwable {
        driver.switchTo().frame(0);
        WebElement PoleDatyWylotu = driver.findElement(By.cssSelector("a[title='Flights']"));
        PoleDatyWylotu.click();

        WebElement DataWylotu = wait.until(ExpectedConditions.elementToBeClickable((By.id("departure"))));
        DataWylotu.clear();
        DataWylotu.sendKeys("arg0");

    }

    @And("^user chosses \"([^\"]*)\" passangers, and clicks done$")
    public void userChossesPassangersAndClicksDone(String arg0) throws Throwable {

    }

    @And("^begin search$")
    public void beginSearch() {
    }

    @Then("^User chosses (\\d+)nd option of flights$")
    public void userChossesNdOptionOfFlights(int arg0) {
    }

    @And("^decides to book as a guest$")
    public void decidesToBookAsAGuest() {
    }

    @And("^user chooses title, fills out \"([^\"]*)\" and \"([^\"]*)\"$")
    public void userChoosesTitleFillsOutAnd(String arg0, String arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^user fills out \"([^\"]*)\"\\. \"([^\"]*)\"\\. \"([^\"]*)\"$")
    public void userFillsOut(String arg0, String arg1, String arg2) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^user provides \"([^\"]*)\", \"([^\"]*)\" and \"([^\"]*)\"$")
    public void userProvidesAnd(String arg0, String arg1, String arg2) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^filss second adult title, fills out \"([^\"]*)\" and \"([^\"]*)\"$")
    public void filssSecondAdultTitleFillsOutAnd(String arg0, String arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^User fills out Payment informatiion by providing CC type and \"([^\"]*)\"$")
    public void userFillsOutPaymentInformatiionByProvidingCCTypeAnd(String arg0) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^User fills \"([^\"]*)\", \"([^\"]*)\", \"([^\"]*)\"$")
    public void userFills(String arg0, String arg1, String arg2) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }
}
