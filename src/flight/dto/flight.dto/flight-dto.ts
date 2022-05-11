import { IsNumber, IsString } from 'class-validator';

export class FlightDto {
  @IsNumber()
  flgihtID: number;

  @IsString()
  flgihtTimeDeparture: string;

  @IsString()
  flgihtTimeArrival: string;

  @IsString()
  flgihtLocationDeparture: string;

  @IsString()
  flgihtLocationArrival: string;
}
