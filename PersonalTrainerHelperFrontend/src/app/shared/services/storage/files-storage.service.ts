import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { from, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FileUpload } from '../../models/helpers/file-upload.model';

@Injectable({
  providedIn: 'root'
})
export class FilesStorageService {
  constructor(private _storage: AngularFireStorage) { }
  
  public pushFileToStorage(fileUpload: FileUpload, path: string): Observable<string> {
    const filePath = path;
    const storageRef = this._storage.ref(filePath);
    const uploadTask = this._storage.upload(filePath, fileUpload.file);

    return from(uploadTask).pipe(
      switchMap((_) => storageRef.getDownloadURL()),
    );
  }

  private getDownloadUrl$(
    uploadTask: AngularFireUploadTask,
    //path: string,
    storageRef: AngularFireStorageReference
  ): Observable<string> {
    return from(uploadTask).pipe(
      switchMap((_) => storageRef.getDownloadURL()),
    );
  }

  public deleteFileStorage(path: string, name: string): Observable<void> {
    const storageRef = this._storage.ref(path);
    return storageRef.child(name).delete();
  }
}
