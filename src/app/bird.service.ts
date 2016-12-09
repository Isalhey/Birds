/**
 * Birds Services
 * Class available as a marker injection
 * 
 * @injectable decorator
 * @export (methods for Create, Update, Delete and Get Birds) 
 * 
 */

import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Bird } from './bird';

// import { BIRDS } from './mock-birds'; -- older version of birds array




@Injectable()
export class BirdService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private birdsUrl = 'app/birds';  // URL to web api

    constructor(private http: Http) {}

    //Add a bird using HTTP service
    create(name: string): Promise<Bird> {
    return this.http
        .post(this.birdsUrl, JSON.stringify({name: name}), {headers: this.headers})
        .toPromise()
        .then(res => res.json().data)
        .catch(this.handleError);     
    }

    //The method of updating bird is similar to getBirds but with HTTP put service
    update(bird: Bird): Promise<Bird> {
    const url = `${this.birdsUrl}/${bird.id}`;
    return this.http
        .put(url, JSON.stringify(bird), {headers: this.headers})
        .toPromise()
        .then(() => bird)
        .catch(this.handleError);
    }

    //Delete bird
    delete(id: number): Promise<void> {
    const url = `${this.birdsUrl}/${id}`;
    console.log(url);
    return this.http.delete(url, {headers: this.headers})
        .toPromise()
        .then(() => null)
        .catch(this.handleError);
    }

    //fetch birds with an HTTP client in an asynchronous operation
    getBirds(): Promise<Bird[]> {
    return this.http.get(this.birdsUrl)
        .toPromise()
        .then(response => response.json().data as Bird[])
        .catch(this.handleError);
    }

    getBirdsSlowly(): Promise<Bird[]>{
        return new Promise<Bird[]>(resolve => setTimeout(resolve, 5000)) // delay 2 seconds
        .then(() => this.getBirds());
    }

    //The URL identifies which hero the server should update by 
    //encoding the hero id into the URL to match the api/hero/:id pattern
    getBird(id: number): Promise<Bird> {
        const url = `${this.birdsUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Bird)
            .catch(this.handleError);
    }


    //Old method that filters the birds list from getBirds by id
    getBirdOld(id: number): Promise<Bird> {
        return this.getBirds()
                .then(birds => birds.find(bird => bird.id === id));
    }

    private handleError(error: any): Promise<any> {
	    console.error('An error occurred', error); // for demo purposes only
	    return Promise.reject(error.message || error);
  	}

}