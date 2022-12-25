const lighthouse = require("./lighthouse");
const yargs = require("yargs");
const argv = yargs(process.argv.slice(2)).argv;

if(argv.help) {
    console.log("Commands:\n");
    console.log("--help      - Dumps what you're seeing now\n");
    console.log("--url <url> - Pass a URL to get a report for.\n");
    console.log("--all       - Run lighthouse reports for all of the sites listed in your .env file\n");
}

if(argv.url) {
    // The url arg was set
    if(validateUrl(argv.url)) {
        // Run lighthouse report
        // let result = lighthouse.RunLighthouseReport(argv.url);

        // Possible options for the report results:
        // - Place in db to be used on a dashboard
        // - Place in a google sheet to be referenced in more of a primative way.
    } else {
        console.log("Url not valid.\n");
        console.log("--url <url>\n");
    }

    if(argv.url == '') {
        console.log("Url not valid.\n");
        console.log("--url <url>\n");
    }
}

if(argv.all) {
    // get list of sites from sites.json
    const sitesList = require("./sites.json");

    // Loop over all sites in the json file and run a lihthouse report on it.
    sitesList.sites.forEach((url) => {
        // Run lighthouse report 
        // let result = lighthouse.RunLighthouseReport(url);

        // - Place in db to be used on a dashboard
        // - Place in a google sheet to be referenced in more of a primative way.
    })
}

/**
 * @description Function used to validate a url
 * @param string url
 * 
 * @return {boolean}
 */
function validateUrl(url) {
    let givenURL;
    try {
        givenURL = new URL(url);
    } catch(error) {
        return false;
    }

    return true;
}