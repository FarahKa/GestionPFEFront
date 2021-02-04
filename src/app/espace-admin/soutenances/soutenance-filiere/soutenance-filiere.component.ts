import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PrettySidebarService } from 'src/app/components/pretty-sidebar/pretty-sidebar.service';
import { HttpService } from 'src/app/services/http.service';
import { SoutenancesService } from '../soutenances.service';

@Component({
  selector: 'app-soutenance-filiere',
  templateUrl: './soutenance-filiere.component.html',
  styleUrls: ['./soutenance-filiere.component.css'],
})
export class SoutenanceFiliereComponent implements OnInit {
  @Input() filiere: string;
  @Input() soutenances;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sidebarService: PrettySidebarService,
    private soutenancesService: SoutenancesService,
    private http: HttpService
  ) {}

  ngOnInit(): void {
  }
}
