import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ThemesService } from './../../services/themes.service';
import { Theme } from './../../models/theme.model';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.page.html',
  styleUrls: ['./theme.page.scss'],
})
export class ThemePage implements OnInit {

  loadedTheme: Theme;

  constructor(
    private activatedRoute: ActivatedRoute,
    private themesService: ThemesService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('themeId')) {
        // redirect
        return;
      }
      const themeId = paramMap.get('themeId');
      this.loadedTheme = this.themesService.getTheme(themeId);
    });
  }

}
