
db.getSisterDB("uysdb").common.update({ldapUID: "architect"}, {$set: {
        email: "architect@fms.com"
    }
}, {upsert: true});

