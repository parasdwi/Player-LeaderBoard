# 🏆 Player's Leaderboard

A simple, responsive leaderboard web app built with vanilla HTML, CSS, and JavaScript. Add players, track their scores, adjust scores on the fly, and watch the leaderboard auto-sort by rank.

https://parasdwi.github.io/Player-LeaderBoard/

## Features

- **Add players** with first name, last name, country, and score
- **Auto-sorting** — the leaderboard re-sorts by score (highest first) after every update
- **Score adjustment** — bump a player's score up or down by 5 points with a single click
- **Delete players** from the leaderboard
- **Timestamped entries** — each player card shows the date and time they were added
- **Form validation** — prompts the user if any required field is left empty
- **Clean, card-based UI** with hover and active states for a polished feel

## Project Structure

```
├── Index.html         # Page markup and structure
├── LeaderBoard.css     # Styling for layout, cards, and buttons
└── LeaderBoard.js      # App logic: adding, sorting, updating, and deleting players
```

## Getting Started

1. Download or clone the project files, keeping all three files in the same folder.
2. Open `Index.html` in any modern web browser — no build step or server required.

> **Note:** The delete button references an icon file (`icons8-delete-24.png`) that isn't included in this project. Add an icon with that filename to the same folder, or update the `<img src>` in `LeaderBoard.js` to point to your own icon (or replace it with a text label like `✕`).

## Usage

1. Fill in a player's **First Name**, **Last Name**, **Country**, and **Score** in the input fields.
2. Click **Add Player** to add them to the leaderboard.
3. Use the **+5** / **-5** buttons on a player's card to adjust their score — the board re-sorts automatically.
4. Use the delete (🗑) button to remove a player from the leaderboard.

## Tech Stack

- **HTML5** for structure
- **CSS3** (Flexbox) for layout and styling
- **Vanilla JavaScript** (DOM manipulation, no frameworks or dependencies)

## Possible Improvements

- Persist players using `localStorage` so the leaderboard survives a page refresh
- Add score/number validation (currently any text can be entered in the Score field)
- Add player ranking numbers (1st, 2nd, 3rd...) next to each card
- Include the missing delete icon asset or swap it for an inline SVG/emoji
- Add editing support for existing player details

## License

Feel free to use, modify, and share this project.
