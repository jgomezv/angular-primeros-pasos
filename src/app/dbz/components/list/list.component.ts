import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']

})
export class ListComponent {

  @Input()
  public charactersList: Character[] = [{
    name:'Trunks',
    power: 10
  }];
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();
 /*  onDelete EventEmitter = new EventEmitter(){

  } */

  onDeleteCharacter(character:Character):void {
    if(character.id==='') return;
    this.onDelete.emit(character.id);
  }

}
