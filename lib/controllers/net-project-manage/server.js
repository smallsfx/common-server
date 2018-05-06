let { generator, db, base64 } = require('../../core/framework');

var build = (datas) => {
  var json = { ret: 0, data: { list: datas, count: datas.length } }
  return JSON.stringify(json);
}
var buildData = (data) => {
  var json = { ret: 0, data: data }
  return JSON.stringify(json);
}

module.exports = {
  "rootpath": "/gv/net-project-manage/",

  "mapping": {
    'Login': { description: '1.登录（OK）', auth: false },
    "BatchList": { description: '2.批次列表（OK）', auth: false },
    "BatchInfo": { description: '3.批次详情(OK)', auth: false },
    "BatchScheduleList": { description: '4.工作进度列表(OK)', auth: false },
    "ProjectDetails": { description: '5.工程详情(ok)', auth: false },
    "ProphaseInfo": { description: '6.前期资料状态查询（OK）', auth: false },
    "ProphaseUpdate": { description: '7.前期资料状态更新（OK）', auth: false },
    "CompletionInfo": { description: '8.竣工资料状态查询（OK）', auth: false },
    "CompletionUpdate": { description: '9.竣工资料状态更新（OK）', auth: false },
    "ProgressCommit": { description: '10.工程进度上报（增加了imgs参数）', auth: false },
    "ProgressSum": { description: '11.工程进度汇总（OK）', auth: false },
    "ProgressDetailInfo": { description: '12.工程进度明细详情（回应增加了imglist）', auth: false },
    "CheckCommit": { description: '13.提交审批意见（OK）', auth: false },
    "GetMessage": { description: '14.获取提醒（OK）', auth: false },
    "UploadImg": { description: '99.工程进度照片上传（OK）', auth: false },
  },

  'Login': (req, res) => {
    res.send(build({
      "gender": 0,
      "roleid": "61",
      "deptid": 63,
      "userid": 69,
      "parentdeptid": 61,
      "state": 0,
      "lastReqTime": 1524483944053,
      "loginname": "dqg_fx",
      "rolename": "分公司运维单位操作员",
      "realname": "董",
      "token": "6d453f6f-eb91-4793-84ab-734c4745ca60",
      "deptname": "清河门供电分公司",
      "rolekey": "operatorRole", //（用来判断角色类型）
      "isdelete": 0
    }));
  },

  "BatchList": (req, res) => {
    res.send(buildData({
      "batchlist": [{
        "name": "2017农网改造升级工程", //（批次名称）
        "parameteritemid": 162  //（批次编号）
      }, {
        "name": "2017年结余工程",
        "parameteritemid": 161
      }, {
        "name": "2018年农网改造升级工程",
        "parameteritemid": 141
      }]
    }));
  },

  "BatchInfo": (req, res) => {
    res.send(buildData({
      "finishWork": {//工作进度(已经完成的数量)
        "meaturedeviceinstall": 11,//安装计量装置（户）
        "towerassemblage": 21,//组立杆塔 (基)
        "wireerectionlow": 1.2,//架设0.4kV导线亘长(千米)
        "foundationexcavation": 31,//开挖基坑（个）
        "wireerection": 0.0,//架设10kV导线亘长(千米)
        "lineswitch": 0,//安装线路开关（台）
        "transformerinstall": 1//安装变压器（台）
      },
      "planWork": {//工作进度(计划完成的数量)
        "meaturedeviceinstall": 104,//安装计量装置（户）
        "towerassemblage": 56,//组立杆塔 (基)
        "wireerectionlow": 2.67,//架设0.4kV导线亘长(千米)
        "foundationexcavation": 56,//开挖基坑（个）
        "wireerection": 0.14,//架设10kV导线亘长(千米)
        "lineswitch": 0,//安装线路开关（台）
        "transformerinstall": 1//安装变压器（台）
      },
      "FinishProgress": {
        "FinishProgress": "73%"  //总工程完成进度
      },
      "info": {
        "mqgzl": 736810, // 目前工作量
        "amount": 67, //投资金额
        "plancompletiontime": "2018-12-15",//计划竣工时间
        "planfinalsettletime": "2018-12-29",//计划决算时间
        "plansettletime": "2018-12-22",//计划结算时间
        "beginworktime": "0001-01-01"//开工时间
      }
    }));
  },

  "BatchScheduleList": (req, res) => {
    res.send(buildData({
      "operationunit": "阜新供电公司",        //运维单位(主工程)
      "projectname": "阜新清河门区蜘蛛山镇清山线0.4kV艾林村部（3-5组)台区改造工程",        //工程名称(主工程)
      "branch": [{
        "operationunit": "阜新供电公司",       //运维单位(子工程)  
        "projectname": "阜新清河门区蜘蛛山镇清山线0.4kV艾林村部（3-5组)台区改造工程",        //工程名称(子工程)
        "FinishProgress": "73.0%"    //分公司完成进度百分比
      }],
      "FinishProgress": "73.0%"         //主工程完成进度百分比
    }));
  },

  "ProjectDetails": (req, res) => {
    res.send(buildData({
      "dagd": {
        // 档案归档(如果不是主工程不显示 mainprojectid = 0主工程其他是子工程)
        "prophasedata": {//前期资料归档记录
          "cbsjwj": 1,//初步设计文件
          "qqglwj": 1,//前期工程监理文件
          "qqsbsgwj": 1,//前期配电线路及设备施工文件
          "ht": 1,//合同
          "sjbgwj": 1,//设计变更文件
          "sgglwj": 1,//施工图设计、施工管理文件
          "prophasedataid": 21,
          "qqgcjlwj": 1,//前期管理文件
          "projectid": 304
        },
        "completiondata": {
          "sbccwj": 1,//设备出厂文件
          "completiondataid": 21,
          "jgsbsgwj": 1,//配电线路及设备施工文件
          "jgt": 1,//竣工图
          "zcyjwj": 1,//竣工投产资产移交等文件 
          "jggcjlwj": 1,//竣工工程监理文件
          "sxcl": 1,//声音材料
          "projectid": 304
        }
      },
      "gcjd": {//工程进度
        "meaturedeviceinstall": 104,//安装计量装置(户)
        "mainprojectid": 0,
        "towerassemblage": 56,//组立杆塔(基)
        "wireerectionlow": 2.67,//架设0.4kV导线亘长(千米)
        "projectclass": 0,
        "foundationexcavation": 56,//开挖基坑（个）
        "wireerection": 0.14,//架设10kV导线亘长(千米)
        "lineswitch": 0,//安装线路开关（台）
        "transformerinstall": 1//安装变压器（台）
      },
      "sgmx": {//施工明细(折线图)
        "FouondationExcavation": [{//开挖基坑(个)
          "count": 30,
          "time": "2018-01-24"
        }, {
          "count": 1,
          "time": "2018-01-29"
        }],
        "TowerAssemblage": [{//组立杆塔
          "count": 20,
          "time": "2018-01-24"
        }, {
          "count": 1,
          "time": "2018-01-29"
        }],
        "WireErectionLow": [{//架设0.4kV导线亘长(千米)
          "count": 1.2,
          "time": "2018-01-24"
        }, {
          "count": 0.0,
          "time": "2018-01-29"
        }],
        "TransformerInstall": [{//安装变压器（台）
          "count": 0,
          "time": "2018-01-24"
        }, {
          "count": 1,
          "time": "2018-01-29"
        }],
        "LineSwitch": [{//安装线路开关（台）
          "count": 0,
          "time": "2018-01-24"
        }, {
          "count": 0,
          "time": "2018-01-29"
        }],
        "WireErection": [{//架设10kV导线亘长(千米)
          "count": 0.0,
          "time": "2018-01-24"
        }, {
          "count": 0.0,
          "time": "2018-01-29"
        }],
        "MeatureDeviceInstall": [{//安装计量装置（户）
          "count": 10,
          "time": "2018-01-24"
        }, {
          "count": 1,
          "time": "2018-01-29"
        }]
      },
      "sgjd": {
        // 施工进度  例; 已完成=（finish+TowerAssemblage） 未完成=(residua + TowerAssemblage)
        "finishTowerAssemblage": "21",
        "residualWireErection": "0.14",
        "finishLineSwitch": "0",
        "residualTransformerInstall": "0",
        "residualLineSwitch": "0",
        "residualWireErectionLow": "0.14",
        "residualMeatureDeviceInstall": "93",
        "finishMeatureDeviceInstall": "11",
        "finishFouondationExcavation": "31",
        "residualFouondationExcavation": "25",
        "finishWireErection": "0",
        "residualTowerAssemblage": "35",
        "finishWireErectionLow": "1.2",
        "finishTransformerInstall": "1"
      },
      "gcxx": {//工程信息和物资信息在一起反的(提报物资截止时间  物资签订合同截止时间  合同计划最迟供货时间  实际到货截止时间 )
        "mqgzl": 0,
        "projectclass": 台区,//工程类别
        "materialssigndeadline": "2018-01-31",//物资签订合同截止时间
        "actualarrivaldeadline": "2018-01-31",//实际到货截止时间
        "__entityClass": "com.gvsoft.FuXinProjectManagement.model.Project",
        "designapprovenum": "辽电发策[2016]xxx号",//初步设计批复文号
        "reportmaterialsdeadline": "2018-01-31",//提报物资截止时间
        "operationunit": "阜新供电公司",//运维单位
        "projectname": "阜新清河门区蜘蛛山镇清山线0.4kV艾林村部（3-5组)台区改造工程",//工程名称
        "amount": 67.03,//投资金额
        "gcnd": "2018",//工程年度
        "investedplanapprovenum": "辽电发策[2016]xxx号",//投资计划批复文号
        "orgno": 63,
        "contractplansupplytime": "2018-01-31",//合同计划最迟供货时间
        "gcpcname": "2018年农网改造升级工程",//工程批次
        "tempplanfinalsettletime": "2018-12-29", //计划决算时间
        "tempplansettletime": "2018-12-22",//计划结算时间
        "tempplancompletiontime": "2018-12-15",//计划竣工时间，
        "designunit": '',//设计单位
        "supervisingunit": '',//监理单位
        "operationunit": ''//运维单位
      },
      "gcztjd": {//工程总体进度
        "finish": "73%",//已完成
        "residual": "27%"//未完成
      },
      "projectClass": 2//1=千伏线路 2=台区
    }));
  },

  "ProphaseInfo": (req, res) => {
    res.send(buildData({
      "cbsjwj": 1,// （初步设计文件）
      "qqglwj": 1,// （前期管理文件）
      "qqsbsgwj": 1,// （前期配电线路及设备施工文件）
      "ht": 1,// （合同）
      "sjbgwj": 1,// （设计变更文件）
      "sgglwj": 1,// （施工图设计、施工管理文件）
      "prophasedataid": 21,
      "qqgcjlwj": 1,// （前期工程监理文件）
      "projectid": 304
    }));
  },

  "ProphaseUpdate": (req, res) => {
    res.send(buildData({}));
  },

  "CompletionInfo": (req, res) => {
    res.send(buildData({
      "sbccwj": 0,//（设备出厂文件）
      "completiondataid": 21,
      "jgsbsgwj": 1,//（配电线路及设备施工文件）
      "jgt": 0,//（竣工图）
      "zcyjwj": 1,//（竣工投产资产移交等文件）
      "jggcjlwj": 1,//（竣工工程监理文件）
      "sxcl": 1,//（声像材料）
      "projectid": 304
    }));
  },

  "CompletionUpdate": (req, res) => {
    res.send(buildData({}));
  },

  "ProgressCommit": (req, res) => {
    res.send(buildData({}));
  },

  "ProgressSum": (req, res) => {
    res.send(buildData({
      "finishWork": {
        "meaturedeviceinstall": 11,
        "towerassemblage": 21,
        "wireerectionlow": 1.2,
        "foundationexcavation": 31,
        "wireerection": 0.0,
        "lineswitch": 0,
        "transformerinstall": 1,
        "projectid": 305
      },
      "planWork": {
        "meaturedeviceinstall": 104,
        "towerassemblage": 56,
        "wireerectionlow": 2.67,
        "foundationexcavation": 56,
        "wireerection": 0.14,
        "lineswitch": 0,
        "transformerinstall": 1,
        "projectid": 305
      },
      "list": [{
        "projectcfinishinfoid": 261,
        "oprationtime": 1517155200000
      }, {
        "projectcfinishinfoid": 243,
        "oprationtime": 1516723200000
      }, {
        "projectcfinishinfoid": 242,
        "oprationtime": 1516723200000
      }]
    }));
  },

  "ProgressDetailInfo": (req, res) => {
    res.send(buildData({
      "meaturedeviceinstall": 1,
      "projectcfinishinfoid": 301,
      "mainprojectid": 0,
      "towerassemblage": 1,
      "wireerectionlow": 0.5,
      "projectclass": 0,
      "oprationtime": 1524672000000,
      "imglist": [{
        "img": "3.jpg"
      }, {
        "img": "4.jpg"
      }, {
        "img": "1.jpg"
      }, {
        "img": "2.jpg"
      }],
      "operator": "董",
      "foundationexcavation": 1,
      "wireerection": 0.5,
      "lineswitch": 1,
      "transformerinstall": 1,
      "projectid": 305,
      "projectconstructionplaninfoid": 283
    }));
  },

  "CheckCommit": (req, res) => {
    res.send(buildData({}));
  },

  "GetMessage": (req, res) => {
    res.send(buildData({
      "msglist": [{
        "msg": "【阜新清河门区蜘蛛山镇清山线0.4kV艾林村部（3-5组)台区改造工程】的前期文档尚未完全归档。未归档文件包括：前期管理文件；合同；初步设计文件；施工图设计、施工管理文件；设计变更文件；前期工程监理文件；前期配电线路及设备施工文件"
      }, {
        "msg": "【阜新清河门区蜘蛛山镇清山线0.4kV艾林村部（3-5组)台区改造工程】的竣工文档尚未完全归档。未归档文件包括：竣工工程监理文件；竣工投产资产移交等文件；声像材料；配电线路及设备施工文件；竣工图；设备出厂文件"
      }]
    }));
  },

  "UploadImg": (req, res) => {
    res.send(buildData({
      "filename": "20180426/35e4d5b5-67f0-4cd8-85e6-26aae4ca6711.jpg"
    }));
  }
};