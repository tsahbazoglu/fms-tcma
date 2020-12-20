
db.getSisterDB("iondb").ion_form_1160_render.remove();

var ion_form_1160_notify_type_000 = db.getSisterDB("iondb").ion_form_1160_notify_types.findOne({"code": "ion_form_1160_notify_type_000"})._id;
var ion_form_1160_notify_type_001 = db.getSisterDB("iondb").ion_form_1160_notify_types.findOne({"code": "ion_form_1160_notify_type_001"})._id;
var ion_form_1160_notify_type_002 = db.getSisterDB("iondb").ion_form_1160_notify_types.findOne({"code": "ion_form_1160_notify_type_002"})._id;
var ion_form_1160_notify_type_003 = db.getSisterDB("iondb").ion_form_1160_notify_types.findOne({"code": "ion_form_1160_notify_type_003"})._id;
var ion_form_1160_notify_type_004 = db.getSisterDB("iondb").ion_form_1160_notify_types.findOne({"code": "ion_form_1160_notify_type_004"})._id;
var ion_form_1160_notify_type_005 = db.getSisterDB("iondb").ion_form_1160_notify_types.findOne({"code": "ion_form_1160_notify_type_005"})._id;
var ion_form_1160_notify_type_006 = db.getSisterDB("iondb").ion_form_1160_notify_types.findOne({"code": "ion_form_1160_notify_type_006"})._id;
var ion_form_1160_notify_type_007 = db.getSisterDB("iondb").ion_form_1160_notify_types.findOne({"code": "ion_form_1160_notify_type_007"})._id;
var ion_form_1160_notify_type_008 = db.getSisterDB("iondb").ion_form_1160_notify_types.findOne({"code": "ion_form_1160_notify_type_008"})._id;
var ion_form_1160_notify_type_009 = db.getSisterDB("iondb").ion_form_1160_notify_types.findOne({"code": "ion_form_1160_notify_type_009"})._id;
var ion_form_1160_notify_type_010 = db.getSisterDB("iondb").ion_form_1160_notify_types.findOne({"code": "ion_form_1160_notify_type_010"})._id;
var ion_form_1160_notify_type_011 = db.getSisterDB("iondb").ion_form_1160_notify_types.findOne({"code": "ion_form_1160_notify_type_011"})._id;
var ion_form_1160_notify_type_012 = db.getSisterDB("iondb").ion_form_1160_notify_types.findOne({"code": "ion_form_1160_notify_type_012"})._id;
var ion_form_1160_notify_type_013 = db.getSisterDB("iondb").ion_form_1160_notify_types.findOne({"code": "ion_form_1160_notify_type_013"})._id;
var ion_form_1160_notify_type_014 = db.getSisterDB("iondb").ion_form_1160_notify_types.findOne({"code": "ion_form_1160_notify_type_014"})._id;
var ion_form_1160_notify_type_015 = db.getSisterDB("iondb").ion_form_1160_notify_types.findOne({"code": "ion_form_1160_notify_type_015"})._id;

var ion_setting_activity_status_000 = db.getSisterDB("iondb").ion_setting_activity_status.findOne({"code": "ion_setting_activity_status_000"})._id;
var ion_setting_activity_status_001 = db.getSisterDB("iondb").ion_setting_activity_status.findOne({"code": "ion_setting_activity_status_001"})._id;


db.getSisterDB("iondb").ion_form_1160_render.insert({
    "notify_type": ion_form_1160_notify_type_000,
    "activity_status": [ion_setting_activity_status_000, ion_setting_activity_status_001],
    "render": {
        "activity_status": false,
        "ekler": false,
        "posta_kodu": true,
        "telefon": true,
        "call_center_no": true,
        "faks": true,
        "email": true,
        "web_site": true,
        "tax_office_name": true,
        "tax_id_no": true,
        "main_aggrement_date": true,
        "tic_sicil_kayit_il": true,
        "tic_sicil_kayit_tarihi": true,
        "tic_sicil_no": true,
        "tic_sicil_meslek_grubu": true,
        "nace_kodu": true,
        "city": true,
        "country": true,
        "address": true
    }
});

db.getSisterDB("iondb").ion_form_1160_render.insert({
    "notify_type": ion_form_1160_notify_type_001,
    "activity_status": ion_setting_activity_status_000,
    "render": {
        "activity_status": true,
        "ekler": false,
        "posta_kodu": true,
        "telefon": true,
        "call_center_no": true,
        "faks": true,
        "email": true,
        "web_site": true,
        "tax_office_name": true,
        "tax_id_no": true,
        "main_aggrement_date": true,
        "tic_sicil_kayit_il": true,
        "tic_sicil_kayit_tarihi": true,
        "tic_sicil_no": true,
        "tic_sicil_meslek_grubu": true,
        "nace_kodu": true,
        "city": true,
        "country": true,
        "address": true
    }
});

db.getSisterDB("iondb").ion_form_1160_render.insert({
    "notify_type": ion_form_1160_notify_type_001,
    "activity_status": [ion_setting_activity_status_001],
    "render": {
        "activity_status": true,
        "ekler": true,
        "posta_kodu": true,
        "telefon": true,
        "call_center_no": true,
        "faks": true,
        "email": true,
        "web_site": true,
        "tax_office_name": true,
        "tax_id_no": true,
        "main_aggrement_date": true,
        "tic_sicil_kayit_il": true,
        "tic_sicil_kayit_tarihi": true,
        "tic_sicil_no": true,
        "tic_sicil_meslek_grubu": true,
        "nace_kodu": true,
        "city": true,
        "country": true,
        "address": true
    }
});


db.getSisterDB("iondb").ion_form_1160_render.insert({
    "notify_type": ion_form_1160_notify_type_002,
    "activity_status": [ion_setting_activity_status_000, ion_setting_activity_status_001],
    "render": {
        "activity_status": false,
        "ekler": false,
        "posta_kodu": true,
        "telefon": false,
        "call_center_no": false,
        "faks": false,
        "email": false,
        "web_site": false,
        "tax_office_name": false,
        "tax_id_no": false,
        "main_aggrement_date": false,
        "tic_sicil_kayit_il": false,
        "tic_sicil_kayit_tarihi": false,
        "tic_sicil_no": false,
        "tic_sicil_meslek_grubu": false,
        "nace_kodu": false,
        "city": false,
        "country": false,
        "address": false
    }});

db.getSisterDB("iondb").ion_form_1160_render.insert({
    "notify_type": ion_form_1160_notify_type_003,
    "activity_status": [ion_setting_activity_status_000, ion_setting_activity_status_001],
    "render": {
        "activity_status": false,
        "ekler": false,
        "posta_kodu": false,
        "telefon": true,
        "call_center_no": false,
        "faks": false,
        "email": false,
        "web_site": false,
        "tax_office_name": false,
        "tax_id_no": false,
        "main_aggrement_date": false,
        "tic_sicil_kayit_il": false,
        "tic_sicil_kayit_tarihi": false,
        "tic_sicil_no": false,
        "tic_sicil_meslek_grubu": false,
        "nace_kodu": false,
        "city": false,
        "country": false,
        "address": false
    }});

db.getSisterDB("iondb").ion_form_1160_render.insert({
    "notify_type": ion_form_1160_notify_type_004,
    "activity_status": [ion_setting_activity_status_000, ion_setting_activity_status_001],
    "render": {
        "activity_status": false,
        "ekler": false,
        "posta_kodu": false,
        "telefon": false,
        "call_center_no": true,
        "faks": false,
        "email": false,
        "web_site": false,
        "tax_office_name": false,
        "tax_id_no": false,
        "main_aggrement_date": false,
        "tic_sicil_kayit_il": false,
        "tic_sicil_kayit_tarihi": false,
        "tic_sicil_no": false,
        "tic_sicil_meslek_grubu": false,
        "nace_kodu": false,
        "city": false,
        "country": false,
        "address": false
    }});

db.getSisterDB("iondb").ion_form_1160_render.insert({
    "notify_type": ion_form_1160_notify_type_005,
    "activity_status": [ion_setting_activity_status_000, ion_setting_activity_status_001],
    "render": {
        "activity_status": false,
        "ekler": false,
        "posta_kodu": false,
        "telefon": false,
        "call_center_no": false,
        "faks": true,
        "email": false,
        "web_site": false,
        "tax_office_name": false,
        "tax_id_no": false,
        "main_aggrement_date": false,
        "tic_sicil_kayit_il": false,
        "tic_sicil_kayit_tarihi": false,
        "tic_sicil_no": false,
        "tic_sicil_meslek_grubu": false,
        "nace_kodu": false,
        "city": false,
        "country": false,
        "address": false
    }});

db.getSisterDB("iondb").ion_form_1160_render.insert({
    "notify_type": ion_form_1160_notify_type_006,
    "activity_status": [ion_setting_activity_status_000, ion_setting_activity_status_001],
    "render": {
        "activity_status": false,
        "ekler": false,
        "posta_kodu": false,
        "telefon": false,
        "call_center_no": false,
        "faks": false,
        "email": true,
        "web_site": false,
        "tax_office_name": false,
        "tax_id_no": false,
        "main_aggrement_date": false,
        "tic_sicil_kayit_il": false,
        "tic_sicil_kayit_tarihi": false,
        "tic_sicil_no": false,
        "tic_sicil_meslek_grubu": false,
        "nace_kodu": false,
        "city": false,
        "country": false,
        "address": false
    }});

db.getSisterDB("iondb").ion_form_1160_render.insert({
    "notify_type": ion_form_1160_notify_type_007,
    "activity_status": [ion_setting_activity_status_000, ion_setting_activity_status_001],
    "render": {
        "activity_status": false,
        "ekler": false,
        "posta_kodu": false,
        "telefon": false,
        "call_center_no": false,
        "faks": false,
        "email": false,
        "web_site": true,
        "tax_office_name": false,
        "tax_id_no": false,
        "main_aggrement_date": false,
        "tic_sicil_kayit_il": false,
        "tic_sicil_kayit_tarihi": false,
        "tic_sicil_no": false,
        "tic_sicil_meslek_grubu": false,
        "nace_kodu": false,
        "city": false,
        "country": false,
        "address": false
    }});

db.getSisterDB("iondb").ion_form_1160_render.insert({
    "notify_type": ion_form_1160_notify_type_008,
    "activity_status": [ion_setting_activity_status_000, ion_setting_activity_status_001],
    "render": {
        "activity_status": false,
        "ekler": false,
        "posta_kodu": false,
        "telefon": false,
        "call_center_no": false,
        "faks": false,
        "email": false,
        "web_site": false,
        "tax_office_name": true,
        "tax_id_no": false,
        "main_aggrement_date": false,
        "tic_sicil_kayit_il": false,
        "tic_sicil_kayit_tarihi": false,
        "tic_sicil_no": false,
        "tic_sicil_meslek_grubu": false,
        "nace_kodu": false,
        "city": false,
        "country": false,
        "address": false
    }});

db.getSisterDB("iondb").ion_form_1160_render.insert({
    "notify_type": ion_form_1160_notify_type_009,
    "activity_status": [ion_setting_activity_status_000, ion_setting_activity_status_001],
    "render": {
        "activity_status": false,
        "ekler": false,
        "posta_kodu": false,
        "telefon": false,
        "call_center_no": false,
        "faks": false,
        "email": false,
        "web_site": false,
        "tax_office_name": false,
        "tax_id_no": true,
        "main_aggrement_date": false,
        "tic_sicil_kayit_il": false,
        "tic_sicil_kayit_tarihi": false,
        "tic_sicil_no": false,
        "tic_sicil_meslek_grubu": false,
        "nace_kodu": false,
        "city": false,
        "country": false,
        "address": false
    }});

db.getSisterDB("iondb").ion_form_1160_render.insert({
    "notify_type": ion_form_1160_notify_type_010,
    "activity_status": [ion_setting_activity_status_000, ion_setting_activity_status_001],
    "render": {
        "activity_status": false,
        "ekler": false,
        "posta_kodu": false,
        "telefon": false,
        "call_center_no": false,
        "faks": false,
        "email": false,
        "web_site": false,
        "tax_office_name": false,
        "tax_id_no": false,
        "main_aggrement_date": true,
        "tic_sicil_kayit_il": false,
        "tic_sicil_kayit_tarihi": false,
        "tic_sicil_no": false,
        "tic_sicil_meslek_grubu": false,
        "nace_kodu": false,
        "city": false,
        "country": false,
        "address": false
    }});

db.getSisterDB("iondb").ion_form_1160_render.insert({
    "notify_type": ion_form_1160_notify_type_011,
    "activity_status": [ion_setting_activity_status_000, ion_setting_activity_status_001],
    "render": {
        "activity_status": false,
        "ekler": false,
        "posta_kodu": false,
        "telefon": false,
        "call_center_no": false,
        "faks": false,
        "email": false,
        "web_site": false,
        "tax_office_name": false,
        "tax_id_no": false,
        "main_aggrement_date": false,
        "tic_sicil_kayit_il": true,
        "tic_sicil_kayit_tarihi": false,
        "tic_sicil_no": false,
        "tic_sicil_meslek_grubu": false,
        "nace_kodu": false,
        "city": false,
        "country": false,
        "address": false
    }});

db.getSisterDB("iondb").ion_form_1160_render.insert({
    "notify_type": ion_form_1160_notify_type_012,
    "activity_status": [ion_setting_activity_status_000, ion_setting_activity_status_001],
    "render": {
        "activity_status": false,
        "ekler": false,
        "posta_kodu": false,
        "telefon": false,
        "call_center_no": false,
        "faks": false,
        "email": false,
        "web_site": false,
        "tax_office_name": false,
        "tax_id_no": false,
        "main_aggrement_date": false,
        "tic_sicil_kayit_il": false,
        "tic_sicil_kayit_tarihi": true,
        "tic_sicil_no": false,
        "tic_sicil_meslek_grubu": false,
        "nace_kodu": false,
        "city": false,
        "country": false,
        "address": false
    }});

db.getSisterDB("iondb").ion_form_1160_render.insert({
    "notify_type": ion_form_1160_notify_type_013,
    "activity_status": [ion_setting_activity_status_000, ion_setting_activity_status_001],
    "render": {
        "activity_status": false,
        "ekler": false,
        "posta_kodu": false,
        "telefon": false,
        "call_center_no": false,
        "faks": false,
        "email": false,
        "web_site": false,
        "tax_office_name": false,
        "tax_id_no": false,
        "main_aggrement_date": false,
        "tic_sicil_kayit_il": false,
        "tic_sicil_kayit_tarihi": false,
        "tic_sicil_no": true,
        "tic_sicil_meslek_grubu": false,
        "nace_kodu": false,
        "city": false,
        "country": false,
        "address": false
    }});

db.getSisterDB("iondb").ion_form_1160_render.insert({
    "notify_type": ion_form_1160_notify_type_014,
    "activity_status": [ion_setting_activity_status_000, ion_setting_activity_status_001],
    "render": {
        "activity_status": false,
        "ekler": false,
        "posta_kodu": false,
        "telefon": false,
        "call_center_no": false,
        "faks": false,
        "email": false,
        "web_site": false,
        "tax_office_name": false,
        "tax_id_no": false,
        "main_aggrement_date": false,
        "tic_sicil_kayit_il": false,
        "tic_sicil_kayit_tarihi": false,
        "tic_sicil_no": false,
        "tic_sicil_meslek_grubu": true,
        "nace_kodu": false,
        "city": false,
        "country": false,
        "address": false
    }
});

db.getSisterDB("iondb").ion_form_1160_render.insert({
    "notify_type": ion_form_1160_notify_type_015,
    "activity_status": [ion_setting_activity_status_000, ion_setting_activity_status_001],
    "render": {
        "activity_status": false,
        "ekler": false,
        "posta_kodu": false,
        "telefon": false,
        "call_center_no": false,
        "faks": false,
        "email": false,
        "web_site": false,
        "tax_office_name": false,
        "tax_id_no": false,
        "main_aggrement_date": false,
        "tic_sicil_kayit_il": false,
        "tic_sicil_kayit_tarihi": false,
        "tic_sicil_no": false,
        "tic_sicil_meslek_grubu": false,
        "nace_kodu": true,
        "city": false,
        "country": false,
        "address": false
    }
});
 