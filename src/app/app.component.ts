import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'MENU.home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'MENU.about',
      url: '/about',
      icon: 'information-circle'
    },
     {
      title: 'MENU.place',
      url: '/pleace',
      icon: 'podium'
    },
     {
      title: 'MENU.program',
      url: '/time',
      icon: 'clock'
    },
     {
      title: 'MENU.participants',
      url: '/participants',
      icon: 'contacts'
    },
     {
      title: 'MENU.contact',
      url: '/boglanish',
      icon: 'contact'
    }


  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private language: LanguageService
  ) {
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.language.setInitialAppLanguage()
    });
  }
}
