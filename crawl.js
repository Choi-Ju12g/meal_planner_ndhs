const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

let MealList = {
    "date": "",
    "breakfast": "",
    "lunch": "",
    "dinner": "", 
 };

const crawl = async () => {
    console.log('시작');
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
    await page.waitForTimeout('1000');
    //아이디랑 비밀번호 란에 값을 넣어라
    await page.evaluate((id, pw) => {
    document.querySelector('#stuUserId').value = id;
    document.querySelector('#stuPassword').value = pw;
    }, ndhs_id, ndhs_pw);

    //로그인 버튼을 클릭해라
    await page.click('#student > div > div:nth-child(2) > button');

    //로그인 화면이 전환될 때까지 
    await page.waitForNavigation()
    const list = await setList(page.url());
    console.log(list);
    //로그인 성공 시(화면 전환 성공 시)
    if(page.url() === 'http://portal.ndhs.or.kr/dashboard/dashboard'){
        //학사 페이지로 가서
        await page.goto('http://portal.ndhs.or.kr/studentLifeSupport/carte/list')
        
          
    }
    //로그인 실패시
    else{
        console.log('실패');
        student_id = 'nope';
        name = 'nope';
    }
    //브라우저 꺼라
    await browser.close();
    // return MealList        
};

async function setList(url){
    const $ = cheerio.load(url);
    const bodyList = $("body > div.container-fluid > div:nth-child(6) > div > table > tbody > tr");
    bodyList.each(function(i, element){
        console.log(element);
        MealList[i] = {
        date: String($(element).find("th").text()),
        breakfast:String($(element).find("td:nth-of-type(1)").text()),
        lunch:String($(element).find("td:nth-of-type(2)").text()),
        dinner:String($(element).find("td:nth-of-type(3)").text()),
        }
        
    });
    return MealList 
}

crawl();