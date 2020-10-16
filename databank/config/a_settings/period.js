
db.getSisterDB('configdb').graph2.findOne({key: "period"});

db.getSisterDB('configdb').graph2.update({key: "period"}, {$set: {
        "db": "uysdb",
        "collection": "common",
        "menuOrder": 10,
        "form": "Z01",
        "name": "Z01 - Dönem",
        "forms": "graphForm",
        "dimension": 1,
        "userConstantNote": "",
        "loginFkField": "_id",
        "type": "website",
        "defaultSortField": "name",
        "filter": {
            "forms": "period"
        },
        "accesscontrol": [
            "uysadmin",
            "architect"
        ],
        "defaultCurrentQuery": function (searchObject) {
            return {};
        },
        "defaultHistoryQuery": function (searchObject) {
            return {};
        },
        "actions": {
            "new": {
                "role-architect": true,
                "none": false
            },
            "save": {
                "role-architect": true,
                "none": false
            },
            "delete": {
                "role-architect": true,
                "none": false
            },
            "download": true
        },
        "upperNodes": {
            "node_dataBankSetting": "Bilgi Bankası Ayarlar"
        },
        "fields": {
            "select": {
                "key": "select",
                "field": "select",
                "name": "Aktif/Pasif",
                "shortName": "Aktif/Pasif",
                "componentType": "selectBooleanCheckbox",
                "roleCheck": true,
                "reportRendered": true,
                "rendered": true,
                "readonly": false,
                "order": 300,
                "reportOrder": 300,
                "accesscontrol": "uysuser,uysadmin,architect",
                "valueType": "java.lang.Boolean",
                "quickFilter": false
            },
            "order": {
                "key": "order",
                "field": "order",
                "name": "Dönem Sırası",
                "shortName": "Dönem Sırası",
                "componentType": "inputText",
                "roleCheck": true,
                "reportRendered": true,
                "rendered": true,
                "readonly": false,
                "order": 275,
                "reportOrder": 275,
                "valueType": "java.lang.Integer",
                "accesscontrol": "uysuser,uysadmin,architect",
                "converter": "NumberConverter",
                "quickFilter": false
            },
            "value": {
                "key": "value",
                "field": "value",
                "name": "Dönem Değeri",
                "shortName": "Dönem Değeri",
                "componentType": "inputText",
                "roleCheck": true,
                "reportRendered": true,
                "rendered": true,
                "readonly": false,
                "order": 250,
                "reportOrder": 250,
                "valueType": "java.lang.Integer",
                "accesscontrol": "uysuser,uysadmin,architect",
                "converter": "NumberConverter",
                "quickFilter": false
            },
            "year": {
                "key": "year",
                "field": "year",
                "name": "Yil",
                "shortName": "Yil",
                "componentType": "inputText",
                "roleCheck": true,
                "reportRendered": true,
                "rendered": true,
                "readonly": false,
                "order": 250,
                "reportOrder": 250,
                "valueType": "java.lang.Integer",
                "accesscontrol": "uysuser,uysadmin,architect",
                "converter": "NumberConverter",
                "quickFilter": false
            },
            "month": {
                "key": "month",
                "field": "month",
                "name": "Ay",
                "shortName": "Ay",
                "componentType": "inputText",
                "roleCheck": true,
                "reportRendered": true,
                "rendered": true,
                "readonly": false,
                "order": 250,
                "reportOrder": 250,
                "valueType": "java.lang.Integer",
                "accesscontrol": "uysuser,uysadmin,architect",
                "converter": "NumberConverter",
                "quickFilter": false
            },
            "name": {
                "key": "name",
                "field": "name",
                "name": "Dönem Adı",
                "shortName": "Dönem Adı",
                "componentType": "inputText",
                "roleCheck": true,
                "reportRendered": true,
                "rendered": true,
                "readonly": false,
                "order": 200,
                "reportOrder": 200,
                "accesscontrol": "uysuser,uysadmin,architect",
                "valueType": "java.lang.String",
                "quickFilter": false
            },
            "periodstarttime": {
                "key": "periodstarttime",
                "field": "periodstarttime",
                "name": "Dönem Başlangıç Tarihi",
                "shortName": "Dönem Başlangıç Tarihi",
                "componentType": "inputDate",
                "roleCheck": true,
                "reportRendered": true,
                "rendered": true,
                "readonly": false,
                "order": 180,
                "reportOrder": 180,
                "accesscontrol": "uysuser,uysadmin,architect",
                "valueType": "java.util.Date",
                "quickFilter": false
            },
            "periodendtime": {
                "key": "periodendtime",
                "field": "periodendtime",
                "name": "Dönem Bitiş Tarihi",
                "shortName": "Dönem Bitiş Tarihi",
                "componentType": "inputDate",
                "roleCheck": true,
                "reportRendered": true,
                "rendered": true,
                "readonly": false,
                "order": 160,
                "reportOrder": 160,
                "accesscontrol": "uysuser,uysadmin,architect",
                "valueType": "java.util.Date",
                "quickFilter": false
            },
            "datainputstarttime": {
                "key": "datainputstarttime",
                "field": "datainputstarttime",
                "name": "Veri Girişi Başlangıç Tarihi",
                "shortName": "Veri Girişi Başlangıç Tarihi",
                "componentType": "inputDate",
                "roleCheck": true,
                "reportRendered": true,
                "rendered": true,
                "readonly": false,
                "order": 140,
                "reportOrder": 140,
                "accesscontrol": "uysuser,uysadmin,architect",
                "valueType": "java.util.Date",
                "quickFilter": false
            },
            "datainputendtime": {
                "key": "datainputendtime",
                "field": "datainputendtime",
                "name": "Veri Girişi Bitiş Tarihi",
                "shortName": "Veri Girişi Bitiş Tarihi",
                "componentType": "inputDate",
                "roleCheck": true,
                "reportRendered": true,
                "rendered": true,
                "readonly": false,
                "order": 120,
                "reportOrder": 120,
                "accesscontrol": "uysuser,uysadmin,architect",
                "valueType": "java.util.Date",
                "quickFilter": false
            }
        }
    }
}, {upsert: true});

