const { httpGet } = require('./mock-http-interface');

/**
 * @param {GetArnieQuotesInput} urls
 * @returns {ArnieQuoteResponse}
 */
const getArnieQuotes = async (urls) => {
  return Promise.all(urls.map(getArnieQuote));
};

/**
  * @param {UrlString} url
  * @returns {Promise<ArnieQuoteSuccess | ArnieQuoteFailure>}
  */
async function getArnieQuote(url) {
  const {body, status} = await httpGet(url);
  const {message} = JSON.parse(body);
  return status === 200 ? {'Arnie Quote': message} : {'FAILURE': message};
}

module.exports = {
  getArnieQuotes,
};
