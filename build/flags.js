// Define your country codes
const countryCodes = ['us', 'ca', 'gb', 'fr', 'de', /*...*/];

// Define your style and size
const style = 'flat';
const size = '64';

// Generate the URLs
const flagUrls = countryCodes.map(code => `https://flagsapi.com/${code}/${style}/${size}.png`);

// Function to get flag URL by country code
function getFlagUrl(countryCode) {
  return flagUrls.find(url => url.includes(countryCode));
}

// Now flagUrls is an array of URLs to the flags and getFlagUrl is a function that returns the flag URL for a given country code