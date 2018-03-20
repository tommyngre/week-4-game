# week-4-game
## This game is an a (modest) turn-based based rpg game featuring characters based on old co-workers. Instead of traditional battling (i.e. fighting), these characters "one-up" one another by boasting.

# How it works
## At a high level, first, gamers choose their characters; next, they choose and battle one opponent at a time, until none remain.

# The details
## There are 3 stats at play
### HP (health points)
### Base AP (attack points)
### AP Bonus (attack bonus)

## HP is straight-forward. It represents how many points of health the player has. When attacked, a character's HP is reduced by the attacker's AP until it reaches zero. At that point, it... um... goes to heaven.

## Base AP is also straight-forward. When a player attacks, its opponents HP will be reduced by the attacker's AP.

## Bonus only applies the player's character. Not to the CPU.
### After each turn, the player's character accrues an AP Bonus.
#### For example, Mr. Sun's AP is 25. His AP Bonus is 10. The first time he attacks, his AP will be 25. The second time he attacks, his AP is 35 (Base AP + Bonus). The third time he attacks, his AP will be 45 (AP + Bonus + Bonus). And so on...
### After each round, the player accrues AP Bonus too. However, the player doesn't carry over his accrued AP from round to round. Instead, AP "resets" after an opponent is defeated. Otherwise it would get out of control. Here's how that works:
#### Mr. Sun's AP in round one is 25. No matter what his AP is at the end of Round 1, he starts round 2 with 35 AP (Base AP + Bonus). He starts round 3 with 45 AP (Base AP + Bonus + Bonus). Think of this as a "level up" for completed a round. Thus, in round 3, Mr. Sun's first attack would deal 45 damage (round 3 Base AP + Bonus). His second attack would deal 55 damage (round 3 Base AP + Bonus + Bonus). His third attack would deal 37 damage (40 AP + Bonus, etc.)

# 3/20/18 Note: The player stat balancing isn't perfect. Most of the time you'll win. One way to lose is to choose Mr. Sun and battle Tuan.
