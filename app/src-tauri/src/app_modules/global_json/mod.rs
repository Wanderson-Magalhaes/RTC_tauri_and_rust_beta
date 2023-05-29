use std::sync::{Arc, Mutex};
use once_cell::sync::Lazy;

// JSON struct
pub struct GlobalJson {
    json: Mutex<String>
}

impl GlobalJson {
    // Get JSON value
    pub fn get_json(&self) -> String {
        let guard = self.json.lock().unwrap();
        guard.clone()
    }

    // Set JSON value
    pub fn set_json(&self, new_json: String) {
        let mut guard = self.json.lock().unwrap();
        *guard = new_json;
    }

    // Set the default JSON template/value
    pub fn default_value() -> String {
        String::from(r#"
            {
                "renders": [
                    {
                        "name": "temp",
                        "hours": 0,
                        "minutes": 0,
                        "seconds": 0,
                        "frames": 1,
                        "machines": 1
                    }
                ]
            }
        "#)
    }
}

// Variável global estática para armazenar a instância de GlobalJson
pub static GLOBAL_JSON: Lazy<Arc<GlobalJson>> = Lazy::new(|| {
    Arc::new(GlobalJson {
        json: Mutex::new(GlobalJson::default_value()),
    })
});