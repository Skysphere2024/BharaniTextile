var configuration_map = {
    "notificationRuleList": [{
        "whomTo": {
            "deviceSelection": "specific",
            "device": ["desktop", "tablet"],
            "browser": ["chrome", "firefox", "safari"],
            "visitor": "all",
            "visitor_type": "all",
            "targetRule": "all"
        },
        "whereTo": {
            "pageRuleCode": {
                "targetRule": "all",
                "rules": [{
                    "operator": "equalTo",
                    "value": "https:\/\/www.biba.in\/"
                }]
            }
        },
        "whenTo": {
            "targetRule": "all",
            "timeOnSite": 15,
            "timeOnSiteOperator": "second"
        },
        "predictiveaction": [],
        "notificationId": "MTg2OTM1LTQ=",
        "startDate": 1729671420,
        "endDate": 1924847124,
        "spa": 0,
        "delay_dismiss": "0",
        "freq_cap": {
            "campaign": {
                "days": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "from": "00:00",
                "to": "23:59"
            },
            "frequency": "1",
            "frequencyType": "session"
        },
        "skip": true,
        "running": true,
        "type": "1",
        "siteId": ["5922b8e5e77a138b14d3758bdf52ceab"],
        "cg": "5",
        "t_type": "0",
        "recoType": null,
        "maxLimit": "3"
    }, {
        "whomTo": {
            "deviceSelection": "specific",
            "device": ["mobile"],
            "browser": ["chrome", "firefox", "safari"],
            "visitor": "all",
            "visitor_type": "all",
            "targetRule": "all"
        },
        "whereTo": {
            "pageRuleCode": {
                "targetRule": "all",
                "rules": [{
                    "operator": "equalTo",
                    "value": "https:\/\/www.biba.in\/"
                }]
            }
        },
        "whenTo": {
            "targetRule": "all",
            "timeOnSite": 15,
            "timeOnSiteOperator": "second"
        },
        "predictiveaction": [],
        "notificationId": "MTg2OTM1LTM=",
        "startDate": 1729671342,
        "endDate": 1924847124,
        "spa": 0,
        "delay_dismiss": "0",
        "freq_cap": {
            "campaign": {
                "days": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "from": "00:00",
                "to": "23:59"
            },
            "frequency": "1",
            "frequencyType": "session"
        },
        "skip": true,
        "running": true,
        "type": "1",
        "siteId": ["5922b8e5e77a138b14d3758bdf52ceab"],
        "cg": "5",
        "t_type": "0",
        "recoType": null,
        "maxLimit": "3"
    }],
    "bpnRuleList": [{
        "optInType": "single",
        "optInRule": "all",
        "notificationId": "MTg2OTM1NTkyMmI4ZTVlNzdhMTM4YjE0ZDM3NThiZGY1MmNlYWI=",
        "whereTo": {
            "pageRuleCode": {
                "targetRule": "all",
                "rules": []
            }
        },
        "whenTo": [],
        "isVapidEnabled": 0
    }],
    "config": {
        "enableNotification": true,
        "enableBpn": true
    }
};