const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/prod/:inp', async (req, res)=>{
    try {
        //get parameter from the body
        const {inp} = req.params;
        //fetch amazon link with axios
        const response = await axios.get(`https://www.amazon.com/s?k=${inp}`);
            const html = response.data;
            const $ = cheerio.load(html);
            //an array to save the response
            const prods= [];
    
            $('div.sg-col-4-of-12.s-result-item.s-asin.sg-col-4-of-16.sg-col.sg-col-4-of-20').each((index, el)=>{
              const prod = $(el);
              const title = prod.find('span.a-size-base-plus.a-color-base.a-text-normal').text();
              const review = prod.find('span.a-icon-alt').text();
              const nrev = prod.find('span.a-size-base.s-underline-text').text();
              const img = prod.find('img.s-image').attr('src');
                
              //created an object for each product title, review, number of review and image source
              const gas = {
                    ga: title,
                    rev: review,
                    numrev: nrev,
                    imgs: img
                }
              prods.push(gas);
    
            })
            res.status(200).json(prods);
            // console.log(prods);
        } catch (error) {
            console.error(error);
        }
})

app.listen(8000, ()=>{
    console.log('listening...');
})

