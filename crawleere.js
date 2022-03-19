const axios = require("axios");
const cheerio = require("cheerio");
const { createGlobalStyle } = require("styled-components");

let html = "";

let MealList = {
   "date": "",
   "breakfast": "",
   "lunch": "",
   "dinner": "", 
}
async function getHtml(){
    try{
        return await axios.get(
            "http://portal.ndhs.or.kr/studentLifeSupport/carte/list"
        );
    }catch(error){
        console.error(error);
    }
}

getHtml()
.then(html => {
    const $ = cheerio.load(html.data);
    const bodyList = $("div.container-fluid div:nth-child(6) div table tbody tr");
    console.log(bodyList);
    bodyList.each(function(i, element){
        MealList[i] = {
            date: String($(element).find("th").text()),
            breakfast:String($(element).find("td:nth-of-type(1)").text()),
            lunch:String($(element).find("td:nth-of-type(2)").text()),
            dinner:String($(element).find("td:nth-of-type(3)").text()),
        }
    });
    return MealList
})
.then(res => console.log(res));

async function getMealList(){
    if(!html){
        html = await getHtml();
    }

    const $ = cheerio.load(html.data);
    const bodyList = $("div.container-fluid div:nth-child(6) div table tbody tr");
    bodyList.map(function(i, element){
        MealList["date"] =String($(element).find("th").text()); 
        MealList["breakfast"] = String($(element).find("td:nth-of-type(1)").text());
        MealList["lunch"] = String($(element).find("td:nth-of-type(2)").text());
        MealList["dinner"] = String($(element).find("td:nth-of-type(3)").text());

        console.log(MealList);
    })
    return MealList;
}