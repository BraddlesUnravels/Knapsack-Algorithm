import { ITransaction, IAccount } from "./interfaces";
import KSAlgorithm from "./KSAlgorithm";

export default class KSAlgorithmExample {

    private accounts: Array< IAccount >;

    private transactions: Array< ITransaction >;

    public setAccounts = ( accounts: Array< IAccount > ) => {
        this.accounts = accounts;
    }

    public setTransactions = ( transactions: Array< ITransaction > ) => {
        this.transactions = transactions;
    }

    public run() {
        this.process()
    }

    private process() {
        try {

            const accounts = this.accounts;
            const transactions = this.transactions;

            const payableTransactions: Array< IAccount > = []
            for ( let i = 0; i < accounts.length; i++ ) {
                const currentAccount: IAccount = accounts[ i ];
                const balance = currentAccount.AccountBalance;
                const accountTranacations = transactions.filter(( transaction ) => 
                    transaction.AccountNumber == currentAccount.AccountNumber 
                );
                
                const selectedTransactions = KSAlgorithm( accountTranacations, balance );
                currentAccount.PayableTransactions = selectedTransactions
                payableTransactions.push( currentAccount );
            }

            for ( let i = 0; i < payableTransactions.length; i++ ) {
                const current = payableTransactions[ i ].PayableTransactions
                let total = 0;
                for ( let i = 0; i < current.length; i++ ) {
                    const filterTrans = transactions.filter( trans => trans.TransactionID == current[ i ] )
                    total = total + filterTrans[ 0 ].TransactionAmount
                }
                payableTransactions[ i ].balanceUsed = total;
            }


            console.log( payableTransactions );

            return true;

        } catch ( error ) {
            console.log( `Processes: KSAlgorithmExample. Error: ${ error }` );
            return false;
        }
    }
}
