/**
 * Bird detail Component
 * Provides detail for each bird
 * 
 * @import
 *  
 */


//imports of components and services.
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

//switchMap operator to use with route parameters observable.
import 'rxjs/add/operator/switchMap';


import { BirdService } from './bird.service';
import { Bird } from './bird';

@Component({
  selector: 'my-bird-detail',
  templateUrl: 'bird-detail.component.html',
  styleUrls: [ 'bird-detail.component.css' ]
})

export class BirdDetailComponent implements OnInit {

  //Declared hero as an input
  @Input() bird: Bird;

  //services injected into the constructor,
  //saving their values in private fields.
  constructor(
    private birdService: BirdService,
    private route: ActivatedRoute,
    private location: Location
  ) {}


  //Extract the id parameter value from the activated route.
  //Use the birdService to fetch the bird using that id.
  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.birdService.getBird(+params['id']))
      .subscribe(bird => this.bird = bird);
  }


  //method to save the changes made to the selected bird name.
  save(): void {
    this.birdService.update(this.bird)
      .then(() => this.goBack());
  }

  //method to navigate backward one step
  //using location service injected.
  goBack(): void {
    this.location.back();
  }




}
