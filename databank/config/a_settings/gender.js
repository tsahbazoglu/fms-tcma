
db.getSisterDB('configdb').graph2.findOne({key: "gender"});

db.getSisterDB('configdb').graph2.update({key: "gender"}, {$set: {
        "schemaVersion": "1.0.0",
        "db": "uysdb",
        "collection": "dataBankSetting",
        "userConstantNote": "",
        "menuOrder": 110,
        "form": "Z18",
        "name": "Z18 - Cinsiyet",
        "forms": "graphForm",
        "dimension": 1,
        "loginFkField": "_id",
        "type": "website",
        "defaultSortField": "order",
        "filter": {forms: "gender"},
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
                "accesscontrol": "uysuser,uysadmin,architect"
            },
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
                "key": "name"
            },
            "dataTransfer": {
                "reportOrder": NumberLong(2000),
                "order": NumberLong(2000),
                "reportRendered": true,

                "rendered": true,
                "componentType": "inputText",
                "key": "dataTransfer",
                "field": "dataTransfer",
                "roleCheck": true,
                "name": "2011 Veri Aktarımı",
                "shortName": "2011 Veri Aktarımı",
                "money": false,
                "valueType": "java.lang.String",
                "readonly": false,
                "accesscontrol": "uysuser,uysadmin,architect",
                "observable": false
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
                "accesscontrol": "uysuser,uysadmin,architect"
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
                "accesscontrol": "uysuser,uysadmin,architect"
            }
        }
    }
}, {upsert: true});

