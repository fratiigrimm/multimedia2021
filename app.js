class BarChart {
    #svgns;
    #domElement;
    #svg;
    #width;
    #height;

    /**
     * Creates a new bar chart
     * @param {HTMLElement} domElement 
     */
    constructor(domElement) {
        this.#domElement = domElement;
        this.#svgns = "http://www.w3.org/2000/svg";
    }

    /**
     * Displays the bar chart
     * @param {Array} data 
     */
    draw(data) {
        this.data = data;
        this.#width = this.#domElement.clientWidth;
        this.#height = this.#domElement.clientHeight;

        this.#createSVG();
        this.#drawBackground();
        this.#drawBars();

        this.#domElement.appendChild(this.#svg);
    }
    #createSVG() {
        this.#svg = document.createElementNS(this.#svgns, "svg");
        this.#svg.setAttribute('style', 'border: 1px solid black'); 

        this.#svg.setAttribute('width', this.#width); //note: this.#svg.width is readonly
        this.#svg.setAttribute('height', this.#height);
    }
    #drawBackground() {
        const rect = document.createElementNS(this.#svgns, 'rect');
        rect.setAttribute('x', 0);
        rect.setAttribute('y', 0);
        rect.setAttribute('height', this.#height);
        rect.setAttribute('width', this.#width);

        rect.style.fill = 'WhiteSmoke';
            
        this.#svg.appendChild(rect);
    }
    #drawBars() {
        const barWidth = this.#width / this.data.length;

        const f = this.#height / Math.max(...this.data.map(x => x[1]));

        for (let i = 0; i < this.data.length; i++) {

            const label = this.data[i][0];
            const value = this.data[i][1];

            const barHeight = value * f * 0.9;
            const barY = this.#height - barHeight;
            const barX = i * barWidth + barWidth / 4;

            const bar = document.createElementNS(this.#svgns, 'rect');
            bar.setAttribute('class', 'bar');
            //or
            //bar.classList.add('bar'); //!recommended
            bar.setAttribute('x', barX);
            bar.setAttribute('y', barY);
            bar.setAttribute('height', barHeight);
            bar.setAttribute('width', barWidth / 1.2);

            //note: if the styles are set using CSS .bar:hover {...} will only work if marked as !important
            //the styling should be moved to the .bar {...} instead
            bar.style.fill = '#db4437';
            bar.style.strokeWidth = 2;
            bar.style.stroke = "black";
            this.#svg.appendChild(bar);

            const text = document.createElementNS(this.#svgns, 'text');
            text.appendChild(document.createTextNode(label));
            text.setAttribute('x', barX);
            text.setAttribute('y', barY - 10);
            this.#svg.appendChild(text);
        }
    }
}

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
const dataChart = [];
// getData(urls[1]);
localURL = 'media/data.json';
async function getDataFromLocalFile(localURL, tara, indicator) {
    const response = await fetch(localURL);
    const data = await response.json();

    //console.log(data);
    //console.log(data.length);
    for (var i = 0; i < data.length; i++) {
        if (data[i].tara === tara && data[i].indicator === indicator) {
            dataChart.push([data[i].an, data[i].valoare]);
        }
    }
    console.log(dataChart);
}

const prom = fetch('media/data.json').then(r => r.json());
const data1 = [];
prom.then(d => data1.push(...d));










