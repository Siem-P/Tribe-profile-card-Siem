const api_url = "https://whois.fdnd.nl/api/v1/members";

async function getapi(url){

  const response = await fetch(url);

  var data = await response.json();
  console.log(data);
  
  }

getapi(api_url);