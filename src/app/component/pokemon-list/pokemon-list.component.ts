import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/pokemons/data.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  public pokemones: any[] = []
  /*   public nombre!: Array<String>; */

  constructor(
    private dataService: DataService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit(): void {

    this.dataService.getpokemons().subscribe((response: any) => {

      for (let i = 0; i < response.results.length; i++) {

        this.dataService.getMoreData(i + 1).subscribe((data: any) => {
          this.pokemones.push(data)
         /*  console.log(data) */
        })
      }
    })
  }
  redireccion(numero: number): void {
    this._router.navigate(['/info/'+numero])
  }
}