import { Router, Request, Response } from "express";
import { ICustomServices } from "../services";

export const createHomeRouter = (services: ICustomServices): Router => {
    const router = Router();

    router.get('/', (req: Request, res: Response) => {
        try {
            const heroData = services.hero.getHeroData();
            const latestArticlesData = services.latestArticles.getLatestArticles();

            res.render('home', {heroData, latestArticlesData})
        } catch(error) {
            console.log({error})
            res.status(500);
        }
    });

    return router
}