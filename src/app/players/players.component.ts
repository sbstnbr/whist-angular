import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Player } from '../player';
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

  player: Player = {
    id: 1,
    name: 'Seb'
  };

  constructor() { }

  ngOnInit() {
  }

}
