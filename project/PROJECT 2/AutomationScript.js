// node AutomationScript.js --config=config.json --url="https://www.hackerrank.com" 
// npm init -y
// npm install minimist
// npm install puppeteer
 
let minimist = require("minimist");
let puppeteer = require("puppeteer"); 
let fs = require("fs");

let args = minimist(process.argv);

// make a config.json which consists userid, password, moderators
let configJSON = fs.readFileSync(args.config);
let configJSO = JSON.parse(configJSON);

run();
async function run(){
    // We need browser, Browser should be full screen, Every step should be visible
    // start the browser
    let browser = await puppeteer.launch({
        defaultViewport: null,
        args: ["--start-maximized"],
        headless: false

    });
    
    // We need tab i.e. pages. In that tab open url
    // get a tab
    let pages = await browser.pages();
    let page = pages[0];

    // go to url
    await page.goto(args.url);

    // click on log in
    await page.waitForSelector("a[href='/access-account/']");
    await page.click("a[href='/access-account/']");

    
    // Before clicking wait for page to load
    // click login on 1st page
    await page.waitForSelector("a[href='/login/']");
    await page.click("a[href='/login/']");
    
    // click login on 2nd page
    await page.waitForSelector("a[href='/auth/login']");
    await page.click("a[href='/auth/login']");

    // Type username
    await page.waitForSelector("input[name='username']");
    await page.type("input[name='username']",configJSO.username, {delay:50});

    // Type password
    await page.waitForSelector("input[name='password']");
    await page.type("input[name='password']",configJSO.password, {delay:50});

    // // click login on 3rd page
    // await page.waitForSelector("button[data-analytics='LoginPassword']");
    // await page.click("button[data-analytics='LoginPassword']");

    
    // click login on 3rd page
    await page.waitForSelector("button[type='submit']");
    await page.click("button[type='submit']");

    // click on compete
    await page.waitForSelector("a[data-analytics='NavBarContests']");
    await page.click("a[data-analytics='NavBarContests']", {delay:50});

    // click on Manage contests
    await page.waitForSelector("a[href='/administration/contests/']");
    await page.click("a[href='/administration/contests/']", {delay:50});

    // find total pages
    await page.waitForSelector("a[data-attr1='Last']");
    let numPages = await page.$eval("a[data-attr1='Last']", function(atag){
        let np = (atag.getAttribute('data-page'));
        return np;
    })
    // console.log(numPages)
    // return;

    // move through all pages by loop
    for(let i = 0; i < numPages; i++){
        await handlePage(browser, page);
    }

    // // click on first contests
    // await page.waitForSelector("a[href='/administration/contests/edit/206666']");
    // await page.click("a[href='/administration/contests/edit/206666']", {delay:50});

}

async function handlePage(browser, page){
    // Do work on 1 page
    // div.table-body mlB text-center > 
    await page.waitForSelector("a.backbone.block-center");
    let curls = await page.$$eval(("a.backbone.block-center"),function (atags){
        let urls = [];
        for(let i = 0; i < atags.length; i++){
            let url = atags[i].getAttribute("href");
            urls.push(url);
        }
        return urls;
    });

    // console.log(curls);
    // return;

    for(let i = 0; i < curls.length; i++){
        await handleContest(browser, page, curls[i]);
    }
    // move to next page
    await page.waitForTimeout(1500);
    await page.waitForSelector("a[data-attr1='Right']");
    await page.click("a[data-attr1='Right']");
}

async function handleContest(browser, page, curl){
    let npage = await browser.newPage();
    await npage.goto(args.url + curl);
    await npage.waitForTimeout(2000);

    await npage.waitForSelector("li[data-tab='moderators']");
    await npage.click("li[data-tab='moderators']");

    for(let i = 0; i < configJSO.moderators.length; i++){
        let moderators = configJSO.moderators[i];
        
        await npage.waitForSelector("input#moderator");
        await npage.type("input#moderator", moderators, {delay: 50});
        await npage.keyboard.press("Enter");
    }
    await npage.waitForTimeout(1000);    
    await npage.close();    
    await page.waitForTimeout(2000);
}
