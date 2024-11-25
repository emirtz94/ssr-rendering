import { HeroService, IHeroService } from "./hero"
import { ILatestArticlesService, LatestArticlesService } from "./latest-articles";

export interface ICustomServices {
    hero: IHeroService;
    latestArticles: ILatestArticlesService;
};

export class CustomServices {
    public hero: IHeroService;
    public latestArticles: ILatestArticlesService;

    constructor() {
        this.hero = new HeroService();
        this.latestArticles = new LatestArticlesService();
    }
};