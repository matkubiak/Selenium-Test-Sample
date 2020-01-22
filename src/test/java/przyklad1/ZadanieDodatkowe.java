package przyklad1;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.By;
import org.junit.*;



import java.util.Random;

public class ZadanieDodatkowe {

    private WebDriver driver;

    String[] products = {"Notebook", "Mug", "Cushion", "Sweater", "Poster", "T-shirt"};

    Random random = new Random();
    int randomInteger = random.nextInt(50);
    int productSelector = (randomInteger % products.length);




    @Before
    public void setUp() {


        System.setProperty("webdriver.chrome.driver", "src/main/resources/drivers/chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("http://prod-kurs.coderslab.pl");


    }
    @Test
    public void testProdSearch() throws InterruptedException {

        WebElement element = driver.findElement(By.name("s"));

        element.clear();
        Thread.sleep(1000);

        element.sendKeys(products[productSelector]);

        element.submit();
    }
    @After
    public void tearDown() throws Exception {
        //driver.quit();
    }
}