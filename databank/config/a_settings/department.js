
db.getSisterDB('configdb').graph2.findOne({key: "department"});

db.getSisterDB('configdb').graph2.update({key: "department"}, {$set: {
        "db": "uysdb",
        "collection": "dataBankSetting",
        "menuOrder": 20,
        "form": "Z02",
        "name": "Z02 - Departmanlar",
        "forms": "graphForm",
        "dimension": 1,
        "loginFkField": "_id",
        "filter": {
            "forms": "department"
        },
        "accesscontrol": [
            "uysadmin",
            "architect"
        ],
        "defaultCurrentQuery": function (searchObject) {
            if (!searchObject.hasOwnProperty("member")) {
                throw "member is resolved to null";
            }
            var uysdatabase = db.getSisterDB("uysdb");
            var periods = [];
            uysdatabase.dataBankOrganizationStatus.find({
                //"myFormGroups": {"$in": [v.group, v.form]},
                "status": {"$in": ["000", "001", "002"]},
                "workflowStatus": {"$in": ["000", "001", "002", "003", "006"]},
                "member": searchObject.member
            }, {period: 1}).forEach(function (org) {
                periods.push(org.period);
            });
            var periodID = "no result";
            uysdatabase.common.find({_id: {$in: periods}}).sort({value: -1}).limit(1).forEach(function (v) {
                periodID = v._id;
            });
            return {"member": searchObject.member, period: periodID};
        },
        "defaultHistoryQuery": function (searchObject) {
            var uysdatabase = db.getSisterDB("uysdb");
            if (!searchObject.hasOwnProperty("member")) {
                throw "member is resolved to null";
            }
            var periods = [];
            uysdatabase.dataBankOrganizationStatus.find({
                //"myFormGroups": {"$in": [v.group, v.form]},
                "status": {"$in": ["000", "001", "002"]},
                "workflowStatus": {"$in": ["000", "001", "002", "003", "006"]},
                "member": searchObject.member
            }, {period: 1}).forEach(function (org) {
                periods.push(org.period);
            });
            var periodID = "no result";
            uysdatabase.common.find({_id: {$in: periods}}).sort({value: -1}).limit(1).forEach(function (p) {
                var period = db.getSisterDB("uysdb").common.findOne({forms: "period", order: p.order - 10});
                periodID = (period == null) ? p._id : period._id;
            });
            return {"member": searchObject.member, period: periodID};
        },
        "userConstantNote": "",
        "actions": {
            "new": function (searchObject, roles) {
                if (roles == null) {
                    throw "roles must be defined for member :".concat(searchObject.member);
                } else if (roles.indexOf("architect") >= 0) {
                    return true;
                } else {
                    return false;
                }
            },
            "save": function (searchObject, roles) {
                if (roles == null) {
                    throw "roles must be defined for member :".concat(searchObject.member);
                } else if (roles.indexOf("architect") >= 0) {
                    return true;
                } else {
                    return false;
                }
            },
            "delete": function (searchObject, roles) {
                if (roles == null) {
                    throw "roles must be defined for member :".concat(searchObject.member);
                } else if (roles.indexOf("architect") >= 0) {
                    return true;
                } else {
                    return false;
                }
            },
            "download": true
        },
        "type": "website",
        "defaultSortField": "order",
        "upperNodes": {
            "node_dataBankSetting": "Bilgi Bankası Ayarlar"
        },
        "fields": {
            "orderC2": {
                "componentType": "inputText",
                "field": "orderC2",
                "key": "orderC2",
                "order": 20000,
                "reportOrder": 20000,
                "roleCheck": true,
                "money": false,
                "readonly": false,
                "observable": false,
                "reportRendered": true,
                "rendered": true,
                "name": "İşlem Hacmi - Departman Sıralama",
                "shortName": "İşlem Hacmi - Departman Sıralama",
                "valueType": "java.lang.String",
                "accesscontrol": "uysadmin,architect",
                "quickFilter": false
            },
            "orderD1": {
                "componentType": "inputText",
                "field": "orderD1",
                "key": "orderD1",
                "order": 15000,
                "reportOrder": 15000,
                "roleCheck": true,
                "money": false,
                "readonly": false,
                "observable": false,
                "reportRendered": true,
                "rendered": true,
                "name": "Personal Sayısı - Departman Sıralama",
                "shortName": "Personal Sayısı - Departman Sıralama",
                "valueType": "java.lang.Integer",
                "accesscontrol": "uysadmin,architect",
                "quickFilter": false
            },
            "name": {
                "reportOrder": NumberLong(10000),
                "reportRendered": true,
                "rendered": true,
                "componentType": "inputText",
                "field": "name",
                "order": NumberLong(10000),
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
            "relations": {
                "key": "relations",
                "field": "relations",
                "reportOrder": NumberLong(100),
                "order": NumberLong(100),
                "name": "Yer Alacağı Formlar",
                "shortName": "Yer Alacağı Formlar",
                "componentType": "inputText",
                "roleCheck": true,
                "money": false,
                "valueType": "java.lang.String",
                "readonly": false,
                "accesscontrol": "uysadmin,architect",
                "reportRendered": true,
                "rendered": true,
                "observable": false,
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
            "note": {
                "key": "note",
                "field": "note",
                "name": "Açıklama",
                "shortName": "Açıklama",
                "reportOrder": NumberLong(50),
                "order": NumberLong(50),
                "reportRendered": true,
                "rendered": true,
                "roleCheck": true,
                "money": false,
                "readonly": false,
                "observable": false,
                "componentType": "inputTextarea",
                "valueType": "java.lang.String",
                "accesscontrol": "uysadmin,architect",
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
            },
            "web_faaliyet_report_name": {
                "key": "web_faaliyet_report_name",
                "field": "web_faaliyet_report_name",
                "name": "Web Faaliyet Rapor Adı",
                "shortName": "Web Faaliyet Rapor Adı",
                "reportOrder": NumberLong(9090),
                "order": NumberLong(9090),
                "reportRendered": true,
                "rendered": true,
                "componentType": "inputText",
                "roleCheck": true,
                "money": false,
                "valueType": "java.lang.String",
                "readonly": false,
                "accesscontrol": "uysadmin,architect",
                "observable": false,
                "quickFilter": false
            },
            "web_faaliyet_report_name_en": {
                "key": "web_faaliyet_report_name_en",
                "field": "web_faaliyet_report_name_en",
                "reportOrder": NumberLong(9000),
                "order": NumberLong(9000),
                "name": "Web Faaliyet İngilizce",
                "shortName": "Web Faaliyet İngilizce",
                "componentType": "inputText",
                "valueType": "java.lang.String",
                "money": false,
                "roleCheck": true,
                "reportRendered": true,
                "rendered": true,
                "readonly": false,
                "accesscontrol": "uysadmin,architect",
                "quickFilter": false
            },
            "web_faaliyet_format": {
                "key": "web_faaliyet_format",
                "field": "web_faaliyet_format",
                "name": "Web Faaliyet Apostrof",
                "shortName": "Web Faaliyet Apostrof",
                "order": 9095,
                "reportOrder": 9095,
                "reportRendered": true,
                "rendered": true,
                "roleCheck": true,
                "money": false,
                "readonly": false,
                "observable": false,
                "componentType": "inputText",
                "valueType": "java.lang.Integer",
                "accesscontrol": "uysadmin,architect",
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
                "order": 110,
                "reportOrder": 110,
                "valueType": "java.lang.String",
                "style": "text-align:left;",
                "quickFilter": false
            },
            "order_d1_pys": {
                "componentType": "inputText",
                "field": "order_d1_pys",
                "key": "order_d1_pys",
                "order": 15000,
                "reportOrder": 15000,
                "roleCheck": true,
                "money": false,
                "readonly": false,
                "observable": false,
                "reportRendered": true,
                "rendered": true,
                "name": "Personal Sayısı - Departman Sıralama PYŞ",
                "shortName": "Personal Sayısı - Departman Sıralama PYŞ",
                "valueType": "java.lang.Integer",
                "accesscontrol": "uysadmin,architect",
                "quickFilter": false
            },
            "order_d1_ak": {
                "componentType": "inputText",
                "field": "order_d1_ak",
                "key": "order_d1_ak",
                "order": 15000,
                "reportOrder": 15000,
                "roleCheck": true,
                "money": false,
                "readonly": false,
                "observable": false,
                "reportRendered": true,
                "rendered": true,
                "name": "Personal Sayısı - Departman Sıralama AK",
                "shortName": "Personal Sayısı - Departman Sıralama AK",
                "valueType": "java.lang.Integer",
                "accesscontrol": "uysadmin,architect",
                "quickFilter": false
            }
        }
    }
}, {upsert: true});

