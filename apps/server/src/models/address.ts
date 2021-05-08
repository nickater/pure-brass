import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export default class Address extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  streetAddress: string;
  @Column()
  streetAddress2: string;
  @Column()
  city: number;
  @Column()
  state: number;
  @Column()
  zipCode: boolean;
  @Column()
  dateCreated: Date;
  @Column()
  dateUpdated: Date;
}
