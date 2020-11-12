
db.getSisterDB('configdb').graph2.findOne({key: "calculateFormulas"});

db.getSisterDB('configdb').graph2.update({key: "calculateFormulas"}, {$set: {
        "schemaVersion": "1.0.0",
        "db": "uysdb",
        "collection": "dataBankCalculateFormulas",
        "menuOrder": 180,
        "userConstantNote": "",
        "form": "Z60",
        "forms": "graphForm",
        "name": "Z60 - Hesaplama Formülleri",
        "dimension": 1,
        "loginFkField": "_id",
        "type": "website",
        "defaultSortField": "name",
        "filter": {forms: "calculateFormulas"},
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
        "postSave": {
            "type": "application",
            "action": "refreshCache",
            "cacheQuery": {
                "db": "uysdb",
                "collection": "dataBankCalculateFormulas",
                "relations": true
            }
        },
        "myNamedQueries": {
            "chooseByDate": function (searchObject) {
                year = db.common.findOne({
                    _id: searchObject.period
                }).year;
                if (year == null) {
                    throw "month could not be found on search object period";
                }
                return {
                    "validPeriods": year,
                    "active": true
                }
            }
        },
        "fields": {
            "active": {
                "field": "active",
                "key": "active",
                "reportOrder": 10000,
                "order": 10000,
                "reportRendered": true,
                "rendered": true,
                "componentType": "selectBooleanCheckbox",
                "roleCheck": true,
                "name": "Geçerli/Geçersiz",
                "shortName": "Geçerli/Geçersiz",
                "valueType": "java.lang.Boolean",
                "accesscontrol": "uysadmin,architect"
            },
            "validPeriods": {
                "field": "validPeriods",
                "key": "validPeriods",
                "reportOrder": 10000,
                "order": 10000,
                "reportRendered": true,
                "rendered": true,
                "componentType": "inputTextarea",
                "roleCheck": true,
                "name": "Geçerli Dönemler",
                "shortName": "Geçerli Dönemler",
                "valueType": "java.lang.String",
                "accesscontrol": "uysadmin,architect"
            },
            "template": {
                "field": "template",
                "key": "template",
                "reportOrder": 10000,
                "order": 10000,
                "reportRendered": true,
                "rendered": true,
                "componentType": "inputTextarea",
                "roleCheck": true,
                "name": "Geçerli Şablonlar",
                "shortName": "Geçerli Şablonlar",
                "valueType": "java.lang.String",
                "accesscontrol": "uysadmin,architect"
            },
            "name": {
                "field": "name",
                "key": "name",
                "reportOrder": 9000,
                "order": 9000,
                "reportRendered": true,
                "rendered": true,
                "componentType": "inputText",
                "roleCheck": true,
                "name": "Ad",
                "shortName": "Ad",
                "valueType": "java.lang.String",
                "accesscontrol": "uysadmin,architect"
            },
            "relations": {
                "reportOrder": NumberLong(8700),
                "order": NumberLong(8700),
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
                "accesscontrol": "uysadmin,architect",
                "observable": false,
                "key": "relations"
            },
            "droolsVertical": {
                "field": "droolsVertical",
                "key": "droolsVertical",
                "reportOrder": 7500,
                "order": 7500,
                "roleCheck": true,
                "money": false,
                "readonly": false,
                "observable": false,
                "reportRendered": true,
                "rendered": true,
                "componentType": "inputTextarea",
                "name": "Formül",
                "shortName": "Formül",
                "valueType": "java.lang.String",
                "accesscontrol": "uysadmin,architect",
                "style": "text-align:left;"
            },
            "droolsRuleCoordinate": {
                "field": "droolsRuleCoordinate",
                "key": "droolsRuleCoordinate",
                "reportOrder": 7200,
                "order": 7200,
                "roleCheck": true,
                "money": false,
                "readonly": false,
                "observable": false,
                "reportRendered": true,
                "rendered": true,
                "componentType": "inputText",
                "name": "Hesaplanacak Hücre",
                "shortName": "Hesaplanacak Hücre",
                "valueType": "java.lang.String",
                "accesscontrol": "uysadmin,architect"
            },
            "droolsMeasureKey": {
                "field": "droolsMeasureKey",
                "key": "droolsMeasureKey",
                "reportOrder": 7200,
                "order": 7200,
                "roleCheck": true,
                "money": false,
                "readonly": false,
                "observable": false,
                "reportRendered": true,
                "rendered": true,
                "componentType": "inputText",
                "name": "Hesaplanacak Değer",
                "shortName": "Hesaplanacak Değer",
                "valueType": "java.lang.String",
                "accesscontrol": "uysadmin,architect"
            },
            "style": {
                "field": "style",
                "key": "style",
                "reportOrder": 6000,
                "order": 6000,
                "reportRendered": true,
                "rendered": true,
                "componentType": "inputTextarea",
                "roleCheck": true,
                "name": "Görsellik(CSS)",
                "shortName": "Görsellik(CSS)",
                "money": false,
                "valueType": "java.lang.String",
                "readonly": false,
                "accesscontrol": "uysadmin,architect",
                "observable": false
            },
            "converter": {
                "key": "converter",
                "field": "converter",
                "name": "Dönüştürücü",
                "shortName": "Dönüştürücü",
                "reportOrder": NumberLong(5000),
                "order": NumberLong(5000),
                "componentType": "selectOneMenu",
                "reportRendered": true,
                "rendered": true,
                "roleCheck": true,
                "money": false,
                "readonly": false,
                "observable": false,
                "valueType": "java.lang.String",
                "accesscontrol": "uysadmin,architect",
                "converter": "SelectOneStringConverter",
                "items": [
                    "MoneyConverter",
                    "NumberConverter"
                ]
            }
        }
    }
}, {upsert: true});

