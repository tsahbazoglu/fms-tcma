db.getSisterDB("configdb").ldapMatch.findOne({projectCode: "fms"});
db.getSisterDB("configdb").ldapMatch.update({projectCode: "fms"}, {$set: {
        db: "uysdb",
        collection: "common",
        query: {
            forms: "users"
        },
        ldapUID: "ldapUID"
    }
}, {upsert: true});

