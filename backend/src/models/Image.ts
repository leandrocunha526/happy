import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    JoinColumn,
    ManyToOne
 } from 'typeorm';

 import Orphanage from './Orphanage';

 @Entity('image')
 export default class Image{
     @PrimaryGeneratedColumn('increment')
     id: number;

     @Column()
     path: string;

     @ManyToOne(() => Orphanage, (orphanage) => orphanage.image)
     @JoinColumn({ name: "orphanage_id" })
     orphanage: Orphanage;
 }
