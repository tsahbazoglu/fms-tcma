db.getSisterDB('configdb').graph2.update({key: "node_dataBankSetting"}, {$set: {
        "key": "node_dataBankSetting",
        "db": "uysdb",
        "projectKey": "uys",
        "collection": "dataBankData",
        "forms": "graphForm",
        "name": "Bilgi Bankası Ayarlar",
        "accesscontrol": [
            "uysadmin",
            "architect"
        ],
        "type": "node",
        "menuOrder": 25,
        "upperNode": null,
        "enabled": true
    }
}, {upsert: true});

