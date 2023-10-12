// const city = "patna";
const city = document.querySelector("title").innerText;
const apiKey = "6185ba8fc40fa5cea58dbcbf63fa9635";
const unit = "metric";
const URL = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=" + apiKey +  "&units="+unit;
fetch(URL)
.then(response => { 
    if (response.ok) { 
      return response.json(); // Parse the response data as JSON 
    } else { 
      throw new Error('API request failed'); 
    } 
  }) 
  .then(data => { 
    // Process the response data here 
    const temp = data.main.temp; 
    const icon = data.weather[0].icon;
    const iconImg = "https://openweathermap.org/img/wn/"+icon+"@2x.png";
    const weatherDescription = data.weather[0].description;
    document.getElementById("weatherIcon").src = iconImg;
    document.getElementById("temperature").innerText= temp+"°";
    document.getElementById("description").innerText = weatherDescription;

  }) 
  .catch(error => { 
 
    console.error(error); 
  });
