import { Router, RouterConfiguration } from 'aurelia-router'


export class App {
    router: Router;

    configureRouter(config: RouterConfiguration, router: Router) {
        this.router = router;
        config.title = 'Aurelia';
        config.map([
            { route: ['', 'also'], name: 'also', moduleId: 'Subpages/also', nav: true, title: "also" },
            { route: 'super', name: 'super', moduleId: 'Subpages/super', nav: true, title: "super" },
            
           

        ]);
    }
}

