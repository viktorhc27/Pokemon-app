import { Component, OnInit } from '@angular/core';
import { InfoService } from 'src/app/services/informacion/info.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public pokemon: any;
  constructor(
    private dataService: InfoService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) {
    this.pokemon = {
      nombre: ''
    }
  }

  ngOnInit(): void {
  }
  onSubmit(): void {
  /*   console.log(this.pokemon.nombre) */
    this.redireccion(this.pokemon.nombre)
   /*  alert('formiularioo enviado') */
  }
  redireccion(numero: string): void {
    this._router.navigate(['/info/'+numero])
  }
}
