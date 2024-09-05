# Secure the Vault 🔐

## The Problem

1. We need three arithmetic calculations, which will in-turn generate the three codes in a code combination.
2. Are these codes predetermined? Are we using the math equations to calculate the codes, or are we using the codes to calculate the equation?
3. What kind of output should we generate? If the combination is found, we need to inform the user of their success and exit.

## The Pseudo-problem

1. Let's start in reverse.
2. We need a three-part combination which is given to us as `10-40-39`
3. We need three variables which will hold the result of each calculation. Presumed, the values of these calculations will each equal one of the combination values.
4. We can use HTML to display our interface, and use a form to submit user information to produce the results.
5. We can use JS to create the HTML elements and handle the internal calculations which will be stored in three variables, compared to the combination values, and the result displayed.
6. Find a cool way to display the results to the user.

## The Catch

1. The solution is simple.
2. Create three variables.
3. Calculate the value of each combination number and define each variable.
4. Display a message to the user.
5. The message will contain the three combination values we just calculated.
