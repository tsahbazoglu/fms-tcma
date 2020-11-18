
db.getSisterDB('configdb').graph2.remove({key: "node_dataBank"});

db.getSisterDB('configdb').graph2.update({key: "node_dataBank"}, {$set: {
        "key": "node_dataBank",
        "db": "uysdb",
        "projectKey": "uys",
        "collection": "dataBankData",
        "forms": "graphForm",
        "name": "Bilgi Bankası",
        "accesscontrol": [
            "uysadmin",
            "architect",
            "uysviewer",
            "uysuser",
//            "pyuser",
//            "tspb_imim",
//            "ybuser",
            "denemetest"
        ],
        "type": "node",
        "menuOrder": 50,
        "upperNode": null,
        "enabled": true
    }
}, {upsert: true});
