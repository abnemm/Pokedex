import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pokemon } from './interfaces/Pokemon';
import {MatExpansionModule} from '@angular/material/expansion';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

interface tabela{
  numero: String,
  nome: string,
  imagem: string
}



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  //variaveis
  title = 'Pokedex';
  apiURL = "https://pokeapi.co/api/v2/";
  listaPokemon : Array<any> = [];
  colunas: string[]=['Número','Nome','imagem']
  panelOpenState: Array<boolean> = [];

  dados: Pokemon[] = [
    // {numero: "132", nome: "Ditto", link:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"},
    // {numero: "4", nome: "Charmander", link:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"},
    // {numero: "a", nome: "Buizel", link:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/418.png"}
  ]
  
  


  //construtor
  constructor(private http : HttpClient) {}

  //funçoes
  ngOnInit() {
    this.funcaoListarTodosPokemons();
    
  }

  funcaoListarTodosPokemons() {
    this.http.get(`${ this.apiURL }pokemon?limit=151`)
    .subscribe((resultado: any) => {
      this.listaPokemon = resultado.results;
      console.log(resultado.results.value) 
      this.funcaoPreencheArray();
    });   
  }

  funcaoPreencheArray(){

    //função map 
    this.listaPokemon = this.listaPokemon.map((value: any) => {
      this.http.get(`${ this.apiURL }pokemon/${value.name}`)
      .subscribe((resultado: any) => { 
        value.link = resultado.sprites.front_default;
      })
      return value;
    }  
    );
    console.log(this.listaPokemon);
    this.dados = this.listaPokemon;

    // this.listaPokemon.forEach((element: Pokemon)=>{
      
    // });
    // for (let index = 0; index < this.listaPokemon.length; index++) {
    //   console.log("Numero", index +1);
    //   console.log(this.listaPokemon[index].name);
    // }

  }
}

