(navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom") || !window.smartechclient) && (window.smartechclient = {
    w: window,
    d: document,
    s: "script",
    f: "//osjs.netcoresmartech.com/",
    o: "smartech",
    initiator: function(t, e, s, i, n) {
        t.SmartechObject = n, t[n] = t[n] || this.preSmartech, t[n] = t[n].bind(this);
        t = localStorage.getItem("__stconfig") || null;
        t && (n = JSON.parse(t), new Date(n.exd) > new Date ? "0" !== n.ps && "0" !== n.js || console.log("Js blocked.") : localStorage.removeItem("__stconfig"))
    },
    setCustomVariable: function(e, s) {
        var i = window.location.href,
            n = new URL(i);
        if (i.includes(e) || null !== sessionStorage.getItem(e)) {
            let t = n.searchParams.get(e);
            return /\W/g.test(t) ? s : "null" === (t = i.includes(e) ? t : sessionStorage.getItem(e)) ? (null !== sessionStorage.getItem(e) && sessionStorage.removeItem(e), s) : (i.includes(e) && sessionStorage.setItem(e, t), t)
        }
        return s
    },
    checkLoad: function(e, s) {
        if (e && s) {
            let t = sessionStorage.getItem("__stmd");
            ["l", "s", "demo", "dev"].includes(t) || (t = .95 < (t = Math.random()) ? "l" : "s", sessionStorage.setItem("__stmd", t)), this.loadSt(e, s, t)
        }
    },
    generateSrc: function(t, e, s) {
        t = "?clientkey=" + t + "&siteid=" + e + "&rc=" + s;
        let i = this.setCustomVariable("smtenv", "v1/js-versioning"),
            n = ("v1/js-versioning" != i && (i += ".js"), this.f = "//" + this.setCustomVariable("smtdomain", "osjs"), this.setCustomVariable("smtport", ""));
        return 0 < n.length && (n = ":" + n), "https:" + this.f + ".netcoresmartech.com" + n + "/" + i + t
    },
    fetchTokens: async function(t, e, s) {
        var s = `https://cdnvc.netcoresmartech.com/vc/prod/wntoken_${s}.txt`,
            [s, i] = await Promise.all([this.getToken("https://cdnvc.netcoresmartech.com/vc/prod/wntoken.txt"), this.getToken(s)]);
        e.src = t + `&tk1=${s}&tk2=` + i
    },
    getToken: async function(t) {
        var e = Date.now();
        try {
            t = t + "?ts=" + e;
            var s = await fetch(t);
            return s.ok ? await s.json() : e
        } catch (t) {
            return e
        }
    },
    loadSt: function(t, e, s) {
        var i = this.d.createElement(this.s),
            t = (i.async = 1, this.generateSrc(t, e, s)),
            s = (i.id = "smartech_v4", this.d.getElementById(i.id));
        s || (this.d.head.appendChild(i), this.fetchTokens(t, i, e))
    },
    preSmartech: function(t, e, s) {
        var i;
        "create" === t ? (i = e, e = this.setCustomVariable("smtclientid", i), sessionStorage.setItem("ck", e), sessionStorage.setItem("__smtidc", (s || "").toLowerCase()), this.checkLoad(sessionStorage.getItem("ck"), localStorage.getItem("__stsiteid"))) : "register" === t ? (i = e, e = this.setCustomVariable("smtsiteid", i), localStorage.setItem("__stsiteid", e), this.checkLoad(sessionStorage.getItem("ck"), localStorage.getItem("__stsiteid"))) : (this.w[this.o].q = this.w[this.o].q || []).push(arguments)
    }
}, window.smartechclient.initiator.bind(window.smartechclient), window.smartechclient.setCustomVariable.bind(window.smartechclient), window.smartechclient.checkLoad.bind(window.smartechclient), window.smartechclient.generateSrc.bind(window.smartechclient), window.smartechclient.fetchTokens.bind(window.smartechclient), window.smartechclient.loadSt.bind(window.smartechclient), window.smartechclient.preSmartech.bind(window.smartechclient), window.smartechclient.initiator(window, document, "script", "//osjs.netcoresmartech.com/", "smartech"), navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom")) && (module.exports = window.smartechclient);