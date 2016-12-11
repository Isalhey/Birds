/**
 * BirdSearchComponent
 * 
 * @Component
 * @export
 */

import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { BirdSearchService } from './bird-search.service';

import { Bird } from '../bird';

@Component({
  selector: 'bird-search',
  templateUrl: 'bird-search.component.html',
  styleUrls: [ 'bird-search.component.css' ],
  providers: [BirdSearchService]
})

export class BirdSearchComponent implements OnInit {

  birds: Observable<Bird[]>;
  private searchTerms = new Subject<string>();
  constructor(
    private birdSearchService: BirdSearchService,
    private router: Router) {}
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.birds = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.birdSearchService.search(term)
        // or the observable of empty birds if no search term
        : Observable.of<Bird[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<Bird[]>([]);
      });
  }

  gotoDetail(bird: Bird): void {
    let link = ['/detail', bird.id];
    this.router.navigate(link);
  }

}