import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Flight {
  @PrimaryGeneratedColumn()
  flgihtID: number;
  @Column({ name: 'TimeDeparture', nullable: false })
  flgihtTimeDeparture: string;
  @Column({ name: 'TimeArrival', nullable: false })
  flgihtTimeArrival: string;
  @Column({ name: 'LocationDeparture', nullable: false })
  flgihtLocationDeparture: string;
  @Column({ name: 'LocationArrival', nullable: false })
  flgihtLocationArrival: string;
}
