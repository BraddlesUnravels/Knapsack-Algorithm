import KSAlgorithmExample from './commons/process';
import { transactions } from './data/transactions'
import { accounts } from './data/accounts'
import { ITransaction, IAccount } from './commons/interfaces';

const allTransactions: Array< ITransaction > = transactions;
const allAccounts: Array< IAccount > = accounts;

const initiateProcess = new KSAlgorithmExample();
initiateProcess.setTransactions( allTransactions ); 
initiateProcess.setAccounts( allAccounts );
initiateProcess.run();