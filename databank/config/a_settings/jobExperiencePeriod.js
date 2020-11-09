
db.getSisterDB('configdb').graph2.findOne({key: "jobExperiencePeriod"});

db.getSisterDB('configdb').graph2.update({key: "jobExperiencePeriod"}, {$set: {
        "schemaVersion": "1.0.0",
        "db": "uysdb",
        "collection": "dataBankSetting",
        "menuOrder": 120,
        "userConstantNote": "",
        "form": "Z19",
        "name": "Z19 - İş Tecrübesi Aralıkları",
        "forms": "graphForm",
        "dimension": 1,
        "loginFkField": "_id",
        "type": "website",
        "defaultSortField": "order",
        "filter": {forms: "investorType"},
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
                "accesscontrol": "uysuser,uysadmin,architect",
                "observable": false,
                "key": "name"
            },
            "relations": {
                "reportOrder": NumberLong(1000),
                "reportRendered": true,
                "rendered": true,
                "componentType": "inputText",
                "field": "relations",
                "order": NumberLong(1000),
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
            "description": {
                "reportOrder": NumberLong(1000),
                "order": NumberLong(1000),
                "reportRendered": true,
                "rendered": true,
                "componentType": "inputText",
                "field": "description",
                "key": "description",
                "name": "Açıklama",
                "shortName": "Açıklama",
                "roleCheck": true,
                "readonly": false,
                "observable": false,
                "money": false,
                "valueType": "java.lang.String",
                "accesscontrol": "uysuser,uysadmin,architect"
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
                "accesscontrol": "uysuser,uysadmin,architect"
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
                "accesscontrol": "uysuser,uysadmin,architect"
            },
            "web_faaliyet_report_name": {
                "key": "web_faaliyet_report_name",
                "field": "web_faaliyet_report_name",
                "reportRendered": true,
                "rendered": true,
                "componentType": "inputText",
                "order": NumberLong(2100),
                "reportOrder": NumberLong(2100),
                "roleCheck": true,
                "name": "Web Faaliyet Rapor Adı",
                "shortName": "Web Faaliyet Rapor Adı",
                "money": false,
                "valueType": "java.lang.String",
                "readonly": false,
                "accesscontrol": "uysadmin,architect",
                "observable": false
            }
        }
    }
}, {upsert: true});

