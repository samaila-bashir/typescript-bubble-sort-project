import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([18, 4, 0, -2, 7, 6]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
