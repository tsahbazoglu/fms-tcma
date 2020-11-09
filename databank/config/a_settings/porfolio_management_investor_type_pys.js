
db.getSisterDB('configdb').graph2.findOne({key: "porfolio_management_investor_type_pys"});

db.getSisterDB('configdb').graph2.update({key: "porfolio_management_investor_type_pys"}, {$set: {
        "key": "porfolio_management_investor_type_pys",
        "userConstantNote": "",
        "db": "uysdb",
        "collection": "dataBankSetting",
        "menuOrder": 60,
        "form": "Z13_PYS",
        "name": "Z13_PYS - Varlık Yönetimi Yatırımcı Türü (PYS)",
        "forms": "graphForm",
        "dimension": 1,
        "loginFkField": "_id",
        "type": "website",
        "filter": {
            forms: "porfolio_management_investor_type_pys"
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
                "key": "name",
                "field": "name",
                "name": "Ad",
                "shortName": "Ad",
                "reportOrder": NumberLong(9000),
                "order": NumberLong(9000),
                "reportRendered": true,
                "rendered": true,
                "componentType": "inputText",
                "roleCheck": true,
                "money": false,
                "valueType": "java.lang.String",
                "readonly": false,
                "accesscontrol": "uysadmin,architect",
                "observable": false,
            },
            "code": {
                "key": "code",
                "field": "code",
                "name": "Kod",
                "shortName": "Kod",
                "reportOrder": NumberLong(10000),
                "order": NumberLong(1000),
                "reportRendered": true,
                "rendered": true,
                "roleCheck": true,
                "money": false,
                "readonly": false,
                "observable": false,
                "componentType": "inputText",
                "valueType": "java.lang.String",
                "accesscontrol": "uysadmin,architect"
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
                "accesscontrol": "uysadmin,architect"
            },
            "validSince": {
                "key": "validSince",
                "field": "validSince",
                "name": "Geçerli Olduğu Dönemden (İtibaren)",
                "shortName": "Geçerli Olduğu Dönemden (İtibaren)",
                "componentType": "inputText",
                "roleCheck": true,
                "reportRendered": true,
                "rendered": true,
                "readonly": false,
                "order": 250,
                "reportOrder": 250,
                "valueType": "java.lang.Integer",
                "converter": "NumberConverter",
                "accesscontrol": "uysadmin,architect"
            }
        }
    }
}, {upsert: true});

