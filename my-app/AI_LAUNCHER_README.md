# AI Launcher App

A minimal, Apple-inspired single-page React app that serves as a launcher for different AI tools.

## Features

- 🎨 Clean, cream-colored background with minimal design
- 🤖 Six AI tool cards: ChatGPT, Claude, Perplexity, Gemini, Microsoft Copilot, and Grok
- 🎯 Brand-inspired card backgrounds matching each AI's visual identity
- 📱 Fully responsive (desktop 3×2, tablet 2×3, mobile 1 column)
- ♿ Keyboard accessible with proper focus states
- ✨ Smooth hover animations and transitions

## Setup

1. **Download AI logos** - Place the logo files in `public/assets/`:
   - `chatgpt.svg`
   - `claude.svg`
   - `perplexity.svg`
   - `gemini.svg`
   - `copilot.svg`
   - `grok.svg`
   
   See `public/assets/README.md` for download sources.

2. **Install dependencies** (if not already done):
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** to [http://localhost:3000](http://localhost:3000)

## Files Structure

```
app/
├── page.tsx       # Main app component with AI cards
├── page.css       # Custom styles with brand-inspired designs
├── globals.css    # Global styles and reset
└── layout.tsx     # Next.js layout (unchanged)

public/
└── assets/        # Logo files (you need to add these)
```

## Card Designs

Each card has a unique background inspired by the AI's brand:

- **ChatGPT**: Dark theme with green accent (#10a37f)
- **Claude**: Warm cream with orange accent (#f57c00)
- **Perplexity**: Deep blue/purple with bright blue accent (#335cff)
- **Gemini**: Dark blue gradient with glow effect
- **Microsoft Copilot**: Modern blue/indigo gradient
- **Grok**: Dark with neon teal/magenta cyberpunk accents

## Customization

To modify the AI tools, edit the `aiTools` array in `app/page.tsx`:

```typescript
const aiTools: AITool[] = [
  {
    name: 'Your AI',
    description: 'Short description',
    url: 'https://your-ai.com/',
    logo: '/assets/your-logo.svg',
    cardClass: 'card--your-ai',
  },
  // ...
];
```

Then add corresponding styles in `app/page.css` for `.card--your-ai`.

## Browser Support

Works on all modern browsers with CSS Grid and ES6+ support.

## License

Free to use for personal and commercial projects.
