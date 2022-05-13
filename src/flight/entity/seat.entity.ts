import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Seat {
  @PrimaryGeneratedColumn()
  seatID: number;
  @Column()
  seatNumber: string;
  @Column()
  flightID: number;
}
