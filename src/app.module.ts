import { Module, HttpModule } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { GhibliFilmsController } from './constrollers/ghibli-films/ghibli-films.controller';
import { AppService } from './app.service';
import { ErrorInterceptor } from './interceptors/error.interceptor';

@Module({
  imports: [HttpModule, TestingModule],
  controllers: [AppController, GhibliFilmsController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ErrorInterceptor,
    }
  ]
})
export class AppModule {}
