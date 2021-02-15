import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideBarService {

  visible: boolean = true;

  constructor() { }
  
}
