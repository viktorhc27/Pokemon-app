import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { InfoService } from 'src/app/services/informacion/info.service'
@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {

  public datos: any[]=[]
  constructor(
    private dataService: InfoService,
    private _route: ActivatedRoute,
    private _router: Router,
    
  ) { }

  ngOnInit(): void {
    this._route.params.subscribe((params: Params) => {
     /* this.number=params */
      this.dataService.getinfo_nombre(params['nombre']).subscribe((response: any) => {
        this.datos.push(response);
        console.log(params)
      })
      
      console.log(this.datos)
      /* console.log(params['numero']) */
    })
  }



}
