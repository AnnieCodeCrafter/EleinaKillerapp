import { Router, RouterConfiguration } from 'aurelia-router'


export class App {
    router: Router;

    configureRouter(config: RouterConfiguration, router: Router) {
        this.router = router;
        config.title = 'Aurelia';
        config.map([
            { route: ['/', 'also'], name: 'also', moduleId: 'Subpages/also', nav: true, title: "also" },
            { route: ['/', 'home'], name: 'home', moduleId: 'Subpages/home', nav: true, title: "Home" },
            
           

        ]);
    }
}

