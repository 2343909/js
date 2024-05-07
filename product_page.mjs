/**
 *
 * @param {import('browsertime').BrowsertimeContext} context
 * @param {import('browsertime').BrowsertimeCommands} commands
 */
export default async function (context, commands) {
    const seleniumWebdriver = context.selenium.webdriver;
    const By = seleniumWebdriver.By;
    const seleniumDriver = context.selenium.driver;
    await seleniumDriver.manage().window().maximize();
    
    await commands.measure.start('Product Page');
    await commands.navigate('https://www.webstaurantstore.com/choice-16-oz-green-plastic-cup-case/500CC16G.html');
    await commands.wait.byPageToComplete();
    await commands.measure.stop();
};