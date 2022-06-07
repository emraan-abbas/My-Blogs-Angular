import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  public siblingMsg = new BehaviorSubject<any>('');
  constructor() { }


}
