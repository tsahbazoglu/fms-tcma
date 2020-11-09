
db.getSisterDB('configdb').graph2.findOne({key: "income"});

db.getSisterDB('configdb').graph2.update({key: "income"}, {$set: {
        "schemaVersion": "1.0.0",
        "db": "uysdb",
        "collection": "dataBankIncome",
        "menuOrder": 150,
        "userConstantNote": "",
        "form": "Z30",
        "name": "Z30 - Gelir",
        "forms": "graphForm",
        "dimension": 1,
        "loginFkField": "_id",
        "type": "website",
        "defaultSortField": "detailOrder",
        "filter": {forms: "income"},
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
            "detailOrder": {
                "reportOrder": 12000,
                "reportRendered": true,
                "rendered": true,
                "componentType": "inputText",
                "field": "detailOrder",
                "key": "detailOrder",
                "order": 12000,
                "roleCheck": true,
                "name": "Detay Sıralama",
                "shortName": "Detay Sıralama",
                "money": false,
                "valueType": "java.lang.Integer",
                "readonly": false,
                "accesscontrol": "uysuser,uysadmin,architect",
                "observable": false
            },
            "abstractOrder": {
                "reportOrder": 11000,
                "order": 11000,
                "reportRendered": true,
                "rendered": true,
                "componentType": "inputText",
                "field": "abstractOrder",
                "key": "abstractOrder",
                "roleCheck": true,
                "name": "Özet Sıralama",
                "shortName": "Özet Sıralama",
                "money": false,
                "valueType": "java.lang.Integer",
                "readonly": false,
                "accesscontrol": "uysuser,uysadmin,architect",
                "observable": false
            },
            "code": {
                "reportOrder": 5000,
                "reportRendered": true,
                "rendered": true,
                "componentType": "inputText",
                "field": "code",
                "order": 5000,
                "roleCheck": true,
                "name": "Kod",
                "money": false,
                "valueType": "java.lang.String",
                "shortName": "Kod",
                "readonly": false,
                "accesscontrol": "uysuser,uysadmin,architect",
                "observable": false,
                "key": "code"
            },
            "name": {
                "reportOrder": 4000,
                "order": 4000,
                "reportRendered": true,
                "rendered": true,
                "componentType": "inputText",
                "field": "name",
                "roleCheck": true,
                "name": "Gelir Adı",
                "money": false,
                "valueType": "java.lang.String",
                "shortName": "Gelir Adı",
                "readonly": false,
                "accesscontrol": "uysuser,uysadmin,architect",
                "observable": false,
                "key": "name"
            },
            "relations": {
                "reportOrder": 2000,
                "order": 2000,
                "reportRendered": true,
                "rendered": true,
                "componentType": "inputText",
                "field": "relations",
                "roleCheck": true,
                "name": "Yer Alacağı Formlar",
                "money": false,
                "valueType": "java.lang.String",
                "shortName": "Yer Alacağı Formlar",
                "readonly": false,
                "accesscontrol": "uysuser,uysadmin,architect",
                "observable": false,
                "key": "relations"
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
            }
        }
    }
}, {upsert: true});

