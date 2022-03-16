const axios = require("axios");
const cheerio = require("cheerio");

let html = "";

MealList = {
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

}