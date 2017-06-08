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
            this.firstName = 'John';
            this.lastName = 'Doe';
            this.message = '';
        }
        also.prototype.sayHello = function () {
            this.message = "Hello " + this.firstName + " " + this.lastName + ". Nice to meet you.";
        };
        return also;
    }());
    exports.also = also;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlN1YnBhZ2VzL2Fsc28udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUE7UUFBQTtZQUVJLGNBQVMsR0FBRyxNQUFNLENBQUM7WUFDbkIsYUFBUSxHQUFHLEtBQUssQ0FBQztZQUNqQixZQUFPLEdBQUcsRUFBRSxDQUFDO1FBUWpCLENBQUM7UUFORyx1QkFBUSxHQUFSO1lBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxXQUFTLElBQUksQ0FBQyxTQUFTLFNBQUksSUFBSSxDQUFDLFFBQVEsd0JBQXFCLENBQUM7UUFDakYsQ0FBQztRQUlMLFdBQUM7SUFBRCxDQVpBLEFBWUMsSUFBQTtJQVpZLG9CQUFJIiwiZmlsZSI6IlN1YnBhZ2VzL2Fsc28uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgYWxzbyB7XG5cbiAgICBmaXJzdE5hbWUgPSAnSm9obic7XHJcbiAgICBsYXN0TmFtZSA9ICdEb2UnO1xuICAgIG1lc3NhZ2UgPSAnJztcclxuXHJcbiAgICBzYXlIZWxsbygpIHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBgSGVsbG8gJHt0aGlzLmZpcnN0TmFtZX0gJHt0aGlzLmxhc3ROYW1lfS4gTmljZSB0byBtZWV0IHlvdS5gO1xyXG4gICAgfVxuXG5cclxuXHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('Subpages/super',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Super = (function () {
        function Super() {
            this.Username = '';
            this.Password = '';
            this.message = '';
        }
        Super.prototype.sayHello = function () {
            this.message = "Hello " + this.Username + ". Nice to meet you.";
        };
        return Super;
    }());
    exports.Super = Super;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlN1YnBhZ2VzL3N1cGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBO1FBQUE7WUFhSSxhQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ2QsYUFBUSxHQUFHLEVBQUUsQ0FBQztZQUNkLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFRakIsQ0FBQztRQU5HLHdCQUFRLEdBQVI7WUFDSSxJQUFJLENBQUMsT0FBTyxHQUFHLFdBQVMsSUFBSSxDQUFDLFFBQVEsd0JBQXFCLENBQUM7UUFDL0QsQ0FBQztRQUlMLFlBQUM7SUFBRCxDQXZCQSxBQXVCQyxJQUFBO0lBdkJZLHNCQUFLIiwiZmlsZSI6IlN1YnBhZ2VzL3N1cGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFN1cGVye1xuXG4gICAgLy91c2VybmFtZSA9ICcnO1xuICAgIC8vcGFzc3dvcmQgPSAnJztcbiAgICAvL21lc3NhZ2UgPSAnJ1xuXG4gXG5cbiAgICAvL3N1Ym1pdFVzZXJQYXNzKCkge1xuICAgICAgICBcbiAgICAvLyAgICB0aGlzLm1lc3NhZ2UgPSAnSGVsbG8gJHt1c2VybmFtZX0sIG5pY2UgdG8gbWVldCB5b3UuJ1xyXG4gICAgLy99XG5cbiAgICBVc2VybmFtZSA9ICcnO1xyXG4gICAgUGFzc3dvcmQgPSAnJztcbiAgICBtZXNzYWdlID0gJyc7XHJcblxyXG4gICAgc2F5SGVsbG8oKSB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gYEhlbGxvICR7dGhpcy5Vc2VybmFtZX0uIE5pY2UgdG8gbWVldCB5b3UuYDtcclxuICAgIH1cblxuXG5cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9

define('text!app.html', ['module'], function(module) { module.exports = "<template>\r\n  <require from=\"nav-bar.html\"></require>\r\n  <require from=\"bootstrap/css/bootstrap.css\"></require>\r\n  <require from=\"./styles.css\"></require>\r\n\r\n\r\n  <!--<nav-bar router.bind=\"route: also\"></nav-bar>\r\n  <nav-bar router.bind=\"route: home\"> </nav-bar>-->\r\n \r\n\r\n  <ul class=\"nav nav-tabs\">\r\n    <li role=\"presentation\"><a route-href=\"route: super\">Super</a></li>\r\n    <li role=\"presentation\"><a route-href=\"route: also\">Also</a></li>\r\n \r\n    \r\n  </ul>\r\n\r\n  <div class=\"container\">\r\n    <router-view></router-view>\r\n  </div>\r\n </template>\r\n\r\n"; });
define('text!styles.css', ['module'], function(module) { module.exports = "@import url(http://fonts.googleapis.com/css?family=Roboto:400,300);\n@import url(http://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css);\n.page-host {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50px;\n  bottom: 0;\n  overflow-x: hidden;\n  overflow-y: auto; }\n"; });
define('text!nav-bar.html', ['module'], function(module) { module.exports = "<template bindable=\"router\">\r\n  <nav class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\">\r\n        <span class=\"sr-only\">Toggle Navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\" href=\"#\">\r\n        <i class=\"fa fa-home\"></i>\r\n        <span>${router.title}</span>\r\n      </a>\r\n    </div>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li repeat.for=\"row of router.navigation\" class=\"${row.isActive ? 'active' : ''}\">\r\n          <a data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1.in\" href.bind=\"row.href\">${row.title}</a>\r\n        </li>\r\n      </ul>\r\n\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li class=\"loader\" if.bind=\"router.isNavigating\">\r\n          <i class=\"fa fa-spinner fa-spin fa-2x\"></i>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n</template>"; });
define('text!Subpages/also.html', ['module'], function(module) { module.exports = "<template>\r\n\r\n  \r\n    <input value.bind=\"firstName\">\r\n    <input value.bind=\"lastName\">\r\n\r\n    <button click.trigger=\"sayHello()\">Say Hello</button>\n    <p> ${message}</p>\r\n\r\n\r\n</template>"; });
define('text!Subpages/super.html', ['module'], function(module) { module.exports = "<template>\r\n\r\n  <input value.bind=\"Username\">\r\n  <input value.bind=\"Password\">\r\n\r\n  <button click.trigger=\"sayHello()\">Say Hello</button>\r\n  <p> ${message}</p>\r\n\r\n  \r\n\r\n\r\n</template>\r\n"; });
//# sourceMappingURL=app-bundle.js.map