const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

let MealList = {
    "date": "",
    "breakfast": "",
    "lunch": "",
    "dinner": "", 
 };

async function crawl(){
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    const ndhs_id = 'skwjddn0619';
    const ndhs_pw = '74qq74qq';
    await page.setViewport({
        width: 1366,
        height: 768
    });

    //페이지로 가라
    await page.goto('http://portal.ndhs.or.kr/index');

    await page.click('body > div > div > div > div > div > div.row > div > div.login-body > div > div.col-xs-12.col-sm-5.login-con.pt20 > div > form > ul > li:nth-child(2) > a');

    //아이디랑 비밀번호 란에 값을 넣어라
    await page.evaluate((id, pw) => {
    document.querySelector('#stuUserId').value = id;
    document.querySelector('#stuPassword').value = pw;
    }, ndhs_id, ndhs_pw);

    //로그인 버튼을 클릭해라
    await page.click('#student > div > div:nth-child(2) > button');

    //로그인 화면이 전환될 때까지 
    await page.waitForNavigation()

    //로그인 성공 시(화면 전환 성공 시)
    if(page.url() === 'http://portal.ndhs.or.kr/dashboard/dashboard'){
        //학사 페이지로 가서
        await page.goto('http://portal.ndhs.or.kr/studentLifeSupport/carte/list');
        const content = await page.content();
        const $ = cheerio.load(content);
        const lists = $("body > div.container-fluid > div:nth-child(6) > div > table > tbody > tr");
        console.log(lists);
        lists.each((index, list) => {
            MealList[index] = {
                date: $(list).find("th").text().replace('\n\t\t\t\t\t\t\t\t',""),
                breakfast:$(list).find("td:nth-of-type(1)").text(),
                lunch:$(list).find("td:nth-of-type(2)").text(),
                dinner:$(list).find("td:nth-of-type(3)").text()
            }
            console.log(MealList[index]); 

        })
    }
    //로그인 실패시
    else{
        console.log('실패');
        ndhs_id = 'nope';
        ndhs_pw = 'nope';
    }
    //브라우저 꺼라
    await browser.close();     
};


crawl();