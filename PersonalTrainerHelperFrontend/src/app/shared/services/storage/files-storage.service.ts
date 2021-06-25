import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { FileUpload } from '../../models/helpers/file-upload.model';

@Injectable({
  providedIn: 'root'
})
export class FilesStorageService {

  private basePath = '/uploads';

  constructor(private storage: AngularFireStorage) { }
  
  pushFileToStorage(fileUpload: FileUpload): Observable<number> {
    const filePath = `${this.basePath}/${fileUpload.file.name}`;
    const storageRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, fileUpload.file);

    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        storageRef.getDownloadURL().subscribe(downloadURL => {
          fileUpload.url = downloadURL;
          fileUpload.name = fileUpload.file.name;
          return fileUpload;
        });
      })
    ).subscribe();
  
    return uploadTask.percentageChanges();
  }
}
