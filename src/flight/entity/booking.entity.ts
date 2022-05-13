import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  bookingID: number;
  @Column({ nullable: false })
  customerName: string;
  @Column({ nullable: false })
  customerSurname: string;
  @Column({ nullable: false })
  flightID: number;
  @Column({ nullable: false })
  seatID: number;
  @Column({ nullable: false })
  dateDeparture: string;
  @Column({ nullable: true })
  dateArrival: string;
  @Column({ nullable: false })
  Adults: number;
  @Column({ nullable: true })
  Children: number;
  @Column({ nullable: true })
  Infants: number;
}
