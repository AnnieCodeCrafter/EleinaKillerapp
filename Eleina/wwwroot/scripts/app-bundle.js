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
                { route: ['/', 'also'], name: 'also', moduleId: 'Subpages/also', nav: true, title: "also" },
                { route: ['/', 'home'], name: 'home', moduleId: 'Subpages/home', nav: true, title: "Home" },
            ]);
        };
        return App;
    }());
    exports.App = App;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFHQTtRQUFBO1FBY0EsQ0FBQztRQVhHLDZCQUFlLEdBQWYsVUFBZ0IsTUFBMkIsRUFBRSxNQUFjO1lBQ3ZELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1lBQ3JCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO1lBQ3pCLE1BQU0sQ0FBQyxHQUFHLENBQUM7Z0JBQ1AsRUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtnQkFDM0YsRUFBRSxLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTthQUk5RixDQUFDLENBQUM7UUFDUCxDQUFDO1FBQ0wsVUFBQztJQUFELENBZEEsQUFjQyxJQUFBO0lBZFksa0JBQUciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm91dGVyLCBSb3V0ZXJDb25maWd1cmF0aW9uIH0gZnJvbSAnYXVyZWxpYS1yb3V0ZXInXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEFwcCB7XHJcbiAgICByb3V0ZXI6IFJvdXRlcjtcclxuXHJcbiAgICBjb25maWd1cmVSb3V0ZXIoY29uZmlnOiBSb3V0ZXJDb25maWd1cmF0aW9uLCByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgICAgIHRoaXMucm91dGVyID0gcm91dGVyO1xyXG4gICAgICAgIGNvbmZpZy50aXRsZSA9ICdBdXJlbGlhJztcclxuICAgICAgICBjb25maWcubWFwKFtcbiAgICAgICAgICAgIHsgcm91dGU6IFsnLycsICdhbHNvJ10sIG5hbWU6ICdhbHNvJywgbW9kdWxlSWQ6ICdTdWJwYWdlcy9hbHNvJywgbmF2OiB0cnVlLCB0aXRsZTogXCJhbHNvXCIgfSxcclxuICAgICAgICAgICAgeyByb3V0ZTogWycvJywgJ2hvbWUnXSwgbmFtZTogJ2hvbWUnLCBtb2R1bGVJZDogJ1N1YnBhZ2VzL2hvbWUnLCBuYXY6IHRydWUsIHRpdGxlOiBcIkhvbWVcIiB9LFxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgXHJcblxyXG4gICAgICAgIF0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlN1YnBhZ2VzL2Fsc28udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUE7UUFBQTtRQUlBLENBQUM7UUFBRCxXQUFDO0lBQUQsQ0FKQSxBQUlDLElBQUE7SUFKWSxvQkFBSSIsImZpbGUiOiJTdWJwYWdlcy9hbHNvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIGFsc28ge1xyXG5cblxuXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('Subpages/home',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var home = (function () {
        function home() {
        }
        return home;
    }());
    exports.home = home;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlN1YnBhZ2VzL2hvbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUE7UUFBQTtRQW9CQSxDQUFDO1FBQUQsV0FBQztJQUFELENBcEJBLEFBb0JDLElBQUE7SUFwQlksb0JBQUkiLCJmaWxlIjoiU3VicGFnZXMvaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBob21lIHtcclxuLy8gICAgLy9lbWFpbCA9ICcnO1xyXG4vLyAgICAvL3Bhc3N3b3JkID0gJyc7XHJcblxyXG4vLyAgICAvL3NpZ251cCgpIHtcclxuLy8gICAgLy8gICAgdmFyIG15VXNlciA9IHsgZW1haWw6IHRoaXMuZW1haWwsIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkIH1cclxuLy8gICAgLy8gICAgY29uc29sZS5sb2cobXlVc2VyKTtcclxuICAgICAgICBcclxuLy8gICAgLy99O1xyXG5cclxuLy8gICAgLy9jb25zKCkge1xyXG4vLyAgICAvLyAgICB2YXIgbXlEYXRhID0gJ0VudGVyIHNvbWUgdGV4dCEnO1xyXG4vLyAgICAvL31cclxuXG5cclxuXHJcblxyXG5cclxuICAgICBcclxuIFxyXG59XHJcbiAgXHJcblxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('text!app.html', ['module'], function(module) { module.exports = "<template>\r\n  <require from=\"nav-bar.html\"></require>\r\n  <require from=\"bootstrap/css/bootstrap.css\"></require>\r\n  <require from=\"./styles.css\"></require>\r\n\n\r\n  <!--<nav-bar router.bind=\"route: also\"></nav-bar>\n  <nav-bar router.bind=\"route: home\"> </nav-bar>-->\n \n\n  <ul class=\"nav nav-tabs\">\n    <li role=\"presentation\"><a route-href=\"route: home\">Home</a></li>\n    <li role=\"presentation\"><a route-href=\"route: also\">Also</a></li>\r\n \r\n    \r\n  </ul>\n\r\n  <div class=\"container\">\r\n    <router-view></router-view>\r\n  </div>\n </template>\r\n\r\n"; });
define('text!styles.css', ['module'], function(module) { module.exports = ".page-host {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50px;\n  bottom: 0;\n  overflow-x: hidden;\n  overflow-y: auto; }\n"; });
define('text!nav-bar.html', ['module'], function(module) { module.exports = "<template bindable=\"router\">\r\n  <nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\r\n        <span class=\"sr-only\">Toggle Navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\" href=\"#\">\r\n        <i class=\"fa fa-home\"></i>\r\n        <span>${router.title}</span>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li repeat.for=\"row of router.navigation\" class=\"${row.isActive ? 'active' : ''}\">\r\n          <a data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1.in\" href.bind=\"row.href\">${row.title}</a>\r\n        </li>\r\n      </ul>\r\n\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li class=\"loader\" if.bind=\"router.isNavigating\">\r\n          <i class=\"fa fa-spinner fa-spin fa-2x\"></i>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n</template>"; });
define('text!Subpages/also.html', ['module'], function(module) { module.exports = "<template>\r\n\r\n<p> shiiiiit </p>\r\n\r\n\r\n\r\n</template>"; });
define('text!Subpages/home.html', ['module'], function(module) { module.exports = "<template>\r\n\r\n  <!--<form role=\"form\" submit.delegate=\"signup()\">\r\n\r\n    <label for=\"email\">Email</label>\r\n    <input type=\"text\" value.bind=\"email\" placeholder=\"Email\">\r\n\r\n    <label for=\"password\">Password</label>\r\n    <input type=\"password\" value.bind=\"password\" placeholder=\"Password\">\r\n\r\n    <button type=\"submit\">Signup</button>\r\n\r\n    <input id=\"name\" type=\"text\" value.bind=\"myData\" />\r\n    <h3>${myData}</h3>\r\n\r\n  </form>-->\r\n\r\n  <!--<div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"span12\">\r\n        <table class=\"table-condensed table-bordered table-striped\">\r\n          <thead>\r\n            <tr>\r\n              <th colspan=\"7\">\r\n                <span class=\"btn-group\">\r\n                  <a class=\"btn\"><i class=\"icon-chevron-left\"></i></a>\r\n                  <a class=\"btn active\">February 2012</a>\r\n                  <a class=\"btn\"><i class=\"icon-chevron-right\"></i></a>\r\n                </span>\r\n              </th>\r\n            </tr>\r\n            <tr>\r\n              <th>Su</th>\r\n              <th>Mo</th>\r\n              <th>Tu</th>\r\n              <th>We</th>\r\n              <th>Th</th>\r\n              <th>Fr</th>\r\n              <th>Sa</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr>\r\n              <td class=\"muted\">29</td>\r\n              <td class=\"muted\">30</td>\r\n              <td class=\"muted\">31</td>\r\n              <td>1</td>\r\n              <td>2</td>\r\n              <td>3</td>\r\n              <td>4</td>\r\n            </tr>\r\n            <tr>\r\n              <td>5</td>\r\n              <td>6</td>\r\n              <td>7</td>\r\n              <td>8</td>\r\n              <td>9</td>\r\n              <td>10</td>\r\n              <td>11</td>\r\n            </tr>\r\n            <tr>\r\n              <td>12</td>\r\n              <td>13</td>\r\n              <td>14</td>\r\n              <td>15</td>\r\n              <td>16</td>\r\n              <td>17</td>\r\n              <td>18</td>\r\n            </tr>\r\n            <tr>\r\n              <td>19</td>\r\n              <td>20</td>\r\n              <td>21</td>\r\n              <td>22</td>\r\n              <td>23</td>\r\n              <td>24</td>\r\n              <td>25</td>\r\n            </tr>\r\n            <tr>\r\n              <td>26</td>\r\n              <td>27</td>\r\n              <td>28</td>\r\n              <td>29</td>\r\n              <td class=\"muted\">1</td>\r\n              <td class=\"muted\">2</td>\r\n              <td class=\"muted\">3</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>-->\n\n  <div class=\"container\">\n\t<div class=\"row\">\n        <div class=\"col-sm-4\">\n            <h2>By Day</h2>\n            <hr/>\n            <div class=\"date-picker\"  data-date=\"2014/09/02\" data-keyboard=\"true\">\n                <div class=\"date-container pull-left\">\n                    <h4 class=\"weekday\">Monday</h4>\n                    <h2 class=\"date\">Februray 4th</h2>\n                    <h4 class=\"year pull-right\">2014</h4>\n                </div>\n                <span data-toggle=\"datepicker\" data-type=\"subtract\" class=\"fa fa-angle-left\"></span>\n                <span data-toggle=\"datepicker\" data-type=\"add\" class=\"fa fa-angle-right\"></span>\n                <div class=\"input-group input-datepicker\">\n                    <input type=\"text\" class=\"form-control\" data-format=\"YYYY/MM/DD\" placeholder=\"YYYY/MM/DD\">\n                    <span class=\"input-group-btn\">\n                        <button class=\"btn btn-default\" type=\"button\">Go!</button>\n                    </span>\n                </div>\n                <span data-toggle=\"calendar\" class=\"fa fa-calendar\"></span>\n            </div>\n        </div>\n        <!--<div class=\"col-sm-4\">\n            <h2>By Week</h2>\n            <hr/>\n            <div class=\"date-picker\">\n                <div class=\"date-container pull-left\">\n                    <h4 class=\"weekday\">Monday</h4>\n                    <h2 class=\"date\">Februray 4th</h2>\n                    <h4 class=\"year pull-right\">2014</h4>\n                </div>\n                <span data-toggle=\"datepicker\" data-type=\"subtract\" data-amt=\"7\" class=\"fa fa-angle-left pull-left\"></span>\n                <span data-toggle=\"datepicker\" data-amt=\"7\" class=\"fa fa-angle-right pull-right\"></span>\n            </div>\n        </div>\n        <div class=\"col-sm-4\">\n            <h2>Start Date</h2>\n            <hr/>\n            <div class=\"date-picker\" data-date=\"2014/10/31\">\n                <div class=\"date-container pull-left\">\n                    <h4 class=\"weekday\">Monday</h4>\n                    <h2 class=\"date\">Februray 4th</h2>\n                    <h4 class=\"year pull-right\">2014</h4>\n                </div>\n                <span data-toggle=\"datepicker\" data-type=\"subtract\" data-amt=\"1\" class=\"fa fa-angle-left pull-left\"></span>\n                <span data-toggle=\"datepicker\" data-amt=\"1\" class=\"fa fa-angle-right pull-right\"></span>\n            </div>\n        </div>\n    </div>-->\n    <hr />\n    <div class=\"row\">\n        <!--<div class=\"col-sm-4\">\n            <h2>By Month</h2>\n            <hr/>\n            <div class=\"date-picker\" data-type=\"months\">\n                <div class=\"date-container pull-left\">\n                    <h4 class=\"weekday\">Monday</h4>\n                    <h2 class=\"date\">Februray 4th</h2>\n                    <h4 class=\"year pull-right\">2014</h4>\n                </div>\n                <span data-toggle=\"datepicker\" data-type=\"subtract\" class=\"fa fa-angle-left pull-left\"></span>\n                <span data-toggle=\"datepicker\" class=\"fa fa-angle-right pull-right\"></span>\n            </div>\n        </div>\n        <div class=\"col-sm-4\">\n            <h2>By Year</h2>\n            <hr/>\n            <div class=\"date-picker\" data-type=\"year\" data-date=\"2014/12/25\">\n                <div class=\"date-container pull-left\">\n                    <h4 class=\"weekday\">Monday</h4>\n                    <h2 class=\"date\">Februray 4th</h2>\n                    <h4 class=\"year pull-right\">2014</h4>\n                </div>\n                <span data-toggle=\"datepicker\" data-type=\"subtract\" class=\"fa fa-angle-left pull-left\"></span>\n                <span data-toggle=\"datepicker\" class=\"fa fa-angle-right pull-right\"></span>\n            </div>\n        </div>-->\n        <div class=\"col-sm-4\">\n            <h2>Formatting</h2>\n            <hr/>\n            <div class=\"date-picker\" data-date=\"2014/10/31\">\n                <div class=\"date-container pull-left\">\n                    <h4 class=\"weekday\" data-format=\"ddd\">Monday</h4>\n                    <h2 class=\"date\" data-format=\"MMM Do\">Februray 4th</h2>\n                    <h4 class=\"year pull-right\" data-format=\"YY\">2014</h4>\n                </div>\n                <span data-toggle=\"datepicker\" data-type=\"subtract\" data-amt=\"1\" class=\"fa fa-angle-left pull-left\"></span>\n                <span data-toggle=\"datepicker\" data-amt=\"1\" class=\"fa fa-angle-right pull-right\"></span>\n            </div>\n        </div>\n    </div>\n</div>\n\n<script src=\"http://cdnjs.cloudflare.com/ajax/libs/moment.js/2.5.1/moment.min.js\"></script>\n\n  </template>\n"; });
//# sourceMappingURL=app-bundle.js.map