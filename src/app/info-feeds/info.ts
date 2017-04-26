export class newsfeeds {
    constructor(
        public title: string,
        public thumbnail: string,
        public content: string
    ) {  }
}

export class earthquakesfeeds{
    constructor(
        public latitude: number,
        public longitude:number
    ){}
}