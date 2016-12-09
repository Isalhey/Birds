/**
 * Birds Component
 * @export
 * 
 * Functions to list, add and delete birds
 */


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Bird } from './bird';
import { BirdService } from './bird.service';

@Component({
    selector: 'my-birds',  
    templateUrl: 'birds.component.html',
    styleUrls: ['birds.component.css']
})

export class BirdsComponent implements OnInit{
  title = 'Tour of Birds';
  birds: Bird[];
  selectedBird: Bird;

  constructor(
    private router: Router,
    private birdService: BirdService){ }

  //get birds from the component birdService
  getBirds(): void {
    this.birdService.getBirds()
    .then(birds => this.birds = birds);    
  }

  ngOnInit(): void {
    this.getBirds();
  }

  //Method to delete a bird by using birdService
  delete(bird: Bird): void {
    this.birdService
        .delete(bird.id)
        .then(() => {
          this.birds = this.birds.filter(h => h !== bird);
          if (this.selectedBird === bird) { this.selectedBird = null; }
        });
  }

  //Method to add birds by using birdService
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.birdService.create(name)
      .then(bird => {
        this.birds.push(bird);
        this.selectedBird = null;
      });
  }
  
  onSelect(bird: Bird): void {
    this.selectedBird = bird;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedBird.id]);
  }

}