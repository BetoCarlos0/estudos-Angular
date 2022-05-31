import { Component, OnInit } from '@angular/core';
import { Cep } from 'src/app/Cep';
import { CepService } from 'src/app/services/cep.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-cep',
  templateUrl: './get-cep.component.html',
  styleUrls: ['./get-cep.component.css']
})
export class GetCepComponent implements OnInit {
  cep?: Cep;

  constructor(private cepService: CepService, private route: ActivatedRoute) { 
    this.getCep();
  }

  ngOnInit(): void {
  }
  /*getCep(): void {
    this.cepService.getCep().subscribe((cep) => (this.cep = cep));
  }*/

  getCep(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.cepService.getItem(id).subscribe((cep) => (this.cep = cep));
  }
}
