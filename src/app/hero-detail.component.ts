import { Component, HostBinding } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Hero } from './hero';
import { HeroService } from './hero.service';

import { slideInDownAnimation } from "./animation";


@Component({
  moduleId: module.id,
  selector: 'my-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  animations: [slideInDownAnimation]
})
export class HeroDetailComponent {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';
  hero: Hero;

  constructor(private heroService: HeroService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location) { }

  ngOnInit(): void {
    this.route.params.switchMap((params: Params) =>
      this.heroService.getHero(+params['id'])
    ).subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    //this.location.back();
    this.router.navigate(['/heroes']);
  }

  save(): void {
    this.heroService.update(this.hero)
      .then(() => this.goBack());
  }
}
