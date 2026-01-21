# React Todo App

A small React todo app with a dark red-accent UI, supporting creation, validation, completion, deletion, and a live summary of tasks, with optional persistence via localStorage.

## Demo

🔗 **Live Demo:** https://to-do-list-nine-alpha-55.vercel.app/

## Features

- Add new todos with title, details, due date, and priority 
- Mark tasks as completed via a custom checkbox UI 
- Delete todos individually 
- Live task summary (total, completed, incomplete)
- Priority badges (low / medium / high) for quick scanning 
- Dark-themed interface with red accent styling

## Tech Stack
- React (functional components + hooks)
- Custom CSS (no UI framework)
- Optional localStorage integration for persistence (via useEffect pattern)

## Project Structure

- `src/`
    - `App.jsx`
    - `NewTodoFor.jsx` 
    - `TodoItem.jsx`
    - `styles.css`
    - `TodoList.jsx`

## Getting Started

1. Clone the repository:
   ```bash
   https://github.com/Stephani-e/ToDo-List.git
   cd ToDo-List
2. Install Dependencies:
   ```bash
   npm install
3. Start the development server
   ```bash
   npm run dev
