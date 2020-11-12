
db.getSisterDB('configdb').graph2.findOne({key: "porfolioManagementInvestorType"})

db.getSisterDB('configdb').graph2.update({key: "porfolioManagementInvestorType"}, {$set: {
        "schemaVersion": "1.0.0",
        "userConstantNote": "",
        "db": "uysdb",
        "collection": "dataBankSetting",
        "menuOrder": 60,
        "form": "Z13",
        "name": "Z13 - Varlık Yönetimi Yatırımcı Türü",
        "forms": "graphForm",
        "dimension": 1,
        "loginFkField": "_id",
        "defaultSortField": "order",
        "type": "website",
        "filter": {forms: "porfolioManagementInvestorType"},
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
                "reportOrder": NumberLong(9000),
                "reportRendered": true,
                "rendered": true,
                "componentType": "inputText",
                "field": "name",
                "order": NumberLong(9000),
                "roleCheck": true,
                "name": "Ad",
                "money": false,
                "valueType": "java.lang.String",
                "shortName": "Ad",
                "readonly": false,
                "accesscontrol": "uysuser,uysadmin,databankarchitect",
                "observable": false,
                "key": "name"
            },
            "dataTransferCount": {
                "reportOrder": NumberLong(8000),
                "reportRendered": true,
                "rendered": true,
                "componentType": "inputText",
                "key": "dataTransferCount",
                "field": "dataTransferCount",
                "order": NumberLong(8000),
                "roleCheck": true,
                "name": "2011 Veri Aktarımı - Sayi",
                "shortName": "2011 Veri Aktarımı - Sayi",
                "money": false,
                "valueType": "java.lang.String",
                "readonly": false,
                "accesscontrol": "uysuser,uysadmin,databankarchitect",
                "observable": false
            },
            "dataTransferAmount": {
                "reportOrder": NumberLong(7000),
                "reportRendered": true,
                "rendered": true,
                "componentType": "inputText",
                "key": "dataTransferAmount",
                "field": "dataTransferAmount",
                "order": NumberLong(7000),
                "roleCheck": true,
                "name": "2011 Veri Aktarımı - Portföy Büyüklüğü",
                "shortName": "2011 Veri Aktarımı - Portföy Büyüklüğü",
                "money": false,
                "valueType": "java.lang.String",
                "readonly": false,
                "accesscontrol": "uysuser,uysadmin,databankarchitect",
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
                "accesscontrol": "uysuser,uysadmin,databankarchitect"
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
                "accesscontrol": "uysuser,uysadmin,databankarchitect"
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
                "accesscontrol": "uysuser,uysadmin,databankarchitect"
            }
        }
    }
}, {upsert: true});

