import { Injectable } from '@angular/core';
import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";
/* 使用 RxJS 的 of() 函数来模拟从服务器返回数据 */
import { Observable, of } from "rxjs";
/* 注入 message 服务 */
import { MessageService } from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  // constructor() { }
  // 修改构造函数 (经典的服务中的服务场景)
  constructor(private messageService: MessageService) {}

  // getHeroes():Hero[] {
  //   return HEROES;
  // }
  /* 改用注册服务获取数据 */
  getHeroes(): Observable<Hero[]> {    
    // 使用 message service
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
