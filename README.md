# webgis
# 🌊 Mekong River Dams — Web-GIS Application

An interactive web mapping application visualizing dams along the Mekong River across four Southeast Asian countries: **Cambodia, Laos, Thailand, and Vietnam**.

Developed as part of the course *Raster Data Processing and Image Enhancement Techniques* at **Trier University, Faculty VI – Spatial and Environmental Sciences**.

---

## 📌 Features

- 🗺️ Interactive map with zoom and layer control
- 📍 Display of dam locations using GeoJSON vector data
- 🌊 Water bodies raster layer (250m spatial resolution)
- 🔍 Filter dams by **Status** and **Country** via dropdown menus
- 💬 Popup information on click (Country, Province, Latitude, Longitude, Description)
- ➕ User input form to add new dam locations directly on the map
- 🗄️ PostgreSQL + PostGIS database to store user-submitted data

---

## 🛠️ Technologies Used

### Frontend
| Technology | Purpose |
|---|---|
| HTML | Page structure |
| CSS | Styling and layout |
| JavaScript | Dynamic map interaction |
| Leaflet.js | Web mapping library |
| GeoJSON | Vector data format |

### Backend
| Technology | Purpose |
|---|---|
| PHP | Server-side scripting |
| Apache Web Server | Local development server |
| PostgreSQL + PostGIS | Spatial database |
| pgAdmin | Database visual interface |

### GIS Tools
| Tool | Purpose |
|---|---|
| QGIS | Raster tiling for water bodies layer |
| OpenStreetMap | Default basemap |
| Stamen Terrain | Alternative basemap |

---

## 🗄️ Database Structure

Database name: `webgis`  
Table name: `damproject`

| Column | Datatype | Description |
|---|---|---|
| id | serial (PK) | Unique identifier |
| country | character | Selected by user |
| province | character | Selected by user |
| latitude | numeric(10,6) | Auto-retrieved from map click |
| longitude | numeric(10,6) | Auto-retrieved from map click |
| description | text | User input |
| date | timestamp | Auto-recorded on submission |

---

## 📂 Data Sources

| Data | Format | Source |
|---|---|---|
| Country boundaries (Vietnam, Laos, Cambodia, Thailand) | GeoJSON | [GADM](https://gadm.org/download_country.html) |
| Mekong River Dams | GeoJSON | [Open Development Cambodia](https://data.opendevelopmentcambodia.net/dataset/greater-mekong-subregion-hydropower-dams-2016) |
| Mekong River | GeoJSON | [Natural Earth](https://www.naturalearthdata.com/downloads/10m-physical-vectors/10m-rivers-lake-centerlines/) |
| Global Surface Water Mask | TIF | [Open Development Mekong](https://data.opendevelopmentmekong.net/dataset/global-surface-water-mask) |
| Stamen Terrain Basemap | PNG | [Stadia Maps](https://docs.stadiamaps.com/map-styles/stamen-terrain/) |

---

## 🚀 How to Run

1. **Clone the repository**
```bash
git clone https://github.com/your-username/mekong-river-dams.git
```

2. **Set up Apache Web Server**  
   Place the project folder in your Apache `htdocs` directory.

3. **Set up the database**  
   - Install PostgreSQL and enable the PostGIS extension
   - Open pgAdmin and create a database named `webgis`
   - Create the table `damproject` with the columns described above

4. **Configure the PHP backend**  
   Update the database connection settings in the PHP script to match your local PostgreSQL credentials.

5. **Run the application**  
   Open your browser and navigate to `http://localhost/mekong-river-dams`

---

## 📸 Screenshots

### Map Overview
![Map Overview](screenshots/map_overview.png)

### User Input Popup
![User Input](screenshots/user_input_popup.png)

---

## 👩‍💻 Authors

- **Thi Thu Huong Hoang** — Trier University 

**Supervisor:** Sebastian Pauli  
**Submitted:** 19.12.2023

---

## 📄 License

This project was created for academic purposes at Trier University.
