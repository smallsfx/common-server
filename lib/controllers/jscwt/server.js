let { generator, db, base64 } = require('../../core/framework');

var datas = {
  dispatch: {
    regist: [
      { "useCarName": "c2pm5rWL6K+VMw==", "applyState": "3", "useCarDepa": "c2pm5rWL6K+VMw==", "dest": "c2pm5rWL6K+VMw==", "flowNumber": "20180316001", "useCarRange": "2", "useCarEndTime": "2018-03-31 14:47:31", "applyUnit": "c2pm5rWL6K+VMw==", "ID": "ea2e66730e0f45a8a6c16b0d0d81962a", "applyName": "c2pm5rWL6K+VMw==", "applyTime": "2018-03-16 14:48:04", "useCarStartTime": "2018-03-16 14:47:31", "dispatchState": "3" },
      { "useCarName": "c2pm5rWL6K+VMg==", "applyState": "3", "useCarDepa": "c2pm5rWL6K+VMg==", "dest": "c2pm5rWL6K+VMg==", "flowNumber": "20180314003", "useCarRange": "2", "useCarEndTime": "2018-03-29 13:41:38", "applyUnit": "c2pm5rWL6K+VMg==", "ID": "5780da0d213241e091254d181c132fda", "applyName": "c2pm5rWL6K+VMg==", "applyTime": "2018-03-14 13:42:08", "useCarStartTime": "2018-03-01 13:41:38", "dispatchState": "4" },
      { "useCarName": "c2pm5rWL6K+VMQ==", "applyState": "3", "useCarDepa": "c2pm5rWL6K+VMQ==", "dest": "c2pm5rWL6K+VMQ==", "flowNumber": "20180314002", "useCarRange": "2", "useCarEndTime": "2018-03-17 13:40:33", "applyUnit": "c2pm5rWL6K+VMQ==", "ID": "c1c4ef5f02ea436c8624b1ecaefaacda", "applyName": "c2pm5rWL6K+VMQ==", "applyTime": "2018-03-14 13:41:18", "useCarStartTime": "2018-03-14 13:40:33", "dispatchState": "3" }
    ],
    approve: [
      { "flowNumber": "20180316001", "useCarName": "c2pm5rWL6K+VMw==", "applyID": "ea2e66730e0f45a8a6c16b0d0d81962a", "handleState": "2", "useCarReason": "c2pm5rWL6K+VMw==", "applyUnit": "c2pm5rWL6K+VMw==", "useCarDepa": "c2pm5rWL6K+VMw==", "applyName": "c2pm5rWL6K+VMw==", "applyTime": "2018-03-16 14:48:09" },
      { "flowNumber": "20180314003", "useCarName": "c2pm5rWL6K+VMg==", "applyID": "5780da0d213241e091254d181c132fda", "handleState": "2", "useCarReason": "c2pm5rWL6K+VMg==", "applyUnit": "c2pm5rWL6K+VMg==", "useCarDepa": "c2pm5rWL6K+VMg==", "applyName": "c2pm5rWL6K+VMg==", "applyTime": "2018-03-14 13:42:17" },
      { "flowNumber": "20180314002", "useCarName": "c2pm5rWL6K+VMQ==", "applyID": "c1c4ef5f02ea436c8624b1ecaefaacda", "handleState": "2", "useCarReason": "c2pm5rWL6K+VMQ==", "applyUnit": "c2pm5rWL6K+VMQ==", "useCarDepa": "c2pm5rWL6K+VMQ==", "applyName": "c2pm5rWL6K+VMQ==", "applyTime": "2018-03-14 13:41:23" }
    ],
    order: [
      { "useCarName": "c2pm5rWL6K+VMg==", "paiCheState": "1", "dispatchtime": "2018-03-14 15:10:36", "executeState": "1", "useCarSim": "13654143553", "platenum": "MTM3NzY2NTU0OTM=", "useCarDepa": "c2pm5rWL6K+VMg==", "dest": "c2pm5rWL6K+VMg==", "flowNumber": "20180314003", "driver_name": "6Z+p5by6", "useCarEndTime": "2018-03-29 13:41:38", "applyUnit": "c2pm5rWL6K+VMg==", "ID": "8f32c07bd2dc44ca86ea4b0a476dba1b", "aboardAddr": "c2pm5rWL6K+VMg==", "applyName": "c2pm5rWL6K+VMg==", "useCarStartTime": "2018-03-01 13:41:38", "dispatchState": "4" },
      { "useCarName": "c2pm5rWL6K+VMg==", "paiCheState": "1", "dispatchtime": "2018-03-14 15:10:36", "executeState": "1", "useCarSim": "13654143553", "platenum": "MTM0MDU2ODk2ODk=", "useCarDepa": "c2pm5rWL6K+VMg==", "dest": "c2pm5rWL6K+VMg==", "flowNumber": "20180314003", "driver_name": "5byg55G2W+axh+mAmuWbveWKm10=", "useCarEndTime": "2018-03-29 13:41:38", "applyUnit": "c2pm5rWL6K+VMg==", "ID": "fb476375a06b48fa985b446a0c99f5af", "aboardAddr": "c2pm5rWL6K+VMg==", "applyName": "c2pm5rWL6K+VMg==", "useCarStartTime": "2018-03-01 13:41:38", "dispatchState": "4" },
      { "useCarName": "c2pm5rWL6K+VMg==", "paiCheState": "1", "dispatchtime": "2018-03-14 14:57:08", "executeState": "1", "useCarSim": "13654143553", "platenum": "6L69QTEyMzQ1", "useCarDepa": "c2pm5rWL6K+VMg==", "dest": "c2pm5rWL6K+VMg==", "flowNumber": "20180314003", "driver_name": "5Y6G5b2m5rOiW2Ba77yfHe+8n++8nwnvvJ9Z77yf77yfWO+8n++8n++8n3A=", "useCarEndTime": "2018-03-29 13:41:38", "applyUnit": "c2pm5rWL6K+VMg==", "ID": "b07c4fc5713641d091c33ff2a9a60018", "aboardAddr": "c2pm5rWL6K+VMg==", "applyName": "c2pm5rWL6K+VMg==", "useCarStartTime": "2018-03-01 13:41:38", "dispatchState": "4" }
    ],
    driver: [
      {
        "date": "2014-06-28", "vName": "5Y6G5b2m5rOiW+axh+mAmuWbveWKm10=",
        "address": "5rKI6Ziz5biC5ZKM5bmz5Yy65rCR5Li76LevMjI15Y+3MTMwM+WupA==", "phone": "MTM3MDAwNDM4NDA=",
        "tPlist": [
          { "name": "MTM5MDAwMDA5NDg=", "id": "DA98E137B0AEFB7CE040007F010030F4-A-WebCom-EVehic" }
        ],
        "sex": "0", "tel": "MDI0LTY3ODU1NTU=", "remark": "5YaF6YOo5rWL6K+V5Y+45py6", "id": "99fb0becc7a24add83e79f5fb678ebfc",
        "dNum": "SFRHTDAwMTM=", "type": "1", "iCard": "SFRHTDAwMTM="
      },
      {
        "date": "2014-07-09", "vName": "5byg55G2W+axh+mAmuWbveWKm10=",
        "address": "5rKI6Ziz5biC5ZKM5bmz5Yy65rCR5Li76LevMjI15Y+3MTMwM+WupA==", "phone": "MTM3MDAwNDM4NDU=",
        "tPlist": [
          { "name": "MTM0MDU2ODk2OTMtYQ==", "id": "2a561c66-56bc-485b-8100-b07e194e45bc-X-WebCo-EVehi" },
          { "name": "MTM0MDU2ODk2ODk=", "id": "648ff274-1b12-401c-a05d-b6949a173d28-X-WebCo-EVehi" },
          { "name": "MTM3NzY2NTU0OTM=", "id": "f314d8a2-9320-4225-82e4-80bff0801727-X-WebCo-EVehi" }
        ],
        "sex": "1", "tel": "MDI0LTY3ODU1NTU=", "remark": "5YaF6YOo5rWL6K+V5Y+45py6", "id": "96c25593a7d242a48885b4a0c8b4c8f5", "dNum": "SFRHTDAwMTE=", "type": "1", "iCard": "SFRHTDAwMTE="
      }, {
        "date": "2014-05-05", "vName": "5a2Z5bu66aOe",
        "address": "5rKI6Ziz5biC5ZKM5bmz5Yy65rCR5Li76LevMjI15Y+3MTMwM+WupA==",
        "phone": "MTM3MDAwNDM4NDA=", "tPlist": [
          { "name": "MTM0MDU2ODk2ODc=", "id": "259ebb2f-082c-4460-ab92-7e2d005c8762-X-WebCo-EVehi" },
          { "name": "MTM0MDU2ODk2ODk=", "id": "648ff274-1b12-401c-a05d-b6949a173d28-X-WebCo-EVehi" }
        ],
        "sex": "0", "tel": "MDI0LTY3ODU1NTU=", "remark": "5YaF6YOo5rWL6K+V5Y+45py6",
        "id": "1c980e6d-5b7d-45c3-ba1a-60e37fad465f-X-WebCo-drive", "dNum": "SFRHTDAwMTc=", "type": "0", "iCard": "SFRHTDAwMTc="
      }, {
        "date": "2014-05-05", "vName": "6Z+p5by6",
        "address": "5rKI6Ziz5biC5ZKM5bmz5Yy65rCR5Li76LevMjI15Y+3MTMwM+WupA==", "phone": "MTU5MDUxNjc3NDI=",
        "tPlist": [
          { "name": "MTM5MDAwMDAwMDE=", "id": "DA98DB5368F21B66E040007F010032DA-A-WebCom-EVehic" }
        ],
        "sex": "0", "tel": "MDI0LTY3ODU1NTU=", "remark": "5YaF6YOo5rWL6K+V5Y+45py6",
        "id": "a9146c46-f631-4581-ad08-fe150560cc9a-X-WebCo-drive", "dNum": "SFRHTDAwMTg=", "type": "2", "iCard": "SFRHTDAwMTg="
      },
      {
        "date": "2014-06-28", "vName": "55Sw55ScW+axh+mAmuWbveWKm10=",
        "address": "5rKI6Ziz5biC5ZKM5bmz5Yy65rCR5Li76LevMjI15Y+3MTMwM+WupA==", "phone": "MTM2NTQxNDM1NTE=",
        "tPlist": [
          { "name": "MTM5MDAwMDA5NDg=", "id": "DA98E137B0AEFB7CE040007F010030F4-A-WebCom-EVehic" }
        ],
        "sex": "0", "tel": "MDI0LTY3ODU1NTU=",
        "remark": "5YaF6YOo5rWL6K+V5Y+45py6", "id": "fff4d56947e94c66a30b2bb4404d7780",
        "dNum": "SFRHTDAwMDQ=", "type": "1", "iCard": "SFRHTDAwMDQ="
      }
    ],
    car: [
      {
        "gName": "6L2m5Yqh6YCa5aSH55So5YiG57uE", "vName": "MTM0MDU2ODk2ODk=",
        "targetId": "648ff274-1b12-401c-a05d-b6949a173d28-X-WebCo-EVehi",
        "color": "ffffff", "sim": "13851022879",
        "photo": "", "type": "6L2m6L6G57G75Z6L"
      },
      {
        "gName": "", "vName": "6L69QTEyMzQ1",
        "targetId": "DA98E137A950FB7CE040007F010030F4-A-WebCom-EVehic",
        "color": "",
        "sim": "18751971355", "photo": "", "type": ""
      },
      {
        "gName": "", "vName": "MTM3NzY2NTU0OTM=",
        "targetId": "f314d8a2-9320-4225-82e4-80bff0801727-X-WebCo-EVehi",
        "color": "ff0000", "sim": "13402698864", "photo": "", "type": "6L2m6L6G57G75Z6L"
      },
      {
        "gName": "", "vName": "MTM0MDU2ODk2OTMtYQ==",
        "targetId": "2a561c66-56bc-485b-8100-b07e194e45bc-X-WebCo-EVehi",
        "color": "ff0000", "sim": "18205025168", "photo": "", "type": "6L2m6L6G57G75Z6L"
      }
    ]
  },
  alarm: {
    offline: [
      { "sid": "57911", "tName": "6IuPTEY1Njcz", "gName": "5Li56Ziz5biC5rez6Ziz5re35Yed5Zyf5pyJ6ZmQ5YWs5Y+4", "sim": "14705291036", "day": "6IuPTEY3MTEz", "gTime": 1302313952 },
      { "sid": "87681", "tName": "6IuPTEY1MzMx", "gName": "5rGf6IuP55Ge576O56aP5a6e5Lia5pyJ6ZmQ5YWs5Y+4", "sim": "14705290194", "day": "6IuPTEY3MTEz", "gTime": 1313493588 },
      { "sid": "52497", "tName": "6IuPTEY1NTYy", "gName": "5Li56Ziz5biC6KqJ55CD6YCa55So55S15Zmo6LSj5Lu75pyJ6ZmQ5YWs5Y+4", "sim": "14705290149", "day": "6IuPTEY3MTEz", "gTime": 1334667209 },
      { "sid": "59999", "tName": "6IuPTEY5NTc4", "gName": "5Li56Ziz5biC6L2m6Ii56KOF6aWw5Lu25pyJ6ZmQ5YWs5Y+4", "sim": "14705290244", "day": "6IuPTEY3MTEz", "gTime": 1334773872 },
      { "sid": "52429", "tName": "6IuPTEcwMzgy", "gName": "5rGf6IuP5rKq6ICA57Ku5rK55Yi25ZOB5pyJ6ZmQ5YWs5Y+4", "sim": "14705290141", "day": "6IuPTEY3MTEz", "gTime": 1334773872 },
      { "sid": "116409", "tName": "6IuPTEY2NTEw", "gName": "5rGf6IuP55Ge576O56aP5a6e5Lia5pyJ6ZmQ5YWs5Y+4", "sim": "14705290167", "day": "6IuPTEY3MTEz", "gTime": 1316936600 },


      // { "sid": "1", "sim": "13700043840", "tName": "c2pm5rWL6K+VMw==", "gName": "c2pm5rWL6K+VMw==", "gTime": "1", "day": "3" },
      // { "sid": "2", "sim": "13700043840", "tName": "c2pm5rWL6K+VMw==", "gName": "c2pm5rWL6K+VMw==", "gTime": "1", "day": "3" },
      // { "sid": "3", "sim": "13700043840", "tName": "c2pm5rWL6K+VMw==", "gName": "c2pm5rWL6K+VMw==", "gTime": "1", "day": "3" },
      // { "sid": "4", "sim": "13700043840", "tName": "c2pm5rWL6K+VMw==", "gName": "c2pm5rWL6K+VMw==", "gTime": "1", "day": "3" }
    ]
  },
  lasttrack: [
    { "cLon": 444271821, "gTime": 1406856300, "alt": 0, "lon": 444271816, "builtTime": 1406857224, "dir": 0, "type": "P", "speed": 0, "cLat": 150433525, "sim": "13402698864", "tName": "MTM3NzY2NTU0OTM=", "lat": 150433520, "mileage": 0, "desc": "" }
  ],
  offline: [
    { "sim": "MTM3MDAwNDM4NDA=", "tName": "6L2m54mM5Y+356CB", "gTime": "6L2m54mM5Y+356CB", "time": "MeWkqQ==" },
    { "sim": "MTM3MDAwNDM4NDA=", "tName": "6L2m54mM5Y+356CB", "gTime": "6L2m54mM5Y+356CB", "time": "MeWkqQ==" }
  ]
}

var build = (datas) => {
  var json = { c: 0, data: { pList: datas, count: datas.length } }
  return JSON.stringify(json);
}

module.exports = {
  "rootpath": "/js-cs-server/",
  "mapping": {
    "addSubscribe": { description: '', auth: false },
    "getCaptcha": { description: '', auth: false },
    "login": { description: '', auth: false },
    "queryTargetList": { description: '', auth: false },
    "offLineReportList": { description: '', auth: false },
    "queryLastTrack": { description: '', auth: false },
    "getTrack": { description: '', auth: false },
    "dispatchCsMusic": { description: '', auth: false },
    "applyQuery": { description: '', auth: false },
    "applySumbit": { description: '', auth: false },
    "applyDetail": { description: '', auth: false },
    "carDispatchQuery": { description: "", auth: false },
    "approveQuery": { description: "", auth: false },
    "paichedan_query": { description: '', auth: false },
    "driverListPcd": { description: '', auth: false },
    "offLineStatLunXun": { description: '', auth: false },
    "offLineIgnore": { description: '', auth: false },
    "offLineReportStat": { description: '', auth: false },
    "logout": { description: '', auth: false },
    "attendanceListData": { description: '', auth: false }
  },
  "login": (req, res) => {
    var json = {
      "c": 0,
      "data": {
        "role": "",
        "net_type": "F",

        "corp_id": "1456145",
        "corp_name": base64.encode('北京汇通国力软件技术有限公司'),
        "corp_active": "1",

        "oper_status": 1,
        "oper_ca_type": "1",
        "oper_id": "204999809",
        "oper_active": "1",
        "oper_name": base64.encode('王鑫'),
        "oper_ca_mdn": "15905167742",

        "lt_latitude": "111152696",
        "rb_longitude": "437380224",
        "lt_longitude": "432653920",
        "rb_latitude": "114068016"
      }
    }

    res.send(JSON.stringify(json));
  },
  "getCaptcha": (req, res) => {
    // res.send('{"c":0,"data":{"captch_url":"http://192.168.1.10:3000/logo.png","sessionId":"test-nodejs-wangxin"}}');
    res.send('{"c":0,"data":{"captch_url":"http://192.168.8.111:3000/logo.png","sessionId":"test-nodejs-wangxin"}}');
  },
  "offLineIgnore": (req, res) => {
    var json = { c: 0 };
    res.send(JSON.stringify(json));
  },
  "addSubscribe": (req, res) => {
    res.send('{"c":0}');
  },
  "queryTargetList": (req, res) => {
    res.send('{"c":0,"data":[{"groupName":"6L2m5Yqh6YCa5rWL6K+V5YiG57uE","total":1,"groupId":"b3788629-06bd-40a1-b39b-73721877a849-X-WebCo-ETarg","groupS":[{"groupName":"6L2m5Yqh6YCa5aSH55So5YiG57uE","total":1,"targetIdS":[{"tmnId":"102010441","sim":"13851022879","tiid":"lbmple-ti","t_type":"1","tName":"MTM0MDU2ODk2ODk=","tId":"648ff274-1b12-401c-a05d-b6949a173d28-X-WebCo-EVehi","sid":"2553285"}],"groupId":"a1afc986-7f4f-4faf-93db-82413b65fcba-X-WebCo-ETarg"}]},{"groupName":"5pyq5YiG57uE","total":3,"targetIdS":[{"tmnId":"102007369","sim":"13402698864","tiid":"js-ti","t_type":"1","tName":"MTM3NzY2NTU0OTM=","tId":"f314d8a2-9320-4225-82e4-80bff0801727-X-WebCo-EVehi","sid":"2553185"},{"tmnId":"102011465","sim":"18205025168","tiid":"lbmple-ti","t_type":"1","tName":"MTM0MDU2ODk2OTMtYQ==","tId":"2a561c66-56bc-485b-8100-b07e194e45bc-X-WebCo-EVehi","sid":"2553311"},{"tmnId":"102015565","sim":"18751971355","tiid":"lbmple-ti","t_type":"1","tName":"6L69QTEyMzQ1","tId":"DA98E137A950FB7CE040007F010030F4-A-WebCom-EVehic","sid":"2554221"}],"groupId":"1456145"}]}');
  },
  "offLineReportList": (req, res) => {
    res.send(build(datas.offline));
  },
  "queryLastTrack": (req, res) => {
    res.send(build(datas.lasttrack));
  },
  "getTrack": (req, res) => {
    res.send('{"c":0,"data":{"count":0,"residue":false}}');
  },
  "dispatchCsMusic": (req, res) => {
    res.send('{"c":0,"data":{"dispatch":1,"guidui":1}}');
  },
  "applyQuery": (req, res) => {
    res.send(build(datas.dispatch.regist));
  },
  "applySumbit": (req, res) => {
    var json = { c: 0 }
    res.send(JSON.stringify(json));
  },
  "carDispatchQuery": (req, res) => {
    res.send(build(datas.dispatch.regist));
  },
  "approveQuery": (req, res) => {
    res.send(build(datas.dispatch.approve));
  },
  "applyDetail": (req, res) => {
    var json = { "c": 0, "data": { "useCarName": "c2pm5rWL6K+VMg==", "pcdList": [{ "driver_name": "5Y6G5b2m5rOiW2Ba77yfHe+8n++8nwnvvJ9Z77yf77yfWO+8n++8n++8n3A=", "driver_sim": "13700043840", "useCarEndTime": "2018-03-29 13:41:38", "platenum": "6L69QTEyMzQ1", "useCarStartTime": "2018-03-01 13:41:38" }, { "driver_name": "5byg55G2W+axh+mAmuWbveWKm10=", "driver_sim": "13700043845", "useCarEndTime": "2018-03-29 13:41:38", "platenum": "MTM0MDU2ODk2ODk=", "useCarStartTime": "2018-03-01 13:41:38" }, { "driver_name": "6Z+p5by6", "driver_sim": "15905167742", "useCarEndTime": "2018-03-29 13:41:38", "platenum": "MTM3NzY2NTU0OTM=", "useCarStartTime": "2018-03-01 13:41:38" }], "applyState": "3", "useCarSim": "13654143553", "approveList": [{ "oper_name": "6LS+5Lic6Ziz", "remark": "c2pm5rWL6K+VMg==", "approveTime": "2018-03-14 13:42:08", "oper_sim": "15905167742", "approveState": "55Sz6K+3" }, { "oper_name": "6LS+5Lic6Ziz", "remark": "", "approveTime": "2018-03-14 13:42:17", "oper_sim": "15905167742", "approveState": "5ZCM5oSP" }, { "oper_name": "6LS+5Lic6Ziz", "remark": "5ouS57ud6K+35rGC", "approveTime": "2018-03-14 16:16:48", "oper_sim": "15905167742", "approveState": "6LCD5bqm6amz5Zue" }], "remark": "c2pm5rWL6K+VMg==", "useCarDepa": "c2pm5rWL6K+VMg==", "dest": "c2pm5rWL6K+VMg==", "flowNumber": "20180314003", "carType": "4", "useCarPeopleCount": 4, "useCarReson": "c2pm5rWL6K+VMg==", "useCarRange": "2", "useCarEndTime": "2018-03-29 13:41:38", "applyUnit": "c2pm5rWL6K+VMg==", "id": "5780da0d213241e091254d181c132fda", "aboardAddr": "c2pm5rWL6K+VMg==", "applyName": "c2pm5rWL6K+VMg==", "applySim": "13654143554", "useCarStartTime": "2018-03-01 13:41:38", "dispatchState": "4" } };
    res.send(JSON.stringify(json));
  },
  "paichedan_query": (req, res) => {
    res.send(build(datas.dispatch.order));
  },
  "driverListPcd": (req, res) => {
    res.send(build(datas.dispatch.driver));
  },
  "vehicleListPcd": (req, res) => {
    res.send(build(datas.dispatch.car));
  },
  "offLineStatLunXun": (req, res) => {
    res.send(build(datas.alarm.offline));
  },
  "offLineIgnore": (req, res) => {
    var json = { c: 0 };
    res.send(JSON.stringify(json));
  },
  "offLineReportStat": (req, res) => {
    res.send(build(datas.alarm.offline));
  },

  "attendanceListData": (req, res) => {
    res.send(build([
      { "fid": "http://192.168.8.103:8080/js-cs-server/getImg?f=fdb3923c54c74404b1ddd4bd8460accd.jpg", "id": "ca822ab74f5d4837880e83d0cef45bc5", "time": "2018-05-02 15:13:07", "lon": "123.494637", "remark": "6LKM5Ly85o+P6L+w", "position_desc": "6L695a6B55yB5rKI6Ziz5biC5Lic6Zm15Yy65Zyo5rKI6Ziz5Zu96ZmF6L2v5Lu25ZutQuWMuumZhOi/kQ==", "name": "MTM2NzUxMTI3MDU=", "gName": "5pyq5YiG57uE", "sim": "13675112705", "tid": "6AD3501FF1CC2E3CE0400A0A010A6B34-A-WebCom-EVehic", "lat": "41.705629" }, { "fid": "http://192.168.8.103:8080/js-cs-server/getImg?f=ee39bb18ed0046dfaac8abc94efa4e84.jpg", "id": "1baa58e60b65470eab5dd7d419af955f", "time": "2018-04-24 16:14:38", "lon": "123.494136", "remark": "", "position_desc": "", "name": "MTM2NzUxMTI3MDU=", "gName": "5pyq5YiG57uE", "sim": "13675112705", "tid": "6AD3501FF1CC2E3CE0400A0A010A6B34-A-WebCom-EVehic", "lat": "41.705714" }, { "fid": "http://192.168.8.103:8080/js-cs-server/getImg?f=73702e8883784223837b5dbc5e5d4d66.jpg", "id": "21a057a3b3b34b0faa11c51da7d050a4", "time": "2018-04-24 16:11:00", "lon": "123.494674", "remark": "", "position_desc": "", "name": "MTM2NzUxMTI3MDU=", "gName": "5pyq5YiG57uE", "sim": "13675112705", "tid": "6AD3501FF1CC2E3CE0400A0A010A6B34-A-WebCom-EVehic", "lat": "41.705615" }, { "fid": "http://192.168.8.103:8080/js-cs-server/getImg?f=ce705d52fba54be3adf70fb578c8a58a.jpg", "id": "56a8acf66fcd485f9b23d22a40568e4c", "time": "2018-04-24 16:07:24", "lon": "123.494665", "remark": "", "position_desc": "", "name": "MTM2NzUxMTI3MDU=", "gName": "5pyq5YiG57uE", "sim": "13675112705", "tid": "6AD3501FF1CC2E3CE0400A0A010A6B34-A-WebCom-EVehic", "lat": "41.705634" }, { "fid": "http://192.168.8.103:8080/js-cs-server/getImg?f=f3dc93be3770493c82b3f32a68fd83b6.jpg", "id": "160c2a28c62a4e458ae426c6d7c25bf0", "time": "2018-04-24 16:04:04", "lon": "123.494661", "remark": "", "position_desc": "", "name": "MTM2NzUxMTI3MDU=", "gName": "5pyq5YiG57uE", "sim": "13675112705", "tid": "6AD3501FF1CC2E3CE0400A0A010A6B34-A-WebCom-EVehic", "lat": "41.705624" }
    ]));
  }
};
