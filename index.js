const { Client } = require('tplink-smarthome-api');

const client = new Client();
const plug = client.getDevice({host: '192.168.13.79'}).then((device)=>{
  device.getSysInfo().then(console.log);
  //on / off
//   device.setPowerState(true);
  device.emeter.getRealtime().then(console.log);
});

