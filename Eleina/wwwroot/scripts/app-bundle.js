define('app',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
        }
        App.prototype.configureRouter = function (config, router) {
            this.router = router;
            config.title = 'Aurelia';
            config.map([
                { route: ['', 'also'], name: 'also', moduleId: 'Subpages/also', nav: true, title: "also" },
                { route: 'super', name: 'super', moduleId: 'Subpages/super', nav: true, title: "super" },
            ]);
        };
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFHQTtRQUFBO1FBY0EsQ0FBQztRQVhHLDZCQUFlLEdBQWYsVUFBZ0IsTUFBMkIsRUFBRSxNQUFjO1lBQ3ZELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3JCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxHQUFHLENBQUM7Z0JBQ1AsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtnQkFDMUYsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRTthQUkzRixDQUFDLENBQUM7UUFDUCxDQUFDO1FBQ0wsVUFBQztJQUFELENBZEEsQUFjQyxJQUFBO0lBZFksa0JBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyLCBSb3V0ZXJDb25maWd1cmF0aW9uIH0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcCB7XHJcbiAgICByb3V0ZXI6IFJvdXRlcjtcclxuXHJcbiAgICBjb25maWd1cmVSb3V0ZXIoY29uZmlnOiBSb3V0ZXJDb25maWd1cmF0aW9uLCByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xyXG4gICAgICAgIGNvbmZpZy50aXRsZSA9ICdBdXJlbGlhJztcclxuICAgICAgICBjb25maWcubWFwKFtcbiAgICAgICAgICAgIHsgcm91dGU6IFsnJywgJ2Fsc28nXSwgbmFtZTogJ2Fsc28nLCBtb2R1bGVJZDogJ1N1YnBhZ2VzL2Fsc28nLCBuYXY6IHRydWUsIHRpdGxlOiBcImFsc29cIiB9LFxyXG4gICAgICAgICAgICB7IHJvdXRlOiAnc3VwZXInLCBuYW1lOiAnc3VwZXInLCBtb2R1bGVJZDogJ1N1YnBhZ2VzL3N1cGVyJywgbmF2OiB0cnVlLCB0aXRsZTogXCJzdXBlclwiIH0sXG4gICAgICAgICAgICBcclxuICAgICAgICAgICBcclxuXHJcbiAgICAgICAgXSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLElBQUk7UUFDWCxPQUFPLEVBQUUsSUFBSTtLQUNkLENBQUMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XG4gIGRlYnVnOiB0cnVlLFxuICB0ZXN0aW5nOiB0cnVlXG59O1xuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        if (environment_1.default.debug) {
            aurelia.use.developmentLogging();
        }
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0EsbUJBQTBCLE9BQWdCO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHO2FBQ1IscUJBQXFCLEVBQUU7YUFDdkIsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBRXhCLEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDbkMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLHFCQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztZQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQ3hDLENBQUM7UUFFRCxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBZEQsOEJBY0MiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXVyZWxpYX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnXG5pbXBvcnQgZW52aXJvbm1lbnQgZnJvbSAnLi9lbnZpcm9ubWVudCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYTogQXVyZWxpYSkge1xuICBhdXJlbGlhLnVzZVxuICAgIC5zdGFuZGFyZENvbmZpZ3VyYXRpb24oKVxuICAgIC5mZWF0dXJlKCdyZXNvdXJjZXMnKTtcblxuICBpZiAoZW52aXJvbm1lbnQuZGVidWcpIHtcbiAgICBhdXJlbGlhLnVzZS5kZXZlbG9wbWVudExvZ2dpbmcoKTtcbiAgfVxuXG4gIGlmIChlbnZpcm9ubWVudC50ZXN0aW5nKSB7XG4gICAgYXVyZWxpYS51c2UucGx1Z2luKCdhdXJlbGlhLXRlc3RpbmcnKTtcbiAgfVxuXG4gIGF1cmVsaWEuc3RhcnQoKS50aGVuKCgpID0+IGF1cmVsaWEuc2V0Um9vdCgpKTtcbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('resources/index',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxtQkFBMEIsTUFBOEI7SUFFeEQsQ0FBQztJQUZELDhCQUVDIiwiZmlsZSI6InJlc291cmNlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYW1ld29ya0NvbmZpZ3VyYXRpb24gfSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoY29uZmlnOiBGcmFtZXdvcmtDb25maWd1cmF0aW9uKSB7XG4gICAgLy9jb25maWcuZ2xvYmFsUmVzb3VyY2VzKFtdKTtcbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('Subpages/also',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var also = (function () {
        function also() {
        }
        return also;
    }());
    exports.also = also;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlN1YnBhZ2VzL2Fsc28udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUE7UUFBQTtRQUdBLENBQUM7UUFBRCxXQUFDO0lBQUQsQ0FIQSxBQUdDLElBQUE7SUFIWSxvQkFBSSIsImZpbGUiOiJTdWJwYWdlcy9hbHNvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIGFsc28ge1xyXG5cclxuXHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('Subpages/super',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Super = (function () {
        function Super() {
        }
        return Super;
    }());
    exports.Super = Super;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlN1YnBhZ2VzL3N1cGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBO1FBQUE7UUFFQSxDQUFDO1FBQUQsWUFBQztJQUFELENBRkEsQUFFQyxJQUFBO0lBRlksc0JBQUsiLCJmaWxlIjoiU3VicGFnZXMvc3VwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgU3VwZXIge1xyXG5cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('text!app.html', ['module'], function(module) { module.exports = "<template>\r\n  <require from=\"nav-bar.html\"></require>\r\n  <require from=\"bootstrap/css/bootstrap.css\"></require>\r\n  <require from=\"./styles.css\"></require>\r\n\r\n\r\n  <!--<nav-bar router.bind=\"route: also\"></nav-bar>\r\n  <nav-bar router.bind=\"route: home\"> </nav-bar>-->\r\n \r\n\r\n  <ul class=\"nav nav-tabs\">\r\n    <li role=\"presentation\"><a route-href=\"route: super\">Super</a></li>\r\n    <li role=\"presentation\"><a route-href=\"route: also\">Also</a></li>\r\n \r\n    \r\n  </ul>\r\n\r\n  <div class=\"container\">\r\n    <router-view></router-view>\r\n  </div>\r\n </template>\r\n\r\n"; });
define('text!nav-bar.html', ['module'], function(module) { module.exports = "<template bindable=\"router\">\r\n  <nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\r\n        <span class=\"sr-only\">Toggle Navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\" href=\"#\">\r\n        <i class=\"fa fa-home\"></i>\r\n        <span>${router.title}</span>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li repeat.for=\"row of router.navigation\" class=\"${row.isActive ? 'active' : ''}\">\r\n          <a data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1.in\" href.bind=\"row.href\">${row.title}</a>\r\n        </li>\r\n      </ul>\r\n\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li class=\"loader\" if.bind=\"router.isNavigating\">\r\n          <i class=\"fa fa-spinner fa-spin fa-2x\"></i>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n</template>"; });
define('text!styles.css', ['module'], function(module) { module.exports = "@import url(http://fonts.googleapis.com/css?family=Roboto:400,300);\n@import url(http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css);\n.page-host {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50px;\n  bottom: 0;\n  overflow-x: hidden;\n  overflow-y: auto; }\n\nbody {\n  padding: 70px 0px; }\n\n.fa.pull-right {\n  margin-left: 0.1em; }\n\n.date-picker,\n.date-container {\n  position: relative;\n  display: inline-block;\n  width: 100%;\n  color: #4b4d4e;\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.date-container {\n  padding: 0px 40px; }\n\n.date-picker h2, .date-picker h4 {\n  margin: 0px;\n  padding: 0px;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 200; }\n\n.date-container .date {\n  text-align: center; }\n\n.date-picker span.fa {\n  position: absolute;\n  font-size: 4em;\n  font-weight: 100;\n  padding: 8px 0px 7px;\n  cursor: pointer;\n  top: 0px; }\n\n.date-picker span.fa[data-type=\"subtract\"] {\n  left: 0px; }\n\n.date-picker span.fa[data-type=\"add\"] {\n  right: 0px; }\n\n.date-picker span[data-toggle=\"calendar\"] {\n  display: block;\n  position: absolute;\n  top: -7px;\n  right: 45px;\n  font-size: 1em !important;\n  cursor: pointer; }\n\n.date-picker .input-datepicker {\n  display: none;\n  position: absolute;\n  top: 50%;\n  margin-top: -17px;\n  width: 100%; }\n\n.date-picker .input-datepicker.show-input {\n  display: table; }\n\n@media (min-width: 768px) and (max-width: 1010px) {\n  .date-picker h2 {\n    font-size: 1.5em;\n    font-weight: 400; }\n  .date-picker h4 {\n    font-size: 1.1em; }\n  .date-picker span.fa {\n    font-size: 3em; } }\n"; });
define('text!Subpages/also.html', ['module'], function(module) { module.exports = "<template>\r\n\r\n<p> fuck </p>\r\n\r\n\r\n\r\n</template>"; });
define('text!Subpages/super.html', ['module'], function(module) { module.exports = "<template>\r\n\r\n  <select>\r\n    <option value=\"volvo\">Volvo</option>\r\n    <option value=\"saab\">Saab</option>\r\n    <option value=\"mercedes\">Mercedes</option>\r\n    <option value=\"audi\">Audi</option>\r\n  </select>\r\n\r\n  \r\n\r\n\r\n</template>\r\n"; });
//# sourceMappingURL=app-bundle.js.map