#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

// FIXME mac端窗口缩放、窗口阴影问题

use tauri::Manager;
use window_shadows::set_shadow;

fn main() {
    tauri::Builder::default()
        .setup(|app| {
            // 设置窗口阴影及圆角
            set_shadow(app.get_window("ApplicationWindow").unwrap(), true).unwrap();
            Ok(())
        })
        // .invoke_handler(tauri::generate_handler![])
        // .menu(tauri::Menu::os_default(&tauri::generate_context!().package_info().name))
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
