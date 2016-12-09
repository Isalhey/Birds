/**
 * DashboardComponent
 * 
 * @Component
 * @export
 */

import { Component, OnInit } from '@angular/core';

import { Bird } from './bird';
import { BirdService } from './bird.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'dashboard.component.html',
    styleUrls: ['dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  birds: Bird[] = [];

  constructor(private birdService: BirdService) { }

  ngOnInit(): void {
    this.birdService.getBirds()
      .then(birds => this.birds = birds.slice(1, 5));
  }
}
