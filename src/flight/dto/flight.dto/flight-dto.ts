import { IsNumber, IsString } from 'class-validator';

export class FlightDto {
  @IsNumber()
  flgihtID: number;

  @IsString()
  timeDeparture: string;

  @IsString()
  timeArrival: string;

  @IsString()
  dateFlight: string;

  @IsString()
  locationDeparture: string;

  @IsString()
  locationArrival: string;
}
