import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Flight {
  @PrimaryGeneratedColumn()
  flgihtID: number;
  @Column({ nullable: false })
  timeDeparture: string;
  @Column({ nullable: false })
  timeArrival: string;
  @Column({ nullable: false })
  dateFlight: string;
  @Column({ nullable: false })
  locationDeparture: string;
  @Column({ nullable: false })
  locationArrival: string;
}
