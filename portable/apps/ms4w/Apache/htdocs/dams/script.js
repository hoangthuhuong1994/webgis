// Global variables
var map;
var dams;
var geoJSONMarkers = L.layerGroup();

function initMap()
{
	console.info("Leaflet library loaded");

	// Event listener for the 'change' event on the status dropdown
    document.getElementById('status').addEventListener('change', updateDamsLayer);

	// Event listener for the 'change' event on the country dropdown
	document.getElementById('country').addEventListener('change', updateDamsLayer);

	// Center coordinates (longitude, latitude)
	var mekong_center = {lng: 103.3, lat: 12.5};
	
	// Create Map Object (Constructor)
	map = L.map
	(
		document.getElementById("map-container"),
		{
			center: mekong_center,
			zoom: 5
		}
	);

	// Function to handle form submission
	function submitForm() {
		var form = document.getElementById('damForm');
		var countrySelect = form.elements['country'];
    	var selectedCountry = countrySelect.value; // Check value of country

    	// Make sure that a country has been selected
    	if (!selectedCountry) {
        	alert('Please select a country before submitting the form.');
        	return;
    	}

		var data = new FormData(form);

		// Send an AJAX request to the server
		fetch('server.php', {
			method: 'POST',
			body: data
		})
		.then(response => response.json())
		.then(result => {
			if (result.status === 'success') {
				console.log('Data saved successfully');
			} else {
				console.error('Error:', result.message);
			}
		})
		.catch(error => console.error('Error:', error));

		// Close the popup after handling the form
		map.closePopup();
	}
	
	// Add Open Street Map background layer
	var osmLayer = L.tileLayer
	(
		"http://{s}.tile.osm.org/{z}/{x}/{y}.png",
		{
			attribution: "Thank You <a href='http://osm.org/copyright'>OpenStreetMap</a>!"	
		}
	);
	map.addLayer(osmLayer);

	// External raster layer basemap
	var stamenLayer = L.tileLayer
	(
		"https://tiles.stadiamaps.com/tiles/stamen_terrain/{z}/{x}/{y}{r}.png",
		{
			attribution: '&copy; <a href="https://stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/about" target="_blank">OpenStreetMap</a> contributors',	
		}
	);

	// Create tile layer (our own local raster layer)
	var waterBodies = L.tileLayer
	(
		"./data/{z}/{x}/{y}.png",
		{
			//attribution: "Created with QGIS",
			opacity: 1
		}
	);
	map.addLayer(waterBodies);

	// Create layer groups for each GeoJSON layer
	var vietnam = L.geoJSON(null, {style: { color: "#755e12" }});
	map.addLayer(vietnam);

	var laos = L.geoJSON(null, {style: { color: "#755e12" }});
	map.addLayer(laos);

	var thailand = L.geoJSON(null, {style: { color: "#755e12" }});
	map.addLayer(thailand);

	var cambodia = L.geoJSON(null, {style: { color: "#755e12" }});
	map.addLayer(cambodia);

	var river = L.geoJSON(null, {style: { color: "blue" }});
	map.addLayer(river);

	var dams = L.geoJSON(null, {
		pointToLayer: function (feature, latlng) {
			return L.circleMarker(latlng, { fillColor: "#1260e6", color: 'black', radius: 6 });
		},
		onEachFeature: function (feature, layer) {
			
			// Add click event to each data point
			layer.on('click', function (e) {

				// Display information about the clicked data point
				showDataPointInfo(feature);
			});
		}
	});
	map.addLayer(dams);

	// Ensure that river + dams layer are always on top
	map.on("overlayadd", function() {
		river.bringToFront();
		dams.bringToFront();
	});

	var map;
	var editingMode = false;

	function initMap() {
		var dams = L.geoJSON(null, {
			filter: function (feature) {
				return feature.properties.status === selectedStatus || selectedStatus === 'All';
			},
			pointToLayer: function (feature, latlng) {
				return L.circleMarker(latlng, { fillColor: 'blue', color: 'black', radius: 6 });
			},
			onEachFeature: function (feature, layer) {

				// Add click event to each data point
				layer.on('click', function (e) {

					// Display information about the clicked data point
					showDataPointInfo(feature);
				});
			}
		});
		map.addLayer(dams);

		// Add click event to the editing mode button
		document.getElementById('editingModeBtn').addEventListener('click', toggleEditingMode);

		// Initialize the map with the view mode click handler
		map.on('click', viewModeClickHandler);
	}

	function toggleEditingMode() {
		editingMode = !editingMode;
	
		// Remove all click event listeners
		map.off('click');
	
		if (editingMode) {
			// Switch to editing mode
			map.on('click', addModeClickHandler);

			// Hide dams layer
			map.removeLayer(dams);
		} else {
			// Switch to view mode
			map.on('click', viewModeClickHandler);
		}
	
		// Update button text to indicate editing
		updateButtonStatus();
	}

	function viewModeClickHandler(e) {
		var dams = L.geoJSON(null, {
			filter: function (feature) {
				return feature.properties.status === selectedStatus || selectedStatus === 'All';
			},
			pointToLayer: function (feature, latlng) {
				return L.circleMarker(latlng, { fillColor: 'blue', color: 'black', radius: 6 });
			},
			onEachFeature: function (feature, layer) {

				// Add click event to each data point
				layer.on('click', function (e) {

					// Display information about the clicked data point
					showDataPointInfo(feature);
				});
			}
		});
		map.addLayer(dams);
	}

	function addModeClickHandler(e) {
		var coord = e.latlng;
		var lat = coord.lat;
		var lng = coord.lng;
		
		// Create the form content
		var formContent = `
			<form id="damForm" style="width: 300px; padding: 10px; background-color: #fff; border: 1px solid #ddd; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
				<label for="country" style="display: block; margin-bottom: 8px;">Country:</label>
				<select class="form-control" name="country" id="country" style="width: 100%; margin-bottom: 12px;">
					<option value="" disabled selected hidden>Select Country</option>
					<option value="Cambodia">Cambodia</option>
					<option value="Lao PDR">Laos</option>
					<option value="Thailand">Thailand</option>
					<option value="Vietnam">Vietnam</option>
					<!-- Add other countries as needed -->
				</select>
		
				<label for="province" style="display: block; margin-bottom: 8px;">Province:</label>
				<input type="text" class="form-control" name="province" id="province" required style="width: 100%; margin-bottom: 12px;">
		
				<label for="description" style="display: block; margin-bottom: 8px;">Description:</label>
				<textarea class="form-control" name="description" id="description" placeholder="Describe your suggestion" style="width: 100%; margin-bottom: 12px;"></textarea>
		
				<label for="latitude" style="display: block; margin-bottom: 8px;">Latitude:</label>
				<input type="text" class="form-control" name="latitude" id="latitude" value="${lat}" readonly style="width: 100%; margin-bottom: 12px;">
		
				<label for="longitude" style="display: block; margin-bottom: 8px;">Longitude:</label>
				<input type="text" class="form-control" name="longitude" id="longitude" value="${lng}" readonly style="width: 100%; margin-bottom: 12px;">
		
				<button type="button" class="btn btn-success" id="submitBtn" style="width: 100%;">Submit</button>
			</form>
		`;

		// Create a Leaflet Popup
		var popup = L.popup().setLatLng(coord).setContent(formContent).openOn(map);
		
		// Attach click event handler to the submit button
		document.getElementById('submitBtn').addEventListener('click', submitForm);
	}

	function updateButtonStatus() {
		var buttonText = editingMode ? 'Add Location <strong>ON</strong>' : 'Add Location <strong>OFF</strong>';
		var buttonColor = editingMode ? 'btn-danger' : 'btn-primary';
	
		// Update button text
		var editingModeBtn = document.getElementById('editingModeBtn');
		editingModeBtn.innerHTML = buttonText;
		editingModeBtn.className = 'btn ' + buttonColor;
	}	

	// Call the initMap function to initialize the map
	initMap();

	// Create a new layer group for the GeoJSON markers
    var geoJSONMarkers = L.layerGroup();

    // Fetch data from server.php and add markers to the map
    fetch('server.php')
        .then(response => response.json())
        .then(data => {
            console.log('Data from server:', data);

            // Loop through the GeoJSON features and add markers to the map
            data.features.forEach(feature => {
                const coordinates = feature.geometry.coordinates.reverse(); // Reverse the coordinates [lng, lat]
                console.log('Adding marker at coordinates:', coordinates);

                // Extract feature properties
                const { country, province, description, status, project } = feature.properties;
                const latitude = feature.geometry.coordinates[0];
                const longitude = feature.geometry.coordinates[1];

                // Create HTML content for the popup
                const popupContent = `
                    <div>
                        <p><strong>Country:</strong> ${country}</p>
                        <p><strong>Province:</strong> ${province}</p>
                        <p><strong>Latitude:</strong> ${latitude}</p>
                        <p><strong>Longitude:</strong> ${longitude}</p>
                        <p><strong>Description:</strong> ${description}</p>
                    </div>
                `;

                // Create a marker and add it to the GeoJSONMarkers layer
                L.marker(coordinates)
                    .bindPopup(popupContent)
                    .addTo(geoJSONMarkers);
            });
        })
        .catch(error => console.error('Error fetching data:', error));

	function showDataPointInfo(feature) {
		
		// Get information from the feature properties
		var project = feature.properties['project'];
		var country = feature.properties['country'];
		var latitude = feature.properties['latitude'];
		var longitude = feature.properties['longitude'];
		var completionDate = feature.properties['complet_da'];
		var purpose = feature.properties['purpose'];
		var status = feature.properties['status'];
	
		// Create HTML content for the popup
		var popupContent = `
			<div>
				<h3>${project}</h3>
				<p><strong>Country:</strong> ${country}</p>
				<p><strong>Latitude:</strong> ${latitude}</p>
				<p><strong>Longitude:</strong> ${longitude}</p>
				<p><strong>Completion Date:</strong> ${completionDate}</p>
				<p><strong>Purpose:</strong> ${purpose}</p>
				<p><strong>Status:</strong> ${status}</p>
			</div>
		`;
	
		// Create a Leaflet Popup
		var popup = L.popup().setContent(popupContent);
	
		// Get the latitude and longitude from the feature
		var latlng = L.latLng(latitude, longitude);
	
		// Create and open the popup at the specified location
		L.popup()
			.setLatLng(latlng)
			.setContent(popupContent)
			.openOn(map);
	}

	// // Function to reset the dropdown and clear the dams layer
	// function resetMap() {
	// 	document.getElementById('status').value = 'All';
	// 	map.removeLayer(dams);
	// }

	// Function to update the dams layer based on the selected status
	function updateDamsLayer() {
		var selectedStatus = document.getElementById('status').value;
		var selectedCountry = document.getElementById('country').value;

		// Clear the current dams layer
		if (map.hasLayer(dams)) {
			map.removeLayer(dams);
		}

		// Create a new dams layer with the updated filter
		dams = L.geoJSON(null, {
			filter: function (feature) {
				var statusFilter = selectedStatus === 'All' || feature.properties.status === selectedStatus;
				var countryFilter = selectedCountry === 'All' || feature.properties.country === selectedCountry;
				return statusFilter && countryFilter;
			},
			pointToLayer: function (feature, latlng) {
				return L.circleMarker(latlng, { fillColor: 'blue', color: 'black', radius: 6 });
			},
			onEachFeature: function (feature, layer) {

				layer.on('click', function (e) {

					// Display information about the clicked data point
					showDataPointInfo(feature);
				});
			}
		});

		// Load GeoJSON data with the new filter
		loadGeoJSON("data/dams.geojson", dams);
	}
	
	// Layer switcher
	var layerControl = L.control.layers(
		// Basemaps
		{
			"OpenStreetMap": osmLayer,
			"Stamen Terrain": stamenLayer,
		},

		// Overlays
		{
			"Vietnam": vietnam,
			"Laos": laos,
			"Thailand": thailand,
			"Cambodia": cambodia,
			"River": river,
			"Dams": dams,
			"User Input": geoJSONMarkers,
			"Water Bodies": waterBodies
		},
	);

	layerControl.addTo(map);

	// Event listener for the "overlayadd" and "overlayremove" events
	map.on('overlayadd overlayremove', function (event) {

		// Check if the dams layer is currently visible
		var damsVisible = map.hasLayer(dams);

		// Update the dams layer visibility based on the event type
		if (event.type === 'overlayadd' && event.name === 'Dams') {
			// The dams layer was added, make it visible
			damsVisible = true;
		} else if (event.type === 'overlayremove' && event.name === 'Dams') {
			// The dams layer was removed, hide it
			damsVisible = false;
		}

		// Update the visibility of the dams layer
		if (damsVisible) {
			map.addLayer(dams);
		} else {
			map.removeLayer(dams);
		}
	});

	// Load GeoJSON files and add them to the layer groups
    loadGeoJSON("data/vietnam.geojson", vietnam);
    loadGeoJSON("data/laos.geojson", laos);
    loadGeoJSON("data/thailand.geojson", thailand);
    loadGeoJSON("data/cambodia.geojson", cambodia);
    loadGeoJSON("data/river.geojson", river);
    loadGeoJSON("data/dams.geojson", dams);

	// Function to load GeoJSON file and add it to the specified layer
	function loadGeoJSON(url, layer) {
		fetch(url)
			.then(response => response.json())
			.then(data => {
				console.log('Data loaded for dams:', data);
				// Clear existing layers and add the updated dams layer to the map
				layer.clearLayers();
				layer.addData(data);
				if (map.hasLayer(layer)) {
					map.removeLayer(layer);
				}
				map.addLayer(layer);
			})
			.catch(error => {
				console.error("Error loading GeoJSON:", error);
			});
	}

	fetch('server.php?action=get-data')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => console.error('Error:', error));
};

function onGeoJSONresponse(json)
{
	console.info("GeoJSON:", json);
	
	// Convert GeoJSON to layer
	var boundaryLayer = L.geoJSON(json, {});
	
	map.addLayer(boundaryLayer);
};

// Main entry point (no Callback function needed)
initMap();