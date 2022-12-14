import { Component } from '@angular/core';
import { Note } from './notes.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NoteListApp';

  notes:Note[] = [
      new Note("Sunat Contabila", "Trebuie sa o sun pe contabila la ora 12:00", "14.12.2022", "Hight"),
      new Note("Mers la Avocat", "Trebuie sa ducem niste acte", "15.12.2022", "Low")

  ]
}
