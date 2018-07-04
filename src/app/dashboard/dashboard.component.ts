import { Component, OnInit } from '@angular/core';
import { Player } from '../Player';
import { PlayerService } from '../Player.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  players: Player[] = [];

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.getPlayers();
  }

  getPlayers(): void {
    this.playerService.getPlayers()
      .subscribe(players => this.players = players.slice(1, 5));
  }
}
