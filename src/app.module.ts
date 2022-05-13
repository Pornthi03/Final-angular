import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FlightModule } from './flight/flight.module';
import { Flight } from './flight/entity/flight.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Seat } from './flight/entity/seat.entity';
import { Booking } from './flight/entity/booking.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './db/bookflight.db',
      entities: [Flight, Seat, Booking],
      synchronize: true,
    }),
    FlightModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
