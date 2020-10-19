
db.getSisterDB('configdb').graph2.findOne({key: "transactionType"});

db.getSisterDB('configdb').graph2.update({key: "transactionType"}, {$set: {
        "db": "uysdb",
        "collection": "dataBankSetting",
        "menuOrder": 30,
        "form": "Z10",
        "name": "Z10 - Transaction Type",
        "forms": "graphForm",
        "userConstantNote": "",
        "loginFkField": "_id",
        "dimension": 1,
        "type": "website",
        "defaultSortField": "order",
        "filter": {
            "forms": "transactionType"
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
        "upperNodes": {
            "node_dataBankSetting": "Bilgi Bankası Ayarlar"
        },
        "actions": {
            "new": {
                "role-architect": true,
                "none": false
            },
            "save": {
                "role-architect": true,
                "none": false
            },
            "delete": {
                "role-architect": true,
                "none": false
            },
            "download": true
        },

        "fields": {
            "name": {
                "reportOrder": NumberLong(8000),
                "order": NumberLong(8000),
                "name": "Ad",
                "shortName": "Ad",
                "componentType": "inputText",
                "field": "name",
                "valueType": "java.lang.String",
                "accesscontrol": "uysuser,uysadmin,architect",
                "roleCheck": true,
                "reportRendered": true,
                "rendered": true,
                "money": false,
                "readonly": false,
                "observable": false,
                "key": "name",
                "quickFilter": false
            },
            "relations": {
                "reportOrder": NumberLong(7000),
                "reportRendered": true,
                "rendered": true,
                "componentType": "inputText",
                "field": "relations",
                "order": NumberLong(7000),
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
            }
        }
    }
}, {upsert: true});

