import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


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

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  //variaveis
  title = 'Pokedex';
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  apiURL = "https://pokeapi.co/api/v2/";
  listaPokemon : any;
  colunas: string[]=['Número','Nome','imagem']
  
  dados: tabela[] = [
    {numero: "132", nome: "Ditto", imagem:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"},
    {numero: "4", nome: "Charmander", imagem:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"},
    {numero: "a", nome: "Buizel", imagem:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/418.png"}
  ]
  


  //construtor
  constructor(private http : HttpClient) {}

  //funçoes
  ngOnInit() {
    this.funcaoListarTodosPokemons();
  }

  funcaoListarTodosPokemons() {
    this.http.get(`${ this.apiURL }pokemon`)
    .subscribe((resultado: any) => {
      this.listaPokemon = resultado.results;
      console.log(resultado.results.value) 
    });   
  }

  funcaoPreencheArray(){
    
    console.log("entrou");
    console.log(this.listaPokemon)

    // for (let index = 0; this.listaPokemon.lenght < 20; index++) {
    //   console.log("Numero", index +1);
    //   console.log(this.listaPokemon[index].name);
    // }

  }
}

