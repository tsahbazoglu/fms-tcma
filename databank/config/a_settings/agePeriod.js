
db.getSisterDB('configdb').graph2.findOne({key: "agePeriod"});

db.getSisterDB('configdb').graph2.update({key: "agePeriod"}, {$set: {
        "db": "uysdb",
        "collection": "dataBankSetting",
        "userConstantNote": "",
        "menuOrder": 130,
        "form": "Z20",
        "name": "Z20 - Yaş Aralıkları",
        "forms": "graphForm",
        "dimension": 1,
        "type": "website",
        "defaultSortField": "order",
        "loginFkField": "_id",
        "accesscontrol": [
            "uysadmin",
            "architect"
        ],
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
        "defaultCurrentQuery": {},
        "defaultHistoryQuery": {},
        "filter": {"forms": "agePeriod"},
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
            }
        }
    }
}, {upsert: true});

