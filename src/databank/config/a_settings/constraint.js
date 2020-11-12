
db.getSisterDB('configdb').graph2.findOne({key: "constraint"});

db.getSisterDB('configdb').graph2.update({key: "constraint"}, {$set: {
        "schemaVersion": "1.0.0",
        "db": "uysdb",
        "collection": "dataBankConstraintFormulas",
        "menuOrder": 190,
        "userConstantNote": "",
        "form": "Z61",
        "forms": "graphForm",
        "name": "Z61 - Kontrol Formülleri",
        "dimension": 1,
        "loginFkField": "_id",
        "historyRendered": false,
        "type": "website",
        "defaultSortField": "transferOrder",
        "filter": {
            "forms": "constraint"
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
                print("uys-databank-log : constraint.myNamedQueries.overAllCheck()");
                if (searchObject.member == null) {
                    throw "member could not be found on search object member";
                }
                if (searchObject.period == null) {
                    throw "period could not be found on search object period";
                }
                if (searchObject.template == null) {
                    throw "template could not be found on search object period";
                }

                var uysdatabase = db.getSisterDB("uysdb");

                var month = uysdatabase.common.findOne({_id: searchObject.period}).month;
                if (month == null) {
                    throw "month could not be found on search object period";
                }
                var member_type = uysdatabase.common.findOne({_id: searchObject.member}).memberType;
                if (member_type == null) {
                    throw "memberType could not be found on member collection";
                }
                var controlIds = [];
                var myquery = {
                    period: searchObject.period,
                    template: searchObject.template,
                    member_type: member_type
                };

                var consolidated_check = true;
                if (consolidated_check) {
                    //look at the dataBankNotifications
                    var notifications = uysdatabase.dataBankNotifications.findOne({
                        "member": searchObject.member,
                        "period": searchObject.period,
                        "exist": "HAYIR"
                    });

                    printjson({notifications: notifications});

                    if (notifications != null) {
                        myquery.criterias = {$ne: "kurumun_istiraki_olmali"};
                    }
                }

                uysdatabase.dataBankControlPeriodTemplate.ensureIndex(myquery);
                uysdatabase.dataBankControlPeriodTemplate.find(myquery).forEach(function (v) {
                    controlIds.push(v.control);
                });

                printjson({myquery: myquery});

                if (consolidated_check) {
                    uysdatabase.dataBankControl.remove({
                        "member": searchObject.member,
                        "period": searchObject.period,
                        "constraintFormulaID": {$nin: controlIds}
                    });
                }
                return {
                    "_id": {$in: controlIds},
                    "validPeriods": month,
                    "enabled": true
                };
            }
        },
        "fields": {
            "enabled": {
                "field": "enabled",
                "key": "enabled",
                "name": "Geçerli",
                "shortName": "Geçerli",
                "reportOrder": 100,
                "order": 100,
                "money": false,
                "readonly": false,
                "roleCheck": true,
                "observable": false,
                "reportRendered": true,
                "rendered": true,
                "componentType": "selectBooleanCheckbox",
                "valueType": "java.lang.Boolean",
                "accesscontrol": "uysadmin,architect",
                "quickFilter": false
            },
            "order": {
                "reportOrder": 95,
                "order": 95,
                "money": false,
                "readonly": false,
                "roleCheck": true,
                "observable": false,
                "reportRendered": true,
                "rendered": true,
                "field": "order",
                "key": "order",
                "name": "Sıralama",
                "shortName": "Sıralama",
                "componentType": "inputText",
                "valueType": "java.lang.Integer",
                "accesscontrol": "uysuser,uysadmin,architect",
                "quickFilter": false
            },
            "transferOrder": {
                "reportOrder": 90,
                "order": 90,
                "money": false,
                "readonly": false,
                "roleCheck": true,
                "observable": false,
                "reportRendered": true,
                "rendered": true,
                "field": "transferOrder",
                "key": "transferOrder",
                "name": "Aktarım Sırası",
                "shortName": "Aktarım Sırası",
                "componentType": "inputText",
                "valueType": "java.lang.Integer",
                "converter": "NumberConverter",
                "converterInstance": "integer",
                "accesscontrol": "uysuser,uysadmin,architect",
                "quickFilter": false
            },
            "relations": {
                "reportOrder": 85,
                "order": 85,
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
                "accesscontrol": "uysuser,uysadmin,architect",
                "observable": false,
                "key": "relations",
                "quickFilter": false
            },
            "name": {
                "reportOrder": 80,
                "order": 80,
                "reportRendered": true,
                "rendered": true,
                "roleCheck": true,
                "money": false,
                "readonly": false,
                "observable": false,
                "componentType": "inputText",
                "field": "name",
                "key": "name",
                "name": "Kısıtlama Formülü Adı",
                "valueType": "java.lang.String",
                "shortName": "Kısıtlama Formülü Adı",
                "accesscontrol": "uysuser,uysadmin,architect",
                "quickFilter": false
            },
            "description": {
                "reportOrder": 75,
                "order": 75,
                "reportRendered": true,
                "rendered": true,
                "componentType": "inputTextarea",
                "field": "description",
                "key": "description",
                "roleCheck": true,
                "name": "Niteliği",
                "shortName": "Niteliği",
                "valueType": "java.lang.String",
                "readonly": false,
                "accesscontrol": "uysuser,uysadmin,architect",
                "observable": false,
                "quickFilter": false
            },
            "resultType": {
                "reportOrder": 70,
                "order": 70,
                "reportRendered": true,
                "rendered": true,
                "componentType": "selectOneMenu",
                "field": "resultType",
                "roleCheck": true,
                "name": "Sonuç Tipi",
                "money": false,
                "valueType": "java.lang.String",
                "shortName": "Sonuç Tipi",
                "readonly": false,
                "accesscontrol": "uysuser,uysadmin,architect",
                "observable": false,
                "key": "resultType",
                "converter": "SelectOneStringConverter",
                "items": [
                    "Hata",
                    "Uyarı"
                ],
                "quickFilter": false
            },
            "validPeriods": {
                "reportOrder": 65,
                "order": 65,
                "componentType": "inputTextarea",
                "field": "validPeriods",
                "key": "validPeriods",
                "name": "Geçerli Olduğu Dönemler",
                "shortName": "Geçerli Olduğu Dönemler",
                "reportRendered": true,
                "rendered": true,
                "money": false,
                "roleCheck": true,
                "readonly": false,
                "observable": false,
                "accesscontrol": "uysadmin,architect",
                "valueType": "java.lang.String",
                "quickFilter": false
            },
            "validPeriod": {
                "reportOrder": 60,
                "order": 60,
                "field": "validPeriod",
                "key": "validPeriod",
                "componentType": "inputTextarea",
                "name": "Geçerli Olduğu Dönemler(Net)",
                "shortName": "Geçerli Olduğu Dönemler(Net)",
                "reportRendered": true,
                "rendered": true,
                "money": false,
                "roleCheck": true,
                "readonly": false,
                "observable": false,
                "accesscontrol": "uysadmin,architect",
                "valueType": "java.lang.String",
                "quickFilter": false
            },
            "template": {
                "reportOrder": 55,
                "order": 55,
                "componentType": "inputTextarea",
                "field": "template",
                "key": "template",
                "name": "Şablon",
                "shortName": "Şablon",
                "reportRendered": true,
                "rendered": true,
                "money": false,
                "roleCheck": true,
                "readonly": false,
                "observable": false,
                "accesscontrol": "uysadmin,architect",
                "valueType": "java.lang.String",
                "quickFilter": false
            },
            "engine": {
                "reportOrder": 50,
                "order": 50,
                "reportRendered": true,
                "rendered": true,
                "componentType": "selectOneMenu",
                "key": "engine",
                "field": "engine",
                "name": "Engine",
                "shortName": "Engine",
                "roleCheck": true,
                "money": false,
                "valueType": "java.lang.String",
                "readonly": false,
                "accesscontrol": "uysuser,uysadmin,architect",
                "observable": false,
                "converter": "SelectOneStringConverter",
                "items": [
                    "jeval",
                    "javascript",
                    "groovy",
                    "common lisp"
                ],
                "quickFilter": false
            },
            "variables": {
                "reportOrder": 45,
                "order": 45,
                "reportRendered": true,
                "rendered": true,
                "componentType": "inputTextarea",
                "field": "variables",
                "key": "variables",
                "name": "Değişken Listesi",
                "shortName": "Değişken Listesi",
                "money": false,
                "roleCheck": true,
                "readonly": false,
                "observable": false,
                "accesscontrol": "uysuser,uysadmin,architect",
                "valueType": "java.lang.String",
                "quickFilter": false
            },
            "mySmallLisp": {
                "reportOrder": 40,
                "order": 40,
                "reportRendered": true,
                "rendered": true,
                "componentType": "inputTextarea",
                "field": "mySmallLisp",
                "key": "mySmallLisp",
                "name": "My Small Lisp",
                "shortName": "My Small Lisp",
                "money": false,
                "roleCheck": true,
                "readonly": false,
                "observable": false,
                "accesscontrol": "uysuser,uysadmin,architect",
                "valueType": "java.lang.String",
                "quickFilter": false
            }
        }
    }
}, {upsert: true});

