
db.getSisterDB('configdb').graph2.findOne({key: "template"});

db.getSisterDB('configdb').graph2.update({key: "template"}, {$set: {
        "db": "uysdb",
        "collection": "dataBankTemplate",
        "menuOrder": 5,
        "form": "Z63",
        "name": "Z63 - Şablonlar",
        "forms": "graphForm",
        "dimension": 1,
        "userConstantNote": "",
        "loginFkField": "_id",
        "type": "website",
        "defaultSortField": "order",
        "filter": {"forms": "template"},
        "accesscontrol": ["uysadmin", "architect"],
        "defaultCurrentQuery": function (searchObject) {
            return {};
        },
        "defaultHistoryQuery": function (searchObject) {
            return {};
        },
        "actions": {
            "new": {
                "permit": ["architect"],
                "func": null,
                "shoot": null
            },
            "save": {
                "permit": ["architect"],
                "func": null,
                "shoot": null
            },
            "delete": {
                "permit": ["architect"],
                "func": null,
                "shoot": null
            },
            "download": {
                "permit": null,
                "func": null,
                "shoot": null
            }
        },
        "upperNodes": {
            "node_dataBankSetting": "Bilgi Bankası Ayarlar"
        },
        "fields": {
            "order": {
                "key": "order",
                "field": "order",
                "componentType": "inputText",
                "order": 8000,
                "reportOrder": 8000,
                "roleCheck": true,
                "money": false,
                "readonly": false,
                "observable": false,
                "reportRendered": true,
                "rendered": true,
                "name": "Sıra",
                "shortName": "Sıra",
                "valueType": "java.lang.Integer",
                "accesscontrol": "uysadmin,architect",
                "quickFilter": false
            },
            "value": {
                "key": "value",
                "field": "value",
                "name": "Değer",
                "shortName": "Değer",
                "componentType": "inputText",
                "roleCheck": true,
                "reportRendered": true,
                "rendered": true,
                "readonly": false,
                "order": 190,
                "reportOrder": 190,
                "valueType": "java.lang.String",
                "accesscontrol": "uysadmin,architect",
                "quickFilter": false
            },
            "name": {
                "key": "name",
                "field": "name",
                "name": "Şablon Adı",
                "shortName": "Şablon Adı",
                "componentType": "inputText",
                "roleCheck": true,
                "reportRendered": true,
                "rendered": true,
                "readonly": false,
                "order": 200,
                "reportOrder": 200,
                "valueType": "java.lang.String",
                "accesscontrol": "uysadmin,architect",
                "quickFilter": false
            },
            "validPeriods": {
                "key": "validPeriods",
                "field": "validPeriods",
                "name": "Geçerli Dönemler",
                "shortName": "Geçerli Dönemler",
                "componentType": "inputTextarea",
                "roleCheck": true,
                "reportRendered": true,
                "rendered": true,
                "readonly": false,
                "order": 180,
                "reportOrder": 180,
                "valueType": "java.lang.String",
                "accesscontrol": "uysadmin,architect",
                "quickFilter": false
            },
            "note": {
                "key": "note",
                "field": "note",
                "name": "Not",
                "shortName": "Not",
                "componentType": "inputTextarea",
                "roleCheck": true,
                "reportRendered": true,
                "rendered": true,
                "readonly": false,
                "order": 210,
                "reportOrder": 210,
                "valueType": "java.lang.String",
                "accesscontrol": "uysadmin,architect",
                "quickFilter": false
            }
        }
    }
}, {upsert: true});

