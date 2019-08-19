import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from './home.page';
import { TranslateModule } from '@ngx-translate/core';

const routes: Routes = [
  { path: 'about', loadChildren: './page/about-festeval/about-festeval.module#AboutFestevalPageModule' },
  { path: 'pleace', loadChildren: './page/festevals-pleace/festevals-pleace.module#FestevalsPleacePageModule' },
  { path: 'time', loadChildren: './page/time-table/time-table.module#TimeTablePageModule' },
  { path: 'participants', loadChildren: './page/participants/participants.module#ParticipantsPageModule' },
  { path: 'connect', loadChildren: './page/connect/connect.module#ConnectPageModule' },
  { path: 'settings', loadChildren: './page/settings/settings.module#SettingsPageModule' },
  { path: 'language-popover', loadChildren: './page/language-popover/language-popover.module#LanguagePopoverPageModule' }
 ];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ]),
    TranslateModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
