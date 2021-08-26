import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class EmojiService implements OnDestroy {
  public unsubscribe$: Subject<void> = new Subject<void>();
  public emojiPanelState$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  public emojiPanelState = false;
  public emojiValue$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() {
    this.emojiPanelState$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((state) => (this.emojiPanelState = state));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
