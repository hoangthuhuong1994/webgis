@ECHO OFF

REM Execute this file before running the GDAL, MapServer, Proj, Shapelib, and shp2tile
REM commandline utilities. After executing this file you should be able 
REM to run the utilities from any commandline location.

set PATH=\ms4w\Apache\cgi-bin;\ms4w\tools\gdal-ogr;\ms4w\tools\mapserv;\ms4w\tools\shapelib;\ms4w\proj\bin;\ms4w\tools\shp2tile;\ms4w\tools\shpdiff;\ms4w\tools\avce00;\ms4w\python\gdal;\ms4w\tools\php;\ms4w\tools\mapcache;\ms4w\tools\berkeley-db;\ms4w\tools\sqlite;%PATH%
echo GDAL, mapserv, mapcache, PROJ, and shapelib dll paths set

set GDAL_DATA=\ms4w\gdaldata
echo GDAL_DATA path set

set GDAL_DRIVER_PATH=\ms4w\gdalplugins
echo GDAL_DRIVER_PATH set

set PROJ_LIB=\ms4w\proj\nad
echo PROJ_LIB set

set CURL_CA_BUNDLE=\ms4w\Apache\conf\ca-bundle\cacert.pem
echo CURL_CA_BUNDLE set

:ALL_DONE
