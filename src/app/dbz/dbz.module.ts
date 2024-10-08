import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from '../dbz/components/list/list.component';
import { AddCharacterComponent } from './components/addCharacter/addCharacter.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [

    MainPageComponent,
    ListComponent,
    AddCharacterComponent
  ],
  exports:[
    MainPageComponent

  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
