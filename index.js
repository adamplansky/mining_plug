const { Client } = require('tplink-smarthome-api');
const client = new Client();


const host_ip = '192.168.13.79'


const plug = client.getDevice({host: host_ip}).then((device)=>{
  device.emeter.getRealtime().then(function(val){
    var json_data = JSON.parse(JSON.stringify(val));    
    json_data['date'] = new Date();
    console.log(JSON.stringify(json_data))
  });
});
