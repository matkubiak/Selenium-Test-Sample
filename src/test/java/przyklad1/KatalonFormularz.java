package przyklad1;

import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.junit.*;
import org.openqa.selenium.support.ui.Select;

import javax.swing.*;
import java.util.concurrent.TimeUnit;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.fail;

public class KatalonFormularz {
    private WebDriver driver;

    @Before
    public void setUp() throws Exception {

        System.setProperty("webdriver.chrome.driver", "src/main/resources/drivers/chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
    }

    @Test
    public void testKatalonFormularz() throws Exception {
        driver.get("https://katalon-test.s3.amazonaws.com/demo-aut/dist/html/form.html");

        WebElement firstName = driver.findElement(By.id("first-name"));
        firstName.clear();
        firstName.sendKeys("Jan");

        WebElement lastName = driver.findElement(By.id("last-name"));
        lastName.clear();
        lastName.sendKeys("Kowalski");

        //WebElement gender = driver.findElement(By.name("gender"));
        //gender.get(0).click();

        WebElement dateOfBirth = driver.findElement(By.id("dob"));
        dateOfBirth.clear();
        dateOfBirth.sendKeys("05/22/2010");

        WebElement address = driver.findElement(By.id("address"));
        address.clear();
        address.sendKeys("Prosta 51");

        WebElement email = driver.findElement(By.name("email"));
        email.clear();
        email.sendKeys("karol.kowalski@mailinator.com");

        WebElement password = driver.findElement(By.id("password"));
        password.clear();
        password.sendKeys("Pass123");

        WebElement company = driver.findElement(By.id("company"));
        company.clear();
        company.sendKeys("CodersLab");

        WebElement comment = driver.findElement(By.id("comment"));
        comment.clear();
        comment.sendKeys("To jest mój pierwszy automat testowy");

        WebElement submitButton = driver.findElement(By.id("submit"));
        submitButton.clear();
        submitButton.click();


       
    }

    @After
    public void tearDown() throws Exception {
    //    driver.quit();
        }

}