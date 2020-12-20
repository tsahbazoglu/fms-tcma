
db.getSisterDB("iondb").ion_form_1170_render.findOne();

db.getSisterDB("iondb").ion_form_1170_render.remove();

var ion_setting_notify_type_000 = db.getSisterDB("iondb").ion_setting_notify_type.findOne({"code": "ion_setting_notify_type_000"})._id;
var ion_setting_notify_type_001 = db.getSisterDB("iondb").ion_setting_notify_type.findOne({"code": "ion_setting_notify_type_001"})._id;
var ion_setting_notify_type_002 = db.getSisterDB("iondb").ion_setting_notify_type.findOne({"code": "ion_setting_notify_type_002"})._id;
var ion_setting_notify_type_003 = db.getSisterDB("iondb").ion_setting_notify_type.findOne({"code": "ion_setting_notify_type_003"})._id;
var ion_setting_notify_type_004 = db.getSisterDB("iondb").ion_setting_notify_type.findOne({"code": "ion_setting_notify_type_004"})._id;
var ion_setting_notify_type_005 = db.getSisterDB("iondb").ion_setting_notify_type.findOne({"code": "ion_setting_notify_type_005"})._id;
var ion_setting_notify_type_006 = db.getSisterDB("iondb").ion_setting_notify_type.findOne({"code": "ion_setting_notify_type_006"})._id;

var ion_setting_activity_status_000 = db.getSisterDB("iondb").ion_setting_activity_status.findOne({"code": "ion_setting_activity_status_000"})._id;
var ion_setting_activity_status_001 = db.getSisterDB("iondb").ion_setting_activity_status.findOne({"code": "ion_setting_activity_status_001"})._id;


db.getSisterDB("iondb").ion_form_1170_render.insert({
    "notify_type": ion_setting_notify_type_000,
    "activity_status": [ion_setting_activity_status_000, ion_setting_activity_status_001],
    "render": {
        "activity_status": false,
        "ekler": false,
        "manager_ad_soyad": true,
        "posta_kodu": true,
        "telefon": true,
        "faks": true,
        "org_name": true,
        "org_type": true,
        "address": true,
        "bulundugu_il": true,
        "bulundugu_ilce": true
    }
});

db.getSisterDB("iondb").ion_form_1170_render.insert({
    "notify_type": ion_setting_notify_type_001,
    "activity_status": ion_setting_activity_status_000,
    "render": {
        "activity_status": true,
        "ekler": false,
        "manager_ad_soyad": true,
        "posta_kodu": true,
        "telefon": true,
        "faks": true,
        "org_name": true,
        "org_type": true,
        "address": true,
        "bulundugu_il": true,
        "bulundugu_ilce": true
    }
});

db.getSisterDB("iondb").ion_form_1170_render.insert({
    "notify_type": ion_setting_notify_type_001,
    "activity_status": ion_setting_activity_status_001,
    "render": {
        "activity_status": true,
        "ekler": true,
        "manager_ad_soyad": true,
        "posta_kodu": true,
        "telefon": true,
        "faks": true,
        "org_name": true,
        "org_type": true,
        "address": true,
        "bulundugu_il": true,
        "bulundugu_ilce": true
    }
});

db.getSisterDB("iondb").ion_form_1170_render.insert({
    "notify_type": ion_setting_notify_type_002,
    "activity_status": [ion_setting_activity_status_000, ion_setting_activity_status_001],
    "render": {
        "activity_status": false,
        "ekler": false,
        "manager_ad_soyad": false,
        "posta_kodu": false,
        "telefon": false,
        "faks": false,
        "org_name": true,
        "org_type": true,
        "address": false,
        "bulundugu_il": false,
        "bulundugu_ilce": false
    }
});

db.getSisterDB("iondb").ion_form_1170_render.insert({
    "notify_type": ion_setting_notify_type_003,
    "activity_status": [ion_setting_activity_status_000, ion_setting_activity_status_001],
    "render": {
        "activity_status": false,
        "ekler": false,
        "manager_ad_soyad": true,
        "posta_kodu": false,
        "telefon": false,
        "faks": false,
        "org_name": false,
        "org_type": false,
        "address": false,
        "bulundugu_il": false,
        "bulundugu_ilce": false
    }
});

db.getSisterDB("iondb").ion_form_1170_render.insert({
    "notify_type": ion_setting_notify_type_004,
    "activity_status": [ion_setting_activity_status_000, ion_setting_activity_status_001],
    "render": {
        "activity_status": false,
        "ekler": false,
        "manager_ad_soyad": false,
        "posta_kodu": true,
        "telefon": false,
        "faks": false,
        "org_name": false,
        "org_type": false,
        "address": false,
        "bulundugu_il": false,
        "bulundugu_ilce": false
    }
});

db.getSisterDB("iondb").ion_form_1170_render.insert({
    "notify_type": ion_setting_notify_type_005,
    "activity_status": [ion_setting_activity_status_000, ion_setting_activity_status_001],
    "render": {
        "activity_status": false,
        "ekler": false,
        "manager_ad_soyad": false,
        "posta_kodu": false,
        "telefon": true,
        "faks": false,
        "org_name": false,
        "org_type": false,
        "address": false,
        "bulundugu_il": false,
        "bulundugu_ilce": false
    }
});

db.getSisterDB("iondb").ion_form_1170_render.insert({
    "notify_type": ion_setting_notify_type_006,
    "activity_status": [ion_setting_activity_status_000, ion_setting_activity_status_001],
    "render": {
        "activity_status": false,
        "ekler": false,
        "manager_ad_soyad": false,
        "posta_kodu": false,
        "telefon": false,
        "faks": true,
        "org_name": false,
        "org_type": false,
        "address": false,
        "bulundugu_il": false,
        "bulundugu_ilce": false
    }
});
 