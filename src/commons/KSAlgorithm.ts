import { ITransaction } from "./interfaces";


export default function KSAlgorithm( transactions: Array< ITransaction >, accountBalance: number ) {
    try{
        // Remove decimals as it will cause an "Invaild Array Length" error
        const balance = Math.floor( accountBalance * 100 );
        transactions.forEach(( transaction ) => 
            transaction.TransactionAmount = transaction.TransactionAmount * 100
        );
        const dp = Array.from({ length: transactions.length + 1 }, () =>
            Array( balance + 1 ).fill( 0 )
        );

        for ( let i = 0; i < transactions.length; i++ ) {
            const TransactionAmount = transactions[ i ].TransactionAmount;
            for ( let j = 0; j <= balance; j++ ) {
                if ( j >= TransactionAmount ) {
                    dp[ i + 1 ][ j ] = Math.max( dp[ i ][ j ], dp[ i ][ j - TransactionAmount ] + TransactionAmount );
                } else {
                    dp[ i + 1 ][ j ] = dp[ i ][ j ];
                }
            }
        }
        
        let row = transactions.length;
        let col = balance;
        const selectTransactions: Array< number > = [];

        while ( row > 0 && col > 0 ) {
            if ( dp[ row ][ col ] !== dp[ row - 1 ][ col ] ) {
                selectTransactions.push( transactions[ row - 1 ].TransactionID );
                col -= transactions[ row - 1 ].TransactionAmount;
            }
            row--;
        }
        transactions.forEach(( transaction ) => 
            transaction.TransactionAmount = transaction.TransactionAmount / 100
        );
        return selectTransactions;
    } catch ( error ) {
        console.log( `Function: KSAlgorithm. Error: ${ error }` ) // Replace with a logging function when implemented
        /*  NOTE...
            If the error "Invalid Array Length" occurs despite the multiplication mitigation at the top of the function,
            the cause can be the number being multiplied is to large causing a memory efficiency issue.
            An error handling attempt can be to switch from a 2D dynamic programming array to a single dimension array 
            and work the algorthim backwards.
        */
        return []; // return empty array when error occurs
    }
}