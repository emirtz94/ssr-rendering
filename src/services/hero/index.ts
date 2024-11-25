interface HeroData {
    headline: string;
}

export interface IHeroService {
    getHeroData(): HeroData[];
};

export class HeroService implements IHeroService {
    constructor() {

    }

    public getHeroData() {
        return [{headline: 'Hero article 1'}, {headline: 'Hero article 2'}, {headline: 'Hero article 3'}];
    }
}