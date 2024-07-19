import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Observable } from 'rxjs';

@Controller('users')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getUser(@Query('username') username: string): Observable<any> {
    return this.appService.getUser({ username });
  }
}
