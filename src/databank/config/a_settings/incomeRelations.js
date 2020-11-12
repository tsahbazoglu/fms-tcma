
db.getSisterDB('configdb').graph2.findOne({key: "incomeRelations"});

db.getSisterDB('configdb').graph2.update({key: "incomeRelations"}, {$set: {
        "schemaVersion": "1.0.0",
        "db": "uysdb",
        "collection": "dataBankIncomeRelations",
        "form": "formIncomeRelations",
        "forms": "graphForm",
        "dimension": 1,
        "name": "Gelir Şablonları",
        "loginFkField": "_id",
        "defaultSortField": "orderno",
        "userConstantNote": "",
        "userNote": " ",
        "type": "website",
        "menuOrder": 10000,
        "filter": {
            "forms": "incomeRelations"
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
            "parentValue": {
                "key": "parentValue",
                "field": "parentValue",
                "order": 100,
                "reportOrder": 100,
                "name": "Referans - Değer",
                "shortName": "Referans - Değer",
                "reportRendered": true,
                "rendered": true,
                "roleCheck": true,
                "money": false,
                "readonly": false,
                "componentType": "selectOneMenu",
                "valueType": "java.lang.String",
                "accesscontrol": "uysadmin,architect",
                "converter": "SelectOneObjectIdConverter",
                "items": {
                    "db": "uysdb",
                    "itemTable": "dataBankIncome",
                    "collection": "dataBankIncome",
                    "query": {
                        "forms": "income"
                    },
                    "v": {
                        "code": 1
                    },
                    "sort": {
                        "code": 1
                    },
                    "labelStringFormat": "%s"
                },
                "quickFilter": false
            },
            "orderno": {
                "key": "orderno",
                "field": "orderno",
                "accesscontrol": "uysuser,uysadmin,architect",
                "name": "Yer Alacağı Formda Sırası",
                "shortName": "Yer Alacağı Formda Sırası",
                "componentType": "inputText",
                "roleCheck": true,
                "reportRendered": true,
                "rendered": true,
                "readonly": false,
                "order": 90,
                "reportOrder": 90,
                "valueType": "java.lang.Integer",
                "style": "text-align:right;",
                "quickFilter": false
            },
            "name": {
                "key": "name",
                "field": "name",
                "accesscontrol": "uysuser,uysadmin,architect",
                "name": "Yer Alacağı Formda Adi",
                "shortName": "Yer Alacağı Formda Adi",
                "componentType": "inputText",
                "roleCheck": true,
                "reportRendered": true,
                "rendered": true,
                "readonly": false,
                "order": 95,
                "reportOrder": 95,
                "valueType": "java.lang.String",
                "style": "text-align:left;",
                "quickFilter": false
            },
            "form": {
                "key": "form",
                "field": "form",
                "accesscontrol": "uysuser,uysadmin,architect",
                "name": "Yer Alacağı Form",
                "shortName": "Yer Alacağı Form",
                "componentType": "inputText",
                "roleCheck": true,
                "reportRendered": true,
                "rendered": true,
                "readonly": false,
                "order": 90,
                "reportOrder": 90,
                "valueType": "java.lang.String",
                "style": "text-align:left;",
                "quickFilter": false
            },
            "template": {
                "key": "template",
                "field": "template",
                "accesscontrol": "uysadmin,architect",
                "name": "Şablon(lar)",
                "shortName": "Şablon(lar)",
                "componentType": "selectOneMenu",
                "roleCheck": true,
                "reportRendered": true,
                "rendered": true,
                "readonly": false,
                "order": 80,
                "reportOrder": 80,
                "valueType": "java.lang.String",
                "style": "text-align:left;",
                "converter": "SelectOneObjectIdConverter",
                "items": {
                    "db": "uysdb",
                    "itemTable": "dataBankTemplate",
                    "collection": "dataBankTemplate",
                    "query": {
                        "forms": "template"
                    },
                    "v": {
                        "name": 1
                    },
                    "sort": {
                        "order": 1
                    }
                },
                "quickFilter": false
            },
            "period": {
                "key": "period",
                "field": "period",
                "accesscontrol": "uysadmin,architect",
                "name": "Dönem",
                "shortName": "Dönem",
                "componentType": "selectOneMenu",
                "roleCheck": true,
                "reportRendered": true,
                "rendered": true,
                "readonly": false,
                "order": 70,
                "reportOrder": 70,
                "valueType": "java.lang.String",
                "style": "text-align:left;",
                "converter": "SelectOneObjectIdConverter",
                "items": {
                    "db": "uysdb",
                    "itemTable": "common",
                    "collection": "common",
                    "query": {
                        "forms": "period"
                    },
                    "v": {
                        "name": 1
                    },
                    "sort": {
                        "value": -1
                    }
                },
                "quickFilter": false
            },
            "member_type": {
                "key": "member_type",
                "field": "member_type",
                "accesscontrol": "uysadmin,architect",
                "name": "Üye Tipi",
                "shortName": "Üye Tipi",
                "componentType": "inputText",
                "roleCheck": true,
                "reportRendered": true,
                "rendered": true,
                "readonly": false,
                "order": 92,
                "reportOrder": 92,
                "valueType": "java.lang.String",
                "style": "text-align:left;",
                "quickFilter": false
            }
        }
    }
}, {upsert: true});
