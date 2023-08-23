export interface IAccount {
    AccountHolderName: string;
    AccountNumber: number;
    AccountBalance: number;
    PayableTransactions?: Array< number >;
    balanceUsed?: number;
}

export interface ITransaction {
    TransactionID: number;
    AccountNumber: number;
    TransactionAmount: number;
}