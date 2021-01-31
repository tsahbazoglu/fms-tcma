

var config = db.getSisterDB("configdb").graphanket.findOne({key: "anket_masak_2017"});

db.getSisterDB("test").anketcsv.find({}).forEach(function (v) {
    record = {
        "key": v.code,
        "field": v.code,
        "order": v.order,
        "reportOrder": v.order,
        "componentType": v.componentType,
        "name": v.name,
        "shortName": v.name,
        "money": false,
        "readonly": false,
        "observable": false,
        "roleCheck": true,
        "rendered": {
            "boolean-value": true
        },
        "reportRendered": false,
        "required": false,
        "valueType": "java.lang.String",
        "converterParam": "LITERAL",
        "accesscontrol": "pyuser,uysuser,gsuser,gyuser,mkuser,uysadmin,databankarchitect",
        "style": v.style
    };
    if (v.componentType == "selectOneMenu" || v.componentType == "selectManyListbox") {
        record.converter = "SelectOneStringConverter";
        record.items = {
            "list": v.values
        };
    }
    config.fields.push(record);
});


function findElement(arr, propName, propValue) {
    for (var i = 0; i < arr.length; i++)
        if (arr[i][propName] == propValue)
            return arr[i];
}
function findfield(propValue) {
    return findElement(config.fields, "key", propValue);
}

[
    {"field": "code_0040", effected: ["code_0050", "code_0060"]},
    {"field": "code_0130", effected: ["code_0140"]},
    {"field": "code_0160", effected: ["code_0170"]},
    {"field": "code_0190", effected: ["code_0200"]},
    {"field": "code_0290", effected: ["code_0300", "code_0310"]},
    {"field": "code_0450", effected: ["code_0460"]},
    {"field": "code_0480", effected: ["code_0490"]},
    {"field": "code_0500", effected: ["code_0510"]},
    {"field": "code_0660", effected: ["code_0670"]},
    {"field": "code_0710", effected: ["code_0720", "code_0730", "code_0740", "code_0750", "code_0760"]},
    {"field": "code_0750", effected: ["code_0760"]},
    {"field": "code_1470", effected: ["code_1480", "code_1490"]}
].forEach(function (v) {
    var field = findfield(v.field);
    if (field != null) {
        field.ajax = {
            "enable": true,
            "action": "render",
            "show-hide": " function (value) { return (value == 'Evet')}",
            "effected_keys": v.effected
        };
    } else {
        print(v.field + " not found");
    }
});


[
    "code_0210",
    "code_0220",
    "code_0271",
    "code_0272",
    "code_0273",
    "code_0281",
    "code_0282",
    "code_0283",
    "code_0300",
    "code_0351",
    "code_0352",
    "code_0353",
    "code_0354",
    "code_0355",
    "code_0356",
    "code_0357",
    "code_0340",
    "code_0550",
    "code_0560",
    "code_0740",
    "code_0760",
    "code_1070",
    "code_1010",
    "code_1080",
    "code_1090",
    "code_1110",
    "code_1120",
    "code_1150",
    "code_1160",
    "code_1170",
    "code_1180",
    "code_1190",
    "code_1200",
    "code_1210",
    "code_1220",
    "code_1230",
    "code_1250",
    "code_1260",
    "code_1270",
    "code_1280",
    "code_1290",
    "code_1300",
    "code_1310",
    "code_1320",
    "code_1330",
    "code_1340",
    "code_1350",
    "code_1360",
    "code_1370",
    "code_1380",
    "code_1390",
    "code_1400",
    "code_1420",
    "code_1430",
    "code_1440"
].forEach(function (v) {
    var field = findfield(v);
    if (field != null) {
        field.valueType = "java.lang.Integer";
        field.converter = "NumberConverter";
        field.converterInstance = "integer";
        field.shouldCheckNegative = true;
    } else {
        print(v + " not found");
    }
});



var field = findfield("code_0281");
if (field != null) {
    field.readonly = true;
    field.defaultValue = 1;
} else {
    print("code_0281" + " not found");
}



findfield("code_0550").maxValue = 100;
findfield("code_0560").maxValue = 100;
findfield("code_0740").maxValue = 100;
findfield("code_0760").maxValue = 100;
findfield("code_1110").maxValue = 100;



[
    "code_0550",
    "code_0560",
    "code_0740",
    "code_0760",
    "code_1110"
].forEach(function (v) {
    if (field != null) {
        field = findfield(v);
        field.valueType = "java.lang.Double";
        delete  field.converterInstance;
        field.converterFormat = "'%' ##.##";
    } else {
        print(v + " not found");
    }
});



config.fields.forEach(function (v) {
    v["search-access"] = false;
});
findfield("member")["search-access"] = true;




check = function (crudObject) {
    innercheck = function (crudObject) {
        var renderedMatris = {
            "code_0040": ["code_0050", "code_0060"],
            "code_0130": ["code_0140"],
            "code_0160": ["code_0170"],
            "code_0190": ["code_0200"],
            "code_0290": ["code_0300", "code_0310"],
            "code_0450": ["code_0460"],
            "code_0480": ["code_0490"],
            "code_0500": ["code_0510"],
            "code_0660": ["code_0670"],
            "code_0710": ["code_0720", "code_0730", "code_0740", "code_0750", "code_0760"],
            "code_0750": ["code_0760"],
            "code_1470": ["code_1480", "code_1490"]
        };
        var excludelist = [];
        for (i in renderedMatris) {
            if (crudObject[i] == "Hayır") {
                excludelist = excludelist.concat(renderedMatris[i]);
            }
        }
        var errMessage = "";
        db.getSisterDB("test").anketcsv.find({}).sort({order: 1}).forEach(function (v) {
            if (v.componentType !== "outputText" && excludelist.indexOf(v.code) < 0) {
                var value = crudObject[v.code];
                if (value == null
                        || value === ""
                        || value == "NULL_VALUE"
                        || (Array.isArray(value) && value.length == 0)) {
                    errMessage += "<br/>" + v.name;
                }
            }
        });
        var result = (errMessage == "") ? true : false;
        return {
            result: result,
            gui: "facesMessage", //{"facesMessage","popup"}
            facesMessageSeverity: "error", //{"error","info"}
            facesMessage: errMessage,
            popupMsssage: errMessage
        };
    };

    var current_result = innercheck(crudObject);

    current_result.facesMessage = current_result.facesMessage + "<br/><br/><hr>";
    current_result.popupMsssage = current_result.popupMsssage + "<br/><br/><hr>";

    [
        {tablename: "anket_masak_2017", name: "MASAK URD Anketi 2017"},
        {tablename: "anket_masak_2018", name: "MASAK URD Anketi 2018"},
        {tablename: "anket_masak_2019", name: "MASAK URD Anketi 2019"}
    ].forEach(function (v) {
        var x = db.getSisterDB("anketdb").getCollection(v.tablename).findOne({member: crudObject.member});
        var tamamlandi_eksik = (x == null || !innercheck(x).result) ? "eksik" : "tamamlandı";
        current_result.facesMessage = current_result.facesMessage + "<br/><br/>" + v.name + " " + tamamlandi_eksik;
        current_result.popupMsssage = current_result.popupMsssage + "<br/><br/>" + v.name + " " + tamamlandi_eksik;
    });
    return current_result;
};


check = "function x(o){innercheck=function(c){var e={code_0040:['code_0050','code_0060'],code_0130:['code_0140'],code_0160:['code_0170'],code_0190:['code_0200'],code_0290:['code_0300','code_0310'],code_0450:['code_0460'],code_0480:['code_0490'],code_0500:['code_0510'],code_0660:['code_0670'],code_0710:['code_0720','code_0730','code_0740','code_0750','code_0760'],code_0750:['code_0760'],code_1470:['code_1480','code_1490']},o=[];for(i in e)'Hayır'==c[i]&&(o=o.concat(e[i]));var s='';return db.getSisterDB('test').anketcsv.find({}).sort({order:1}).forEach(function(e){var a;'outputText'!==e.componentType&&o.indexOf(e.code)<0&&((null==(a=c[e.code])||''===a||'NULL_VALUE'==a||Array.isArray(a)&&0==a.length)&&(s+='<br/>'+e.name))}),{result:''==s,gui:'facesMessage',facesMessageSeverity:'error',facesMessage:s,popupMsssage:s}};var s=innercheck(o);return s.facesMessage=s.facesMessage+'<br/><br/><hr>',s.popupMsssage=s.popupMsssage+'<br/><br/><hr>',[{tablename:'anket_masak_2017',name:'MASAK URD Anketi 2017'},{tablename:'anket_masak_2018',name:'MASAK URD Anketi 2018'},{tablename:'anket_masak_2019',name:'MASAK URD Anketi 2019'}].forEach(function(e){var a=db.getSisterDB('anketdb').getCollection(e.tablename).findOne({member:o.member}),c=null!=a&&innercheck(a).result?'tamamlandı':'eksik';s.facesMessage=s.facesMessage+'<br/><br/>'+e.name+' '+c,s.popupMsssage=s.popupMsssage+'<br/><br/>'+e.name+' '+c}),s}"

config.eventPostSave = {
    "db": "anketdb",
    "op": check
};



db.getSisterDB("configdb").graphanket.save(config);
