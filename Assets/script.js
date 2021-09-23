


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


// Below this line is for weather 
function initPage() {
  const cityEl = document.getElementById("enter-city");
  const searchEl = document.getElementById("search-button");
  const clearEl = document.getElementById("clear-history");
  const nameEl = document.getElementById("city-name");
  const currentPicEl = document.getElementById("current-pic");
  const currentTempEl = document.getElementById("temperature");
  const currentHumidityEl = document.getElementById("humidity");
  const currentWindEl = document.getElementById("wind-speed");
  const currentUVEl = document.getElementById("UV-index");
  const historyEl = document.getElementById("history");
  var fivedayEl = document.getElementById("fiveday-header");
  var todayweatherEl = document.getElementById("today-weather");
  let searchHistory = JSON.parse(localStorage.getItem("search")) || [];

  // Assigning a unique API to a variable
  const APIKey = "84b79da5e5d7c92085660485702f4ce8";

  function getWeather(cityName) {
      // Execute a current weather get request from open weather api
      let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;
      axios.get(queryURL)
          .then(function (response) {

              todayweatherEl.classList.remove("d-none");

              // Parse response to display current weather
              const currentDate = new Date(response.data.dt * 1000);
              const day = currentDate.getDate();
              const month = currentDate.getMonth() + 1;
              const year = currentDate.getFullYear();
              nameEl.innerHTML = response.data.name + " (" + month + "/" + day + "/" + year + ") ";
              let weatherPic = response.data.weather[0].icon;
              currentPicEl.setAttribute("src", "https://openweathermap.org/img/wn/" + weatherPic + "@2x.png");
              currentPicEl.setAttribute("alt", response.data.weather[0].description);
              currentTempEl.innerHTML = "Temperature: " + k2f(response.data.main.temp) + " &#176F";
              currentHumidityEl.innerHTML = "Humidity: " + response.data.main.humidity + "%";
              currentWindEl.innerHTML = "Wind Speed: " + response.data.wind.speed + " MPH";
              
              // Get UV Index
              let lat = response.data.coord.lat;
              let lon = response.data.coord.lon;
              let UVQueryURL = "https://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey + "&cnt=1";
              axios.get(UVQueryURL)
                  .then(function (response) {
                      let UVIndex = document.createElement("span");
                      
                      // When UV Index is good, shows green, when ok shows yellow, when bad shows red
                      if (response.data[0].value < 4 ) {
                          UVIndex.setAttribute("class", "badge badge-success");
                      }
                      else if (response.data[0].value < 8) {
                          UVIndex.setAttribute("class", "badge badge-warning");
                      }
                      else {
                          UVIndex.setAttribute("class", "badge badge-danger");
                      }
                      console.log(response.data[0].value)
                      UVIndex.innerHTML = response.data[0].value;
                      currentUVEl.innerHTML = "UV Index: ";
                      currentUVEl.append(UVIndex);
                  });
              
              // Get 5 day forecast for this city
              let cityID = response.data.id;
              let forecastQueryURL = "https://api.openweathermap.org/data/2.5/forecast?id=" + cityID + "&appid=" + APIKey;
              axios.get(forecastQueryURL)
                  .then(function (response) {
                      fivedayEl.classList.remove("d-none");
                      
                      //  Parse response to display forecast for next 5 days
                      const forecastEls = document.querySelectorAll(".forecast");
                      for (i = 0; i < forecastEls.length; i++) {
                          forecastEls[i].innerHTML = "";
                          const forecastIndex = i * 8 + 4;
                          const forecastDate = new Date(response.data.list[forecastIndex].dt * 1000);
                          const forecastDay = forecastDate.getDate();
                          const forecastMonth = forecastDate.getMonth() + 1;
                          const forecastYear = forecastDate.getFullYear();
                          const forecastDateEl = document.createElement("p");
                          forecastDateEl.setAttribute("class", "mt-3 mb-0 forecast-date");
                          forecastDateEl.innerHTML = forecastMonth + "/" + forecastDay + "/" + forecastYear;
                          forecastEls[i].append(forecastDateEl);

                          // Icon for current weather
                          const forecastWeatherEl = document.createElement("img");
                          forecastWeatherEl.setAttribute("src", "https://openweathermap.org/img/wn/" + response.data.list[forecastIndex].weather[0].icon + "@2x.png");
                          forecastWeatherEl.setAttribute("alt", response.data.list[forecastIndex].weather[0].description);
                          forecastEls[i].append(forecastWeatherEl);
                          const forecastTempEl = document.createElement("p");
                          forecastTempEl.innerHTML = "Temp: " + k2f(response.data.list[forecastIndex].main.temp) + " &#176F";
                          forecastEls[i].append(forecastTempEl);
                          const forecastHumidityEl = document.createElement("p");
                          forecastHumidityEl.innerHTML = "Humidity: " + response.data.list[forecastIndex].main.humidity + "%";
                          forecastEls[i].append(forecastHumidityEl);
                      }
                  })
          });
  }

  // Get history from local storage if any
  searchEl.addEventListener("click", function () {
      const searchTerm = cityEl.value;
      getWeather(searchTerm);
      searchHistory.push(searchTerm);
      localStorage.setItem("search", JSON.stringify(searchHistory));
      renderSearchHistory();
  })

  // Clear History button
  clearEl.addEventListener("click", function () {
      localStorage.clear();
      searchHistory = [];
      renderSearchHistory();
  })

  function k2f(K) {
      return Math.floor((K - 273.15) * 1.8 + 32);
  }

  function renderSearchHistory() {
      historyEl.innerHTML = "";
      for (let i = 0; i < searchHistory.length; i++) {
          const historyItem = document.createElement("input");
          historyItem.setAttribute("type", "text");
          historyItem.setAttribute("readonly", true);
          historyItem.setAttribute("class", "form-control d-block bg-white");
          historyItem.setAttribute("value", searchHistory[i]);
          historyItem.addEventListener("click", function () {
              getWeather(historyItem.value);
          })
          historyEl.append(historyItem);
      }
  }

  renderSearchHistory();
  if (searchHistory.length > 0) {
      getWeather(searchHistory[searchHistory.length - 1]);
  }
  
}
// Below this line is for calendar
function initCalendar(){
    var row1El = document.getElementById("firstRow");
    var row2El = document.getElementById("secondRow");
    var row3El = document.getElementById("thridRow");
    var row4El = document.getElementById("fourthRow")
    var week1El = document.getElementById("week1");
    var week2El = document.getElementById("week2");
    var week3El = document.getElementById("week3");
    var week4El = document.getElementById("week4");
    var week5El = document.getElementById("week5");
    var week6El = document.getElementById("week6");
    var week7El = document.getElementById("week7");
    var week8El = document.getElementById("week8");
    var week9El = document.getElementById("week9");
    var week10El = document.getElementById("week10");
    var week11El = document.getElementById("week11");
    var week12El = document.getElementById("week12");
    var week13El = document.getElementById("week13");
    var week14El = document.getElementById("week14");
    var week15El = document.getElementById("week15");
    var week16El = document.getElementById("week16");
    var week17El = document.getElementById("week17");
    var week18El = document.getElementById("week18");

    var weeksPlayed = [
        {
            week: "Week 1",
            start: 20210909,
            end: 20210915,
        },
        {
            week: "Week 2",
            start: 20210916,
            end: 20210922
        },
        {
            week: "Week 3",
            start: 20210923,
            end: 20210929
        },
        {
            week: "Week 4",
            start: 20210930,
            end: 20211006
        },
        {
            week: "Week 5",
            start: 20211007,
            end: 20211013
        },
        {
            week: "Week 6",
            start: 20211014,
            end: 20211020
        },
        {
            week: "Week 7",
            start: 20211021,
            end: 20211027
        },
        {
            week: "Week 8",
            start: 20211028,
            end: 20211103
        },
        {
            week: "Week 9",
            start: 20211104,
            end: 20211110
        },
        {
            week: "Week 10",
            start: 20211111,
            end: 20211117
        },
        {
            week: "Week 11",
            start: 20211123,
            end: 20211124
        },
        {
            week: "Week 12",
            start: 20211125,
            end: 20211201
        },
        {
            week: "Week 13",
            start: 20211202,
            end: 20211208
        },
        {
            week: "Week 14",
            start: 20211209,
            end: 20211215
        },
        {
            week: "Week 15",
            start: 20211216,
            end: 20211222
        },        
        {
            week: "Week 16",
            start: 20211223,
            end: 20211229
        },
        {
            week: "Week 17",
            start: 20211230,
            end: 20220105
        },
        {
            week: "Week 18",
            start: 20220106,
            end: 20220112
        }
    ]

    function getClear(){
        // row1El.style.display='block';
        // row2El.style.display='block';
        // row3El.style.display='block';
        // row4El.style.display='block';
    }

    function getGames(startDate, endDate) {

        let apiURL = "https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard?limit=1000&dates=" +startDate +"-" +endDate;
        axios.get(apiURL)
            .then(function (response) {
                console.log(response);
                var hold;
                var index = 0;
                for(var i = index; i < response.data.events.length; i++){
                    if(hold != response.data.events[i].date.substring(0,10)){
                        var theDateOfGame = response.data.events[i].date.substring(0,10);
                        hold = theDateOfGame;
                        index++;
                        const datePlaying = document.createElement("span");
                        datePlaying.setAttribute("class", "bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13");
                        datePlaying.innerHTML = theDateOfGame;
                        row1El.childNodes[1].append(datePlaying);
                        break;
                    }
                }

                getTeams(row1El, 11, hold, response);

                for(var i = index; i < response.data.events.length; i++){
       
                    if(hold != response.data.events[i].date.substring(0,10)){
                        var theDateOfGame = response.data.events[i].date.substring(0,10);
                        hold = theDateOfGame;
                        index = i;
                        const datePlaying = document.createElement("span");
                        datePlaying.setAttribute("class", "bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13");
                        datePlaying.innerHTML = theDateOfGame;
                        row2El.childNodes[1].append(datePlaying);
                        break;
                    }
                }
                
                getTeams(row2El, 15, hold, response);

                for(var i = index; i < response.data.events.length; i++){

                    if(hold != response.data.events[i].date.substring(0,10)){
                        var theDateOfGame = response.data.events[i].date.substring(0,10);
                        hold = theDateOfGame;
                        index = i;
                        const datePlaying = document.createElement("span");
                        datePlaying.setAttribute("class", "bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13");
                        datePlaying.innerHTML = theDateOfGame;
                        row3El.childNodes[1].append(datePlaying);
                        break;
                    }
                }  

                getTeams(row3El, 3, hold, response);
                
                for(var i = index; i < response.data.events.length; i++){
                    
                        if(hold != response.data.events[i].date.substring(0,10)){
                            var theDateOfGame = response.data.events[i].date.substring(0,10);
                            index = i;
                            hold = theDateOfGame;
                            const datePlaying = document.createElement("span");
                            datePlaying.setAttribute("class", "bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13");
                            datePlaying.innerHTML = theDateOfGame;
                            row4El.childNodes[1].append(datePlaying);
                            break;
                        }
                }

                getTeams(row4El, 15, hold, response);

            });

            function getTeams(row, child, hold, response){
                for(var i = 0; i < response.data.events.length; i++){
                    if(hold == response.data.events[i].date.substring(0,10)){
                        var teamNames = response.data.events[i].shortName;
                        const teamsPlaying = document.createElement("span");
                        teamsPlaying.setAttribute("class", "bg-black padding-5px-tb padding-15px-lr border-radius-5 margin-10px-bottom text-white font-size16 xs-font-size13");
                        teamsPlaying.innerHTML = teamNames;
                        row.childNodes[child].append(teamsPlaying);
                    }
                }
            }
    }
    
    week1El.addEventListener("click", function (){
        getGames(weeksPlayed[0].start,weeksPlayed[0].end);
    }) 

    week2El.addEventListener("click", function (){
        getGames(weeksPlayed[1].start,weeksPlayed[1].end)
    })

    week3El.addEventListener("click", function (){
        getGames(weeksPlayed[2].start,weeksPlayed[2].end)
    })

    week4El.addEventListener("click", function (){
        getGames(weeksPlayed[3].start,weeksPlayed[3].end)
    })
    
    week5El.addEventListener("click", function (){
        getGames(weeksPlayed[4].start,weeksPlayed[4].end)
    })
    
    week6El.addEventListener("click", function (){
        getGames(weeksPlayed[5].start,weeksPlayed[5].end)
    })

    week7El.addEventListener("click", function (){
        getGames(weeksPlayed[6].start,weeksPlayed[6].end)
    })

    week8El.addEventListener("click", function (){
        getGames(weeksPlayed[7].start,weeksPlayed[7].end)
    })

    week9El.addEventListener("click", function (){
        getGames(weeksPlayed[8].start,weeksPlayed[8].end)
    })

    week10El.addEventListener("click", function (){
        getGames(weeksPlayed[9].start,weeksPlayed[9].end)
    })

    week11El.addEventListener("click", function (){
        getGames(weeksPlayed[10].start,weeksPlayed[10].end)
    })

    week12El.addEventListener("click", function (){
        getGames(weeksPlayed[11].start,weeksPlayed[11].end)
    })

    week13El.addEventListener("click", function (){
        getGames(weeksPlayed[12].start,weeksPlayed[12].end)
    })

    week14El.addEventListener("click", function (){
        getGames(weeksPlayed[13].start,weeksPlayed[13].end)
    })

    week15El.addEventListener("click", function (){
        getGames(weeksPlayed[14].start,weeksPlayed[14].end)
    })

    week16El.addEventListener("click", function (){
        getGames(weeksPlayed[15].start,weeksPlayed[15].end)
    })

    week17El.addEventListener("click", function (){
        getGames(weeksPlayed[16].start,weeksPlayed[16].end)
    })

    week18El.addEventListener("click", function (){
        getGames(weeksPlayed[17].start,weeksPlayed[17].end)
    })
    
}
initPage();
initCalendar();


  // This is for the current date and time
var todayDate = moment().format('dddd, MMM Do YYYY, h:mm a');
  $("#currentDay").html(todayDate);