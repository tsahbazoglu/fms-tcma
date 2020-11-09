
db.getSisterDB('configdb').graph2.findOne({key: "title"});

db.getSisterDB('configdb').graph2.update({key: "title"}, {$set: {
        "schemaVersion": "1.0.0",
        "db": "uysdb",
        "collection": "dataBankTitles",
        "menuOrder": 166,
        "form": "Z33",
        "forms": "graphForm",
        "name": "Z33 - Görevler",
        "shortName": "Z33 - Görevler",
        "loginFkField": "_id",
        "dimension": 1,
        "type": "website",
        "userNote": "",
        "defaultSortField": "order",
        "filter": {forms: "title"},
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
        "fields": {
            "order": {
                "key": "order",
                "field": "order",
                "order": 8000,
                "reportOrder": 8000,
                "name": "Sıralama",
                "shortName": "Sıralama",
                "reportRendered": true,
                "rendered": true,
                "required": true,
                "roleCheck": true,
                "money": false,
                "readonly": false,
                "observable": false,
                "componentType": "inputText",
                "valueType": "java.lang.String",
                "accesscontrol": "uysadmin,architect",
                "style": "white-space:nowrap"
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
            "relations": {
                "key": "relations",
                "field": "relations",
                "order": 7000,
                "reportOrder": 7000,
                "name": "Bağlantılar",
                "shortName": "Bağlantılar",
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
            "note": {
                "key": "note",
                "field": "note",
                "order": 6500,
                "reportOrder": 6500,
                "name": "Açıklama",
                "shortName": "Açıklama",
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
            "name_tbb": {
                "key": "name_tbb",
                "field": "name_tbb",
                "name": "TBB Adı",
                "shortName": "TBB Adı",
                "order": 6500,
                "reportOrder": 6500,
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

