const request = require("request");

const weatherApi = (longitude, lagitude, callBack) => {
  console.log(longitude,lagitude)
  const url = `http://api.weatherstack.com/current?access_key=e84129bc20b99e3b1452c36379b4e3ff&query=${lagitude},${lagitude}&units=f`;
  request(
    {
      url: url,
      json: true,
    },
    (error, data) => {
      if (error) {
        callBack("internet problem", undefined);
      }
    //    else if (data.body.error.code === 105) {
    //     callBack("longitude and latitude does not correct");
    //   } 
      else {
        // callBack(undefined,{
        //     temp_c:data.body.current.temperature,
        //     location:data.body.location.country
        // });
        console.log(data.body)
      }
    }
  );
};

module.exports=weatherApi;