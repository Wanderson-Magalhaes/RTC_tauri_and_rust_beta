# RENDER TIME CALCULATOR - Tauri With Rust
RTC is an open-source 3D rendering time calculator created with the Tauri framework. The frontend is developed using React (TypeScript) with Vite, while the backend calculations are done in Rust. The project is licensed under the MIT License.
This was a practical project to learn how the framework works and also start my studies with Rust, so keep in mind that everything in this project can be improved considering that I'm still new to Rust and it was my first time working with React and TypeScript.

![rtc](https://github.com/Wanderson-Magalhaes/MyApp_Avalonia_Test/assets/60605512/e6a6a739-5c74-457c-adfa-387565ac94e4)

### Download:
If you want to download this compiled project, it is available on Gumroad for Windows, MacOS and Linux (.deb and AppImage):
https://blender-addons.gumroad.com/l/render_time_calculator

## Installation

### Prerequisites

Before proceeding with the installation, make sure you have the following software installed on your system:

- Node.js
- Rust
I'm using Tauri version 1.3 for this project.

### Step 1: Clone the Repository

Clone this repository to your local development environment:

```shell
git clone https://github.com/Wanderson-Magalhaes/RTC_tauri_and_rust_beta.git
```

### Step 2: Install Dependencies
1) Navigate to the RTC app folder
2) Install the Node.js dependencies
```shell
cd app 
npm install
```

### Step 3: Run the Project
To start the application in development mode, run the following command:
```shell
npm run tauri dev
```
This will launch the RTC application in your development environment.

### Building the Application
To compile the application for the operating system you are running, execute the following command:
```shell
npm run tauri build --release
```
This will create a compiled version of the RTC application.


## Additional Details
### Frontend:
Please note that due to time constraints, detailed explanations of all the project's code components are not provided. However, you can find the interface components in the "/src/components/" folder. Please note that these components may not be implemented in the optimal way, as this was my first time working with React, TypeScript, and Rust.

Within the "/src/components/Pagination" component, you will find the pages of the project. The "Home" component within the child component "pages" is responsible for calling the backend at specified intervals and contains the main fields.

In "/src/SplashScreen.tsx," you will find the initial SplashScreen call, and its HTML is located within "/src/pages/". The entry for the SplashScreen is added to the "vite.config.ts" file using the following code to embed the file within the project:

```javascript
rollupOptions: {
  input: {
    main: resolve(__dirname, 'index.html'),
    splashscreen: resolve(__dirname, 'src/pages/splashscreen.html')
  },
},
```

In "/src/Settings.ts," you will find various static project information such as the application name, logo, and initial parameters.

### Moving to the backend:

Within "/src-tauri/", you will find project configuration information for Tauri, separated by operating system in the files "tauri.linux.conf.json," "tauri.windows.conf.json," "tauri.macos.conf.json," and "tauri.conf.json" for global Tauri settings.

Inside the "/src-tauri/src/" folder, you will find the backend with all the calculation logic. Although not recommended in Rust, I am using a global variable called "GLOBAL_JSON" to store all calculations. This allows me to access it from any function, and by using Lazy<Arc<GlobalJson>> and Mutex, I can safely share this data between threads if needed.



