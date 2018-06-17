import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PLAYERS } from './mock-players';
import { Player } from './player';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  getPlayers(): Observable<Player[]> {
    return of(PLAYERS);
  }

  constructor() { }
}
