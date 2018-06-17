import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Player } from '../player';
import { PLAYERS } from '../mock-players';
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

  players = PLAYERS;

  selectedPlayer: Player;

  onSelect(player: Player): void {
    this.selectedPlayer = player;
  }

  constructor() { }

  ngOnInit() {
  }

}
