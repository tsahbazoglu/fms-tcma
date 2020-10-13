db.getSisterDB("configdb").properties.findOne({key: "product"});
db.getSisterDB("configdb").properties.update({key: "product"}, {$set: {
        "PDFTOOL": "/home/fms/pdftool/",
        "EXPORT_PATH": "/home/fms/export/",
        "MAIN_PROJECT_CODE": "fms",
        "DEBUG_MODE": "none",
        "ICON": "favicon_tspb.png",
        "TITLE_ACRONYM": "TSPB",
        "TITLE": "Türkiye Sermaye Piyasaları Birliği",
        "EIMZA_LICENCE_PATH": "file\://home/fms/eimza_prod_files/lisans.xml",
        "EIMZA_CONFIG_PATH": "file\://home/fms/eimza_prod_files/esya-signature-config.xml",
        "EIMZA_POLICY_PATH": "file\://home/fms/eimza_prod_files/certval-policy.xml",
        "EIMZA_TYPE": "CARD",
        "LDAP_ADMIN": "cn\=admin,dc\=tspb,dc\=org,dc\=tr",
        "LDAP_PASSWORD": "12345678",
        "LDAP_URL": "ldap://openldap:389",
        "LDAP_USERS_DN": "ou=Users,dc=tspb,dc=org,dc=tr",
        "LDAP_ROLES_DN": "ou=Roles,dc=tspb,dc=org,dc=tr",
        "SEND_EMAIL_DISABLED": "FALSE",
        "DELEGATE_DB_NAME": "tdubdb",
        "DELEGATE_TABLE_NAME": "corp_delegation",
        "DELEGATED_MEMBER_FIELD_NAME": "uyeId",
        "DELEGATING_MEMBER_FIELD_NAME": "kurulusId",
        "DELEGATING_FORM_FIELD_NAME": "kurulusId"
    }
}, {upsert: true});

db.getSisterDB("configdb").properties.findOne({key: "test"});
db.getSisterDB("configdb").properties.update({key: "test"}, {$set: {
        "PDFTOOL": "/home/fms/pdftool/",
        "EXPORT_PATH": "/home/fms/export/",
        "MAIN_PROJECT_CODE": "fms",
        "DEBUG_MODE": "none",
        "ICON": "favicon_tspb.png",
        "TITLE_ACRONYM": "COMPANY_ACRONYM",
        "TITLE": "Türkiye Sermaye Piyasaları Birliği",
        "EIMZA_LICENCE_PATH": "file\://home/fms/eimza_prod_files/lisans.xml",
        "EIMZA_CONFIG_PATH": "file\://home/fms/eimza_prod_files/esya-signature-config.xml",
        "EIMZA_POLICY_PATH": "file\://home/fms/eimza_prod_files/certval-policy.xml",
        "EIMZA_TYPE": "CARD",
        "LDAP_ADMIN": "cn\=admin,dc\=tspb,dc\=org,dc\=tr",
        "LDAP_PASSWORD": "12345678",
        "LDAP_URL": "ldap://openldap:389",
        "LDAP_USERS_DN": "ou=Users,dc=tspb,dc=org,dc=tr",
        "LDAP_ROLES_DN": "ou=Roles,dc=tspb,dc=org,dc=tr",
        "SEND_EMAIL_DISABLED": "FALSE",
        "DELEGATE_DB_NAME": "tdubdb",
        "DELEGATE_TABLE_NAME": "corp_delegation",
        "DELEGATED_MEMBER_FIELD_NAME": "uyeId",
        "DELEGATING_MEMBER_FIELD_NAME": "kurulusId",
        "DELEGATING_FORM_FIELD_NAME": "kurulusId"
    }
}, {upsert: true});
