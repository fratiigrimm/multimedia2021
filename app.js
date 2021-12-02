
const urls = ["http://ec.europa.eu/eurostat/wdds/rest/data/v2.1/json/en/demo_mlexpec?precision=1&sex=T&age=Y1",
            "http://ec.europa.eu/eurostat/wdds/rest/data/v2.1/json/en/demo_pjan?precision=1&sex=T&age=TOTAL",
            "http://ec.europa.eu/eurostat/wdds/rest/data/v2.1/json/en/sdg_08_10?na_item=B1GQ&precision=1&unit=CLV10_EUR_HAB"];

async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const el = document.getElementById("info");
    el.innerHTML = data["id"].length;

}

getData(urls[1]);

  






