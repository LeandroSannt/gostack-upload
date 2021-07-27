import {Entity, Column, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn,ManyToOne,JoinColumn} from 'typeorm'
import { v4 as uuid } from "uuid";

import Category from './Category'

@Entity('transactions')
class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  type: 'income' | 'outcome';

  @Column()
  value: number;

  @ManyToOne(() => Category)
  @JoinColumn({name:'category_id'})
  category:Category

  @Column()
  category_id:string

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export default Transaction;
