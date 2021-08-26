import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilesService {
  public file$: BehaviorSubject<{ file: any; type: string } | null> =
    new BehaviorSubject<{ file: any; type: string } | null>(null);

  deleteFile(): void {
    this.file$.next(null);
  }
}
