# Personal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS that integrates with a Spring Boot backend. This project showcases a developer's professional experience, skills, and contact information with a clean and intuitive interface.

## 🚀 Tech Stack

### Frontend Technologies
- **React 18** - A JavaScript library for building user interfaces
- **TypeScript** - Adds static typing to JavaScript
- **Vite** - Next generation frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **React Query** - Data-fetching and state management
- **Axios** - HTTP client for API requests

### Backend Integration
- Spring Boot REST API endpoints
- JSON data format
- CORS enabled for frontend access

## 📁 Project Structure

```
src/
├── components/         # React components
├── services/          # API integration services
│   └── api.ts        # API client and type definitions
├── constants/         # Application constants
├── types/            # TypeScript type definitions
├── utils/            # Utility functions
├── App.tsx           # Root component
└── main.tsx         # Application entry point
```

## 🔄 Data Flow

### API Integration

1. **API Service Layer (`services/api.ts`)**
   - Configures Axios instance with base URL
   - Defines TypeScript interfaces for API responses
   - Implements service methods for each endpoint:
     ```typescript
     - GET /api/profile    -> Profile data
     - GET /api/experiences -> Work experience
     - GET /api/skills     -> Technical skills
     ```

2. **React Query Integration**
   - Configured in `main.tsx`
   - Manages server state and caching
   - Handles loading and error states

3. **Component Data Flow**
   - Components use `useQuery` hook to fetch data
   - Loading states show spinners
   - Error states handle gracefully
   - Data updates automatically refresh UI

### Backend API Structure

```typescript
// Profile API Response
interface Profile {
  name: string;
  title: string;
  bio: string;
  imageUrl: string;
}

// Experience API Response
interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string[];
}

// Skills API Response
interface Skill {
  id: number;
  category: string;
  skills: string[];
}
```

## 💡 Key Features

- **Dynamic Data Loading**: All content fetched from backend API
- **Responsive Design**: Works on all device sizes
- **Dark Mode**: Toggle between light and dark themes
- **Type Safety**: Full TypeScript implementation
- **Error Handling**: Graceful error states
- **Loading States**: Smooth loading indicators
- **Data Caching**: Efficient data management with React Query

## 🔧 Development

1. **Environment Setup**
   ```bash
   # Create .env file
   VITE_API_URL=http://localhost:8080/api
   ```

2. **Installation**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   ```

## 📝 Adding New Features

### Adding New API Integration
1. Define interface in `services/api.ts`
2. Add service method in API client
3. Create new component using `useQuery`
4. Handle loading and error states

### Modifying API Endpoints
1. Update service methods in `services/api.ts`
2. Adjust TypeScript interfaces if needed
3. Update environment variables if necessary

### Component Integration
1. Import required service
2. Use `useQuery` hook for data fetching
3. Implement loading state
4. Handle potential errors
5. Display fetched data

## 🔍 Code Conventions

- Use TypeScript for type safety
- Follow REST API best practices
- Implement proper error handling
- Use React Query for data fetching
- Keep components focused and modular
- Document API interfaces

## 🚀 Deployment

1. **Frontend Deployment**
   - Build React application
   - Deploy to static hosting
   - Set environment variables

2. **API Configuration**
   - Update API URL in production
   - Ensure CORS is configured
   - Verify API endpoints

## 🔒 Security Considerations

- API URL in environment variables
- CORS properly configured
- Error handling doesn't expose sensitive info
- Type checking for API responses
- Secure communication over HTTPS

## 🐛 Troubleshooting

1. **API Connection Issues**
   - Check API URL in .env
   - Verify backend is running
   - Check CORS configuration
   - Inspect network requests

2. **Type Errors**
   - Verify API response matches interfaces
   - Check for null handling
   - Ensure optional fields are marked

3. **Data Loading Issues**
   - Check React Query configuration
   - Verify loading states
   - Inspect error handling