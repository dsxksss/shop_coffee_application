#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

use tauri::Manager;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
async fn close_window(window: tauri::Window) {
    if let Some(application_window) = window.get_window("ApplicationWindow") {
        application_window.close().unwrap();
    }
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![close_window])
        // .menu(tauri::Menu::os_default(&tauri::generate_context!().package_info().name))
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
