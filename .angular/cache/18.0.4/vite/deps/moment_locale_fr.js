import {
  require_moment
} from "./chunk-WXXMLALP.js";
import {
  __commonJS,
  __require
} from "./chunk-XEBHCIPT.js";

// node_modules/moment/locale/fr.js
var require_fr = __commonJS({
  "node_modules/moment/locale/fr.js"(exports, module) {
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" && typeof __require === "function" ? factory(require_moment()) : typeof define === "function" && define.amd ? define(["../moment"], factory) : factory(global.moment);
    })(exports, function(moment) {
      "use strict";
      var monthsStrictRegex = /^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i, monthsShortStrictRegex = /(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?)/i, monthsRegex = /(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?|janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i, monthsParse = [
        /^janv/i,
        /^févr/i,
        /^mars/i,
        /^avr/i,
        /^mai/i,
        /^juin/i,
        /^juil/i,
        /^août/i,
        /^sept/i,
        /^oct/i,
        /^nov/i,
        /^déc/i
      ];
      var fr = moment.defineLocale("fr", {
        months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split(
          "_"
        ),
        monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split(
          "_"
        ),
        monthsRegex,
        monthsShortRegex: monthsRegex,
        monthsStrictRegex,
        monthsShortStrictRegex,
        monthsParse,
        longMonthsParse: monthsParse,
        shortMonthsParse: monthsParse,
        weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
        weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
        weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
        weekdaysParseExact: true,
        longDateFormat: {
          LT: "HH:mm",
          LTS: "HH:mm:ss",
          L: "DD/MM/YYYY",
          LL: "D MMMM YYYY",
          LLL: "D MMMM YYYY HH:mm",
          LLLL: "dddd D MMMM YYYY HH:mm"
        },
        calendar: {
          sameDay: "[Aujourd’hui à] LT",
          nextDay: "[Demain à] LT",
          nextWeek: "dddd [à] LT",
          lastDay: "[Hier à] LT",
          lastWeek: "dddd [dernier à] LT",
          sameElse: "L"
        },
        relativeTime: {
          future: "dans %s",
          past: "il y a %s",
          s: "quelques secondes",
          ss: "%d secondes",
          m: "une minute",
          mm: "%d minutes",
          h: "une heure",
          hh: "%d heures",
          d: "un jour",
          dd: "%d jours",
          w: "une semaine",
          ww: "%d semaines",
          M: "un mois",
          MM: "%d mois",
          y: "un an",
          yy: "%d ans"
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
        ordinal: function(number, period) {
          switch (period) {
            case "D":
              return number + (number === 1 ? "er" : "");
            default:
            case "M":
            case "Q":
            case "DDD":
            case "d":
              return number + (number === 1 ? "er" : "e");
            case "w":
            case "W":
              return number + (number === 1 ? "re" : "e");
          }
        },
        week: {
          dow: 1,
          // Monday is the first day of the week.
          doy: 4
          // The week that contains Jan 4th is the first week of the year.
        }
      });
      return fr;
    });
  }
});
export default require_fr();
/*! Bundled license information:

moment/locale/fr.js:
  (*! moment.js locale configuration *)
  (*! locale : French [fr] *)
  (*! author : John Fischer : https://github.com/jfroffice *)
*/
//# sourceMappingURL=moment_locale_fr.js.map
