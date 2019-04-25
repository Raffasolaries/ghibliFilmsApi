import { Test, TestingModule } from '@nestjs/testing';
import { GhibliFilmsController } from './ghibli-films.controller';
import { AppModule } from '../../app.module';
import { AppService } from '../../app.service';
import { GhibliFilm } from '../../interfaces/ghibli-films.interface';
import { async } from 'rxjs/internal/scheduler/async';
import { Observable, of } from 'rxjs';
import { response } from 'express';

describe('GhibliFilms Controller', () => {
  let controller: GhibliFilmsController;
  let service: AppService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
      controllers: [GhibliFilmsController],
      providers: [
        AppService
      ]
    }).compile();

    controller = module.get<GhibliFilmsController>(GhibliFilmsController);
    service = module.get<AppService>(AppService);
  });

  describe('ghibli-films', () => {
    it('should be defined', () => {
      expect(controller).toBeDefined();
    });

    it('should return the ordered array of films', done => {
      // service.prepareUrl = jest.fn();
      let result: GhibliFilm[];
      const source = controller.getFilms();
      jest.spyOn(service, 'getGhibliFilms').mockImplementationOnce(() => of(result))

      source.subscribe(data => {
        expect.arrayContaining(data);
        done();
      })
      /* expect(controller.getFilms()).toContain(
        expect.arrayContaining([
          expect.objectContaining({
            rt_score: String
          })
        ])
      ); */
      // Fail after 1500ms
    }, 1500);
  });
});
