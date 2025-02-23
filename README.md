🚁 Drone Simulation
This project simulates a drone's movement through a set of GPS coordinates uploaded from a CSV file. The drone moves step by step, tracing its path dynamically, and allows control with Play/Pause buttons.

🌟 Features
- [x] Upload CSV File: Load coordinates for the drone's movement.
- [x] Drone Position Marker 📍: Displays the current location of the drone.
- [x] Dynamic Path Drawing:
Multiple coordinates: Connects visited points to form a shape (Line, Triangle, Box, etc.).
Single coordinate: Displays only the location.

- [x] Play/Pause Controls:
Play: Starts the drone movement and begins drawing the path.
Pause: Stops the movement and resumes from the same point.
If not paused: The drone will stop at the starting point.
- [x] Ensures First Connection: The starting point connects to the first visited coordinate.
- [x] Prevents Map Repetition: The map is fixed and prevents infinite scrolling.

📂 Project Structure
/src
  ├── components/
  │   ├── MapComponent.jsx   # Displays the map and handles drone movement  
  │   ├── FileUpload.jsx     # Handles CSV file upload and parsing  
  │   ├── Controls.jsx       # Play/Pause button component  
  ├── App.jsx                # Main component managing the state and logic  
  ├── index.jsx              # Entry point of the application  
  ├── styles.css             # Styling for UI and map  
  ├── README.md              # Project documentation  

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

- Item 2 Start the Simulation
Click Play to start the drone movement.
The drone moves step by step along the uploaded coordinates.
A line is drawn after the drone reaches each point.
If only one point exists, it will show only the location.

- Item 3 Pause & Resume
Clicking Pause stops the movement at the current location.
Clicking Play again resumes from the same position where it was stopped.

- Item 4 Path Drawing
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
