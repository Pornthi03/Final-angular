import { IsNumber, IsString } from 'class-validator';

export class BookingDto {
  @IsNumber()
  bookingID: number;

  @IsString()
  customerName: string;

  @IsString()
  customerSurname: string;

  @IsNumber()
  flightID: number;

  @IsNumber()
  seatID: number;

  @IsString()
  dateDeparture: string;

  @IsString()
  dateArrival: string;

  @IsNumber()
  Adults: number;

  @IsNumber()
  Children: number;

  @IsNumber()
  Infants: number;
}
