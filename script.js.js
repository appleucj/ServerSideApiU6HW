
$(document).ready(function  (){
     function  loadPage(){
      var cityName = $("#cityName").val()
     $.ajax({
       url:"https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&units=imperial&appId=ae2c0c6f56fe4a111a8ba8102d61ecdc",
       method:  "GET"
     }).then(function(response){
       console.log(response)
      var currentDate=moment(response.dt,"X").format("MM/DD/YYYY")
      var currentCity=response.name
      var humidity=response.main.humidity
      var WindSpeed=response.wind.speed
      var temperature=response.main.temp
      $(".city").empty()
      $(".city").append(currentCity,"("+ currentDate +")")
      $("#Humi").empty()
      $("#Humi").append("Humidity: "+humidity+"%") 
      $("#Wind").empty()
      $("#Wind").append("Wind Speed: "+WindSpeed+" MPH")
      $("#Temp").empty()
      $("#Temp").append("Temprature: "+temperature+"°F")
      

       $.ajax({
         url:"https://api.openweathermap.org/data/2.5/uvi/forecast?lat="+response.coord.lat+"&lon="+response.coord.lon +"&appId=ae2c0c6f56fe4a111a8ba8102d61ecdc",
         method:"GET"
       }).then(function(responseUV){
        console.log(responseUV)
        var UV=responseUV[0].value
        $("#UV").empty()
        $("#UV").append("UV Index: "+UV)
        // $(UV).css(backgroundcolor,red)
       })

      //  $.ajax({
      //  url:"https://api.openweathermap.org/data/2.5/forecast/daily?q="+cityName+"&mode=xml&units=metric&cnt=7" +"&appId=ae2c0c6f56fe4a111a8ba8102d61ecdc",
      //  method:"GET"
      // }).then(function(responseFor){
      //   console.log(responsFor)
        
        
      })
     }
  

 $("#search-btn").on("click",function(){
   loadPage();
 })

  });
//   ae2c0c6f56fe4a111a8ba8102d61ecdc
 
