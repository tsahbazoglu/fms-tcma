
db.getSisterDB('configdb').graph2.findOne({key: "licences"});

db.getSisterDB('configdb').graph2.update({key: "licences"}, {$set: {
        "schemaVersion": "1.0.0",
        "key": "licences",
        "db": "uysdb",
        "collection": "dataBankLicences",
        "menuOrder": 165,
        "form": "Z32",
        "forms": "graphForm",
        "name": "Z32 - Yetki Belgeleri",
        "shortName": "Z32 - Yetki Belgeleri",
        "dimension": 1,
        "type": "website",
        "userNote": "",
        "loginFkField": "_id",
        "filter": {
            forms: "licences"
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
            "order": {
                "field": "order",
                "key": "order",
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
                "componentType": "inputText"
            },
            "orderWebOzet": {
                "componentType": "inputText",
                "field": "orderWebOzet",
                "key": "orderWebOzet",
                "order": 7500,
                "reportOrder": 7500,
                "roleCheck": true,
                "money": false,
                "readonly": false,
                "observable": false,
                "reportRendered": true,
                "rendered": true,
                "name": "Dikey Sıralama (Web Özet)",
                "shortName": "Dikey Sıralama (Web Özet)",
                "valueType": "java.lang.Integer",
                "accesscontrol": "uysadmin,architect"
            },
            "orderWebOzetHorizontal": {
                "componentType": "inputText",
                "field": "orderWebOzetHorizontal",
                "key": "orderWebOzetHorizontal",
                "order": 7250,
                "reportOrder": 7250,
                "roleCheck": true,
                "money": false,
                "readonly": false,
                "observable": false,
                "reportRendered": true,
                "rendered": true,
                "name": "Yatay Sıralama (Web Özet)",
                "shortName": "Yatay Sıralama (Web Özet)",
                "valueType": "java.lang.Integer",
                "accesscontrol": "uysadmin,architect"
            },
            "code": {
                "key": "code",
                "field": "code",
                "order": 7000,
                "reportOrder": 7000,
                "name": "Kod",
                "shortName": "Kod",
                "reportRendered": true,
                "rendered": true,
                "required": true,
                "roleCheck": true,
                "money": false,
                "readonly": false,
                "observable": false,
                "componentType": "inputText",
                "valueType": "java.lang.String",
                "accesscontrol": "uysuser,uysadmin,architect",
                "style": "white-space:nowrap"
            },
            "name": {
                "key": "name",
                "field": "name",
                "order": 7000,
                "reportOrder": 7000,
                "name": "Adı",
                "shortName": "Adı",
                "reportRendered": true,
                "rendered": true,
                "required": true,
                "roleCheck": true,
                "money": false,
                "readonly": false,
                "observable": false,
                "componentType": "inputText",
                "valueType": "java.lang.String",
                "accesscontrol": "uysuser,uysadmin,architect",
                "style": "white-space:nowrap"
            },
            "name_english": {
                "key": "name_english",
                "field": "name_english",
                "order": 7000,
                "reportOrder": 7000,
                "name": "İngilizce Adı",
                "shortName": "İngilizce Adı",
                "reportRendered": true,
                "rendered": true,
                "required": true,
                "roleCheck": true,
                "money": false,
                "readonly": false,
                "observable": false,
                "componentType": "inputText",
                "valueType": "java.lang.String",
                "accesscontrol": "uysuser,uysadmin,architect",
                "style": "white-space:nowrap"
            }
        }
    }
}, {upsert: true});

