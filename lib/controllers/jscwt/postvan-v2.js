let { generator, db, base64 } = require('../../core/framework');

var build = (datas) => {
  var json = { c: 0, data: { pList: datas, count: datas.length } }
  return JSON.stringify(json);
}

module.exports = {
  "rootpath": "/js-cs-server/",
  "mapping": {
    "list_region_yz": { description: '区域列表', auth: false },
    "add_region_yz": { description: '新增', auth: false },
    "update_region_yz": { description: '修改', auth: false },
    "delete_region_yz": { description: '删除', auth: false },

    "region_relation": { description: '区域关联车辆与时间', auth: false },
    "region_relation_update": { description: '修改区域关联车辆与时间', auth: false },
    "relationed_region_detail": { description: '已关联区域详情', auth: false },
    'report_remind_yz': { description: '告警提醒', auth: false },
    'report_list_yz': { description: '告警列表', auth: false },
  },

  "list_region_yz": (req, res) => {
    res.send(build([
      { "id": "1", "name": "c2pm5rWL6K+VMw==", "remark": "c2pm5rWL6K+VMw==", "location": "1,2" },
      { "id": "2", "name": "c2pm5rWL6K+VMg==", "remark": "c2pm5rWL6K+VMg==", "location": "1,2" },
      { "id": "3", "name": "c2pm5rWL6K+VMQ==", "remark": "c2pm5rWL6K+VMQ==", "location": "1,2" }
    ]));
  },
  //sessionId--str,name--bstr--区域名称,remark--bstr--备注信息，location--str--区域坐标（经度，纬度）
  "add_region_yz": (req, res) => { res.send('{"c":0}'); },
  //sessionId--str, id--str--区域ID, name--bstr--区域名称, remark--bstr--备注信息
  "update_region_yz": (req, res) => { res.send('{"c":0}'); },
  //sessionId--str, id--str--区域ID
  "delete_region_yz": (req, res) => { res.send('{"c":0}'); },
  //sessionId--str, tId--str--目标ID（用逗号分隔）, eTime--str--执行时间
  "region_relation": (req, res) => { res.send('{"c":0}'); },
  //sessionId--str, timeId--str--时间标识ID, tId--str--目标ID（用逗号分隔）, eTime--str--执行时间
  "region_relation_update": (req, res) => { res.send('{"c":0}'); },
  //sessionId--str, id--str--区域ID
  "relationed_region_detail": (req, res) => {
    let json = {
      c: 0,
      data: {
        id: '区域ID',
        name: 'c2pm5rWL6K+VMw==',
        remark: 'c2pm5rWL6K+VMw==',
        location: '1,2',
        timeList: [
          {
            timeId: '1',
            eTime: 'c2pm5rWL6K+VMQ==',
            tList: [
              {
                tId: 't-1',
                tName: 'c2pm5rWL6K+VMw==',
                gName: 'c2pm5rWL6K+VMw==',
                sim: '目标sim卡叼'
              }, {
                tId: 't-2',
                tName: 'c2pm5rWL6K+VMw==',
                gName: 'c2pm5rWL6K+VMw==',
                sim: '目标sim卡叼'
              }
            ]
          },
          {
            timeId: '2',
            eTime: 'c2pm5rWL6K+VMQ==',
            tList: [
              {
                tId: 't-1',
                tName: 'c2pm5rWL6K+VMw==',
                gName: 'c2pm5rWL6K+VMw==',
                sim: '目标sim卡叼'
              }, {
                tId: 't-2',
                tName: 'c2pm5rWL6K+VMw==',
                gName: 'c2pm5rWL6K+VMw==',
                sim: '目标sim卡叼'
              }
            ]
          }
        ]
      }
    };
    res.send(JSON.stringify(json));
  },
  "report_remind_yz": (req, res) => { res.send('{"c":0,"count":10}'); },
  //sessionId--str--，name--bstr--区域名称，sTime--str--开始时间, eTime--str--结束时间
  "report_list_yz": (req, res) => {
    res.send(build([
      { "id": "1", "sim": "13800202", "tId": "t-1", "name": "c2pm5rWL6K+VMw==", "gName": "c2pm5rWL6K+VMw==", "tName": "c2pm5rWL6K+VMw==", "count": 9 }
    ]));
  },
}










