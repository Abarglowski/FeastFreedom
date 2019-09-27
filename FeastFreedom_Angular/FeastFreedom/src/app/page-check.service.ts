import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PageCheckService {
  providerRegister = false;

  constructor() { }

  displayProviderRegister() {
    this.providerRegister = true;
  }
  displayUserRegister() {
    this.providerRegister = false;
  }
  getRegisterPage() {
    return this.providerRegister;
  }
}
