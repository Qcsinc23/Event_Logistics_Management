# Event Management Logistics

A comprehensive event management system built with modern web technologies. This application helps organize and streamline event logistics with features for planning, scheduling, and managing events efficiently.

## Features

- 📅 Event scheduling and calendar management
- 🗺️ Venue mapping with Google Maps integration
- 📊 Analytics and reporting with interactive charts
- 🌐 Internationalization support (i18n)
- 📱 Progressive Web App (PWA) capabilities
- 🔐 Authentication and authorization via Supabase
- 📸 QR code scanning capabilities
- 📄 PDF document generation
- 🖼️ Interactive canvas-based layouts with Konva
- 📁 File upload and management
- 📊 Real-time data visualization
- 🔄 Real-time updates via WebSocket

## Tech Stack

- **Frontend Framework:** React 18 with TypeScript
- **UI Libraries:** 
  - Chakra UI
  - Material-UI (MUI)
  - Framer Motion for animations
- **State Management:** Zustand
- **Backend:** 
  - Feathers.js
  - Supabase for authentication and database
- **Build Tool:** Vite
- **Charts and Visualization:**
  - Chart.js
  - Recharts
- **Form Handling:** React Hook Form
- **Maps:** Google Maps API
- **Testing:** Jest with React Testing Library
- **Real-time:** Socket.io

## Prerequisites

Before you begin, ensure you have installed:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Git](https://git-scm.com/)

## Installation

1. Clone the repository:
   ```bash
   git clone [repository-url]
   cd event_management_logistics
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the root directory
   - Add necessary environment variables:
     ```env
     VITE_SUPABASE_URL=your_supabase_url
     VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
     VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
     ```

## Available Scripts

- `npm start` - Starts the development server
- `npm run build` - Creates a production build
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code issues

## Project Structure

```
event_management_logistics/
├── public/          # Static assets
├── src/
│   ├── features/    # Feature-based components
│   ├── components/  # Shared components
│   ├── hooks/       # Custom React hooks
│   ├── services/    # API and service integrations
│   ├── store/       # Zustand store configurations
│   └── utils/       # Utility functions
├── feathers/        # Feathers.js backend
└── supabase/        # Supabase configurations
```

## Development

The application uses Vite for fast development and building. The development server includes features like:
- Hot Module Replacement (HMR)
- ESLint integration
- TypeScript type checking

## Production Build

To create a production build:

```bash
npm run build
```

This will generate optimized files in the `dist` directory.

## Testing

Run tests using:

```bash
npm test
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
