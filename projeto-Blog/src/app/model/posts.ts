export class Posts {
    image: string = '';
    title?: string = '';
    subTitle?: string = '';
    date?: string = '';
    constructor(image: string, title?: string, subTitle?: string, date?: string){
      this.image = image, 
      this.title = title,
      this.subTitle = subTitle,
      this.date = date
    }
}
