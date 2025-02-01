import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private emotionSource = new Subject<{ emotion: string, backgroundColor: string }>();
  emotionChanged = this.emotionSource.asObservable();

  changeEmotion(emotion: string, backgroundColor: string) {
    this.emotionSource.next({ emotion, backgroundColor });
  }
}
