// no API key required for this API
const api_url = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?'

function getQuote() {
    $.getJSON(api_url)
    .done(function (response) {
        console.log(response);

        
    })
}

getQuote()
