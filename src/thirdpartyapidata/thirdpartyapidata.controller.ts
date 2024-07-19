import { Controller, Get, Query } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ThirdpartyapidataService } from './thirdpartyapidata.service';

@Controller('thirdpartyapidata')
export class ThirdpartyapidataController {
    constructor(private thirdpartyapidataService: ThirdpartyapidataService) {

    }

    @Get()
    getUser(@Query('username') username: string): Observable<any> {
        return this.thirdpartyapidataService.getUser({ username });
    }

    @Get("data")

    getAllData(): Observable<any> {
        return this.thirdpartyapidataService.getAlldata();
    }
}
