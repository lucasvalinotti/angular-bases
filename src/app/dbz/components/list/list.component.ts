import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public characterList: Character[] = []

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(characterID?: string):void{
    if (!characterID) return;
    this.onDelete.emit(characterID);
  }
}
