// imported plugins
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class StorageProvider {

  constructor(public http: HttpClient,
    public storage: Storage) {
  }

  // set local storage values
  setData(key, value) {
    this.storage.ready().then(() => { // Check if the storage ready for accessing   
      this.storage.set(key, value)
    });
  }

  // get local storage values
  getData(key): Promise<any> {
    return new Promise(resolve => {
      this.storage.ready().then(() => { // Check if the storage ready for accessing   
        this.storage.get(key)
          .then((value) => {
            resolve(value);
          }
        );
      });
    });
  }
}
