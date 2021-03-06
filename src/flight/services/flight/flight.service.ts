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

  async loadAllsSeat(id: number): Promise<SeatDto[]> {
    return await this.seatRepository.find({ flightID: id });
  }

  createBooking(astd: BookingDto): Promise<BookingDto> {
    return this.bookingRepository.save(astd);
  }

  loadAllsBooking(): Promise<BookingDto[]> {
    return this.bookingRepository.find();
  }

  async loadFlight(
    locationDeparture,
    locationArrival,
    dateFlight,
  ): Promise<FlightDto[]> {
    return this.entityManager.query(
      'SELECT * FROM `flight` WHERE locationDeparture = $1 and locationArrival = $2 and dateFlight = $3;',
      [locationDeparture, locationArrival, dateFlight],
    );
  }

  async loadBooking(id: number): Promise<BookingDto> {
    return await this.bookingRepository.findOne({ bookingID: id });
  }

  async removeF(id: number): Promise<void> {
    await this.bookingRepository.delete(id);
  }

  async loadEmptyseats(flightID: number): Promise<SeatDto[]> {
    return this.entityManager.query(
      'SELECT seatID,seatNumber FROM `seat` JOIN flight ON flight.flgihtID = seat.flightID WHERE seatID NOT IN (SELECT seatID FROM `booking`) AND flight.flgihtID = $1;',
      [flightID],
    );
  }

  async loadIdlerseats(flightID: number): Promise<SeatDto[]> {
    return this.entityManager.query(
      'SELECT seatID,seatNumber FROM `seat` JOIN flight ON flight.flgihtID = seat.flightID WHERE seatID IN (SELECT seatID FROM `booking`) AND flight.flgihtID = $1;',
      [flightID],
    );
  }

  async loadFlightOne(id: number): Promise<FlightDto> {
    try {
      return await this.flightRepository.findOne({ flgihtID: id });
    } catch (error) {
      return error;
    }
  }

  async verifyFlight(id: number, dateD: string): Promise<FlightDto> {
    try {
      return await this.flightRepository.findOne({
        flgihtID: id,
        dateFlight: dateD,
      });
    } catch (error) {
      return error;
    }
  }

  async loadSeatOne(id: number): Promise<SeatDto> {
    try {
      return await this.seatRepository.findOne({ seatID: id });
    } catch (error) {
      return error;
    }
  }
}
