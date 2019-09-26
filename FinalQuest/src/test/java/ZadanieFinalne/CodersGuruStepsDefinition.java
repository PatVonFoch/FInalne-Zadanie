package ZadanieFinalne;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;

import static org.junit.Assert.assertSame;

public class CodersGuruStepsDefinition {
    WebDriver driver;


    @Given("an open CodersGuru page")
    public void openCodersGuruPage() {
        System.setProperty("webdriver.gecko.driver",
                "src/test/resources/geckodriver");
        driver = new FirefoxDriver();
        driver.manage().window().maximize();
        driver.get("https://men-men-s-01.codersguru.pl/");
    }


    @When("^email entered \"([^\"]*)\", click załóż konto, sup-page opens$")
    public void emailEnteredClickSupPageOpens(String arg0) throws Throwable {
        WebElement Email = driver.findElement(By.name("email"));
        Email.clear();
        Email.sendKeys(arg0);
        driver.findElement(By.xpath("/html/body/section[3]/div/form/input[2]")).click();

    }

    //@And("^user fills first name \"([^\"]*)\"$")
    @And("^user fills first name (.*)")
    public void userFillsFirstName(String firstName) throws Throwable {
        WebElement Imie = driver.findElement(By.id("fos_user_registration_form_name"));
        Imie.clear();
        Imie.sendKeys(firstName);
    }

    @And("^user fills last name \"([^\"]*)\"$")
    public void userFillsLastName(String arg0) throws Throwable {
        WebElement Nazwisko = driver.findElement(By.id("fos_user_registration_form_lastname"));
        Nazwisko.clear();
        Nazwisko.sendKeys(arg0);

    }

    @And("^user fills password \"([^\"]*)\"$")
    public void userFillsPassword(String arg0) throws Throwable {
        WebElement Haslo = driver.findElement(By.id("fos_user_registration_form_plainPassword_first"));
        Haslo.clear();
        Haslo.sendKeys(arg0);
    }

    @And("^user fills again password \"([^\"]*)\"$")
    public void userFillsAgainPassword(String arg0) throws Throwable {
        WebElement Haslo = driver.findElement(By.id("fos_user_registration_form_plainPassword_second"));
        Haslo.clear();
        Haslo.sendKeys(arg0);
    }

    @And("^user fills ciry \"([^\"]*)\"$")
    public void userFillsCiry(String arg0) throws Throwable {
        WebElement Miasto = driver.findElement(By.id("form_city"));
        Miasto.clear();
        Miasto.sendKeys(arg0);

    }

    @And("^user fills zipcode \"([^\"]*)\"$")
    public void userFillsZipcode(String arg0) throws Throwable {
        WebElement KodPoczt = driver.findElement(By.id("form_postal_code"));
        KodPoczt.clear();
        KodPoczt.sendKeys(arg0);
    }

    @And("^user fills street \"([^\"]*)\"$")
    public void userFillsStreet(String arg0) throws Throwable {
        WebElement Ulica = driver.findElement(By.id("form_street"));
        Ulica.clear();
        Ulica.sendKeys(arg0);
    }

    @And("^user fills house number \"([^\"]*)\"$")
    public void userFillsHouseNumber(String arg0) throws Throwable {
        WebElement NrDomu = driver.findElement(By.id("form_number"));
        NrDomu.clear();
        NrDomu.sendKeys(arg0);
    }

    @And("^user ticks bylaw box$")
    public void userTicksBylawBox() {
        java.util.List<WebElement> els = driver.findElements(By.xpath("//input[@type='checkbox']"));
        JavascriptExecutor jse = (JavascriptExecutor) driver;
        for (WebElement el : els) {
            jse.executeScript("arguments[0].click()", el);
        }

    }

    @Then("^user submits by clicking zarejestruj$")
    public void userSubmitsByClickingZarejestruj() {
    driver.findElement(By.id("register-submit-btn")).click();
    }


    //@And("^user is logged in as a member$")

   @And("user is logged in as a member and his name is (.*)")
   public void userIsLoggedInAsAMember(String firstName) {
       WebElement Username = driver.findElement(By.id("user-name"));
        assertSame(Username.getAttribute("value"), firstName);
    }
}








