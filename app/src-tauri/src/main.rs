// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::{Manager};
use settimeout::set_timeout;
use window_shadows::set_shadow;
use std::{time::Duration};

// Import App Modules
mod app_modules;
use app_modules::{
    time_calculation::{
        set_temp_time, 
        set_time, 
        delete_time, 
        get_calculate_time, 
        get_calculate_end_time
    }
};

#[tauri::command]
fn add_temp_time_json(
    pass_name: String,
    pass_hours: i64,
    pass_minutes: i64,
    pass_seconds: i64,
    pass_frames: i32,
    pass_machines: i32
) -> String {

    // Add temp time to GLOBAL_JSON
    set_temp_time(
        pass_name,
        pass_hours,
        pass_minutes,
        pass_seconds,
        pass_frames,
        pass_machines,
    )
    
}

#[tauri::command]
fn add_time_json(
    pass_name: String,
    pass_hours: i64,
    pass_minutes: i64,
    pass_seconds: i64,
    pass_frames: i32,
    pass_machines: i32
) -> String {

    // Set render time to GLOBAL_JSON
    set_time(
        pass_name,
        pass_hours,
        pass_minutes,
        pass_seconds,
        pass_frames,
        pass_machines
    )
    
}

#[tauri::command]
fn delete_time_json(pass_name: String) -> String {

    // Delete time from GLOBAL_JSON by name
    delete_time(pass_name)
    
}

#[tauri::command]
fn calculate_time() -> String {

    // Get calculate time from GLOBAL_JSON
    get_calculate_time()

}

#[tauri::command]
fn calculate_end_time() -> String {
    
    // Get calculate end time from GLOBAL_JSON
    get_calculate_end_time()

}


#[tauri::command]
async fn close_splashscreen(window: tauri::Window) {
    // Close splashscreen
    if let Some(splashscreen) = window.get_window("splashscreen") {
        set_timeout(Duration::from_millis(100)).await;
        splashscreen.close().unwrap();
    }

    // Show main window
    set_timeout(Duration::from_millis(500)).await;
    window.get_window("main").unwrap().show().unwrap();
}

#[tauri::command]
async fn set_window_shadow(window: tauri::Window) {
    #[cfg(any(windows, target_os = "windows"))]
    set_shadow(&window, true).unwrap();
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            add_temp_time_json,
            add_time_json,
            delete_time_json,
            calculate_time,
            calculate_end_time,
            close_splashscreen,
            greet,
            set_window_shadow
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}


// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn greet(name: &str) -> String {
    format!("<span>Hi <b>{}</b>!</span> <p>This information comes from the backend in <i>Rust</i>!</p>", name.to_uppercase())
}