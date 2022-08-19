const { response } = require("express");
const request=require("request");
const newWeatherApi=(city,callBack)=>{
    const url=`https://api.weatherapi.com/v1/current.json?key=815b115abadc4f328f7101354221306&q=${city}`;
    request({
        url,
        json:true
    },(error,{body}={})=>{
        // console.log(error,response)
        if(error)
        {
            callBack("internet problem",undefined)
        }
        else if(body.error)
        {
callBack("can not find the location",undefined)
        }
        else
        {
        const data={
            location:body["location"].country,
            temp:body["current"].temp_c,
            conditon:body["current"].condition.text
        }
        callBack(undefined,data)
        }
    })
}
module.exports=newWeatherApi;