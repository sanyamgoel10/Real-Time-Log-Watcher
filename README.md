# Real-Time Log Watcher

## Overview

This project is a real-time log-watching solution, similar to `tail -f`, designed to stream updates from a remote log file to a web-based client.

## Features

- **Real-Time Streaming:** The server pushes log updates to connected clients without requiring page refresh.
- **Efficient Log Retrieval:** Fetches only the last 10 lines on initial load and streams new updates as they appear.
- **Handles Large Files:** Optimized to work with large log files without reloading or retransmitting the entire file.
- **Multi-Client Support:** Supports multiple clients simultaneously.
- **Minimal External Dependencies:** Implements file reading and streaming logic without using off-the-shelf libraries for tail-like functionalities.

## How It Works

1. A backend service monitors the log file in append-only mode.
2. A web client connects to the server via WebSockets to receive log updates in real time.
3. Clients see the last 10 lines upon loading the page and continue receiving updates dynamically.

## Installation

### Prerequisites

- Node.js
- A log file to monitor

### Steps

1. Clone this repository:
   ```bash
   git clone https://github.com/sanyamgoel10/Real-Time-Log-Watcher
   cd real-time-log-watcher
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Server:
   ```bash
   nodemon app
   ```
4. Open the web client in a browser:
   ```bash
   http://localhost:3000/logs
   ```

## Usage
- The web page will display the last 10 lines of the log file when loaded.
- New log entries will be streamed to the page in real-time.
- Multiple clients can connect and receive updates simultaneously.
- A sample log file is provided at `/logfile/sample.log`, which is read by the server for updates.

## Tech Stack
- Backend: Node.js with WebSockets
- Frontend: HTML, JavaScript
- Protocol: WebSockets for real-time streaming

## License
This project is licensed under the MIT License.

## Contribution
Feel free to open issues or submit pull requests to improve this project!
