
db.getSisterDB('configdb').graph2.findOne({key: "periodicalTradingVolumeType"});

db.getSisterDB('configdb').graph2.update({key: "periodicalTradingVolumeType"}, {$set: {
        "schemaVersion": "1.0.0",
        "key": "periodicalTradingVolumeType",
        "db": "uysdb",
        "collection": "dataBankSetting",
        "menuOrder": 50,
        "userConstantNote": "",
        "form": "Z12",
        "name": "Z12 - Piyasa İşlem Hacmi Tipi",
        "forms": "graphForm",
        "loginFkField": "_id",
        "type": "website",
        "dimension": 1,
        "filter": {forms: "periodicalTradingVolumeType"},
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
                "reportOrder": NumberLong(8000),
                "order": NumberLong(8000),
                "name": "Ad",
                "shortName": "Ad",
                "componentType": "inputText",
                "roleCheck": true,
                "reportRendered": true,
                "rendered": true,
                "readonly": false,
                "valueType": "java.lang.String",
                "accesscontrol": "uysadmin,architect"
            },
            "converter": {
                "key": "converter",
                "field": "converter",
                "reportOrder": NumberLong(6000),
                "reportRendered": true,
                "rendered": true,
                "order": NumberLong(6000),
                "componentType": "selectOneMenu",
                "roleCheck": true,
                "name": "Dönüştürücü",
                "shortName": "Dönüştürücü",
                "money": false,
                "valueType": "java.lang.String",
                "readonly": false,
                "accesscontrol": "uysadmin,architect",
                "observable": false,
                "converter": "SelectOneStringConverter",
                "items": [
                    "MoneyConverter",
                    "NumberConverter",
                    "NumberConverter : #.###.###",
                    "NumberConverter : #.###.###,#",
                    "NumberConverter : #.###.###,##",
                    "NumberConverter : #.###.###,###",
                    "NumberConverter : #.###.###,####",
                    "NumberConverter : #.###.###,#####"
                ]
            },
            "relations": {
                "key": "relations",
                "field": "relations",
                "reportOrder": NumberLong(5000),
                "order": NumberLong(5000),
                "componentType": "inputText",
                "roleCheck": true,
                "readonly": false,
                "reportRendered": true,
                "rendered": true,
                "money": false,
                "observable": false,
                "name": "Yer Alacağı Formüller",
                "shortName": "Yer Alacağı Formüller",
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
                "accesscontrol": "uysadmin,architect"
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
                "accesscontrol": "uysadmin,architect"
            }
        },
        "defaultSortField": "order"
    }
}, {upsert: true});

