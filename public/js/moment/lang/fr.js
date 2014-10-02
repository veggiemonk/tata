// moment.js language configuration
// language : french (fr)
// author : John Fischer : https://github.com/jfroffice
(function () {
    function e(e) {
        e.lang("fr", {months: "Janvier_F\u00e9vrier_Mars_Avril_Mai_Juin_Juillet_Ao\u00fbt_Septembre_Octobre_Novembre_D\u00e9cembre".split("_"), monthsShort: "janv._f\u00e9vr._mars_avr._mai_juin_juil._ao\u00fbt_sept._oct._nov._d\u00e9c.".split("_"), weekdays: "Dimanche_Lundi_Mardi_Mercredi_Jeudi_Vendredi_Samedi".split("_"), weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"), longDateFormat: {LT: "HH:mm", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT"}, calendar: {sameDay: "[Aujourd'hui \u00e0] LT", nextDay: "[Demain \u00e0] LT", nextWeek: "dddd [\u00e0] LT", lastDay: "[Hier \u00e0] LT", lastWeek: "dddd [dernier \u00e0] LT", sameElse: "L"}, relativeTime: {future: "dans %s", past: "il y a %s", s: "quelques secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans"}, ordinal: function (e) {
            return e + (e === 1 ? "er" : "\u00e8me")
        }, week: {dow: 1, doy: 4}})
    }

    typeof define == "function" && define.amd && define(["moment"], e), typeof window != "undefined" && window.moment && e(window.moment)
})();