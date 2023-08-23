# Knapsack Algorithm Example

This repository contains a TypeScript implementation showcasing the Knapsack algorithm for optimizing transaction selection based on account balances.

## Table of Contents

- [Introduction](#introduction)
- [Usage](#usage)
  - [Part 1](#part-1)
  - [Part 2](#part-2)
  - [Part 3](#part-3)
- [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Knapsack algorithm is a classic optimization problem used to solve problems like selecting items to maximize value without exceeding a given capacity. In this repository, we apply the Knapsack algorithm to select transactions that yield the highest value without exceeding individual account balances.

## Usage

This codebase is divided into three main parts, each serving a specific purpose.

### Part 1

The entry point of the program is located in `App.ts`. This part imports necessary modules and initializes the algorithm:

```typescript
// Import necessary modules
import KSAlgorithmExample from './commons/process';
import { transactions } from './data/transactions';
import { accounts } from './data/accounts';
import { ITransaction, IAccount } from './commons/interfaces';

// Initialize the algorithm
const allTransactions: Array<ITransaction> = transactions;
const allAccounts: Array<IAccount> = accounts;

const initiateProcess = new KSAlgorithmExample();
initiateProcess.setTransactions(allTransactions); 
initiateProcess.setAccounts(allAccounts);
initiateProcess.run();
```

### Part 2

The core logic of the Knapsack algorithm is implemented in `KSAlgorithmExample.ts`. This part handles transaction selection based on account balances:

```typescript
// Import necessary modules and classes
import { ITransaction, IAccount } from "./interfaces";
import KSAlgorithm from "./KSAlgorithm";

// Define the KSAlgorithmExample class
export default class KSAlgorithmExample {
    // Methods for setting accounts and transactions
    // Method for running the algorithm
    // Private method for processing transactions
}
```

### Part 3

The actual Knapsack algorithm is defined in `KSAlgorithm.ts`. This function optimally selects transactions:

```typescript
// Import necessary modules and interfaces
import { ITransaction } from "./interfaces";

// Define the KSAlgorithm function
export default function KSAlgorithm(transactions: Array<ITransaction>, accountBalance: number) {
    // Implementation of the Knapsack algorithm
}
```

## Installation

To run this example on your local machine, follow these steps:

1. Clone this repository: `git clone https://github.com/BraddlesUnravels/Knapsack-Algorithm.git`
2. Navigate to the repository directory: `cd your-repo`
3. Install dependencies: `npm install`
4. Run the example: `npm start`

## Contributing

Contributions are welcome. If you find any issues or want to improve the code, feel free to create a pull request. Please follow the existing coding style and conventions.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
