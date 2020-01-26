
$(document).ready(function(){
   function loadPage(){
      // input search btn function
      var cityName = $("#cityName").val().trim();
      console.log(cityName);
     $.ajax({ 
       url:"https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appId=ae2c0c6f56fe4a111a8ba8102d61ecdc&units=imperial",
       method:  "GET"
     }).then(function(response){
      console.log(response);       
      var currentDate = moment().format("MM/DD/YYYY")
      console.log(currentDate)
      var currentCity = response.name
       var humidity = response.main.humidity
       var WindSpeed = response.wind.speed
       var temperature = response.main.temp
       $(".city").empty()
       $(".city").append(currentCity,"("+ currentDate +")")
       $("#Humi").empty()
       $("#Humi").append("Humidity: "+humidity+"%") 
       $("#Wind").empty()
       $("#Wind").append("Wind Speed: "+WindSpeed+" MPH")
       $("#Temp").empty()
       $("#Temp").append("Temprature: "+temperature+"°F");

//  call 5 days forcast, does not work
       $.ajax({
        url:"https://samples.openweathermap.org/data/2.5/forecast?q="+cityName+",us&mode=xml&appid=b6907d289e10d714a6e88b30761fae22",
        method:"GET"
      }).then(function(response){
        console.log("5dayForcase"+response);
 
      })
     })
    
     //https://samples.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml&appid=b6907d289e10d714a6e88b30761fae22
  };
    $("#search-btn").on("click", function(){
      console.log("click")
      loadPage();
    })



// city btn function, always go to the first one
  function loadPage2(){
    
     var cityName = $("")
     console.log(cityName)
     
    $.ajax({ 
      url:"https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appId=ae2c0c6f56fe4a111a8ba8102d61ecdc&units=imperial",
      method:  "GET"
    }).then(function(response){
      console.log(cityName);
      console.log(response);       
      var currentDate = moment().format("MM/DD/YYYY")
      console.log(currentDate)
      var currentCity = response.name
      var humidity = response.main.humidity
      var WindSpeed = response.wind.speed
      var temperature = response.main.temp
      $(".city").empty()
      $(".city").append(currentCity,"("+ currentDate +")")
      $("#Humi").empty()
      $("#Humi").append("Humidity: "+humidity+"%") 
      $("#Wind").empty()
      $("#Wind").append("Wind Speed: "+WindSpeed+" MPH")
      $("#Temp").empty()
      $("#Temp").append("Temprature: "+temperature+"°F");
    })
 };
   $(".city-btn").on("click", function(){
     console.log("click")
     loadPage2();
   })
});
  
   

    // $("#search-btn").on("click", function(

    // )
    // api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml
      // $.ajax({
      //   url:"https://api.openweathermap.org/data/2.5/uvi/forecast?lat="+response.coord.lat+"&lon="+response.coord.lon +"&appId=ae2c0c6f56fe4a111a8ba8102d61ecdc",
      //   method:"GET"
      // }).then(function(responseUV){
      //   console.log(responseUV)
      //   var UV=responseUV[0].value
      //   $("#UV").empty()
      //   $("#UV").append("UV Index: "+UV)
      // // $(UV).css(backgroundcolor,red)
      // })

  //     $.ajax({
  //       url:"https://api.openweathermap.org/data/2.5/forecast?q="+cityName+"us&mode=xml",
  //       method:"GET"
  //     }).then(function(responseForcast){
  //       console.log(responseForcast)
  //   })
  // });
  //*  appId=ae2c0c6f56fe4a111a8ba8102d61ecdc*/