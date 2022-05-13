import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BookingDto } from 'src/flight/dto/booking.dto/booking-dto';
import { FlightDto } from 'src/flight/dto/flight.dto/flight-dto';
import { SeatDto } from 'src/flight/dto/seat.dto/seat-dto';
import { FlightService } from 'src/flight/services/flight/flight.service';

@Controller('flight')
export class FlightController {
  constructor(private flightService: FlightService) {}
  @Post('AddFlight')
  createFlight(@Body() newFlight: FlightDto): Promise<FlightDto> {
    return this.flightService.createFlight(newFlight);
  }

  @Get('AllFlight')
  loadAllFlight(): Promise<FlightDto[]> {
    return this.flightService.loadAllsFlight();
  }

  @Post('AddSeat')
  createSeat(@Body() newSeat: SeatDto): Promise<SeatDto> {
    return this.flightService.createSeat(newSeat);
  }

  @Get('AllSeat')
  loadAllSeat(): Promise<SeatDto[]> {
    return this.flightService.loadAllsSeat();
  }

  @Post('AddBooking')
  createBooking(@Body() newBooking: BookingDto): Promise<BookingDto> {
    return this.flightService.createBooking(newBooking);
  }

  @Get('AllBooking')
  loadAllBooking(): Promise<BookingDto[]> {
    return this.flightService.loadAllsBooking();
  }

  @Get('loadFlight:locationDeparture:locationArrival:dateFlight')
  async loadFlight(
    @Param('locationDeparture') locationDeparture: string,
    @Param('locationArrival') locationArrival: string,
    @Param('dateFlight') dateFlight: string,
  ): Promise<any> {
    return this.flightService.loadFlight(
      locationDeparture,
      locationArrival,
      dateFlight,
    );
  }
}
