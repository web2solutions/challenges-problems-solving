# The Ransom Note Challenge

First at all I would like to make one thing clear: I'm a brazilian developer and I learnt english by listen to musics, reading technology manuals and attending to work meetings on daily basis for the last 10 years.

Some days ago, in a job interview, I faced the following problem to solve:

>> "Given a magazine and a set of ransom notes, determine if the ransom notes can be built using the given magazine."

<img align="center" src="https://i.imgur.com/Fyb8pxk.jpg" />

Until that day, I've never heard that expression [(Ransom Note)](https://en.wikipedia.org/wiki/Ransom_note_effect) before.

Looking to the provided image and listen to the interviewer, I realized the problem was about to build a lot of words using magazine's letters as source. Given my past experience on several "gamified interviews", where I did face test cases with 100k data being passed as input, I immediately assumed scenarios where both `ransom notes` and `magazine`, have very small and large inputs. Sometimes both having proportional size, and sometimes, both having inverted greatness.

Why?

The hidden test cases in platforms like Hacker Rank, are useful to emulate the daily basis effects of BIOS. I'm not talking about this [BIOS](https://en.wikipedia.org/wiki/BIOS). I'm talking about the portuguese acronym `Burro Ignorante Operando o Sistema`, which in english is something like `Ignorant Donkey Operating the System`. Just kidding! In other words, forcing developers to write software which `predicts` things like `unexpected inputs`, `bad system usage`, and so on.

Going back to the test:

Then I made the following question: `Should I to consider cases like large input data?`

The answer: `Yes!`

I had 2 things in mind:

- The language used was Javascript
- Some few days before that, I have spent a BIG time on a challenge where, the inputs were all above 100k itens, and using string as data structure have winned all contests against Array and Map. But no, in the end of that day, the winned solution was a Trie.

The interviewer was very friendly and gently all the time. Before the test, I did advise that my audio was not properly working and he was very fair and managed the call even in a critical scenario.

I started writing Trie implementation.

The interviewer came back to me and asked what I was doing and why. After the answer, he said that was not the desired approach.

I then turned it into a solution based on strings. Again, he tried to help me and advised that was not the desired approach and gave me a tip by saying: "hash" .... and nothing more.

The issues in my audio device continued. Then we decided to reschedule the meeting.

When I hanged out the call, I started researching about the most "precise meaning" of "ransom notes" and I found this in Wikipedia:

> In typography, the ransom note effect is the result of using an excessive number of juxtaposed typefaces. It takes its name from the appearance of a stereotypical ransom note, with the message formed from `words or letters` cut randomly from a magazine or newspaper in order to avoid using recognizable handwriting. 

After this, I assumed that a hash implementation, in a best case, would have something like 26 pair/value sets (each set is a letter of alphabet), not considering numbers. Yes, it sounded reasonable: to break down all the words from the magazine into separated `stack of equal letters`. Once it is a hash, and the letter is it key, we can associate a counter to it. It means, the portuguese word [bombom](https://pt.wikipedia.org/wiki/Bombom), would result in the following magazine hash:

```javascript
let managazineHash = {
  b: 2,
  o: 2,
  m:, 2
}
```

The Trie implementation would looks like the following:

```javascript
"root": {
    "b": {
      "value": "b",
      "isLastChar": false,
      "letterCount": 1,
      "o": {
        "value": "o",
        "isLastChar": false,
        "letterCount": 1,
        "m": {
          "value": "m",
          "isLastChar": false,
          "letterCount": 1,
          "b": {
            "value": "b",
            "isLastChar": false,
            "letterCount": 1,
            "o": {
              "value": "o",
              "isLastChar": false,
              "letterCount": 1,
              "m": {
                "value": "m",
                "isLastChar": true,
                "letterCount": 1
              }
            }
          }
        }
      }
    }
  }
}
```

Talking about portuguese yet, the word `bombom` could be breaked down into 2 instances of the word [`bom`](https://translate.google.com.br/?sl=pt&tl=en&text=bom&op=translate). Then it means that an effective algorithm should really to break down all the magazine words into stacks of letters, instead stack of words, because if you set a key hash as `bombom`, and try to validate the `bom` ransom note, you are going to increase the algorithm complexity.

 Not only because an idiom has more words than it alphabet, which translates to a larger hash, but because you would need a lot of other efforts inside a iterator and probably use regex to match hash keys. Also, you have a counter to deal with.

Why have a counter? That is simple!

This is your magazine: `I have 2 bomboms`

This is are the desired ransom notes: `bom bom bom`. 

That, by force of nature, can't be built, because it needs `3: b, 3: o and 3: m`. But the magazine just have `2: b, 2: o and 2: m`

In that time, I believed that I have achivied the desired goal of that test.

But I was not satisfied with the fact that all my initial approaches were rejected.

When I heard `hash`, it got more confuse yet, because I was very aware about the fact that Javascript Object (Hash) are slower than Javascript Map. 

The time to access all nodes, suposedly is O(n). But it seems this is not what happens on Javascript hash objects, it could be decreased up to O(n * t), where t is the time difference between associative array key access and Map key access. By simply replacing `{}` by `Map`. Javascript hash objects works similar to arrays, being associative arrays, having text indexes insted integers. 



<img align="center" src="https://i.imgur.com/WesNwsg.png" />


**Notes:**

The computer used to run the benchmarks is a Mac min i5, 32GB RAM (for sure there is no 32GB ram avaiable).
Node version: v10.22.0

### Benchmarking #1

Then I decided to go over a benchmark testing 3 implementations:

1. Hash - Javascript associative arrays
2. [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
3. [Trie](https://en.wikipedia.org/wiki/Trie)

On both `Hash` and `Map`, the magazine has all it `words` cutted out and saved as key. This approach does not satisfy the above mentioned `bombom` and `bom` case. They have O(n) time complexity

For the `Trie`, we have a O(log n) implementation.

As input we have the following magazine and ransom note:

```javascript
const magazine = 'Tomorrow a lot of coffee candies will be bought Do you like to drink coffee'
const note = 'Drink coffee coffee'
```

[check bench.ransomNotes.js](./bench.ransomNotes.js)

Results:

<img align="center" src="https://i.imgur.com/kX1bc6a.png" />


Yes, by the first test case, MAP/Hash is +-4x faster than a Trie.

This is the winner solution:

```javascript
    function canNoteBeBuilt(note, magazine) {
      let dictA = magazine.split(' ') // split magazine into words
      let notes = note.split(' ') //
      let dict = new Map() 
      for (let index = 0; index < dictA.length; index++) { // O(n)
        let keyName = dictA[index].toLowerCase() //  O(n)
        let sum = dict.get(keyName) //  O(1)
        if(sum)
          dict.set(keyName, sum + 1) //  O(1)
        else
          dict.set(keyName, 1) //  O(1)
      }
      let isok = true
      for (let index = 0; index < notes.length; index++) { // O(n)
        const note = notes[index].toLowerCase(); //  O(n)
        let sum = dict.get(note)
        if (typeof sum !== 'undefined') {
          if (dict.get(note) < 1) {
            isok = false
            break
          }
          dict.set(note, sum - 1)
          isok = true
        } else {
          isok = false
          break
        }
      }
      return isok
    }
    canNoteBeBuilt(note, magazine)
```

It's  time complexity is O(n*n) quadratic, because dictA[index] inside the first for is O(n) in it worst case. The Map's get and set also is therorically O(n), even executing faster that Javascript object's access.

But the provided solution does not solves 100% of our problem. Also, it could be improved. It is breaking down magazine into words and if we try to build ransom notes that are partial, in other words, if we try to build `bom` with the given `bombom`, the algorithm will not work, or, it will requires changes that will reflect into algorithm an probably on it time complexity.



### Benchmarking #2

For now, I'm going to implement the hability to build `partial ransom notes`, like the already mentioned `bombom` case.

The main difference from previous Map implementation is that, rather than breaking the magazine into words, it will be brake into letters, meaning now you have a fixed size Map as store, reducing the time complexity from O(n*n) to O(n*1), because the time to access the Map store is constant.

In the Trie implementation, we also are now counting letters rather than counting words. But there is no changes in it time complexity.

As input we have the following magazine and ransom note:

```javascript
const magazine = 'Tomorrow a lot of coffee candies will be bought Do you like to drink coffee'
const note = 'Drink coffee coffee'
```

[check bench.ransomNotes.2.js](./bench.ransomNotes.2.js)


Results:

<img align="center" src="https://i.imgur.com/JQe0EZ0.png" />

LOL, the Map/Hash implementation stills rocking. But the time difference reduced by up to 3x with same magazine and ransom note.

What is happening ?

In order to get closest of real world, we have a counter associated to each item of the Magazine store. Because the magazine `bombom` just can produces `bombom` or `bom` and `bom` possibilities. Trying to produce `bom` 3 times must fails.

In the previous Map implementation, we stored words as key, and every time you try to build `bombom`, it goes over the key `bombom`.

In this actual implementation, we stored letters as keys, and every time you try to build `bombom`, it goes over the keys `b`, `o` and `m`.

