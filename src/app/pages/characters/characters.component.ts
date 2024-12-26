// characters.component.ts
import { Component, OnInit } from '@angular/core';
import { CharactersService } from './characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})

export class CharactersComponent implements OnInit {
  characters: any = [];

  constructor(private characterService: CharactersService) { }

  ngOnInit(): void {
    this.characterService.getCharacters().then((data) => {
      this.characters = data.results;
    });
  }
}