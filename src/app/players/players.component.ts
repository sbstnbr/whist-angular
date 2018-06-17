import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { Player } from '../player';
import { PlayerService } from '../player.service';
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

  players: Player[];

  selectedPlayer: Player;

  getPlayers(): void {
    this.players = this.playerService.getPlayers();
  }

  onSelect(player: Player): void {
    this.selectedPlayer = player;
  }

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.getPlayers();
  }

}
