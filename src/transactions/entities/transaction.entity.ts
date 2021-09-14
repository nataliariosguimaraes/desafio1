import { Model, Column, Table, PrimaryKey, DataType } from 'sequelize-typescript';

export enum TransactionCategory {
    CATEGORY1 = 'category1',
    CATEGORY2 = 'category2'
}

export enum TransactionType {
    CRREDIT = 'credit',
    DEBIT = 'debit'
}


@Table({
    tableName: 'transactions',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
})


export class Transaction extends Model {
    @PrimaryKey
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
    id: string;

    @Column({ allowNull: false })
    payment_date: Date;

    @Column({ allowNull: false })
    name: string;

    @Column({ allowNull: false })
    descripition: number

    @Column({ allowNull: false })
    category: TransactionCategory

    @Column({ allowNull: false })
    amount: number

    @Column({ allowNull: false, type: DataType.DECIMAL(10, 2) })
    type: TransactionType
}
