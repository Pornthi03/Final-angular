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

  @Post('AddSeat/:id')
  async createSeat(
    @Param('id') id: number,
    @Body() newSeat: SeatDto,
  ): Promise<SeatDto> {
    const checkFlight = await this.flightService.loadFlightOne(id);
    newSeat.flightID = checkFlight.flgihtID;
    return this.flightService.createSeat(newSeat);
  }

  @Post('AddBooking/:FID/:SID/:dateD')
  async createBooking(
    @Param('FID') FID: number,
    @Param('SID') SID: number,
    @Param('dateD') dateD: string,
    @Body() newBooking: BookingDto,
  ): Promise<BookingDto> {
    const checkFlight = await this.flightService.loadFlightOne(FID);
    const verifyFlight = await this.flightService.verifyFlight(FID, dateD);
    const checkSeat = await this.flightService.loadSeatOne(SID);
    newBooking.flightID = checkFlight.flgihtID;
    newBooking.seatID = checkSeat.seatID;
    newBooking.dateDeparture = verifyFlight.dateFlight;
    return this.flightService.createBooking(newBooking);
  }

  @Get('AllBooking')
  loadAllBooking(): Promise<BookingDto[]> {
    return this.flightService.loadAllsBooking();
  }

  @Get('AllSeat/:flightID')
  async loadAllSeat(@Param('flightID') flightID: number): Promise<SeatDto[]> {
    return this.flightService.loadAllsSeat(flightID);
  }

  @Get('Emptyseats/:flightID')
  async loadEmptyseats(
    @Param('flightID') flightID: number,
  ): Promise<SeatDto[]> {
    return await this.flightService.loadEmptyseats(flightID);
  }

  @Get('Idlerseats/:flightID')
  async loadIdlerseats(
    @Param('flightID') flightID: number,
  ): Promise<SeatDto[]> {
    return await this.flightService.loadIdlerseats(flightID);
  }

  @Get('loadFlight/:locationDeparture/:locationArrival/:dateFlight')
  async loadFlight(
    @Param('locationDeparture') locationDeparture: string,
    @Param('locationArrival') locationArrival: string,
    @Param('dateFlight') dateFlight: string,
  ): Promise<any> {
    return await this.flightService.loadFlight(
      locationDeparture,
      locationArrival,
      dateFlight,
    );
  }

  @Put('EditBooking/:id/:FID/:SID/:dateD')
  async updatebookingเ(
    @Param('id') id: number,
    @Param('FID') FID: number,
    @Param('SID') SID: number,
    @Param('dateD') dateD: string,
    @Body() bdto: BookingDto,
  ): Promise<BookingDto> {
    const booking = await this.flightService.loadBooking(id);
    const checkFlight = await this.flightService.loadFlightOne(FID);
    const verifyFlight = await this.flightService.verifyFlight(FID, dateD);
    const checkSeat = await this.flightService.loadSeatOne(SID);
    bdto.flightID = checkFlight.flgihtID;
    bdto.seatID = checkSeat.seatID;
    bdto.dateDeparture = verifyFlight.dateFlight;
    booking.customerName = booking.customerName;
    booking.customerSurname = booking.customerSurname;
    booking.flightID = bdto.flightID;
    booking.seatID = bdto.seatID;
    booking.dateDeparture = bdto.dateDeparture;
    booking.dateArrival = booking.dateArrival;
    booking.Adults = booking.Adults;
    booking.Children = booking.Children;
    booking.Infants = booking.Infants;
    return await this.flightService.createBooking(booking);
  }

  @Delete(':id')
  async deletebooking(@Param('id') id: number): Promise<any> {
    await this.flightService.removeF(id);
    return { sucesss: true };
  }
}
