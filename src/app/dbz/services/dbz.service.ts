import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid} from 'uuid';

@Injectable({providedIn: 'root'})
export class DbzService {
  public characters: Character[] = [
    {id: uuid(), name: 'Krilin', power: 1000},
    {id: uuid(), name: 'Goku', power: 9999},
    {id: uuid(), name: 'Vegeta', power: 7500},
    {id: uuid(), name: 'Gohan', power: 2500},
    {id: uuid(), name: 'Piccolo', power: 1500},
    {id: uuid(), name: 'Trunks', power:10}
  ];

  public addCharacter(character: Character):void{
    const newCharacter : Character = {id: uuid(),...character};
    this.characters.push(newCharacter);
  }

  public onDelete(index: number):void{
    this.characters.splice(index, 1);
  }

  public deleteCharacterById(id: string):void{
    this.characters = this.characters.filter(character => character.id !== id);
  }
}