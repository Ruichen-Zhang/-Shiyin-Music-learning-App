'use strict';
exports.main = async (event, context) => {
	console.log(event);
  // event里包含着客户端提交的参数
  const res = await uniCloud.getPhoneNumber({
  	appid: '__UNI__BB5671B', // 替换成自己开通一键登录的应用的DCloud appid
  	provider: 'univerify',
  	apiKey: 'f258b27db7bb2d811fc9da14f977e362', // 在开发者中心开通服务并获取apiKey
  	apiSecret: '2f497fa2a7740aae6ba2b6a90e403c77', // 在开发者中心开通服务并获取apiSecret
  	access_token: event.access_token,
  	openid: event.openid
  })
  var res_final = {code:1,msg:'未进行！'};
  if(res.code==0){
	  var secc = "kfsdgjbvhdskdgfleskhg123fkaf234";
	  
	  var url = 'http://120.24.238.88:8146/loginbyUniver?user='+res.phoneNumber+'&secc='+secc;
	  res_final = await uniCloud.httpclient.request(url,{
		  method:'GET',
		  contentType: 'json', 
		  dataType: 'json' 
	  });
	  res_final = res_final.data;
	  
  }
  console.log(res); // res里包含手机号

  return res_final;
}
