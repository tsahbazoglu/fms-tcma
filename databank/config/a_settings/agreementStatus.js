
db.getSisterDB('configdb').graph2.findOne({key: "agreementStatus"});

db.getSisterDB('configdb').graph2.update({key: "agreementStatus"}, {$set: {
        "db": "uysdb",
        "collection": "dataBankSetting",
        "userConstantNote": "",
        "menuOrder": 90,
        "form": "Z16",
        "name": "Z16 - Sözleşme Durumları",
        "forms": "graphForm",
        "dimension": 1,
        "type": "website",
        "defaultSortField": "order",
        "loginFkField": "_id",
        "accesscontrol": ["uysadmin", "architect"],
        "filter": {"forms": "agreementStatus"},
        "defaultCurrentQuery": {},
        "defaultHistoryQuery": {},
        "upperNodes": {"node_dataBankSetting": "Bilgi Bankası Ayarlar"},
        "actions": {
            "new": function (searchObject, roles) {
                if (roles == null) {
                    throw "roles must be defined for member :".concat(searchObject.member);
                } else if (roles.indexOf("databankarchitect") >= 0) {
                    return true;
                } else {
                    return false;
                }
            },
            "save": function (searchObject, roles) {
                if (roles == null) {
                    throw "roles must be defined for member :".concat(searchObject.member);
                } else if (roles.indexOf("databankarchitect") >= 0) {
                    return true;
                } else {
                    return false;
                }
            },
            "delete": function (searchObject, roles) {
                if (roles == null) {
                    throw "roles must be defined for member :".concat(searchObject.member);
                } else if (roles.indexOf("databankarchitect") >= 0) {
                    return true;
                } else {
                    return false;
                }
            },
            "download": true
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
                "accesscontrol": "uysuser,uysadmin,databankarchitect",
                "observable": false,
                "key": "name",
                "quickFilter": false
            },
            "dataTransfer": {
                "reportOrder": NumberLong(2000),
                "reportRendered": true,
                "rendered": true,
                "componentType": "inputText",
                "key": "dataTransfer",
                "field": "dataTransfer",
                "order": NumberLong(2000),
                "roleCheck": true,
                "name": "2011 Veri Aktarımı",
                "shortName": "2011 Veri Aktarımı",
                "money": false,
                "valueType": "java.lang.String",
                "readonly": false,
                "accesscontrol": "uysuser,uysadmin,databankarchitect",
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
                "accesscontrol": "uysuser,uysadmin,databankarchitect",
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
                "accesscontrol": "uysuser,uysadmin,databankarchitect",
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
                "accesscontrol": "uysuser,uysadmin,databankarchitect",
                "quickFilter": false
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
                "accesscontrol": "uysadmin,databankarchitect",
                "observable": false,
                "quickFilter": false
            }
        }
    }
}, {upsert: true});
