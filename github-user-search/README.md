GitHub User Search 🔍

GitHub User Search is a React application that allows users to search for GitHub profiles and view basic information.
The app integrates with the GitHub API to fetch real-time data.

✨ Features

🔎 Search for any GitHub user by username.

👤 Display basic user details, including:

Profile avatar

Username

Direct link to GitHub profile

⚡️ Built with React + Vite for fast performance.

🌐 Uses Axios for API requests.

🔒 Supports Environment Variables (.env) for securely storing API keys (optional).

🛠️ Tech Stack

React

Vite

Axios

JavaScript (ES6+)

CSS / Tailwind (optional for styling)

🚀 Getting Started

Clone the repository:

git clone https://github.com/your-username/github-user-search.git
cd github-user-search


Install dependencies:

npm install


Run the development server:

npm run dev


Open the app in your browser (default: http://localhost:5173/).

📂 Project Structure
src/
 ├── components/   ← React components
 ├── services/     ← API service logic
 ├── App.jsx       ← Main application file
 ├── main.jsx      ← Entry point

📌 Notes

If you want to increase your GitHub API request limit, create a Personal Access Token and add it to a .env file:

VITE_APP_GITHUB_API_KEY=your_personal_access_token


Without an API key, GitHub allows only 60 requests per hour.