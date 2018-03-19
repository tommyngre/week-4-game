# week-4-game
## This game is an a (modest) turn-based based rpg game featuring characters based on old co-workers. Instead of traditional battling (i.e. fighting), these characters "one-up" one another by boasting.

# How it works
## At a high level, first, gamers choose their characters; next, they choose and battle one opponent at a time, until none remain.

# The details
## With each attack, the player's character accrues an attack point (AP) bonus.
### For example, the first time Mr. Sun attacks his AP is 19.
### The second time he attacks his AP is 22 (19 + 3)
### The third time he attacks his AP is 25 (19 + 3 + 3)
### The formula for AP/turn is: Initial AP + (3 * turn)
## But note, the attack bonus' settle down between opponents. 
### For example, let's say Mr. Sun defeats his first opponent after three turns, when his AP is 25. He does not start the next round at 25, nor 28. He cools off, so to speak; he starts the next round at 22.
### The formula for AP/round is: Initial AP + (bonus * battle round))
### He'll start the third round at 25.

# Character notes:
## Tuan, Sonic, and Mr. Sun will lose if they choose to fight Mandy first.
## Mandy will lose if she chooses to fight Mr. Sun first.