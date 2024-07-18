import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppService, PokemonList } from './app-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Learning-Angular-18';

  appService = inject(AppService);

  pokemonList = signal<PokemonList[]>([]);
  switchPokemon = signal<string>('');
  ifPokemon = signal<string>('');

  counter = signal<number>(0);
  objData = signal({
    value: 0,
  });

  constructor() {
    this.getPokemonList();
    this.switchPokemon.set('Poke Ball');
    this.ifPokemon.set('Hyper Potion');
  }

  getPokemonList() {
    this.appService.getPokemonList().then((res: PokemonList[]) => {
      this.pokemonList.set(res);
    });
  }

  onClickCounter() {
    this.counter.update((count) => count + 1);
  }

  onClickMinus() {
    this.counter.update((count) => {
      let result = 0;
      if (count > 0) {
        result = count - 1;
      } else {
        result = 0;
      }
      return result;
    });
  }

  onClickRemoveListItem() {
    this.pokemonList.update((list) => {
      let newList = list;
      if (list) {
        newList = list.slice(1);
      }
      return newList;
    });
  }
  
  onClickLevelsUp() {
    this.objData.update((value) => {
      return { value: value.value + 1 };
    });
  }
}
