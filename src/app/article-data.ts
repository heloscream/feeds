import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InBuilt implements InMemoryDbService {
  createDb() {
    let articles = [
      { id: 1, title:"indiaTimes" ,url:"url1", descriptions:"descriptions", content:"content2" },
      { id: 2, title:"BCC" ,url:"url2", descriptions:"descriptions2", content:"content2" },
      { id: 3, title:"Hindustan Times" ,url:"url3", descriptions:"descriptions3", content:"content2" },
      { id: 4, title:"Sikkim news" ,url:"url4", descriptions:"description4", content:"content2" }
    ];
    return {articles};
  }
}
