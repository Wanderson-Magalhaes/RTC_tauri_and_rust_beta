use serde::{Serialize, Deserialize};
use serde_json::{Value, json};
use super::global_json::{GLOBAL_JSON, GlobalJson};
use chrono::{Local, Duration as TimeDuration, NaiveDateTime, TimeZone, Datelike, Timelike};


#[derive(Serialize, Deserialize, Debug)]
pub struct RenderTime {
    name: String,
    hours: i64,
    minutes: i64,
    seconds: i64,
    frames: i32,
    machines: i32
}

#[derive(Serialize, Deserialize, Debug)]
pub struct Renders {
    renders: Vec<RenderTime>
}

// Add temp time to GLOBAL_JSON
pub fn set_temp_time(
    pass_name: String,
    pass_hours: i64,
    pass_minutes: i64,
    pass_seconds: i64,
    pass_frames: i32,
    pass_machines: i32
) -> String {

    // Get initial value
    let global_json = &*GLOBAL_JSON;
    let mut json_data = global_json.get_json();

    // Check empty value 
    if json_data.is_empty() { json_data = GlobalJson::default_value() }

    if pass_name.is_empty() {        

        // Serialize String
        let mut times: Value = serde_json::from_str(&json_data).unwrap();

        // Delete temp time if exist
        let renders = times["renders"].as_array_mut().unwrap();

        // Find and remove the item with name "temp"
        renders.retain(|render| {
            if let Some(render_name) = render["name"].as_str() {
                render_name != "temp"
            } else {
                true
            }
        });

        // Add render time
        let new_render = RenderTime {
            name: "temp".to_string(),
            hours: pass_hours,
            minutes: pass_minutes,
            seconds: pass_seconds,
            frames: pass_frames,
            machines: pass_machines,
        };
        // Add the new_render object to the renders array
        renders.push(json!(new_render));

        // Deserialize to String
        global_json.set_json(serde_json::to_string_pretty(&times).unwrap());

        // Return json with new time added
        return global_json.get_json()
        
    }
    // If name is empty return empty json
    return global_json.get_json()
    
}

// Set render time to GLOBAL_JSON
pub fn set_time(
    pass_name: String,
    pass_hours: i64,
    pass_minutes: i64,
    pass_seconds: i64,
    pass_frames: i32,
    pass_machines: i32
) -> String {

    // Get initial value
    let global_json = &*GLOBAL_JSON;
    let mut json_data = global_json.get_json();

    // Check empty value 
    if json_data.is_empty() { json_data = GlobalJson::default_value() }

    if !pass_name.is_empty() {        

        // Serialize String
        let mut times: Value = serde_json::from_str(&json_data).expect("Failure to read");

        // Get items
        let renders = times["renders"].as_array_mut().unwrap();

        // Find and remove the item with name "temp"
        renders.retain(|render| {
            if let Some(render_name) = render["name"].as_str() {
                render_name != "temp"
            } else {
                true
            }
        });

        // Add render time
        let new_render = RenderTime {
            name: pass_name,
            hours: pass_hours,
            minutes: pass_minutes,
            seconds: pass_seconds,
            frames: pass_frames,
            machines: pass_machines,
        };
        // Add the new_render object to the renders array
        renders.push(json!(new_render));

        // Deserialize to String
        global_json.set_json(serde_json::to_string_pretty(&times).unwrap());

        // Return json with new time added
        return global_json.get_json()
    }
    
    // If name is empty return empty json
    return global_json.get_json()
    
}

// Delete time from GLOBAL_JSON by name
pub fn delete_time(pass_name: String) -> String {
    // Get initial value
    let global_json = &*GLOBAL_JSON;
    let mut json_data = global_json.get_json();

    // Check empty value 
    if json_data.is_empty() { json_data = GlobalJson::default_value() }

    // Serialize String
    let mut times: Value = serde_json::from_str(&json_data).expect("Failure to read");

    // Get items
    let renders = times["renders"].as_array_mut().unwrap();

    // Find and remove the item with name "temp"
    renders.retain(|render| {
        if let Some(render_name) = render["name"].as_str() {
            render_name != pass_name
        } else {
            true
        }
    });

    // Deserialize to String
    global_json.set_json(serde_json::to_string_pretty(&times).unwrap());

    // Return json with new time added
    return global_json.get_json() 
}

// Get calculate time from GLOBAL_JSON
pub fn get_calculate_time() -> String {
    // Get initial value
    let global_json = &*GLOBAL_JSON;
    let mut json_data = global_json.get_json();

    // Check empty value 
    if json_data.is_empty() { json_data = GlobalJson::default_value() }

    // Serialize String
    let times: Renders = serde_json::from_str(&json_data).expect("Failure to read");

    // Sum times
    let mut render_time = Local::now();

    for t in times.renders {

        // Add item: hours, minutes and seconds
        let mut start_time = TimeDuration::hours(t.hours as i64)
            + TimeDuration::minutes(t.minutes as i64)
            + TimeDuration::seconds(t.seconds as i64);

        // Multiply by frames and divide by machines
        start_time = start_time * t.frames / t.machines;

        // Sum item time with render time
        render_time = render_time + start_time
    }

    // Convert to timestamp to subtract the render time
    let time_stamp = render_time.timestamp() - Local::now().timestamp();

    // Format time
    let seconds = time_stamp % 60;
    let minutes = (time_stamp / 60) % 60;
    let mut hours = (time_stamp / 60) / 60;
    if hours >= 24 { hours = hours % 24 }
    let days = (time_stamp / 60) / 60 / 24;

    // Send the final render time
    return format!("{:0>2}d {:0>2}h {:0>2}m {:0>2}s ", days, hours, minutes, seconds);

}

// Get calculate end time from GLOBAL_JSON
pub fn get_calculate_end_time() -> String {
    // Get initial value
    let global_json = &*GLOBAL_JSON;
    let mut json_data = global_json.get_json();

    // Check empty value 
    if json_data.is_empty() { json_data = GlobalJson::default_value() }

    // Serialize String
    let times: Renders = serde_json::from_str(&json_data).expect("Failure to read");

    // Sum times
    let mut render_time = Local::now();
    let mut total_frames: i32 = 0;

    for t in times.renders {
        // Add item: hours, minutes and seconds
        let mut start_time = TimeDuration::hours(t.hours as i64)
            + TimeDuration::minutes(t.minutes as i64)
            + TimeDuration::seconds(t.seconds as i64);

        // Multiply by frames and divide by machines
        start_time = start_time * t.frames / t.machines;

        // Sum item time with render time
        render_time = render_time + start_time;

        // Sum frames
        if t.name == "temp" {
            if t.hours > 0 || t.minutes > 0 || t.seconds > 0 {
                total_frames += t.frames;
            }            
        } else {
            total_frames += t.frames;
        }     
    }

    // Convert to timestamp to subtract the render time fixing the time zone
    let year = render_time.year();
    let month = render_time.month();
    let day = render_time.day();
    let hour = render_time.hour();
    let minute = render_time.minute();
    let second = render_time.second();
    let time_zone = chrono::FixedOffset::east_opt(0 * 3600).unwrap(); // Exemplo: UTC+3 (para Brasília, use -3 * 3600)
    let date_time = time_zone.with_ymd_and_hms(year, month, day, hour, minute, second);
    let end_time = NaiveDateTime::from_timestamp_opt(date_time.unwrap().timestamp(), 0).unwrap();

    // Send the final render time
    if total_frames > 0 {
        return format!("If it starts now, ends day {:0>2} at {:0>2}h, {:0>2}m and {:0>2}s - Frames: {}", 
            end_time.day(), 
            end_time.hour(), 
            end_time.minute(),
            end_time.second(),
            total_frames
        );
    }
    format!("If it starts now, ends day {:0>2} at {:0>2}h, {:0>2}m and {:0>2}s", 
        end_time.day(), 
        end_time.hour(), 
        end_time.minute(),
        end_time.second()
    )

}