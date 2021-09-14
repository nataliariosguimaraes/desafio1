import { Module } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { TransactionsController } from './transactions.controller';
import { Sequelize } from 'sequelize';
import { SequelizeModule } from '@nestjs/sequelize';
import { Transaction } from 'sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Transaction])],
  controllers: [TransactionsController],
  providers: [TransactionsService]
})
export class TransactionsModule { }
