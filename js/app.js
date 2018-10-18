$(document).ready(function() {  
  
  function error() {
    console.log("Unable to retrieve your location");
  };

  function success(position) {
    var latNum  = position.coords.latitude;
    var lonNum = position.coords.longitude;

    var api = "http://api.openweathermap.org/data/2.5/weather?lat=" + latNum + "&lon=" + lonNum + "&appid=14b286bb964338ddd2bb8990f197062e&units=metric";

    $.getJSON(api, function(data) {
      console.log(data)
      var rawJson = JSON.stringify(data);
      var json = JSON.parse(rawJson);
      var weatherType = json.weather[0].description;
      var mainTemp = Math.round(json.main.temp);
      var Fahren = Math.round(mainTemp * 9 / 5 + 32);
      var switchMet = true;
     
      
      var mainHumid = json.main.humidity;
      var windSpeed = json.wind.speed;
      var iconCode = data.weather[0].icon;
      console.log(iconCode);
      
    switch(iconCode) 
       {
         case "01d":
         $("body").css("background-image", "url(https://image.ibb.co/k6VFT5/blue_sky_1866985_1920.jpg)");
         break;
        
         case "01n":
          $("body").css("background-image","url(https://image.ibb.co/cQMKMQ/pexels_photo_1.jpg)");
          break;
        
         case "02d":  
         case "03d":
         case "04d":
         $("body").css("background-image", "url(https://image.ibb.co/gnor1Q/sun_203792_1920.jpg)");
         break;
        
         case "02n":
         case "03n":
         case "04n":
          $("body").css("background-image","url(https://image.ibb.co/fuHyFk/pexels_photo_239107.jpg)");
         break;
        
         case "09d":
         case "10d":
         $("body").css("background-image", "url(https://image.ibb.co/dfwsak/pexels_photo_110874_1.jpg)");
         break;
        
         case "11d":
         $("body").css("background-image", "url(https://image.ibb.co/irzpMQ/pexels_photo_29095.jpg)"); 
         break;
        
         case "13d":
         $("body").css("https://image.ibb.co/d4wfT5/pexels_photo.jpg");
         break;
        
         case "50d":
         $("body").css("background-image", "url(https://image.ibb.co/nvdG1Q/pexels_photo_104907.jpg)");
         break;
       }
     
      var iconUrl = "http://openweathermap.org/img/w/" + iconCode + ".png";       
            
      $("#type").html(weatherType); 
      $(".btn").html(mainTemp + "\xB0 C"); 
      
      $(".btn").click(function(){
        if(switchMet === true){
          $(".btn").html(Fahren + "\xB0 F"); 
          switchMet = false;
        } else{
          $(".btn").html(mainTemp + "\xB0 C");
          switchMet = true;
        }    
      });
             
      $("#humidity").html("Humidity:" + mainHumid + "%");
      $("#wind").html("Wind Speed: " + windSpeed + " mph");
      $("#icon").html("<img src=" + iconUrl + ">");


    });
};
  navigator.geolocation.getCurrentPosition(success, error);
});

   