import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { FlightDto } from 'src/flight/dto/flight.dto/flight-dto';
import { FlightService } from 'src/flight/services/flight/flight.service';

@Controller('flight')
export class FlightController {
  constructor(private flightService: FlightService) {}
  @Post('AddFlight')
  createFlight(@Body() newFlight: FlightDto): Promise<FlightDto> {
    return this.flightService.createFlight(newFlight);
  }

  @Get()
  loadAll(): Promise<FlightDto[]> {
    return this.flightService.loadAlls();
  }
}
