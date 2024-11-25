export interface LatestArticlesData {
    headline: string;
};

export interface ILatestArticlesService {
    getLatestArticles(): LatestArticlesData[];
}

export class LatestArticlesService implements ILatestArticlesService{
    public getLatestArticles() {
        return [
            {
                headline: 'Latest Article 1'
            },
            {
                headline: 'Latest Article 2'
            },
            {
                headline: 'Latest Article 3'
            },
            {
                headline: 'Latest Article 4'
            },
            {
                headline: 'Latest Article 5'
            }
        ]
    }
}