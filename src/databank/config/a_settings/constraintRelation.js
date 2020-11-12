
db.getSisterDB('configdb').graph2.findOne({key: "constraintRelation"});

db.getSisterDB('configdb').graph2.update({key: "constraintRelation"}, {$set: {
        "schemaVersion": "1.0.0",
        "db": "uysdb",
        "collection": "dataBankControlPeriodTemplate",
        "menuOrder": 195,
        "userConstantNote": "",
        "form": "Z62",
        "name": "Z62 - Kontrol Formülleri Bağlantıları",
        "forms": "graphForm",
        "dimension": 1,
        "loginFkField": "_id",
        "historyRendered": false,
        "type": "website",
        "defaultSortField": "transferOrder",
        "filter": {
            "forms": "constraintRelation"
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
        "myNamedQueries": {
            "overAllCheck": function (searchObject) {
                month = db.common.findOne({
                    _id: searchObject.period
                }).month;
                if (month == null) {
                    throw "month could not be found on search object period";
                }
                return {
                    "validPeriods": month,
                    "enabled": true
                }
            }
        },
        "fields": {
            "period": {
                "order": 8000,
                "reportOrder": 8000,
                "ndType": "DIMENSION",
                "ndAxis": "Z-ZET",
                "reportRendered": true,
                "rendered": true,
                "roleCheck": true,
                "money": false,
                "readonly": false,
                "observable": false,
                "required": true,
                "componentType": "selectOneMenu",
                "field": "period",
                "name": "Dönem",
                "shortName": "Dönem",
                "valueType": "java.lang.String",
                "accesscontrol": "uysadmin,architect",
                "key": "period",
                "converter": "SelectOneObjectIdConverter",
                "autoset": {
                    "uysarchitect": {
                        "value": "cancel",
                        "priority": 7
                    },
                    "uysadmin": {
                        "value": "cancel",
                        "priority": 6
                    },
                    "uysviewer": {
                        "value": "cancel",
                        "priority": 5
                    },
                    "uysuser": {
                        "value": "accept",
                        "priority": 0
                    }
                },
                "items": {
                    "db": "uysdb",
                    "itemTable": "common",
                    "collection": "common",
                    "query": {
                        "forms": "period"
                    },
                    "historyQuery": {
                        "forms": "period"
                    },
                    "adminQuery": {
                        "forms": "period"
                    },
                    "v": {
                        "name": 1
                    },
                    "sort": {
                        "name": -1
                    }
                },
                "quickFilter": false
            },
            "template": {
                "key": "template",
                "field": "template",
                "name": "Şablon",
                "shortName": "Şablon",
                "order": 8000,
                "reportOrder": 8000,
                "ndType": "DIMENSION",
                "ndAxis": "Z-ZET",
                "reportRendered": true,
                "rendered": true,
                "roleCheck": true,
                "money": false,
                "readonly": false,
                "observable": false,
                "required": true,
                "componentType": "selectOneMenu",
                "valueType": "java.lang.String",
                "accesscontrol": "uysadmin,architect",
                "converter": "SelectOneObjectIdConverter",
                "autoset": {
                    "uysarchitect": {
                        "value": "cancel",
                        "priority": 7
                    },
                    "uysadmin": {
                        "value": "cancel",
                        "priority": 6
                    },
                    "uysviewer": {
                        "value": "cancel",
                        "priority": 5
                    },
                    "uysuser": {
                        "value": "accept",
                        "priority": 0
                    }
                },
                "items": {
                    "db": "uysdb",
                    "itemTable": "dataBankTemplate",
                    "collection": "dataBankTemplate",
                    "query": {
                        "forms": "template"
                    },
                    "historyQuery": {
                        "forms": "template"
                    },
                    "adminQuery": {
                        "forms": "template"
                    },
                    "v": {
                        "name": 1
                    },
                    "sort": {
                        "name": 1
                    }
                },
                "quickFilter": false
            },
            "control": {
                "key": "control",
                "field": "control",
                "name": "Kontrol",
                "shortName": "Kontrol",
                "order": 8000,
                "reportOrder": 8000,
                "ndType": "DIMENSION",
                "ndAxis": "Z-ZET",
                "reportRendered": true,
                "rendered": true,
                "roleCheck": true,
                "money": false,
                "readonly": false,
                "observable": false,
                "required": true,
                "componentType": "selectOneMenu",
                "valueType": "java.lang.String",
                "accesscontrol": "uysadmin,architect",
                "converter": "SelectOneObjectIdConverter",
                "autoset": {
                    "uysarchitect": {
                        "value": "cancel",
                        "priority": 7
                    },
                    "uysadmin": {
                        "value": "cancel",
                        "priority": 6
                    },
                    "uysviewer": {
                        "value": "cancel",
                        "priority": 5
                    },
                    "uysuser": {
                        "value": "accept",
                        "priority": 0
                    }
                },
                "items": {
                    "db": "uysdb",
                    "itemTable": "dataBankConstraintFormulas",
                    "collection": "dataBankConstraintFormulas",
                    "query": {
                        "forms": "constraint"
                    },
                    "historyQuery": {
                        "forms": "constraint"
                    },
                    "adminQuery": {
                        "forms": "constraint"
                    },
                    "v": {
                        "transferOrder": 1
                    },
                    "sort": {
                        "transferOrder": 1
                    }
                },
                "quickFilter": false
            },
            "member_type": {
                "key": "member_type",
                "field": "member_type",
                "name": "Üye Tipi",
                "shortName": "Üye Tipi",
                "reportOrder": 700,
                "order": 700,
                "readonly": true,
                "reportRendered": true,
                "rendered": true,
                "roleCheck": true,
                "componentType": "inputText",
                "valueType": "java.lang.String",
                "accesscontrol": "uysadmin,architect",
                "quickFilter": false
            },
            "criterias": {
                "field": "criterias",
                "key": "criterias",
                "name": "Kıstaslar",
                "shortName": "Kıstaslar",
                "reportOrder": NumberLong(700),
                "order": NumberLong(700),
                "componentType": "selectOneMenu",
                "reportRendered": true,
                "rendered": true,
                "money": false,
                "readonly": true,
                "observable": false,
                "roleCheck": true,
                "valueType": "java.lang.String",
                "accesscontrol": "uysadmin,architect",
                "converter": "SelectOneStringConverter",
                "items": [
                    "kurumun_istiraki_olmali"
                ],
                "quickFilter": false
            }
        }
    }
}, {upsert: true});

