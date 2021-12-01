const getBtn = document.getElementById("get-btn");

const sendHttpRequest = (method, url, data) => {
  return fetch(url, data).then((response) => {
    return response.json();
  });
};

const getData = () => {
  let link =
    "https://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/suggest?f=json&text=";
  let city = document.getElementById("searchTxt").value;
  sendHttpRequest("GET", link + city).then((responseData) => {
    let data = responseData.suggestions;
    console.log(data);
    document.getElementById('list').innerHTML = data.map(suggestion => 
        `<div>
          <li>${suggestion.text}</li>
        </div>`
    ).join('')
  });
  
  
};

getBtn.addEventListener("click", getData);


