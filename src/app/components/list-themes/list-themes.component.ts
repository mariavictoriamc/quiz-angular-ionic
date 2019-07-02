import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { ThemesService } from './../../services/themes.service';
import { Theme } from './../../models/theme.model';

@Component({
  selector: 'app-list-themes',
  templateUrl: './list-themes.component.html',
  styleUrls: ['./list-themes.component.scss'],
})
export class ListThemesComponent implements OnInit {

  themes: Theme[];

  constructor(private themesService: ThemesService) { }

  ngOnInit() {
    this.themes = this.themesService.getListThemes();
  }

}
