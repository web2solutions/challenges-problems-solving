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

Also looking to examples 

After this, I assumed that a hash implementation, in a best case, would have something like 26 nodes (each node is a letter of alphabet), not considering numbers. Yes, it sounded reasonable. To break down all the words from the magazine into separated `stack of equal letters`. Once it is a hash, and the letter is it key, we can associate a counter to it. It means, the portuguese word [bombom](https://pt.wikipedia.org/wiki/Bombom), would result in the following magazine hash:

```javascript
let managazineHash = {
  b: 2,
  o: 2,
  m:, 2
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

When I heard `hash`, it got more confuse yet, because I was very aware about the fact that Javascript Object (Hash) are slower than Javascript Map. The time to access all nodes is f(n), and it could be decreased up to f(n * x), where x is the difference between Hash key access and Map key access.



<img align="center" src="https://i.imgur.com/WesNwsg.png" />


Then I decided to go over a benchmark testing 3 implementations:

1. Hash
2. Map
3. Trie

With the following magazine and ransom note:

```javascript
const magazine = 'Tomorrow a lot of coffee candies will be bought Do you like to drink coffee'
const note = 'Drink coffee coffee'
```

[check bench.ransomNotes.js](./bench.ransomNotes.js)

Results:

<img align="center" src="https://i.imgur.com/FeDhJTc.png" />

See 

Then I started.

```javascript
    function canNoteBeBuilt(note, magazine) {
      let dictA = magazine.split('')
      let notes = note.split('')
      let dict = new Map()
      for (let index = 0; index < dictA.length; index++) {
        let letter = dictA[index].toLowerCase()
        let sum = dict.get(letter)
        if(sum)
          dict.set(letter, sum + 1)
        else
          dict.set(letter, 1)
      }
      let isok = true
      for (let index = 0; index < notes.length; index++) {
        const letter = notes[index].toLowerCase();
        let sum = dict.get(letter)
        if (typeof sum !== 'undefined') {
          if (dict.get(letter) < 1) {
            isok = false
            break
          }
          dict.set(letter, sum - 1)
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
