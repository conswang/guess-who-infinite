Online version of the two player game Guess Who? using Socket.io and React. Play [here](https://guess-who-infinite-client.herokuapp.com/).

### Rules

Players each have an identical set of 24 cards and choose a character card to be guessed. They take turns to ask and answer yes or no questions until they have figured out what card the other player has. The first to guess determines the result of the game - the player wins if their guess is correct and loses if incorrect.

### Image Scraping

Called Guess Who `Infinite` because the player can choose from an unlimited number of themed categories for the cards to guess. Typing any category into the category field on the Create Game page will generate a set of 24 images for that category. Leavng the category field blank will use the default category (Young Justice characters).

NOTE: this feature is still slow. Expect to wait up to 30 seconds for the image scraper to finish getting the pictures (meanwhile, the default Young Justice pictures will be displayed).

## Issues

Players should be considerate enough to take turns asking questions.

## Available Scripts

To run:

### `npm run dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
