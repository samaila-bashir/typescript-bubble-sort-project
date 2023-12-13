import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

// const numbersCollection = new NumbersCollection([15, 4, 0, -2, 7, 6]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('TsVvbbaayd');
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
