/**
 * Question 3 -- changePossibilities(amount,amount): 
 * Your quirky boss collects rare, old coins. They found out you're
 * a programmer and asked you to solve something they've been wondering for a long time. 

Write a function that, given an amount of money and an array of coin denominations, 
computes the number of ways to make the amount of money with coins of the available denominations. 

Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢), your program would output 
4—the number of ways to make 4¢ with those denominations: 

1¢, 1¢, 1¢, 1¢
1¢, 1¢, 2¢
1¢, 3¢
2¢, 2¢


 */

//reseached and saw an approach in dynamic programming

function changePossibilities(amount, coins) {

    //Tracks amount of combinations in each change amount
    let trackerArr = []

    //we start with 0 ways to get any change including 0 and up to our amount
    for (let i = 0; i <= amount; i++) {
        trackerArr[i] = 0
    }

    //There is one way to get exchange for zero money, that's to not give any money
    trackerArr[0] = 1

    for (let j = 0; j < coins.length; j++) {

    /*

    seemed like fibanocci but there are collisions because we're looking for # of 
    combinations not permutations. To react to collisions one must actively change 
    the array in each coin denomination. This would absorb old orderings of numbers 
    instead of doubling up on them 
    
    */

        let start = coins[j]

        for (let i = start; i <= amount; i++) {


            trackerArr[i] += trackerArr[i - start]

        }
    }

    return trackerArr[trackerArr.length - 1]
}
