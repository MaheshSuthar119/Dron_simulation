# Problem Statement
# 🚁 Drone Simulation
Drones are increasingly used for surveillance, delivery, and research. However, simulating their real-time movement, weather conditions, and return paths is challenging. This prototype provides a virtual environment to test drone movement with live weather monitoring.

This project simulates a drone's movement through a set of GPS coordinates uploaded from a JSON file. The drone moves step by step, tracing its path dynamically, and allows control with Play/Pause buttons.

## 💡 Solution Overview
This Drone Simulation application enables users to:
- [x] Upload flight path coordinates.
- [x] Simulate real-time drone movement.
- [x] Monitor weather conditions at the drone's location.
- [x] Auto-return to the starting point after reaching the destination.

## 🌟 Features
### 📂 Upload Flight Path: 
Load a JSON file containing GPS coordinates for the drone’s movement.
### 🚁 Real-Time Drone Movement: 
The drone moves dynamically along the provided path.
### 🌦 Live Weather Updates: 
Displays real-time weather conditions at the drone’s current location using OpenWeatherMap API.
### ⏯️ Play/Pause Controls:
- [x] Play: Starts the drone’s movement.
- [x] Pause: Stops the movement and resumes from the last point.
### 🔄 Auto-Return Feature: 
The drone automatically returns to the starting point after reaching the last coordinate.
### 🗺 Interactive Map: 
Displays the drone's path and current position on a dynamic map.
### 📏 Distance Tracking: 
Measures and displays the total distance traveled by the drone.

## 🔧 Technologies Used
- [x] Frontend: React.js, css
- [X]  Leaflet.js (Map visualization)
- [x] APIs: OpenWeatherMap API, OpenStreetMap API
- [x] Version Control: Git, GitHub

## ⚙️ Setup & Installation
### Prerequisites
- [x] Node.js v18+
- [x] npm or yarn
## Installation Steps
### Clone the repository:
```
git clone https://github.com/MaheshSuthar119/Dron_simulation.git
```
### Install dependencies:
```
npm install
```
###  Create an .env file and add your OpenWeatherMap API key:
```
WEATHER_APIKEY=your_api_key_here
```
### Start the development server:
```
npm run dev
```

## 📡 API Documentation
### Map API (OpenStreetMap)
```
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />  
```
the <TileLayer> in Leaflet uses an API (OpenStreetMap tile service) to fetch map tiles dynamically. The URL "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" is an endpoint that retrieves map tiles based on zoom level ({z}), x and y coordinates ({x}, {y}), and subdomains ({s}).

### Weather API (OpenWeatherMap)
```
https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&units=metric&appid=YOUR_API_KEY
```
| Parameter| Description |
|----------|----------|
|lat | Latitude of the location |
| lon | Longitude of the location |
| appid | Your OpenWeatherMap API key |
| Row 4 Data | Row 4 Data |


## 📌 Usage Instructions
- [x] Upload a JSON file with flight coordinates.
- [x] Click Start Simulation to move the drone.
- [x] View the live weather updates at the drone's location.
- [x] The drone will automatically return to the starting point.

 

📦 Project Setup
- Clone the repository
git clone https://github.com/your-repo/drone-simulation.git

cd drone-simulation
- Install dependencies
- Run the project

npm start
📤 Start-to-End Process

- Upload the CSV File
The file should contain coordinates in this format:

timestamp,lat,lng
2025-02-20T12:00:00Z,19.076,72.877
2025-02-20T12:01:00Z,18.520,73.856
2025-02-20T12:02:00Z,28.613,77.209
Each row represents a GPS point where the drone should move.

- Start the Simulation
Click Play to start the drone movement.
The drone moves step by step along the uploaded coordinates.
A line is drawn after the drone reaches each point.
If only one point exists, it will show only the location.

- Item 3 Pause & Resume
Clicking Pause stops the movement at the current location.
Clicking Play again resumes from the same position where it was stopped.

- Path Drawing
If multiple points exist, it connects the visited points to form a shape:
2 Points → Line
3 Points → Triangle
4 Points → Box
More → Continuous connected path

🛠️ Project Working
- Upload CSV File → Drone receives a list of coordinates.
- Click Play → The drone starts moving along the path.
- Path is drawn dynamically → Connecting points as visited.
- Click Pause → Stops movement but keeps progress.
- Click Play again → Resumes from the last stopped point.

🖥️ Technologies Used
🔹 React.js (Frontend UI)
🔹 Leaflet.js (Map visualization)
🔹 CSV File Parsing (File Upload)
🔹 HTML, CSS, JavaScript
