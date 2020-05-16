import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// DTO: Data Transfer Object
// interface AppointmentContructor {
//   provider: string;
//   date: Date;
// }

@Entity('appointments')
class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  provider: string;

  @Column('timestamp with time zone')
  date: Date;
}

export default Appointment;
