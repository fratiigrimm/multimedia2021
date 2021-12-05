var countries = {
    AA: 'select a country',
    BE: 'Belgium',
    BG: 'Bulgaria',
    CZ: 'Czechia',
    DK: 'Denmark',
    DE: 'Germany',
    EE: 'Estonia',
    IE: 'Ireland',
    EL: 'Greece',
    ES: 'Spain',
    FR: 'France',
    HR: 'Croatia',
    IT: 'Italy',
    CY: 'Cyprus',
    LV: 'Latvia',
    LT: 'Lithuania',
    LU: 'Luxembourg',
    HU: 'Hungary',
    MT: 'Malta',
    NL: 'Netherlands',
    AT: 'Austria',
    PL: 'Poland',
    PT: 'Portugal',
    RO: 'Romania',
    SI: 'Slovenia',
    SK: 'Slovakia',
    FI: 'Finland',
    SE: 'Sweden'
};
let select = document.getElementById("countries");
for (index in countries) {
    select.options[select.options.length] = new Option(countries[index], index);
}