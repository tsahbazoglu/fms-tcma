
db.getSisterDB('configdb').graph2.findOne({key: "volumeTradedType"});

db.getSisterDB('configdb').graph2.update({key: "volumeTradedType"}, {$set: {
        "db": "uysdb",
        "collection": "dataBankSetting",
        "menuOrder": 40,
        "form": "Z11",
        "name": "Z11 - İşlem Hacmi Tipi",
        "forms": "graphForm",
        "userConstantNote": "",
        "loginFkField": "_id",
        "type": "website",
        "dimension": 1,
        "defaultSortField": "order",
        "filter": {
            "forms": "volumeTradedType"
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
        "upperNodes": {
            "node_dataBankSetting": "Bilgi Bankası Ayarlar"
        },
        "fields": {
            "name": {
                "reportOrder": NumberLong(3000),
                "reportRendered": true,
                "rendered": true,
                "componentType": "inputText",
                "field": "name",
                "order": NumberLong(3000),
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
            "orderWebOzet": {
                "key": "orderWebOzet",
                "field": "orderWebOzet",
                "reportOrder": NumberLong(2750),
                "order": NumberLong(2750),
                "reportRendered": true,
                "rendered": true,
                "componentType": "inputText",
                "roleCheck": true,
                "name": "Web Özet Sıra",
                "shortName": "Web Özet Sıra",
                "money": false,
                "valueType": "java.lang.String",
                "readonly": false,
                "accesscontrol": "uysadmin,architect",
                "observable": false,
                "quickFilter": false
            },
            "nameReportWebOzet": {
                "key": "nameReportWebOzet",
                "field": "nameReportWebOzet",
                "reportOrder": NumberLong(2500),
                "order": NumberLong(2500),
                "reportRendered": true,
                "rendered": true,
                "componentType": "inputText",
                "roleCheck": true,
                "name": "Web Özet Ad",
                "shortName": "Web Özet Ad",
                "money": false,
                "valueType": "java.lang.String",
                "readonly": false,
                "accesscontrol": "uysadmin,architect",
                "observable": false,
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
            "converter": {
                "reportOrder": NumberLong(1500),
                "order": NumberLong(1500),
                "reportRendered": true,
                "rendered": true,
                "componentType": "selectOneMenu",
                "field": "converter",
                "key": "converter",
                "roleCheck": true,
                "name": "Dönüştürücü",
                "shortName": "Dönüştürücü",
                "money": false,
                "valueType": "java.lang.String",
                "readonly": false,
                "accesscontrol": "uysuser,uysadmin,architect",
                "observable": false,
                "converter": "SelectOneStringConverter",
                "items": [
                    "MoneyConverter",
                    "NumberConverter",
                    "NumberConverter : #.###.###",
                    "NumberConverter : #.###.###,#",
                    "NumberConverter : #.###.###,##",
                    "NumberConverter : #.###.###,###",
                    "NumberConverter : #.###.###,####",
                    "NumberConverter : #.###.###,#####"
                ],
                "quickFilter": false
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
            "note": {
                "key": "note",
                "field": "note",
                "name": "Açıklama",
                "shortName": "Açıklama",
                "reportOrder": NumberLong(400),
                "order": NumberLong(400),
                "reportRendered": true,
                "rendered": true,
                "componentType": "inputTextarea",
                "roleCheck": true,
                "money": false,
                "valueType": "java.lang.String",
                "readonly": false,
                "accesscontrol": "uysadmin,architect",
                "observable": false,
                "quickFilter": false
            },
            "web_faaliyet_report_name": {
                "key": "web_faaliyet_report_name",
                "field": "web_faaliyet_report_name",
                "reportRendered": true,
                "rendered": true,
                "componentType": "inputText",
                "order": NumberLong(2995),
                "reportOrder": NumberLong(2995),
                "roleCheck": true,
                "name": "Web Faaliyet Rapor Adı",
                "shortName": "Web Faaliyet Rapor Adı",
                "money": false,
                "valueType": "java.lang.String",
                "readonly": false,
                "accesscontrol": "uysadmin,architect",
                "observable": false,
                "quickFilter": false
            }
        }
    }
}, {upsert: true});

