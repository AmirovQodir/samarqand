import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
 
const LNG_KEY = 'SELECTED_LANGUAGE';
 
@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  selected = '';
 
  constructor(private translate: TranslateService, private storage: Storage) { }
 
  setInitialAppLanguage() {
    this.translate.setDefaultLang('uz');
    this.setLanguage('uz');
 
    this.storage.get(LNG_KEY).then(val => {
      if (val) {
        this.setLanguage(val);
        this.selected = val;
      }
    });
  }
 
  getLanguages() {
    return [
      { text: 'English', value: 'en', img: 'assets/imgs/uk.svg' },
      { text: 'O\'zbekcha', value: 'uz', img: 'assets/imgs/uzbekistan.svg' },
    ];
  }
 
  setLanguage(lng) {
    this.translate.use(lng);
    this.selected = lng;
    this.storage.set(LNG_KEY, lng);
  }
}