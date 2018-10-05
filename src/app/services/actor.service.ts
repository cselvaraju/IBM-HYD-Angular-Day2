import { Injectable } from '@angular/core';

import { Actor } from '../models/actor.model';

@Injectable({
  providedIn: 'root'
})
export class ActorService {

  actorList: Actor[];

  constructor() { 
    this.actorList = [
      {name: 'Amitabh Bachhan', city: 'Mumbai'},
      {name: 'Venkatesh', city: 'Hyderabad'},
      {name: 'Kamal Hasan', city: 'Chennai'}
    ];
  }

  getActors() {
    return this.actorList;
  }

  deleteActor(index) {
    this.actorList.splice(index, 1);
  }

  updateActor(index, actor) {
    this.actorList.splice(index, 1, actor);
  }

  addActor(actor) {
    this.actorList.push(actor);
  }
}
