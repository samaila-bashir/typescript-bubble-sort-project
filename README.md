# TypeScript Sorting Project

## Description

This project is a TypeScript implementation of bubble sort algorithm on three data types (String, Numbers, and LinkedList).

## Algorithm Implemented

**Bubble Sort**: A simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/typescript-sorting-project.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the project:

   ```bash
   npm start
   ```

## Usage

Modify the `src/index.ts` file to test the sorting algorithm on different types of data (String, Numbers, LinkedList).

```typescript
// Example usage
import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([15, 4, 0, -2, 7, 6]);
numbersCollection.sort();
console.log(numbersCollection.data);
```
