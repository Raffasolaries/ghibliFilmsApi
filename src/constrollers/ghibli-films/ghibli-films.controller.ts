import { Controller, Get } from '@nestjs/common';
import { AppService } from '../../app.service';

@Controller('ghibli-films')
export class GhibliFilmsController {

    constructor(private readonly appService: AppService) {}

    @Get()
    getFilms() {
        return this.appService.getGhibliFilms();
    }

}
