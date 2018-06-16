import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

import { PlayersComponent } from './players/players.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent
  ],
  imports: [
    PlayersComponent
  ]
})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Whist';
}
