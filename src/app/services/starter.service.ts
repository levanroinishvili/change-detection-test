import { Injectable, OnDestroy, } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StarterService implements OnDestroy {

  constructor() {
    console.log(`%cStarter service created`, 'color:lightgreen;font-size:24px;')
  }

  ngOnDestroy(): void {
      console.log(`%cStarter service: ngOnDestroy`, 'color:red;font-size:24px;')
  }
}
