db.getSisterDB("configdb").project2.findOne({key: "uys"});

db.getSisterDB("configdb").project2.update({key: "uys"}, {$set: {
        key: "uys",
        configCollections: "graph2",
        adminRole: "uysadmin,uysadmin2,architect",
        userRole: "uysadmin,uysadmin2,architect",
        welcomePage: "welcome-demo.html"
    }
}, {upsert: true});
 
