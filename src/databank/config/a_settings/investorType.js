
db.getSisterDB('configdb').graph2.findOne({key: "investorType"});

db.getSisterDB('configdb').graph2.update({key: "investorType"}, {$set: {
        "schemaVersion": "1.0.0",
        "db": "uysdb",
        "collection": "dataBankSetting",
        "menuOrder": 70,
        "userConstantNote": "",
        "form": "Z14",
        "name": "Z14 - Yatırımcı Türleri",
        "forms": "graphForm",
        "dimension": 1,
        "loginFkField": "_id",
        "type": "website",
        "defaultSortField": "order",
        "filter": {
            "forms": "investorType"
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
                "permit": ["architect"],
                "func": null,
                "shoot": false
            },
            "save": {
                "permit": ["architect"],
                "func": null,
                "shoot": false
            },
            "delete": {
                "permit": ["architect"],
                "func": null,
                "shoot": false
            },
            "download": {
                "permit": [],
                "func": null,
                "shoot": false
            }
        },
        "upperNodes": {
            "node_dataBankSetting": "Bilgi Bankası Ayarlar"
        },
        "fields": {
            "name": {
                "reportOrder": NumberLong(2000),
                "reportRendered": true,
                "rendered": true,
                "componentType": "inputText",
                "field": "name",
                "order": NumberLong(2000),
                "roleCheck": true,
                "name": "Ad",
                "money": false,
                "valueType": "java.lang.String",
                "shortName": "Ad",
                "readonly": false,
                "accesscontrol": "uysuser,uysadmin,architect",
                "observable": false,
                "key": "name",
                "quickFilter": false
            },
            "relations": {
                "reportOrder": NumberLong(1000),
                "reportRendered": true,
                "rendered": true,
                "componentType": "inputText",
                "field": "relations",
                "order": NumberLong(1000),
                "roleCheck": true,
                "name": "Yer Alacağı Formlar",
                "money": false,
                "valueType": "java.lang.String",
                "shortName": "Yer Alacağı Formlar",
                "readonly": false,
                "accesscontrol": "uysuser,uysadmin,architect",
                "observable": false,
                "key": "relations",
                "quickFilter": false
            },
            "en_US": {
                "key": "en_US",
                "field": "en_US",
                "name": "İngilizce",
                "shortName": "İngilizce",
                "reportOrder": NumberLong(500),
                "order": NumberLong(500),
                "reportRendered": true,
                "rendered": true,
                "roleCheck": true,
                "money": false,
                "readonly": false,
                "observable": false,
                "componentType": "inputText",
                "valueType": "java.lang.String",
                "accesscontrol": "uysuser,uysadmin,architect",
                "quickFilter": false
            },
            "order": {
                "order": 50000,
                "reportOrder": 50000,
                "reportRendered": true,
                "rendered": true,
                "componentType": "inputText",
                "field": "order",
                "key": "order",
                "roleCheck": true,
                "money": false,
                "readonly": false,
                "observable": false,
                "name": "Sıralama",
                "valueType": "java.lang.String",
                "shortName": "Sıralama",
                "accesscontrol": "uysuser,uysadmin,architect",
                "quickFilter": false
            },
            "code": {
                "order": 45000,
                "reportOrder": 45000,
                "reportRendered": true,
                "rendered": true,
                "componentType": "inputText",
                "field": "code",
                "key": "code",
                "roleCheck": true,
                "money": false,
                "readonly": false,
                "observable": false,
                "name": "Kod",
                "shortName": "Kod",
                "valueType": "java.lang.String",
                "accesscontrol": "uysuser,uysadmin,architect",
                "quickFilter": false
            },
            "note": {
                "key": "note",
                "field": "note",
                "name": "Açıklama",
                "shortName": "Açıklama",
                "reportOrder": NumberLong(400),
                "order": NumberLong(400),
                "reportRendered": true,
                "rendered": true,
                "componentType": "inputTextarea",
                "roleCheck": true,
                "money": false,
                "valueType": "java.lang.String",
                "readonly": false,
                "accesscontrol": "uysadmin,architect",
                "observable": false,
                "quickFilter": false
            }
        }
    }
}, {upsert: true});

