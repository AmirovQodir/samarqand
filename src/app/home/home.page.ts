import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { LanguagePopoverPage } from '../language-popover/language-popover.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private popoverCtrl: PopoverController
  ) {}

  async openLanguagePopover(ev) {
    const popover = await this.popoverCtrl.create({
      component: LanguagePopoverPage,
      event: ev
    });
    await popover.present();
  }
}
