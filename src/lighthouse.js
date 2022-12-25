const lighthouse = require("lighthouse");
const puppeteer = require("puppeteer");

async function createReportWithBrowser(browser, url, options = { output: "json"}) {
    const endpoint = browser.wsEndpoint();
    const endpointURL = new URL(endpoint);
    return lighthouse(url, Object.assign({}, {port: endpointURL.port}, options));
}

 /**
  * * @description Get lighthouse report results
  * * @param string url
  * @return {mixed}
  */
async function RunLighthouseReport(url) {
    const browser = await puppeteer.launch({args: ['--headless']});
    const result = await createReportWithBrowser(browser, site);
    // Write file for easy report reference.
    // fs.writeFileSync("report.json", result.report, "utf-8");
    await browser.close();
    return result;
}

module.exports = RunLighthouseReport;