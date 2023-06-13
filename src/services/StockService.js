import axios from 'axios'

class StockService {

    async getData(ticker, sdate, edate) {
        const options = {
            method: 'GET',
            url: 'https://yh-finance-complete.p.rapidapi.com/yhfhistorical',
            params: {ticker: ticker, sdate: sdate, edate: edate},
            headers: {
              'X-RapidAPI-Key': '6e7233f49emsh0634d3dc1da8c73p1fc570jsn6c2467b6c424',
              'X-RapidAPI-Host': 'yh-finance-complete.p.rapidapi.com'
            }
        };

        //console.log("Here")

        //let output = [];
        
        let output = await axios.request(options).then(function (response) {
            //output = response.data;
            //console.log(response.data);
            return response.data
            //response.send()
        }).catch(function (error) {
            console.error(error);
        });

        // console.log(output);
        return output;
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new StockService();