let { generator, db, base64 } = require('../../core/framework');

var build = (datas) => {
  var json = { c: 0, data: { pList: datas, count: datas.length } }
  return JSON.stringify(json);
}

module.exports = {
  "rootpath": "/js-cs-server/postvan/",
  "mapping": {
    "point_add": { description: '新增监控点', auth: false, url: 'point/add' },
    "point_remove": { description: '新增监控点', auth: false, url: 'point/remove' },
    "point_bind": { description: '监控点绑定内容', auth: false, url: 'point/bind' },
    "point_getbind": { description: '获取监控点绑定内容', auth: false, url: 'point/getbind' },
    "query": { description: '', auth: false, url: 'point/query' },
  },

  "point_add": (req, res) => { res.send('{"c":0}'); },
  "point_remove": (req, res) => { res.send('{"c":0}'); },
  "point_bind": (req, res) => { res.send('{"c":0}'); },
  "point_getbind": (req, res) => {
    res.send(build([
      { "id": "1", "name": "c2pm5rWL6K+VMw==" },
      { "id": "2", "name": "c2pm5rWL6K+VMw==" },
      { "id": "3", "name": "c2pm5rWL6K+VMw==" }
    ]));
  },
  "query": (req, res) => {
    res.send(build([
      { "id": "1", "name": "c2pm5rWL6K+VMw==", "remark": "c2pm5rWL6K+VMw==", "longitude": "20180316001", "latitude": "2" },
      { "id": "2", "name": "c2pm5rWL6K+VMw==", "remark": "c2pm5rWL6K+VMg==", "longitude": "20180314003", "latitude": "2" },
      { "id": "3", "name": "c2pm5rWL6K+VMw==", "remark": "c2pm5rWL6K+VMQ==", "longitude": "20180314002", "latitude": "2" }
    ]));
  },
}