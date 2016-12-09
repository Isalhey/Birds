/**
 * BirdsSearchService
 * 
 * @injectable decorator
 * @export
 */

import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';

import { Bird }       from './bird';

@Injectable()
export class BirdSearchService {
  constructor(private http: Http) {}
  search(term: string): Observable<Bird[]> {
    return this.http
               .get(`app/birds/?name=${term}`)
               .map((r: Response) => r.json().data as Bird[]);
  }
}
