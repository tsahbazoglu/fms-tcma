
db.getSisterDB('configdb').graph2.findOne({key: "agreementType"});

db.getSisterDB('configdb').graph2.update({key: "agreementType"}, {$set: {
        "db": "uysdb",
        "collection": "dataBankSetting",
        "menuOrder": 80,
        "userConstantNote": "",
        "form": "Z15",
        "name": "Z15 - Sözleşme Türü",
        "forms": "graphForm",
        "dimension": 1,
        "loginFkField": "_id",
        "type": "website",
        "defaultSortField": "order",
        "filter": {
            "forms": "agreementType"
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
                "accesscontrol": "uysuser,uysadmin,databankarchitect",
                "observable": false,
                "key": "name",
                "quickFilter": false
            },
            "dataTransfer": {
                "reportOrder": NumberLong(2000),
                "reportRendered": true,
                "rendered": true,
                "componentType": "inputText",
                "key": "dataTransfer",
                "field": "dataTransfer",
                "order": NumberLong(2000),
                "roleCheck": true,
                "name": "2011 Veri Aktarımı",
                "shortName": "2011 Veri Aktarımı",
                "money": false,
                "valueType": "java.lang.String",
                "readonly": false,
                "accesscontrol": "uysuser,uysadmin,databankarchitect",
                "observable": false,
                "quickFilter": false
            },
            "description": {
                "reportOrder": NumberLong(1000),
                "reportRendered": true,
                "rendered": true,
                "componentType": "inputText",
                "key": "description",
                "field": "description",
                "order": NumberLong(1000),
                "roleCheck": true,
                "name": "Açıklama",
                "shortName": "Açıklama",
                "money": false,
                "valueType": "java.lang.String",
                "readonly": false,
                "accesscontrol": "uysuser,uysadmin,databankarchitect",
                "observable": false,
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
                "accesscontrol": "uysuser,uysadmin,databankarchitect",
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
                "accesscontrol": "uysuser,uysadmin,databankarchitect",
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
                "accesscontrol": "uysuser,uysadmin,databankarchitect",
                "quickFilter": false
            }
        }
    }
}, {upsert: true});

