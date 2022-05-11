import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FlightController } from './controller/flight/flight.controller';
import { FlightService } from './services/flight/flight.service';
import { Flight } from './entity/flight.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Flight])],
  controllers: [FlightController],
  providers: [FlightService],
})
export class FlightModule {}
