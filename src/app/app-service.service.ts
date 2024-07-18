import { Injectable } from '@angular/core';

export interface PokemonList {
  name: string;
  description: string;
  price: number;
  battle_effect: string;
  image_description: string;
}

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor() {}

  pokemonList: PokemonList[] = [
    {
      name: 'Poke Ball',
      description: 'Standard ball for catching Pokemon.',
      price: 200,
      battle_effect: 'Catches wild Pokemon.',
      image_description:
        'Red and white ball with a gold band around the center.',
    },
    {
      name: 'Great Ball',
      description: 'More effective than a Poke Ball.',
      price: 600,
      battle_effect: 'Higher catch rate than a Poke Ball.',
      image_description:
        'Red and white ball with a wider gold band around the center.',
    },
    {
      name: 'Ultra Ball',
      description: 'Highly effective ball for catching Pokemon.',
      price: 1200,
      battle_effect: 'Significantly higher catch rate than a Great Ball.',
      image_description:
        'Black and white ball with a gold band around the center.',
    },
    {
      name: 'Potion',
      description: 'Restores a moderate amount of HP to a Pokemon.',
      price: 300,
      battle_effect: 'Heals 20 HP.',
      image_description: 'Small, blue spray bottle.',
    },
    {
      name: 'Super Potion',
      description: 'Restores a significant amount of HP to a Pokemon.',
      price: 600,
      battle_effect: 'Heals 50 HP.',
      image_description: 'Medium, red spray bottle.',
    },
    {
      name: 'Hyper Potion',
      description: 'Restores a large amount of HP to a Pokemon.',
      price: 1200,
      battle_effect: 'Heals 200 HP.',
      image_description: 'Large, purple spray bottle.',
    },
    {
      name: 'Full Restore',
      description:
        "Fully restores a fainted Pokemon's HP and cures all status conditions.",
      price: 5000,
      battle_effect:
        'Revives a fainted Pokemon and heals all status conditions.',
      image_description: 'Pink mist swirling around a Poke Ball symbol.',
    },
    {
      name: 'Escape Rope',
      description: 'Allows the trainer to flee from a wild Pokemon battle.',
      price: 500,
      battle_effect: 'Escapes a wild encounter.',
      image_description: 'Coiled rope with a hook on one end.',
    },
    {
      name: 'Rare Candy',
      description: 'Evolves a Pokemon one level.',
      price: 10000,
      battle_effect: 'Levels up a Pokemon by 1 level.',
      image_description: 'Light blue candy with a yellow star swirl.',
    },
    {
      name: 'Lucky Egg',
      description:
        'Doubles the amount of experience points (EXP) gained in battle.',
      price: 1000,
      battle_effect: 'Doubles earned EXP after battle.',
      image_description: 'Oval-shaped, yellow egg with spots.',
    },
  ];

  async getPokemonList(): Promise<PokemonList[]> {
    return this.pokemonList;
  }
}
