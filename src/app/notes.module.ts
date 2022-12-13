export class Note{

    constructor(title:string, content:string, date:string, priority:string){
        this.title = title;
        this.content = content;
        this.date = date;
        this.priority = priority;
    }

    title:string = '';
    content:string = '';
    date:string = '';
    priority:string = '';
}