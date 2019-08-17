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
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'About Festeval',
      url: '/about',
      icon: 'information'
    },
     {
      title: 'Festeval Pleace',
      url: '/pleace',
      icon: 'podium'
    },
     {
      title: 'Time Table',
      url: '/time',
      icon: 'time'
    },
     {
      title: 'Participants',
      url: '/participants',
      icon: 'contacts'
    },
     {
      title: 'Contact',
      url: '/connect',
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
