// starting data=====================================
var APIKey = 'ae2c0c6f56fe4a111a8ba8102d61ecdc';


var currentDate = moment().format("MM/DD/YYYY");

// click event========================================
$(document).ready(function () {
    
    // search onclick
    $("#search-btn").on("click", function () {
        console.log("click")
        var cityName = $("#cityName").val().trim();
        loadPage(cityName);
        forcast(cityName);
    });
    // city-btn onclick
    $(".city-btn").on("click", function () {
        var cityName = $(this).text();
        console.log(cityName);

       
        forcast(cityName);
        loadPage(cityName);
        // getWeather(cityName);

    });



})

// var queryUrl = "api.openweathermap.org/data/2.5/weather?APPID=ae2c0c6f56fe4a111a8ba8102d61ecdc&q=New York"
// 
// help function========================================
// loadPage function
function loadPage(cityName) {
    console.log(cityName)
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=ae2c0c6f56fe4a111a8ba8102d61ecdc&units=imperial",
        method: "GET"
    }).then(function (response) {
        console.log(response)
        var currentCity = response.name;
        var humidity = response.main.humidity;
        var WindSpeed = response.wind.speed;
        var temperature = response.main.temp;
        $(".city").empty();
        $(".city").append(currentCity + "(" + currentDate + ")");
        $("#Humi").empty();
        $("#Humi").append("Humidity: " + humidity + "%");
        $("#Wind").empty();
        $("#Wind").append("Wind Speed: " + WindSpeed + " MPH");
        $("#Temp").empty();
        $("#Temp").append("Temprature: " + temperature + "°F");
    })
}

// forcast function
function forcast(cityName) {
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + ",us&mode=json&appid=" + APIKey + "&units=imperial",
        method: "GET"
    }).then(function (response) {
        console.log("5DAYS", response);
        //assign 5 days forcast

        $("#date1").append(response.list[0].dt_txt);
        $("#Icon1");
        $("#Temp1").append(response.list[0].main.temp);
        $("#Huminity1").append(response.list[0].main.humidity);

        $("#date2").append(response.list[8].dt_txt);
        $("#Icon2");
        $("#Temp2").append(response.list[8].main.temp);
        $("#Huminity2").append(response.list[8].main.humidity);

        $("#date3").append(response.list[16].dt_txt);
        $("#Icon3");
        $("#Temp3").append(response.list[16].main.temp);
        $("#Huminity3").append(response.list[16].main.humidity);

        $("#date4").append(response.list[24].dt_txt);
        $("#Icon4");
        $("#Temp4").append(response.list[24].main.temp);
        $("#Huminity4").append(response.list[24].main.humidity);

        $("#date5").append(response.list[32].dt_txt);
        $("#Icon5");
        $("#Temp5").append(response.list[32].main.temp);
        $("#Huminity5").append(response.list[32].main.humidity);

    });

};
// uv index function

function uv(cityName){
    
}


