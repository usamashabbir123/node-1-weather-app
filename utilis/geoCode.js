const request=require("request")
const gecode=(address,callBack)=>
{
const url=`https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoidXNhbWEtMTIzNDUiLCJhIjoiY2w2cGI1enNjMDVmYzNqb3c4NXlzOGllNiJ9.cjOt7GYwD2M0RHXq_4kGBA&limit=2`;
request({url:url,json:true},(error,response)=>{
  if(error)
  {
callBack("internet problem",undefined);
  }
  else if(response.body.features.length===0)
  {
    callBack("no result found",undefined)
  }
  else
  {
    const {features}=response.body;
    const[first]=features;
    // console.log(first.center);
     callBack(undefined,first.center)

    // callBack(undefine,)
    // console.log(response.body.features[0].center)
  }
})
}
module.exports=gecode;