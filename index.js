// import yargs from "yargs";
let city;
const yargs=require("yargs")
yargs.command({
  command:"add",
  describe:"add the name of country",
  builder:{
    name:{
      describe:"enter name",
      type:"string"
    }
  },
  handler:(yargs)=>{
    city=yargs.name
  }
})
yargs.parse()
if(city)
{
const request = require("request");
const gecode = require("./utilis/geoCode");
const weatherApi = require("./utilis/weatherApi");
gecode(city, (error, [longitude,latitude]) => {
  if (error) {
    console.log(error);
  } else {
    weatherApi(longitude,latitude, (error, data) => {
      console.log("current temperature is", data);
      console.log(error);
    console.log("latitude and longitude is ",longitude,latitude)
    });
  }
});
}
else{
  console.log("please enter city name")
}
