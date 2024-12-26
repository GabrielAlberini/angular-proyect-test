import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class CharactersService {
  async getCharacters() {
    const data = await fetch("https://rickandmortyapi.com/api/character");
    return data.json();
  }
}