#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

// FIXME mac端窗口缩放、窗口阴影问题

use tauri::Manager;
use window_shadows::set_shadow;

#[tauri::command]
async fn close_window(window: tauri::Window) {
    if let Some(application_window) = window.get_window("ApplicationWindow") {
        application_window.close().unwrap();
    }
}

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            let main_window = app.get_window("ApplicationWindow").unwrap();
            // 设置窗口阴影及圆角
            #[cfg(any(windows, target_os = "windows"))]
            set_shadow(main_window, true).unwrap();
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![close_window])
        // .menu(tauri::Menu::os_default(&tauri::generate_context!().package_info().name))
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
