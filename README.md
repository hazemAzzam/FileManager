# FileManager

A modern, full-stack file management application built with React, TypeScript, and Node.js. This application provides a clean and intuitive interface for uploading, viewing, and managing files with features like drag-and-drop uploads, file previews, and bulk operations.

## 🚀 Features

- **File Upload**: Drag-and-drop file uploads with progress tracking
- **File Management**: View, sort, and paginate through uploaded files
- **File Operations**: Download and delete files (single or bulk)
- **Responsive Design**: Modern UI built with Material-UI
- **Real-time Updates**: Live file list updates using React Query
- **Dark/Light Theme**: Toggle between themes
- **File Thumbnails**: Visual file previews
- **Bulk Actions**: Select and perform operations on multiple files

## 🛠️ Tech Stack

### Frontend

- **React 18** with TypeScript
- **Material-UI (MUI)** for UI components
- **Vite** for build tooling
- **React Query (TanStack Query)** for data fetching and caching
- **Zustand** for state management
- **Axios** for HTTP requests
- **React Dropzone** for file uploads

### Backend

- **Node.js** with Express.js
- **Multer** for file upload handling
- **CORS** for cross-origin requests
- **UUID** for unique file identification

## 📁 Project Structure

```
FileManager/
├── backend/                 # Node.js/Express backend
│   ├── server.js           # Main server file
│   ├── uploads/            # File storage directory
│   └── package.json        # Backend dependencies
├── frontend/               # React/TypeScript frontend
│   ├── src/
│   │   ├── features/       # Feature-based modules
│   │   │   └── fileManager/
│   │   │       ├── components/  # FileManager components
│   │   │       ├── hooks/       # Custom hooks
│   │   │       ├── services/    # API services
│   │   │       └── types/       # TypeScript types
│   │   ├── shared/         # Shared components and utilities
│   │   │   ├── ui/         # Reusable UI components
│   │   │   ├── confirm/    # Confirmation dialog system
│   │   │   └── utils.ts    # Utility functions
│   │   └── main.tsx        # Application entry point
│   └── package.json        # Frontend dependencies
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/hazemAzzam/FileManager
   cd FileManager
   ```

2. **Install backend dependencies**

   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

1. **Start the backend server**

   ```bash
   cd backend
   npm run dev
   ```

   The backend will run on `http://localhost:3000`

2. **Start the frontend development server**

   ```bash
   cd frontend
   npm run dev
   ```

   The frontend will run on `http://localhost:5173`

3. **Open your browser** and navigate to `http://localhost:5173`

## 📡 API Endpoints

### Backend API

- `POST /upload` - Upload a single file
- `GET /files` - Get paginated list of files with sorting
  - Query parameters: `page`, `pageSize`, `sortField`, `sortOrder`
- `GET /files/:id` - Download a file by ID
- `DELETE /files` - Delete files by IDs (bulk operation)
  - Body: `{ "fileIds": ["uuid1", "uuid2", ...] }`

## 🎨 Key Features Explained

### File Upload System

- Files are stored with UUID prefixes to prevent naming conflicts
- Original filenames are preserved and displayed to users
- Upload progress is tracked and displayed in real-time

### File Management

- Paginated file listing with configurable page sizes
- Sortable columns (filename, size, upload date)
- Bulk selection and operations
- File thumbnails for visual identification

### State Management

- Zustand for global state management
- React Query for server state and caching
- Optimistic updates for better user experience

## 🔧 Development

### Available Scripts

**Backend:**

- `npm run dev` - Start development server with nodemon

**Frontend:**

- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Organization

The frontend follows a feature-based architecture:

- Each feature has its own directory with components, hooks, services, and types
- Shared components and utilities are in the `shared` directory
- Custom hooks for data fetching and state management
- TypeScript interfaces for type safety

## 🚀 Deployment

### Backend Deployment

1. Set up a Node.js hosting environment
2. Install dependencies: `npm install`
3. Start the server: `node server.js`
4. Ensure the `uploads` directory is writable

### Frontend Deployment

1. Build the application: `npm run build`
2. Deploy the `dist` folder to a static hosting service
3. Update API endpoints if needed for production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📝 License

This project is licensed under the ISC License.

## 🔮 Future Enhancements

- [ ] User authentication and authorization
- [ ] File sharing and collaboration features
- [ ] Advanced file search and filtering
- [ ] File versioning and history
- [ ] Cloud storage integration
- [ ] Mobile app support
- [ ] File compression and optimization
- [ ] Advanced file previews (PDF, images, videos)
