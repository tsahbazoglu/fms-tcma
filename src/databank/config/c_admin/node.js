
db.getSisterDB('configdb').graph2.findOne({key: "node_databank_manager"});

db.getSisterDB('configdb').graph2.update({key: "node_databank_manager"}, {$set: {
        "key": "node_databank_manager",
        "db": "uysdb",
        "projectKey": "uys",
        "collection": "dataBankData",
        "forms": "graphForm",
        "name": "Bilgi Bankası Yönetici",
        "accesscontrol": [
            "uysadmin",
            "architect"
        ],
        "type": "node",
        "menuOrder": 45,
        "upperNode": null,
        "enabled": true
    }
}, {upsert: true});

