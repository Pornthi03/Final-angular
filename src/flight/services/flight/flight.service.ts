import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FlightDto } from 'src/flight/dto/flight.dto/flight-dto';
import { Flight } from 'src/flight/entity/flight.entity';
import { getManager, Repository } from 'typeorm';

@Injectable()
export class FlightService {
  public flight: FlightDto[] = [];
  entityManager = getManager();

  constructor(
    @InjectRepository(Flight)
    private flightRepository: Repository<Flight>,
  ) {}
  createFlight(astd: FlightDto): Promise<FlightDto> {
    return this.flightRepository.save(astd);
  }

  loadAlls(): Promise<FlightDto[]> {
    return this.flightRepository.find();
  }
}
