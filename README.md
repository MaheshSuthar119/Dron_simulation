Drone Simulation 🚁
This project simulates a drone moving through coordinates loaded from a CSV file. The simulation displays the drone's real-time location on a map and dynamically connects visited points to form a path.

🚀 Features
✅ Upload a CSV file containing latitude and longitude coordinates.
✅ Displays the drone's real-time position on the map.
✅ Connects visited coordinates dynamically with a red path.
✅ Play/Pause functionality:

Play: Moves the drone along the coordinates while drawing a path.
Pause: Stops the drone, and when resumed, it continues from the last position.
✅ Ensures that the starting point is connected to the first visited point.
✅ Uses 📍 location marker for the drone.
📂 Project Structure
bash
Copy
Edit
/src
  ├── components/
  │   ├── MapComponent.jsx   # Displays the map and drone movement  
  │   ├── FileUpload.jsx     # Handles CSV file upload  
  │   ├── Controls.jsx       # Play/Pause button  
  ├── App.jsx                # Main component controlling state and logic  
  ├── index.jsx              # Entry point  
  ├── styles.css             # Styling for UI  
  ├── README.md              # Project documentation  
📦 Installation & Setup
1️⃣ Clone the repository

sh
Copy
Edit
(https://github.com/MaheshSuthar119/Dron_simulation.git)
cd drone-simulation
2️⃣ Install dependencies

sh
Copy
Edit
npm install
3️⃣ Run the project

sh
Copy
Edit
npm start
📤 Uploading a CSV File
The CSV file should contain latitude and longitude coordinates in this format:

c
Copy
Edit
timestamp,lat,lng
2025-02-20T12:00:00Z,19.076,72.877
2025-02-20T12:01:00Z,18.520,73.856
2025-02-20T12:02:00Z,28.613,77.209
🖥️ Technologies Used
🔹 React.js (Frontend UI)
🔹 Leaflet.js (Map visualization)
🔹 CSV File Handling
🔹 HTML, CSS, JavaScript

🛠️ Future Improvements
🚀 Add support for different drone speeds
🚀 Store previous simulations for replay
🚀 Add 3D drone visualization