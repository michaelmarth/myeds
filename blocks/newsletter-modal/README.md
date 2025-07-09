# Newsletter Modal Block

This block displays a modal popup asking visitors to subscribe to the newsletter when they scroll down the page. The modal only appears once per session.

## Usage

1. Place a `newsletter-modal` block anywhere on your page. The block content can be empty; it just triggers the modal logic:

```
<div class="newsletter-modal"></div>
```

2. Make sure both `newsletter-modal.js` and `newsletter-modal.css` are loaded for this block.

## Features
- Modal appears when the user scrolls down 100px or more
- Only shows once per session (uses sessionStorage)
- Accessible: can be closed with the close button or by clicking the backdrop
- Simple email form (customize as needed) 