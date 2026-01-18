# Time Tracker Frontend

React application for tracking work time entries with pagination support.

## Technologies

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Hot Toast

## Project Structure

```
src/
├── components/       # UI components
│   ├── EntryForm.tsx           # Form for creating entries
│   ├── EnytryHistoryItem.tsx      # Single day entry display
│   └── layouts/
│       └── EntryHistory.tsx    # History list with pagination
├── hooks/           # Custom React hooks
│   └── useEntries.ts           # Hook for fetching and paginating entries
├── pages/           # Page components
│   └── EntriesPage.tsx         # Main entries page
├── services/        # API services
│   └── service.ts              # API client
├── types/           # TypeScript types
│   └── entries.ts              # Entry and DayGroup types
└── main.tsx         # App entry point
```

## Setup and Run

### Prerequisites

- Node.js 18+
- Backend API running on port 3000

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```env
VITE_API_BASE_URL=http://localhost:3000
```

### Development

Start dev server:
```bash
npm run dev
```

App will run on http://localhost:5173

### Build

Create production build:
```bash
npm run build
```

## API Integration

The app expects backend API with following endpoints:

- `POST /entries` - Create new entry
- `GET /entries?limit=<number>&cursor=<string>` - Get entries with pagination

Response format for GET:
```json
{
  "days": [
    {
      "date": "2026-01-18",
      "total": "24",
      "items": [
        {
          "id": 1,
          "project": "Client A",
          "hours": "12",
          "description": "Work description"
        }
      ]
    }
  ],
  "nextCursor": "cursor_string_or_null"
}
```
