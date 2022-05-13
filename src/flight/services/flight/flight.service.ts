import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookingDto } from 'src/flight/dto/booking.dto/booking-dto';
import { FlightDto } from 'src/flight/dto/flight.dto/flight-dto';
import { SeatDto } from 'src/flight/dto/seat.dto/seat-dto';
import { Booking } from 'src/flight/entity/booking.entity';
import { Flight } from 'src/flight/entity/flight.entity';
import { Seat } from 'src/flight/entity/seat.entity';
import { getManager, Repository } from 'typeorm';

@Injectable()
export class FlightService {
  public flight: FlightDto[] = [];
  public seat: SeatDto[] = [];
  public booking: BookingDto[] = [];
  entityManager = getManager();

  constructor(
    @InjectRepository(Flight)
    private flightRepository: Repository<Flight>,

    @InjectRepository(Seat)
    private seatRepository: Repository<Seat>,

    @InjectRepository(Booking)
    private bookingRepository: Repository<Booking>,
  ) {}
  createFlight(astd: FlightDto): Promise<FlightDto> {
    return this.flightRepository.save(astd);
  }

  loadAllsFlight(): Promise<FlightDto[]> {
    return this.flightRepository.find();
  }

  createSeat(astd: SeatDto): Promise<SeatDto> {
    return this.seatRepository.save(astd);
  }

  loadAllsSeat(): Promise<SeatDto[]> {
    return this.seatRepository.find();
  }

  createBooking(astd: BookingDto): Promise<BookingDto> {
    return this.bookingRepository.save(astd);
  }

  loadAllsBooking(): Promise<BookingDto[]> {
    return this.bookingRepository.find();
  }

  loadFlight(
    locationDeparture,
    locationArrival,
    dateFlight,
  ): Promise<FlightDto[]> {
    return this.entityManager.query(
      'SELECT * FROM `flight` WHERE locationDeparture = $1 and locationArrival = $2 and dateFlight = $3;',
      [locationDeparture, locationArrival, dateFlight],
    );
  }
}
