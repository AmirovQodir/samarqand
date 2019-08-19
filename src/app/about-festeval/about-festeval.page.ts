import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { LanguagePopoverPage } from '../language-popover/language-popover.page';
import { LanguageService } from '../services/language.service';
@Component({
  selector: 'app-about-festeval',
  templateUrl: './about-festeval.page.html',
  styleUrls: ['./about-festeval.page.scss'],
})
export class AboutFestevalPage implements OnInit {
  languageFlag = '';

  constructor(
    private popoverCtrl: PopoverController,
    private languageService: LanguageService
  ) {}

  ngOnInit() {
    this.setLanguageFlag();
  }

  setLanguageFlag() {
    let languages = this.languageService.getLanguages();
    let selected = this.languageService.selected;
    for (let language of languages) {
      if (language.value == selected) {
        this.languageFlag = language.img;
        break;
      }
    }
  }

  async openLanguagePopover(ev) {
    const popover = await this.popoverCtrl.create({
      component: LanguagePopoverPage,
      event: ev
    });
    popover.onDidDismiss().then((data) => {
      this.setLanguageFlag();
    });
    await popover.present();
  }
}
