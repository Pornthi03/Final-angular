import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlightController } from './controller/flight/flight.controller';
import { FlightService } from './services/flight/flight.service';
import { Flight } from './entity/flight.entity';
import { Seat } from './entity/seat.entity';
import { Booking } from './entity/booking.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Flight]),
    TypeOrmModule.forFeature([Seat]),
    TypeOrmModule.forFeature([Booking]),
  ],
  controllers: [FlightController],
  providers: [FlightService],
})
export class FlightModule {}
