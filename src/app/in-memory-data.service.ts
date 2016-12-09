/**
 * InMemory Database Service
 * used for the purpose of Db simulation
 * 
 * @import
 * @export 
 * 
 * Exports InMemoryDataService class that primes in-memory Db.
 */

import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let birds = [
        { id: 11, name: 'Hummingbird' },
        { id: 12, name: 'Parrot' },
        { id: 13, name: 'Penguin' },
        { id: 14, name: 'Owl' },
        { id: 15, name: 'Crane' },
        { id: 16, name: 'Cuckoos' },
        { id: 17, name: 'Toucan' },
        { id: 18, name: 'Sparrow' },
        { id: 19, name: 'Kingfisher' },
        { id: 20, name: 'Heron' },
        { id: 21, name: 'Passerine' },
        { id: 22, name: 'Storks' }
    ];
    return {birds};
  }
}
