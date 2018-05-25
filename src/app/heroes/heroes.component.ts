import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero";
// import { HEROES } from "../mock-heroes";
/* 使用注册服务来提供数据 */
import { HeroService } from "../hero.service";

/* 装饰器函数 */
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  /* 对象 */
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };

  /* 属性 */
  // supe = 'SuperName';

  // heroes = HEROES;
  heroes: Hero[];

  /* 选中对象和绑定事件 */
  selectedHero: Hero;

  constructor(private heroService: HeroService) {}
  // constructor() { }

  ngOnInit() {
    this.getHeroes();
  } 

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes(); // 此处使用的是同步方式
    /* 使用注册服务后，使用异步方式 */
    this.heroService.getHeroes().subscribe(heroes => this.heroes = this.heroes);
  }

}
