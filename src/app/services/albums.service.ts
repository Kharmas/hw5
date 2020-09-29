import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private firestore: AngularFirestore) {
  }

  getData() {
    return this.firestore.collection("albums").snapshotChanges()
      .pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as any;
            const id = a.payload.doc.id;
            return {id, ...data};
          });
        }));
  }

  addData(data){
    return new Promise<any>((resolve, reject) =>{
      this.firestore
        .collection("albums")
        .add(data)
        .then(res => {}, err => reject(err));
    });
  }

  editData(id, data){
    return this.firestore.collection('albums').doc(id).set(data);
  }

  deleteData(data){
    return this.firestore.collection('albums').doc(data).delete();
    };




}
