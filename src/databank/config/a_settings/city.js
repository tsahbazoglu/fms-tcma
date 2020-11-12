
db.getSisterDB('configdb').graph2.findOne({key: "city"});

db.getSisterDB('configdb').graph2.update({key: "city"}, {$set: {
        "schemaVersion": "1.0.0",
        "db": "uysdb",
        "collection": "dataBankCities",
        "menuOrder": 140,
        "userConstantNote": "",
        "form": "Z21",
        "name": "Z21 - Şehirler",
        "forms": "graphForm",
        "dimension": 1,
        "loginFkField": "_id",
        "type": "website",
        "defaultSortField": "name",
        "filter": {forms: "city"},
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
                "key": "code",
                "field": "code",
                "name": "Kod",
                "shortName": "Kod",
                "componentType": "inputText",
                "roleCheck": true,
                "reportRendered": true,
                "rendered": true,
                "readonly": false,
                "order": 900,
                "reportOrder": 900,
                "valueType": "java.lang.String",
                "style": "white-space:nowrap",
                "accesscontrol": "uysadmin,architect"
            },
            "name": {
                "key": "name",
                "field": "name",
                "name": "Ad",
                "shortName": "Ad",
                "componentType": "inputText",
                "roleCheck": true,
                "reportRendered": true,
                "rendered": true,
                "readonly": false,
                "order": 900,
                "reportOrder": 900,
                "valueType": "java.lang.String",
                "style": "white-space:nowrap",
                "accesscontrol": "uysadmin,architect"
            }
        }
    }
}, {upsert: true});

