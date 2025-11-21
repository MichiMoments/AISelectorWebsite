'use client';

import './page.css';

interface AITool {
  name: string;
  description: string;
  url: string;
  logo: string;
  cardClass: string;
  recommended?: boolean;
  badge?: string;
}

const aiTools: AITool[] = [
  {
    name: 'ChatGPT',
    description: 'Conversational AI powered by OpenAI',
    url: 'https://chatgpt.com/',
    logo: '/openai.svg',
    cardClass: 'card--chatgpt',
    recommended: true,
    badge: 'Most Popular',
  },
  {
    name: 'Claude',
    description: 'Thoughtful AI assistant by Anthropic',
    url: 'https://claude.ai/',
    logo: '/claude-color.svg',
    cardClass: 'card--claude',
    recommended: true,
    badge: 'Best for Writing',
  },
  {
    name: 'Perplexity',
    description: 'AI-powered search and discovery',
    url: 'https://www.perplexity.ai/',
    logo: '/perplexity-color.svg',
    cardClass: 'card--perplexity',
    badge: 'Best for Research',
  },
  {
    name: 'Gemini',
    description: "Google's most capable AI model",
    url: 'https://gemini.google.com/',
    logo: '/gemini-color.svg',
    cardClass: 'card--gemini',
    badge: 'Google Integration',
  },
  {
    name: 'Microsoft Copilot',
    description: 'Your everyday AI companion',
    url: 'https://copilot.microsoft.com/',
    logo: '/copilot-color.svg',
    cardClass: 'card--copilot',
    badge: 'Best for Productivity',
  },
  {
    name: 'Grok',
    description: 'AI with a rebellious streak',
    url: 'https://grok.com/',
    logo: '/grok.svg',
    cardClass: 'card--grok',
    badge: 'Most Unique',
  },
];

function AICard({ tool }: { tool: AITool }) {
  const handleClick = () => {
    window.open(tool.url, '_blank', 'noopener,noreferrer');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <div
      className={`ai-card ${tool.cardClass} ${tool.recommended ? 'ai-card--recommended' : ''}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`Open ${tool.name}${tool.badge ? ` - ${tool.badge}` : ''}`}
    >
      {tool.badge && (
        <span className="card-badge">{tool.badge}</span>
      )}
      <div className="card-logo-container">
        <img
          src={tool.logo}
          alt={`${tool.name} logo`}
          className="card-logo"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>
      <h2 className="card-title">{tool.name}</h2>
      <p className="card-description">{tool.description}</p>
      <button className="card-button" onClick={handleClick} tabIndex={-1}>
        Open
      </button>
    </div>
  );
}

export default function Home() {
  return (
    <main className="app-container">
      <header className="app-header">
        <h1 className="app-title">Choose your AI Companion</h1>
        <p className="app-subtitle">Tap a card to open the AI in a new tab.</p>
      </header>
      <div className="cards-grid">
        {aiTools.map((tool) => (
          <AICard key={tool.name} tool={tool} />
        ))}
      </div>
    </main>
  );
}
