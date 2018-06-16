import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})

@NgModule({
  declarations: [PlayersComponent],
  exports: [PlayersComponent]
})

export class PlayersComponent implements OnInit {

  player: 'Seb';

  constructor() { }

  ngOnInit() {
  }

}
