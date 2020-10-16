
db.getSisterDB('configdb').graph2.findOne({key: "balance"});

db.getSisterDB('configdb').graph2.update({key: "balance"}, {$set: {
        "db": "uysdb",
        "collection": "dataBankBalance",
        "versionCollection": "versionBalance",
        "menuOrder": 160,
        "userConstantNote": "",
        "form": "Z31",
        "name": "Z31 - Bilanço",
        "forms": "graphForm",
        "dimension": 1,
        "loginFkField": "_id",
        "type": "website",
        "defaultSortField": "code",
        "userNote": "<style>\n.mytable{border:0px solid grey;border-collapse: separate;border-spacing: 2px;background:grey}\n.mytable td {border: 0px solid #000;white-space:nowrap;background: #fff;color: #000;}\n.mytable td.mygreen  {color:green;font-weight:bolder;}\n.mytable td.myreddd   {color:red;font-weight:bolder;}\n\n</style>\n\n<b>Dönem Bağlantıları ve Versiyonlama:</b></br>\n<ul>\n<li><p>Döneme bağlı diğer formlarla ilişkiler ve isim tarihçesi karıştırılmaMAlı.</br>\nÖrneğin: Bir bilanço adının 2018 senesine ait isim değişikliği tarihçesi olabilir.</br>\nAma daha sonra bu bilnaço kaleminin 2018 senesine ait verilerde gözükmeMesi istenilebilir.</br>\nYani döneme bağlı görülebilirlik ile isim tarihçesi farklı kavramlardır.</p>\n<li> Mevcut sistemde, döneme bağlı ilişki için aşağıdaki yapı kullanılmaktadır.</br></br>\n<table class=\"mytable\">\n<tr><td>ID</td><td>Ad</td><td>İlişkili Dönemler</td></tr>\n<tr><td>001</td><td>Toplam Varlıklar</td><td>[2010,2012,2013]</td></tr>\n<tr><td>2</td><td>Duran Varlıklar</td><td>[2009,2010,2011,2012,2013]</td></tr>\n</table></br>\nve \"isim tarihçesi\" önemsiz olduğu durumlarda, </br>\nbilanço-dönem tanımlaması için bu yapı yeterlidir.</br></br>\n<li> Mevcut sistemde, \"isim tarihçesi\" için aşağıdaki yapı kullanılmaktadır.</br></br>\nYukaridaki yapıya ek olarak döneme bağlı isim değişikliklerini</br> \ntutan ek bir versiyonlama tablosu kullanılıyor.</br></br>\n<table class=\"mytable\">\n<tr><td>ID</td><td>Ad</td><td>Dönem</td></tr>\n<tr><td>001</td><td>Toplam Malvarlıklar</td><td>2010</td></tr>\n<tr><td>001</td><td>Toplam Varlıklar</td><td>2013</td></tr>\n</table></br>\n\n</ul>\n",
        "filter": {
            "forms": "balance"
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
            "new": false,
            "save": false,
            "delete": false,
            "download": true
        },
        "oneToMany": {
            "balanceAbstract": "balance._id",
            "balanceDetail": "balance._id",
            "balanceDetailMB": "balance._id"
        },
        "upperNodes": {
            "node_dataBankSetting": "Bilgi Bankası Ayarlar"
        },
        "fields": {
            "abstractOrder": {
                "reportOrder": 12000,
                "reportRendered": true,
                "rendered": true,
                "componentType": "inputText",
                "field": "abstractOrder",
                "key": "abstractOrder",
                "order": 12000,
                "roleCheck": true,
                "name": "Özet Sıralama",
                "money": false,
                "valueType": "java.lang.String",
                "shortName": "Özet Sıralama",
                "readonly": false,
                "accesscontrol": "uysuser,uysadmin,architect",
                "observable": false,
                "quickFilter": false
            },
            "detailOrder": {
                "reportOrder": 12000,
                "reportRendered": true,
                "rendered": true,
                "componentType": "inputText",
                "field": "detailOrder",
                "key": "detailOrder",
                "order": 12000,
                "roleCheck": true,
                "name": "Detay Sıralama",
                "money": false,
                "valueType": "java.lang.String",
                "shortName": "Detay Sıralama",
                "readonly": false,
                "accesscontrol": "uysuser,uysadmin,architect",
                "observable": false,
                "quickFilter": false
            },
            "code": {
                "key": "code",
                "field": "code",
                "name": "Kod",
                "shortName": "Kod",
                "componentType": "inputText",
                "reportOrder": 8000,
                "order": 8000,
                "reportRendered": true,
                "rendered": true,
                "roleCheck": true,
                "money": false,
                "readonly": false,
                "observable": false,
                "valueType": "java.lang.String",
                "accesscontrol": "uysuser,uysadmin,architect",
                "quickFilter": false
            },
            "name": {
                "key": "name",
                "field": "name",
                "name": "Bilanço Adı",
                "shortName": "Bilanço Adı",
                "order": 7000,
                "reportOrder": 7000,
                "componentType": "inputText",
                "money": false,
                "reportRendered": true,
                "rendered": true,
                "version": true,
                "readonly": false,
                "observable": false,
                "roleCheck": true,
                "valueType": "java.lang.String",
                "accesscontrol": "uysuser,uysadmin,architect",
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
            }
        }
    }
}, {upsert: true});
