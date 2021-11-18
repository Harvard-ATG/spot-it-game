import { Deck, Card } from "./types";
/**
 * Theorem that given a prime number you could generate N * N + N + 1 cards with N + 1 symbols
 * whose relationship between each card has a maximum of one related symbol
 * Note: reason we use prime numbers is due to the theorem which uses a diagonalization method for generating the 1 to 1 relationship between the cards
 * Ref: https://math.stackexchange.com/questions/1303497/what-is-the-algorithm-to-generate-the-cards-in-the-game-dobble-known-as-spo
 **/

export const generateDeckFromPrimeNum = (n: number) => {
    // TODO check if its a prime number or power of a prime
    let i, j, k;
    let r = 1;
    let deck: Deck = [];
    let c: Card = [];
    if (n === 0) {
        return deck;
    }
    // for card#1 containing n+1 symbols
    for (i = 1; i <= n + 1; i++) {
        c.push(i);
    }
    deck.push(c);
    // for generating cards up to n
    for (j = 1; j <= n; j++) {
        r = r + 1;
        c = [1];
        for (k = 1; k <= n; k++) {
            c.push(n + n * (j - 1) + k + 1);
        }
        deck.push(c);
    }

    //  for generating  n * n cards
    for (i = 1; i <= n; i++) {
        for (j = 1; j <= n; j++) {
            r = r + 1;
            c = [i + 1];
            for (k = 1; k <= n; k++) {
                c.push(n + 2 + n * (k - 1) + (((i - 1) * (k - 1) + j - 1) % n));
            }
            deck.push(c)
        }
    }
    return deck;
};

export const splitDeck = (deck: Deck) => {
    let p1 = [];
    let p2 = [];

    let alternate = true;
    while (deck.length > 0) {
        // randomly selects an index in the deck to deal the cards
        let rando = Math.floor(Math.random() * deck.length);
        if (alternate === true) {
            p1.push(deck[rando]);
            deck.splice(rando, 1);
            alternate = false;
        } else {
            p2.push(deck[rando]);
            deck.splice(rando, 1);
            alternate = true;
        }
    }
    return { p1, p2 };
};

// https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#The_modern_algorithm
export const shuffle = (a: any[]) => {
    let j, x
    for(let idx = a.length - 1; idx > 0; idx-- ) {
        j = Math.floor(Math.random() * (idx+1)) as number
        // swap - could use destructure [a[idx], a[j]] = [a[j], a[idx]]
        x = a[idx]
        a[idx] = a[j]
        a[j]=x
    }
    return a
}