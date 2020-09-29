import {Component, OnInit} from '@angular/core';
import {PokemonsService} from "../../services/pokemons.service";
import {Pokemon} from '../../services/pokemon'
import {MatDialog} from "@angular/material/dialog";
import {FormPokemonComponent} from "../../components/form-pokemon/form-pokemon.component";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {

  pokemon: Pokemon;
  limit: number = 20;
  offset: number = 0;
  pageIndex: number = 1;

  constructor(private pokemonsService: PokemonsService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon() {
    this.pokemonsService.getPokemon(this.limit, this.offset).subscribe(data => {
      this.pokemon = data;
      console.log(this.pokemon)
      console.log(data)
    });
  }

  openDialog(data) {
    const dialogRef = this.dialog.open(FormPokemonComponent, {
      width: '450px',
      data
    });

  }

  changePage(event: PageEvent) {
    this.limit = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.offset = event.pageSize * event.pageIndex ;
    this.getPokemon();
    console.log(event, this.limit, this.offset);
  }
}
