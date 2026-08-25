<?php

$host = "localhost";
$port = 5093;
$user = "postgres";
$password = "password";
$dbname = "webgis";

$db = pg_connect("host=$host port=$port user=$user password=$password dbname=$dbname");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Handle POST requests (inserting data)
    $country = $_POST['country'];
    $province = $_POST['province'];
    $description = $_POST['description'];
    $latitude = $_POST['latitude'];
    $longitude = $_POST['longitude'];

    $query = "INSERT INTO damproject (country, province, description, latitude, longitude) 
              VALUES ('$country', '$province', '$description', $latitude, $longitude)";

    $result = pg_query($db, $query);

    if ($result) {
        echo json_encode(['status' => 'success', 'message' => 'Data saved successfully']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Error saving data: ' . pg_last_error()]);
    }

    exit();
} else if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Handle GET requests (fetching data)
    // Fetch data from damproject table
    $query = "SELECT id, country, province, description, latitude, longitude FROM damproject";
    $result = pg_query($db, $query);

    if (!$result) {
        echo json_encode(['status' => 'error', 'message' => 'Error fetching data: ' . pg_last_error()]);
        exit();
    }

    // Convert result to GeoJSON format
    $geojson = [
        'type' => 'FeatureCollection',
        'features' => [],
    ];

    while ($row = pg_fetch_assoc($result)) {
        $feature = [
            'type' => 'Feature',
            'properties' => [
                'id' => $row['id'],
                'country' => $row['country'],
                'province' => $row['province'],
                'description' => $row['description'],
            ],
            'geometry' => [
                'type' => 'Point',
                'coordinates' => [(float)$row['longitude'], (float)$row['latitude']],
            ],
        ];

        $geojson['features'][] = $feature;
    }

    header('Content-Type: application/json');
    echo json_encode($geojson);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Invalid request method']);
}

pg_close($db);

?>
