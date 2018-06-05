# WDI Emergency Compliment

Create your own version of [Emergency Compliment](http://emergencycompliment.com/) where the compliments are WDI-themed. When a user visits the site, they should be greeted with a WDI-themed compliment to cheer them up!

## Instructions

- Fork and clone this repository
- Change into the new directory
- Work through the requirements below

A pull request is not required, but it is necessary if you want a code review.

## Requirements

When a user visits the homepage of your Emergency Compliment app, they should see a random compliment in a random color.

Start with pseudocode! What do you need to do to make this work? Then build out the boilerplate for a simple Express app. 

Here are some sample compliments and colors (feel free to substitute in your own):

```js
const compliments = [
  "Your instructors love you",
  "High five = ^5",
  "Having a growth mindset will take you far",
  "It's almost beer o'clock",
  "The Force is strong with you"
]

const colors = ["#FFBF00", "#0080FF","#01DF3A","#FF0080"]
```

### Bonus: Personalized Compliments

When a user visits `"/:name"` (ie: `"localhost:3000/randy"`), the greeting should be personalized (show their name). There should still be a random compliment and background color though!.

### Bonus: User Submitted Compliments

Allow a user to add to the list of compliments by submitting a form.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.

