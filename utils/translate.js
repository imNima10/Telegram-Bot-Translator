let axios = require("axios")

module.exports = async (message, lan, action) => {
    let data = JSON.stringify({
        "target": lan,
        "text": message
    });
    let response = await axios.request({
        method: 'post',
        maxBodyLength: Infinity,
        url: `https://api.one-api.ir/translate/v1/${action}/`,
        headers: {
            'accept': 'application/json',
            'one-api-token': process.env.ONE_API_TOKEN,
            'Content-Type': 'application/json'
        },
        data: data
    }).then((response) => {
        if (response.data.status == 200) {
            return response.data.result;
        } else {
            return {
                error: true
            }
        }
    })
    return response;
}