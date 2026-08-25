****************************
MapServer for Windows (MS4W)
****************************

:Author: Jeff McKenna, `Gateway Geomatics`_
:Last Updated: $Date: 2014-10-19 $

.. _`Gateway Geomatics`: http://www.gatewaygeomatics.com/
.. _`Mailing List`: http://lists.maptools.org/mailman/listinfo/ms4w-users

.. contents:: Table of Contents
    :depth: 3
    :backlinks: top
    
Introduction
============

Welcome to MS4W, the quick and easy installer for setting 
up MapServer For Windows and its accompanying applications 
(e.g., Chameleon, MapLab,etc.). The purpose of this package 
is to allow novice to advanced MapServer users to quickly 
install a MapServer development environment on their 
Windows systems. The reasons for needing to do this are 
diverse but, in general, this package supports: developers 
who want to get to a stable state quickly, trainers who 
need an easily-installed configuration identical across 
multiple installs, and novices who need help just getting 
all the needed bits and pieces together.

Design
======

The MS4W package is designed to perform a full installation 
of Apache, PHP, MapServer CGI, MapScript (CSharp, Java, 
PHP, Python), and to provide the capability to install 
additional applications easily and quickly. The simplest 
way to do this on Windows is to provide a predetermined 
directory structure and force everything into that mold.

The directory structure, while fixed within itself, is 
designed to be somewhat portable. While the ms4w_xxx.zip
file needs to be installed at the root of a hard drive, 
it doesn't have to be the C:/ drive. Moving the package 
to the root of a different drive is simple - just copy 
it there. To move it to a subdirectory is more difficult 
- you'll need to search for /ms4w in all the files and 
replace it with your new path.

The design also accommodates simple upgrades to the core 
package and to applications, without affecting the local 
configuration or the configuration of other installed 
applications.

Contents
========

The following are included in the base package:

- Apache version 2.4.10

- PHP version 5.4.34

- MapServer 6.4.1 CGI and MapScript (PHP)
  
- GDAL 1.11.1

- mapserver utilities

- gdal/ogr utilities

- proj.4 utilities

- shp2tile utility

- shapelib utilities

- shpdiff utility

- avce00 utilities
        
- OWTChart 1.2.0
    
MapServer Version Information
-----------------------------

::

  MapServer version 6.4.1 OUTPUT=GIF OUTPUT=PNG OUTPUT=JPEG 
  OUTPUT=KML SUPPORTS=PROJ SUPPORTS=GD SUPPORTS=AGG 
  SUPPORTS=FREETYPE SUPPORTS=CAIRO SUPPORTS=ICONV 
  SUPPORTS=FRIBIDI SUPPORTS=WMS_SERVER SUPPORTS=WMS_CLIENT 
  SUPPORTS=WFS_SERVER SUPPORTS=WFS_CLIENT 
  SUPPORTS=WCS_SERVER SUPPORTS=SOS_SERVER SUPPORTS=FASTCGI 
  SUPPORTS=THREADS SUPPORTS=GEOS INPUT=JPEG INPUT=POSTGIS 
  INPUT=OGR INPUT=GDAL INPUT=SHAPEFILE

 
MapServer Build Environment
---------------------------

Compiled, packaged, documented, and tested by `Gateway Geomatics`_.  
Please help support this great product that is downloaded 
over 5,000 times a month by organizations of all sizes - 
please contact us directly at `info@gatewaygeomatics.com`_ for 
custom builds or requests.  Thank you in advance for your 
generous support!
  
.. _`info@gatewaygeomatics.com`: mailto:info@gatewaygeomatics.com

Library versions used to build this version of MapServer:

::

    agg-2.4
    apache-ant-1.7.0
    cairo-1.12.16   
    curl-7.37.0
    expat-2.1.0
    fcgi-2.4.0
    filegdb-1.3
    fits-3.14
    freetype-2.5.3
    fribidi-0.19.1
    gd-2.0.35
    gdal-1.11.1
    geos-3.4.2
    gettext-0.13
    giflib-4.1.6    
    hdf5-1.8.10-patch1
    jbigkit-1.6
    jpeg-9a
    libgeotiff-1.4.0
    libiconv-1.11.1
    libintl-0.11.5
    libKML-git-07112014   
    libpng-1.6.1
    libtiff-4.0.3
    libxml2-2.9.1
    mapserver-6.4.1
    ming-0.2a
    mrsid-9.1
    mysql-5.1.34-win32
    netcdf-3.6.1
    openssl-1.0.1h
    oracle-12.1.0.1.0
    pcre-svn-05252012    
    php-5.4.34
    poppler-0.26.2  
    postgresql-9.3.4
    proj-4.8.0
    sqlite-3.3.8
    swig-1.3.39
    szip-2.1
    xerces-c-3.1.1
    zlib-1.2.8
    
MapScript
---------

- C# MapScript: compiled against .NET v3.5

- PHP MapScript: built for PHP 5

OGR Formats Supported
---------------------

See the `OGR formats page`_ for full driver descriptions.

.. _OGR formats page: http://www.gdal.org/ogr/ogr_formats.html

::

  "ESRI Shapefile" (read/write)
  "MapInfo File" (read/write)
  "UK .NTF" (readonly)
  "SDTS" (readonly)
  "TIGER" (read/write)
  "S57" (read/write)
  "DGN" (read/write)
  "VRT" (readonly)
  "REC" (readonly)
  "Memory" (read/write)
  "BNA" (read/write)
  "CSV" (read/write)
  "NAS" (readonly)
  "GML" (read/write)
  "GPX" (read/write)
  "LIBKML" (read/write)
  "KML" (read/write)
  "GeoJSON" (read/write)
  "GMT" (read/write)
  "SQLite" (read/write)
  "ODBC" (read/write)
  "PGeo" (readonly)
  "MSSQLSpatial" (read/write)
  "PostgreSQL" (read/write)
  "MySQL" (read/write)
  "PCIDSK" (read/write)
  "FileGDB" (read/write)
  "XPlane" (readonly)
  "AVCBin" (readonly)
  "AVCE00" (readonly)
  "DXF" (read/write)
  "Geoconcept" (read/write)
  "GeoRSS" (read/write)
  "GPSTrackMaker" (read/write)
  "VFK" (readonly)
  "PGDump" (read/write)
  "OSM" (readonly)
  "GPSBabel" (read/write)
  "SUA" (readonly)
  "OpenAir" (readonly)
  "PDS" (readonly)
  "WFS" (readonly)
  "HTF" (readonly)
  "AeronavFAA" (readonly)
  "Geomedia" (readonly)
  "EDIGEO" (readonly)
  "GFT" (read/write)
  "SVG" (readonly)
  "CouchDB" (read/write)
  "Idrisi" (readonly)
  "ARCGEN" (readonly)
  "SEGUKOOA" (readonly)
  "SEGY" (readonly)
  "ODS" (read/write)
  "XLSX" (read/write)
  "ElasticSearch" (read/write)
  "PDF" (read/write)
   
   Oracle - see `GDAL/OGR Plugins` section of this document to enable
   SDE - see `GDAL/OGR Plugins` section of this document to enable  
   
GDAL Formats Supported
----------------------

See the `GDAL formats page`_ for full driver descriptions.

.. _GDAL formats page: http://www.gdal.org/formats_list.html

::

  VRT (rw+v): Virtual Raster
  GTiff (rw+vs): GeoTIFF
  NITF (rw+vs): National Imagery Transmission Format
  RPFTOC (rovs): Raster Product Format TOC format
  ECRGTOC (rovs): ECRG TOC format
  HFA (rw+v): Erdas Imagine Images (.img)
  SAR_CEOS (rov): CEOS SAR Image
  CEOS (rov): CEOS Image
  JAXAPALSAR (rov): JAXA PALSAR Product Reader (Level 1.1/1.5)
  GFF (rov): Ground-based SAR Applications Testbed File Format (.gff)
  ELAS (rw+v): ELAS
  AIG (rov): Arc/Info Binary Grid
  AAIGrid (rwv): Arc/Info ASCII Grid
  GRASSASCIIGrid (rov): GRASS ASCII Grid
  SDTS (rov): SDTS Raster
  DTED (rwv): DTED Elevation Raster
  PNG (rwv): Portable Network Graphics
  JPEG (rwv): JPEG JFIF
  MEM (rw+): In Memory Raster
  JDEM (rov): Japanese DEM (.mem)
  GIF (rwv): Graphics Interchange Format (.gif)
  BIGGIF (rov): Graphics Interchange Format (.gif)
  ESAT (rov): Envisat Image Format
  FITS (rw+): Flexible Image Transport System
  BSB (rov): Maptech BSB Nautical Charts
  XPM (rwv): X11 PixMap Format
  BMP (rw+v): MS Windows Device Independent Bitmap
  DIMAP (rov): SPOT DIMAP
  AirSAR (ro): AirSAR Polarimetric Image
  RS2 (ros): RadarSat 2 XML Product
  PCIDSK (rw+v): PCIDSK Database File
  PCRaster (rw): PCRaster Raster File
  ILWIS (rw+v): ILWIS Raster Map
  SGI (rw+): SGI Image File Format 1.0
  SRTMHGT (rwv): SRTMHGT File Format
  Leveller (rw+): Leveller heightfield
  Terragen (rw+): Terragen heightfield
  GMT (rw): GMT NetCDF Grid Format
  netCDF (rw+s): Network Common Data Format
  ISIS3 (rov): USGS Astrogeology ISIS cube (Version 3)
  ISIS2 (rw+v): USGS Astrogeology ISIS cube (Version 2)
  PDS (rov): NASA Planetary Data System
  TIL (rov): EarthWatch .TIL
  ERS (rw+v): ERMapper .ers Labelled
  L1B (rov): NOAA Polar Orbiter Level 1b Data Set
  FIT (rwv): FIT Image
  GRIB (rov): GRIdded Binary (.grb)
  MrSID (rov): Multi-resolution Seamless Image Database (MrSID)
  JP2MrSID (rov): MrSID JPEG2000
  MG4Lidar (ro): MrSID Generation 4 / Lidar (.sid)
  RMF (rw+v): Raster Matrix Format
  WCS (rovs): OGC Web Coverage Service
  WMS (rwvs): OGC Web Map Service
  MSGN (ro): EUMETSAT Archive native (.nat)
  RST (rw+v): Idrisi Raster A.1
  INGR (rw+v): Intergraph Raster
  GSAG (rwv): Golden Software ASCII Grid (.grd)
  GSBG (rw+v): Golden Software Binary Grid (.grd)
  GS7BG (rw+v): Golden Software 7 Binary Grid (.grd)
  COSAR (ro): COSAR Annotated Binary Matrix (TerraSAR-X)
  TSX (rov): TerraSAR-X Product
  COASP (ro): DRDC COASP SAR Processor Raster
  R (rwv): R Object Data Store
  MAP (rov): OziExplorer .MAP
  PNM (rw+v): Portable Pixmap Format (netpbm)
  DOQ1 (rov): USGS DOQ (Old Style)
  DOQ2 (rov): USGS DOQ (New Style)
  ENVI (rw+v): ENVI .hdr Labelled
  EHdr (rw+v): ESRI .hdr Labelled
  GenBin (rov): Generic Binary (.hdr Labelled)
  PAux (rw+): PCI .aux Labelled
  MFF (rw+): Vexcel MFF Raster
  MFF2 (rw+): Vexcel MFF2 (HKV) Raster
  FujiBAS (ro): Fuji BAS Scanner Image
  GSC (rov): GSC Geogrid
  FAST (rov): EOSAT FAST Format
  BT (rw+v): VTP .bt (Binary Terrain) 1.3 Format
  LAN (rw+v): Erdas .LAN/.GIS
  CPG (ro): Convair PolGASP
  IDA (rw+): Image Data and Analysis
  NDF (rov): NLAPS Data Format
  EIR (rov): Erdas Imagine Raw
  DIPEx (rov): DIPEx
  LCP (rov): FARSITE v.4 Landscape File (.lcp)
  GTX (rw+v): NOAA Vertical Datum .GTX
  LOSLAS (rov): NADCON .los/.las Datum Grid Shift
  NTv2 (rw+vs): NTv2 Datum Grid Shift
  CTable2 (rw+v): CTable2 Datum Grid Shift
  ACE2 (rov): ACE2
  SNODAS (rov): Snow Data Assimilation System
  ARG (rwv): Azavea Raster Grid format
  RIK (ro): Swedish Grid RIK (.rik)
  USGSDEM (rwv): USGS Optional ASCII DEM (and CDED)
  GXF (ro): GeoSoft Grid Exchange Format
  HTTP (ro): HTTP Fetching Wrapper
  BAG (ro): Bathymetry Attributed Grid
  HDF5 (ros): Hierarchical Data Format Release 5
  HDF5Image (ro): HDF5 Dataset
  NWT_GRD (rov): Northwood Numeric Grid Format .grd/.tab
  NWT_GRC (rov): Northwood Classified Grid Format .grc/.tab
  ADRG (rw+vs): ARC Digitized Raster Graphics
  SRP (rov): Standard Raster Product (ASRP/USRP)
  BLX (rw): Magellan topo (.blx)
  Rasterlite (rws): Rasterlite
  PostGISRaster (rws): PostGIS Raster driver
  SAGA (rw+v): SAGA GIS Binary Grid (.sdat)
  KMLSUPEROVERLAY (rwv): Kml Super Overlay
  XYZ (rwv): ASCII Gridded XYZ
  HF2 (rwv): HF2/HFZ heightfield raster
  PDF (rwvs): Geospatial PDF
  OZI (rov): OziExplorer Image File
  CTG (rov): USGS LULC Composite Theme Grid
  E00GRID (rov): Arc/Info Export E00 GRID
  ZMap (rwv): ZMap Plus Grid
  NGSGEOID (rov): NOAA NGS Geoid Height Grids
  MBTiles (rov): MBTiles
  IRIS (rov): IRIS data (.PPI, .CAPPi etc)
  
  SDE raster - see `GDAL/OGR Plugins` section of this 
               document to enable 
  
Directory Structure
-------------------

- ms4w/ 
   - the main directory, assumed to be at the root of a 
     drive, normally C:

- ms4w/Apache 
   - the Apache installation

- ms4w/Apache/bin 
   - the Apache binaries

- ms4w/Apache/cgi-bin 
   - the location of mapserv.exe and its supporting 
     libraries, and php.ini, php.exe.
                            
- ms4w/Apache/cgi-bin/ignored-libmap
   - location of the libmap dll for Oracle
     (see the "Plugins" section of this document)

- ms4w/Apache/cgi-bin/mapscript 
   - location of CSharp,Java, and Python mapscript files

- ms4w/Apache/conf 
   - the Apache configuration files. These should not be 
     modified.  Place all application-specific and local 
     httpd.conf files in /ms4w/httpd.d (see the README.txt 
     in that directory)

- ms4w/Apache/error 
   - error files for Apache to use

- ms4w/Apache/htdocs 
   - the Apache Web root directory, you shouldn't install 
     much in here except perhaps for testing.

- ms4w/Apache/icons 
   - icons used by Apache

- ms4w/Apache/include 
   - include directory for compiling against Apache

- ms4w/Apache/lib 
   - lib files for building against Apache

- ms4w/Apache/logs 
   - log files for Apache are stored here, this should be 
     archived or cleaned every so often.

- ms4w/Apache/manual 
   - the Apache manual pages.

- ms4w/Apache/modules 
   - modules for Apache

- ms4w/Apache/php 
   - the PHP installation
   
- ms4w/Apache/php/ext
   - location of phpmapscript dll   

- ms4w/Apache/proxy 
   - apache proxy configurations, not used by MS4W
   
- ms4w/Apache/specialplugins
   - location of the plugin dlls for MapServer
     (see the "Plugins" section of this document)

- ms4w/apps 
   - put all applications in subdirectories here.

- ms4w/gdaldata 
   - supporting files for GDAL data formats
    
- ms4w/gdalplugins 
   - place dlls here that are required for gdal plugins 
     e.g. 'oci_OCI.dll'
    
- ms4w/httpd.d 
   - put all application-specific and local httpd.conf files 
     here (see the README.txt in that directory)

- ms4w/proj 
   - an installation of PROJ.4
   - the epsg file used is /ms4w/proj/nad/epsg

- ms4w/python
   - associated python files, including gdal bindings
     and a simple test script

- ms4w/tmp 
   - temporary files go here. This should be cleaned 
     regularly

- ms4w/tmp/ms_tmp 
   - temporary files that need to be Web-accessible go 
     here (i.e. image files created by mapserver). This is 
     available as /ms_tmp/ via URL. Normally this means 
     that your MAP files would have an IMAGEPATH of 
     /ms4w/tmp/ms_tmp/ and a IMAGEURL of /ms_tmp/
    
- ms4w/tools 
   - contains useful tools such as the gdal/ogr utilities 
     and mapserv utilities (note that before running these 
     you must execute the /ms4w/setenv.bat script in 
     your command window)

How to Install MS4W
===================

A. Upgrading from an older version of MS4W
------------------------------------------

If you already have MS4W installed please do the following:
  
- open a DOS command window and execute the file 
  '/ms4w/apache-uninstall.bat' at the commandline.  This 
  file will stop and uninstall your Apache service.  You 
  should see the following message flash in the command 
  window:  

:: 

  The "Apache MS4W Web Server" service is stopping.
  The "Apache MS4W Web Server" service has stopped.
  
  Removing the "Apache MS4W Web Server" service
  The "Apache MS4W Web Server" service has been removed 
  successfully.

- your old apache service has now been removed 

- make sure no files or other services point the your ms4w 
  folder.  If your browser is currently open and you are a 
  viewing an ms4w page you will not be able to rename the 
  ms4w folder.  Therefore you must close all ms4w documents, 
  all ms4w browser windows...make sure no running files 
  point to the ms4w folder.

- rename the old ms4w folder to something like 'ms4w-old'

- extract the ms4w_xx.zip file to the root of a
  drive on your machine

- if successful, you should have a new directory named 'ms4w'
  at the root of the drive you chose (e.g. C:/ms4w or D:/ms4w ).

- follow the rest of the install instructions in 
  /ms4w/README_INSTALL.txt to start apache...


B. Extracting MS4W for the first time
-------------------------------------


Please read through the following instructions before 
starting your installation.

1. To install the MS4W .zip file, use a compression program 
   (e.g. WinZip) to extract the package at the root of a 
   drive, e.g., drive C:\. If successful, you should have a 
   new directory named 'ms4w' at the root of the drive you 
   chose (e.g. C:/ms4w).

2. Start your MS4W Apache Web Server by running
   /ms4w/apache-install.bat (at the command line or by 
   double-clicking it). This file installs Apache as a 
   Windows service (called "Apache Web Server") so that it 
   starts whenever your machine is restarted.  When 
   executed, a DOS window should pop up with the following 
   message:
    
   ::
   
        Installing the Apache MS4W Web Server service
        The Apache MS4W Web Server service is successfully installed.
        Testing httpd.conf....
        Errors reported here must be corrected before the service 
        can be started.
        The Apache MS4W Web Server service is starting.
        The Apache MS4W Web Server service was started successfully.
      
   This means that Apache is running and installed as a 
   service.
     
   **NOTE for Win95,98,ME users:**
   
   You will not be able to install Apache as a service, so 
   instead you will have to manually start Apache each time, 
   by clicking on /ms4w/Apache/bin/httpd.exe.  An empty DOS 
   window will open, which means Apache is running.  To stop 
   Apache you will have to close this empty DOS window.

3. To test that Apache is running properly, open your Web 
   browser and find your local host Web service by entering 
   one of the following URLs:

   ::
   
        http://localhost/

        or

        http://127.0.0.1/

   You should now see the main MS4W page in your Web 
   browser. This gives you general information about your 
   install along with configuration information. If this is 
   your first time using MS4W it is very important that you 
   review the listed "Features" installed within MS4W, and 
   test them by selecting each link found on this page.


4. Technically, at this point, MS4W is installed! However, 
   as you may have noticed from the MS4W main index.html 
   page, there are no applications running. What this means 
   is that there are no Web applications like MapLab or 
   Chameleon found within MS4W's Web-accessible directory, 
   /ms4w/apps/. The MS4W-configured Web applications can 
   be found on http://maptools.org/ms4w/index.phtml?page=downloads.html 
   as separate zip files.

5. To install these Web application into /ms4w/apps/ all 
   that is required is to unzip the Web application 
   compressed file at the same root directory as MS4W 
   (e.g., C:\).

   Two things should happen when uncompressing this file. 
   First, the Web application directory should appear 
   within /ms4w/apps/.  Second, a new httpd_*.conf file 
   should be added to /ms4w/httpd.d/httpd_*.conf. (The 
   /httpd.d/ directory contains Apache configuration files 
   that define which files on your computer/server are 
   Web-accessible. For each Web application that you 
   install, a new configuration file will be found.)

6. The definitions of these Web-accessible directories are 
   called Web Aliases. In order to activate a Web Alias you 
   must restart Apache.  To test your latest installed 
   application, go to the MS4W main index.html page (i.e., 
   http://localhost/). In the applications section you 
   should now find a link to the application you just 
   installed. Select the link to the recently installed 
   application to see if it is configured correctly. Another 
   option is find the Web Alias for your application and 
   call it from your Web browser directly. For example, if 
   you have installed the latest MS4W version of MapLab, 
   the chances are the Web Alias is "maplab". To go to the 
   MapLab index page, simply enter http://localhost/maplab/.

   Note: Applications with configuration files (e.g., MapLab 
   and Chameleon) generally do not require any editing of 
   their files in order to work. Just unzip to the 
   appropriate driver root and restart Apache.

   WARNING: It is very possible that you may wish (but not 
   encouraged!) to run multiple versions of the same 
   product. For example, Maplab 2.0 (mapserver_36) vs. 
   MapLab 2.1 (mapserver_4.0). When installing these ms4w 
   MapLab application packages, you will notice when 
   unzipping MapLab that the httpd_maplab.conf file found 
   under ./ms4w/httpd.d/ will be overwritten by the MapLab 
   you are currently installing. The reason for this is 
   that the MapLab Alias stays the same from version to new 
   version of MapLab. So, if you overwrite the 
   httpd_maplab.conf when unzipping and then restart Apache, 
   you will get the latest version of Maplab that you just 
   installed. To run both MapLab simply follow the 
   instructions in Step 7. 
    

7. You also can create new Web Alias(es). To configure your 
   own personal Web Alias(es), follow the instructions in 
   /ms4w/httpd.d/README_HTTPD.txt
    
C. Special Notes for Windows 7 and Vista
----------------------------------------

In order to run the apache-install.bat file, you must do
the following:

1. In Windows Explorer, goto the location of your cmd.exe
   file (C:/Windows/System32)
   
2. Right-click the cmd.exe executable and choose `Run as 
   Administrator`
   
3. Navigate to your ms4w folder in the command prompt window
   and run apache-install.bat

D. Plugins 
----------

Oracle 10g & 11g & 12c
######################

Steps to Enable Oracle 10g or 11g or 12c Support in MS4W
********************************************************

Oracle Spatial support in MapServer is handled by two methods: 
1) natively in MapServer, or 2) through the GDAL library.

1. Make sure you have Oracle 10g or 11g client software 
   installed on your machine (the same machine that you 
   are running MS4W on).

2. For direct access to Oracle Spatial, replace the existing 
   libmap.dll in /ms4w/Apache/cgi-bin/ with the one in the 
   /ms4w/Apache/cgi-bin/ignored-libmap/oracle11g/
   folder.
   
   If this is successful, executing the following at the 
   commandline (after setting /ms4w/setenv.bat) 
   "mapserv -v" should return a string that contains
   "INPUT=ORACLESPATIAL".


3. For access to Oracle Spatial through the GDAL library, 
   move the ogr_OCI.dll plugin file up from 
   /ms4w/gdalplugins/ignored/oracle-11g/ into 
   /ms4w/gdalplugins/
   
   If this is successful, executing the following at the
   commandline (after setting /ms4w/setenv.bat) 
   "ogrinfo --formats" should list the OCI driver.    
   
4. Restart Apache to be safe.

5. For mapfile configuration see 
   http://www.mapserver.org/input/vector/oracle.html (note
   that the LAYER syntax differs depending if you use native
   access or through GDAL)

SDE
### 

Steps to Enable SDE 9.1, 9.2, 9.3 Support in MS4W
*************************************************

1. Move the ogr_SDE.dll and gdal_SDE.dll plugin files up from 
   /ms4w/gdalplugins/ignored/sde-x/ into /ms4w/gdalplugins/
   
2. Execute the following at the commandline 
   (after setting /ms4w/setenv.bat): 

   ::

     "ogrinfo --formats" 
        
   (should list the SDE driver)
        
   ::
   
     "gdalinfo --formats"
        
   (should list the SDE driver)
        
   *Note that you might need to add the ArcGIS location (such as*
   *C:/Program Files/ArcGIS/Bin) to your system PATH environment*
   *variable.  You might need to reboot for changes to take effect.*

3. Create a MapServer LAYER for your SDE connection:
   
   **Raster Layers**
   ::
   
     LAYER
       TYPE RASTER
       DATA "SDE:hostname,port,database,username,
                        password,fully.specified.tablename,RASTER"
       ...
     END 
     
   **Vector Layers**
   
   Modify your SDE layer in your mapfile to use the 
   CONNECTIONTYPE PLUGIN parameter and point to the appropriate plugin
   using the PLUGIN parameter:
   
   Example#1: SDE 9.1 layer
   
   ::
   
     LAYER
       ...
       CONNECTIONTYPE PLUGIN
       CONNECTION "hostname,port:xxx,database,username,password"
       PLUGIN "C:/ms4w/Apache/specialplugins/msplugin_sde_91.dll"  
       DATA "layername,geometrycolumn,SDE.DEFAULT"
       ...
     END # layer
   
   Example#2: SDE 9.2 layer
   
   ::
   
     LAYER
       ...
       CONNECTIONTYPE PLUGIN
       CONNECTION "hostname,port:xxx,database,username,password"
       PLUGIN "C:/ms4w/Apache/specialplugins/msplugin_sde_92.dll"  
       DATA "layername,geometrycolumn,SDE.DEFAULT"
       ...
     END # layer  

   See the ArcSDE section of MapServer's Vector Data Access doc 
   for help with the CONNECTION and DATA parameters: 
   http://www.mapserver.org/input/vector/arcsde.html

Microsoft SQL Server 2008
#########################

A read-only, native MapServer driver that connects to Microsoft SQL 
Server 2008's spatial capabilities is available in MS4W as of version
2.3.0.

Steps to Enable SQL Server 2008 Support in MS4W's MapServer
***********************************************************

1. The plugin exists in 
   /ms4w/Apache/specialplugins/msplugin_mssql2008.dll

2. Modify your SQL Server 2008 layer in your mapfile to use the 
   CONNECTIONTYPE PLUGIN parameter and point to the appropriate 
   plugin using the PLUGIN parameter.  Use the CONNECTION
   parameter to specify the required connection parameters to access
   SQL Server, and use the DATA parameter to specify the table that
   holds the spatial information:
      
   ::
   
     LAYER
       ...
       CONNECTIONTYPE PLUGIN
       PLUGIN "C:/ms4w/Apache/specialplugins/msplugin_mssql2008.dll"
       CONNECTION "server=mysqlserver2008.com;uid=dbusername;
                    pwd=dbpassword;database=Roads Database;
                      Integrated Security=false"
       DATA "the_geom from roads"
       TYPE LINE
       STATUS ON
       CLASS
          ...
       END
     END

3. Test your layer, possibly by using the shp2img commandline utility
   with the '-all_debug 5' switch
     
   The associated RFC document with the original notes on this support 
   is `RFC 38`_
   
.. _`RFC 38`: http://www.mapserver.org/development/rfc/ms-rfc-38.html

E. MapScript configuration
--------------------------

MS4W >= 1.5.0 includes pre-built support files for csharp, java, 
and python mapscript.  In order to make use of these, 
however, they must be installed and configured in the 
appropriate locations on your system.

CSharp
######

1. Files are located in ``/ms4w/Apache/cgi-bin/mapscript/csharp``

2. See http://www.mapserver.org/installation/dotnet.html
   for installation notes.


Java
####

1. Files are located in ``/ms4w/Apache/cgi-bin/mapscript/java``

Python
######

Obtaining Python
****************

Obviously, in order to run Python mapscript, you need to have 
a python installed.  The Python mapscript support files 
included in this distribution are built for Python 2.6.x; 
they will not work with earlier or later Python versions.  
Windows Python binaries can be obtained free of charge from 
ActiveState_ or the Python_ site.

.. _ActiveState: http://www.activestate.com/Products/ActivePython/
.. _Python: http://www.python.org

See the respective sites for Python installation information.

Installing the Python Mapscript Support Files
*********************************************

Quick and dirty (for use with ms4w only)
````````````````````````````````````````

1. Unpack ``/ms4w/Apache/cgi-bin/mapscript/python/mapscript*win32.zip`` 
   in a safe location

2. In the directory structure that results from the above 
   step, navigate to
   ``\Python-2.6.2\Lib\site-packages``

3. You should find three files there:
     - _mapscript.pyd
     - mapscript.py
     - mapscript-<version>-py2.6.egg-info

4. Copy the three files into the ``/ms4w/Apache/cgi-bin`` 
   directory.

5. Place any python cgi scripts that you want to run under 
   ms4w in the ``/ms4w/Apache/cgi-bin`` directory, and add 
   a "shebang" line at the top of each script.  See the 
   section on `Configuring Apache to run Python scripts`_ 
   below for shebang-line details.

More robust (for system-wide access)
````````````````````````````````````

1. Unpack ``/ms4w/Apache/cgi-bin/mapscript/python/mapscript*win32.zip`` 
   in a safe location

2. In the directory structure that results from the above 
   step, navigate to ``\Python-2.6.2\Lib\site-packages``

3. You should find three files there:
     - _mapscript.pyd
     - mapscript.py
     - mapscript.pyc

4. Copy the three files into the site-packages directory of 
   your Python 2.6.x installation 
   (eg., ``C:\Python26\Lib\site-packages``)

5. Add ``<drive_letter>:\ms4w\Apache\cgi-bin`` to your 
   system's PYTHONPATH environment variable.  

Configuring Apache to Run Python Scripts
****************************************

You have a couple of options here:

via shebang lines
`````````````````

This may be the preferred approach if you have multiple 
Python installations on your machine.

Add a "shebang line" to the top of each python cgi script 
in ``/ms4w/apache/cgi-bin``.  This line must be the first 
line in the script, and it must begin with #! followed by 
the path to your systems python executable.  For example: 

::

  #!c:/python26/python.exe -u

The ``-u`` option shown above causes the script to use 
unbuffered output, which is generally what you need in 
web-serving contexts.

via Apache directives
`````````````````````

This approach obviates the need to edit every python script 
in your cgi-bin directory; however, it may be problematic 
if you have multiple Python installations.

Add the following line to the end of 
``ms4w/Apache/conf/httpd.conf``: 

::

  ScriptInterpreterSource Registry

You may also want to add these: 

::

  SetEnv PYTHONUNBUFFERED 1
  PassEnv PYTHONPATH

The first of the above lines causes your python scripts to 
use unbuffered output (which you probably want), while the 
second passes the value of your system's PYTHONPATH 
environment variable through to Apache's environment 
(if set).


Testing the Configuration
*************************

Follow these steps to test your Python MapScript
installation:

1. Move the file ``/ms4w/python/test-cgi-mapscript.py``
   into the ``/ms4w/Apache/cgi-bin/`` folder.

2. Open the file in a text editor.
   
3. Edit the first line of that script to point to your
   proper Python path.
   
4. In your web browser goto 
   http://127.0.0.1/cgi-bin/test-cgi-mapscript.py

5. The script tests that the Python CGI is working, and
   that the mapscript module can be successfully imported.
   
   If successful you will see an HTML page listing several
   environment settings on your machine, as well a list of 
   the Python MapScript module attributes at the bottom
   of the page.
   
Python Troubleshooting:

- If you get an Internal Server Error check the Apache logs 
  for info.
  
- Make sure your script points to a valid Python installation
  path.
  
- Make sure you are using a recent Python version
  (containing the cgitb module).

F. FastCGI
----------

In order to use FastCGI you must do the following:

1. Open /ms4w/Apache/conf/httpd.conf in a text editor

2. Uncomment line#130, such as:

   ::
   
     LoadModule fcgid_module modules/mod_fcgid.so

3. At the bottom of the file you will see a commented 
   "<IfModule fcgid_module>" section.  If you want to use
   FastCGI directives (listed on the `mod_fcgid`_
   page) you can uncomment the section and add your
   directives, such as:
    
   ::
   
     <IfModule fcgid_module>
        FcgidMinProcessesPerClass 0
        FcgidIdleScanInterval 1
        FcgidProcessLifeTime 10 
     </IfModule>
    
.. _`mod_fcgid`: http://httpd.apache.org/mod_fcgid/mod/mod_fcgid.html
   
     
4. If you are connecting to an Oracle database using FastCGI, you
   must also add your Oracle Bin directory (where the 'oci.dll' 
   file exists) to the PATH variable above, such as:
   
   ::
   
     <IfModule fcgid_module>
         ...
         FcgidInitialEnv PATH "c:/oracle/product/10.2.0/client/BIN"
         ...
     </IfModule> 

5. Save the file and restart apache (execute /ms4w/apache-restart.bat)

6. Change your CGI application to point to "/fcgi-bin/mapserv.exe"
   instead of the usual "/cgi-bin/mapserv.exe"
    
7. Add the following parameter to your layer for which you
   want this FastCGI connection:
   
   ::
   
     PROCESSING "CLOSE_CONNECTION=DEFER"
     
8.  Try the application.  If successful you should see the 
    "mapserv.exe" process in the Windows Task Manager remain open 
    while the user interacts with your application.
    
Notes: 

* in testing this was successful with PostgreSQL 9.0.4 / PostGIS 1.5.2,
  and with Oracle 10.2.0.1.0.

* general MapServer and FastCGI notes can be found in the 
  `FastCGI Howto`_.

.. _`FastCGI Howto`: http://www.mapserver.org/optimization/fastcgi.html 

G. MapCache Apache Module
-------------------------

The MapCache Apache module and the mapcache_seed.exe utility (as of 
Mar 21, 2013 build) are included. In order to use the MapCache Apache 
module you must do the following:

1. Open /ms4w/Apache/conf/httpd.conf in a text editor

2. Uncomment line#131, and change to your correct path, such as:

   ::
   
     LoadModule mapcache_module "C:/ms4w/Apache/cgi-bin/mod_mapcache.dll"

3. Around line#370 of your httpd.conf file you will see a 
   "<IfModule mapcache_module>" section.  Modify the path
   to the included MapCache configuration (XML) file, such as:
    
   ::
   
     <IfModule mapcache_module>
        <Directory "/ms4w/apps/mapcache/">
           Order Allow,Deny
           Allow from all
        </Directory>
        MapCacheAlias /mapcache "C:/ms4w/apps/mapcache/mapcache.xml"
     </IfModule>   
     
4. Modify the mapcache.xml file.  Please see the associated `MapCache docs`_
   for assistance.
   
.. _`MapCache docs`: http://www.mapserver.org/trunk/mapcache/config.html   

5. Save your httpd.conf file and restart apache (execute /ms4w/apache-restart.bat)

6. If the module was successfully loaded your /ms4w/Apache/logs/error.log
   file should contain a message similar to:
   
   ::
   
     [notice] Apache/2.2.24 (Win32) mod-mapcache/0.5-dev configured 
     -- resuming normal operations
     
7. Test your MapCache configuration by following steps in the associated
   `MapCache testing docs`_
   
   .. _`MapCache testing docs`: http://www.mapserver.org/trunk/mapcache/install.html#test-your-mapcache-module  

8. The `MapCache seeding utility`_ is also included.  To run the 
   mapcache_seed.exe file be sure to first execute the /ms4w/setenv.bat 
   file in your command window.

.. _`MapCache seeding utility`: http://www.mapserver.org/trunk/mapcache/seed.html  
  
Notes: 

* this module was tested with the cache types: disk, sqlite, tiff, and berkeleyDB.  
  You should follow the `MapCache Cache Types docs`_ for assistance, 
  or contact `Gateway Geomatics`_ for assistance/custom builds/configurations.
  
   .. _`MapCache Cache Types docs`: http://www.mapserver.org/trunk/mapcache/caches.html  
   
* the module was tested on Windows 7 and Vista; if you are using an older
  version of Windows and require this module you should consider upgrading, 
  or contact `Gateway Geomatics`_ for assistance/custom builds/configurations.
  .

* as this module is still in development, feedback is more than encouraged,
  it is required.  Please send your MapCache questions to the 
  `MapServer-users mailing list`_.  You are also encouraged to contact
  Gateway Geomatics `directly`_ for custom builds and to help fund 
  the development and maintenance of MS4W.

.. _`MapServer-users mailing list`: http://www.mapserver.org/trunk/community/lists.html#mapserver-users 
.. _`directly`: mailto:info@gatewaygeomatics.com 

H. Certificates for HTTPS with WMS/WFS Servers
----------------------------------------------

As of MapServer 5.4.1, MapServer can connect through HTTPS connections 
to WMS/WFS servers.  MS4W 3.0 includes the necessary configuration 
as follows:

1. Certificate authority bundle is included in 
   /ms4w/Apache/conf/ca-bundle/cacert.pem
   
   Source: http://curl.haxx.se/ca/cacert.pem
   
2. Apache's httpf.conf points to the ca-bundle:

   ::
   
     SetEnv CURL_CA_BUNDLE "/ms4w/Apache/conf/ca-bundle/cacert.pem"
     
3. MS4W's setenv.bat points to the ca-bundle:

   ::
   
     set CURL_CA_BUNDLE=\ms4w\Apache\conf\ca-bundle\cacert.pem
     
4. For more information on SSL certificates, 
   see: http://curl.haxx.se/docs/sslcerts.html
   
5. To setup MapServer as a client to access a remote WMS/WFS server
   through HTTPS see: http://trac.osgeo.org/mapserver/ticket/3070


I. Using the Python GDAL Module
-------------------------------

Note:

  ::
  
    Python 2.6 is required for the Python GDAL module in 
    MS4W, and you must have C:/python26 in your PATH to use 
    the utilities. 

The Python GDAL module and its utilities are installed in
``/ms4w/python/gdal/``.  To run the utilities:

1. Open a Command Prompt window

2. cd ms4w

3. setenv.bat

4. excute the python utility, such as:

  ::
  
    gdal_merge.py
    
gdal_merge.py notes:

- -n (nodata_value) switch requires the NumPy 
  module http://numpy.scipy.org/
    
- raster_copy_with_nodata() also requires the NumPy module

J. Troubleshooting 
------------------

**Warning: dl(): Unable to load dynamic library 
'/ms4w/Apache/php/extensions/php_mapscript.dll'**

1. Verify that the dll in question exists in the 
   specified location (/ms4w/Apache/php/extensions/).  If 
   this dll is not in that location, you might have to 
   modify the application to point to a different version of 
   the dll (e.g. you might have *php_mapscript.dll* in 
   the extensions directory, and your application might be 
   configured for *php_mapscript_48.dll* which is not in the 
   extensions directory).
   
2. This php_mapscript dll requires several other dlls, and 
   the problem may be that one is missing on your system.  
   In order to hopefully get more information on what dll 
   is missing, go to a command prompt, and do the following:
   
   ::

     cd ms4w\Apache\cgi-bin
   
     php C:/ms4w/Apache/htdocs/phpinfo_mapscript.php  
      
   A windows error window should open with a message like:
   
   ::
   
      The dynamic link library ***** could not be found in 
      the specified path...
      
   Locate this missing dll and copy it either to 
   /ms4w/Apache/cgi-bin/ or your system32 folder.
   
3. If you are still unsure what dll is causing this *unable 
   to load dynamic library* error, a useful utility to find 
   what associated dlls are missing on your system is 
   `Dependency Walker`_.  Download the utility, execute the 
   exe, and open your php_mapscript dll.
   
.. _`Dependency Walker`: http://www.dependencywalker.com/  

**The dynamic link library MSVCP71.dll could not be found 
in the specified path...**

This is a microsoft runtime library that is apparently not 
on all Windows systems by default.  Download the dll 
(possibly from `here`_) and copy it to your System32 
directory.

.. _`here`: http://www.dll-files.com/dllindex/dll-files.shtml?msvcp71

**Clicking on apache-install.bat flashes a DOS window and 
does not install the service**

To see the exact error message, open a Command window, and 
execute the 'apache-install.bat' file from a DOS prompt.

::

  cd ms4w
  
  apache-install.bat
  
**Only one usage of each socket address (protocol/network 
address/port) is normally permitted.  : make_sock: could not 
bind to address 0.0.0.0:80 no listening sockets available, 
shutting down**

Apache with MS4W is configured to use port 80.  Your system 
might be already using this port (IIS could cause this for 
example).  If you want to change the port that Apache uses 
modify the following file:

::

  /ms4w/Apache/conf/httpd.conf
  
  line 120: Listen 80
  
`TCPView`_ is an example of shareware that lets you see 
how the ports on your machine are being used.

.. _`TCPView`: http://technet.microsoft.com/en-us/sysinternals/bb897437.aspx
  
**The procedure entry point xxxx could not be located in the 
dynamic link library xxx.dll**
   
Make sure that MapServer (or the utility that you are trying 
to use) is actually using the 'xxx.dll' file that is part 
of the MS4W package.  You could be experiencing 'dll hell' 
(http://en.wikipedia.org/wiki/DLL_hell) where MS4W is 
actually finding an older dll on your system.  Try renaming 
the other dll(s) of the same name, keeping the one in MS4W 
as is, and retrying your application/command.

**Other Problems...**

1. Search the `mailing list archives`_ to see if someone has 
   encountered/solved your same issue.

.. _`mailing list archives`: http://lists.maptools.org/search.phtml?config=ms4w-users 

2. If your issue has not been brought up on the mailing list 
   and dealt with, submit a question to the 
   `MS4W mailing list`_.  Include the steps to reproduce 
   your problem, and state your exact error message.  Also 
   specify which version of MS4W you are using.

.. _`MS4W mailing list`: http://lists.maptools.org/mailman/listinfo/ms4w-users


K. Modifying MS4W for an Installation not at the Drive Root
-----------------------------------------------------------

Do the following steps in a text editor:

1. Open /ms4w/Apache/conf/httpd.conf and search for "/ms4w/" and 
   replace with your new path from your drive root (such as 
   "/Temp/ms4w/")

2. Open /ms4w/Apache/cgi-bin/php.ini and search for "/ms4w/" 
   and replace with your new path from your drive root (such as 
   "/Temp/ms4w/")

3. Open all files in /ms4w/httpd.d and search for "/ms4w/" 
   and replace with your new path from your drive root (such as 
   "/Temp/ms4w/")

4. Open /ms4w/setenv.bat and search for "/ms4w/" and replace
   with your new path from your drive root (such as "/Temp/ms4w/")

5. Configure your add-on packages.  Using Chameleon as an example: 
   Open /ms4w/apps/chameleon/config/chameleon.xml and search for 
   "/ms4w/" and replace with your new path from your drive root 
   (such as "/Temp/ms4w/")

Recommendation: avoid installing MS4W in a path that contains spaces


L. Installing the MS4W MapServer Binaries in Other Environments
---------------------------------------------------------------

The following instructions will help non-MS4W users who want
to only use the MapServer binaries included in MS4W:

1. Download and extract the MS4W base package locally from `MapTools`_.

.. _`MapTools`: http://www.maptools.org/ms4w/index.phtml?page=downloads.html

2. Do not install the Apache service (apache-install.bat)

3. Copy the .dll files from the `/ms4w/apache/cgi-bin/` directory 
   into your desired cgi-bin directory:
   	   
4. For PHP/Mapscript, goto `/ms4w/Apache/php/ext/` and copy
   the `php_mapscript.dll` file into your own PHP
   extensions directory.  CSharp, Java, and Python mapscript
   files can be found in `/ms4w/Apache/cgi-bin/mapscript/`
   
5. For the commandline utilities that come with MS4W (mapserv,
   gdal, etc.) copy all of the `.exe` files from `/ms4w/tools/`
   to a desired location, but be aware that these utilities 
   use dlls that were installed in the cgi-bin directory.  
   Therefore you must add your cgi-bin directory into your
   Windows PATH environment variable before running the
   utilities.

6. Microsoft IIS users should refer to the `IIS Howto`_ for MapServer.

.. _`IIS Howto`: http://www.mapserver.org/installation/iis.html

M. Using Custom EPSG Projections
--------------------------------

Custom EPSG projections can be added to the bottom of your epsg file 
at `/ms4w/proj/nad/epsg/`.

As of MS4W 3.0-beta11, previously included custom projections for 
Canada have been removed.  Here is some of the history:

- Gateway Geomatics officially applied to have the custom Canadian 
  projection EPSG:42304 (common in Ontario and in the Atlas of 
  Canada) included in the EPSG geodetic registry in 2009
- the projection was accepted as EPSG:3978 in the EPSG geodetic 
  registry on 2009-06-02
- this new EPSG code is included in PROJ4 4.7.0 release (2009-09)

For reference, here are the old custom Canadian EPSG codes:

::

  ##
  ## Custom projection codes for Canada
  ##
  ## WGS84 / LCC Canada
  <42101> +proj=lcc +ellps=WGS84 +lat_0=0 +lon_0=-95 +lat_1=49 
          +lat_2=77 +x_0=0 +y_0=-8000000.0 +datum=WGS84 
          +units=m no_defs <>
  ## NAD83 / BC Albers
  <42102> +proj=aea +ellps=GRS80 +lat_0=45 +lon_0=-126.0 
          +lat_1=50.0 
          +lat_2=58.5 +x_0=1000000.0 +y_0=0 +datum=NAD83 
          +units=m no_defs <>
  #
  ## NAD83 LCC for Canada
  <42304> +proj=lcc +ellps=GRS80 +lat_0=49 +lon_0=-95 
          +lat_1=49 +lat_2=77 
          +datum=NAD83 +units=m no_defs <>
  ##

Password Protection Configuration for Applications
==================================================

The following section explains how to add password 
authentication to your MS4W application.  However there are 
many other possible settings in Apache for this, so please 
consult the Apache HTTP Server documentation.

Here are the minimal steps for password protection:

1. Modify your application's httpd_xxx.conf file, so that 
   "AllowOverride None" is replaced with "AllowOverride 
   AuthConfig", such as:
   
   ::
   
     Alias /gmap/ "/ms4w/apps/gmap/htdocs/"
     
     <Directory "/ms4w/apps/gmap/htdocs/">
       AllowOverride AuthConfig
       Options Indexes FollowSymLinks Multiviews 
       Order allow,deny
       Allow from all       
     </Directory>
     
2. Create a password file.  

   - open a DOS command window, and go to Apache's bin 
     directory
   
   - enter the following (replace "jeff" with the username 
     you want to create, press ENTER and you will be 
     prompted for a password to create):
   
     ::
   
       C:/ms4w/Apache/bin> htpasswd -c htpasswd.txt jeff
      
3. Create the htaccess file.  

   - create a file in your application directory 
     (/ms4w/apps/gmap/htdocs/ in this example) named 
     '.htaccess'
     
   - the file should contain (you can modify it however you 
     wish though):
   
     ::
     
       AuthType Basic
       AuthUserFile C:/ms4w/Apache/bin/htpasswd.txt
       AuthName "Password Required"
       
       require valid-user
 
4. Restart Apache

   - run /ms4w/apache-restart.bat
   
5. Access your application in a web browser.

*Troubleshooting:*

- some Windows versions may have difficulty with the 
  '.htaccess' filename, so you might try naming it something 
  else, but you would have to modify Apache's httpd.conf 
  file (/ms4w/Apache/conf/httpd.conf) and add your filename, 
  such as:
  
  ::
  
    AccessFileName .htaccess yourfilename
    
  'htaccess.acl' is recommended, such as:
  
  ::
  
    AccessFileName .htaccess htaccess.acl 
    
- a good reference is 
  http://sniptools.com/tutorials/windows-apache-and-htaccess-authentication


MS4W Applications
=================

The following applications come with a pre-configured 
install package for MS4W. Go to 
http://www.maptools.org/ms4w/index.phtml?page=downloads.html 
to find the desired package, and extract the packages to the 
MS4W root (e.g. if you installed in C:\ then extract at C:\,
and if you installed the base in C:\Program Files then
extract the packages to C:\Program Files).

   1) ArcIMS Emulator

   2) Chameleon
   
   3) dBox MapServer   
   
   4) FIST - Flexible Internet Spatial Template  
   
   5) GeoMOOSE
   
   6) ka-Map
   
   7) MapBender
   
   8) MapServer Itasca Demo Application
   
   9) OGC Workshop
   
   10) OpenLayers

   11) GMap Sample PHP/MapScript Application

   12) phpPgAdmin

   13) p.mapper
   
Additional Support
==================

General questions and comments should be sent to the MS4W 
mailing list, which you can join at: 
http://lists.maptools.org/mailman/listinfo/ms4w-users

Requests for changes and enhancements to MS4W should be 
filed in the MS4W `tracker`_.

.. _`tracker`: http://www.maptools.org/bugzilla/query.cgi

Custom support is also available from `Gateway Geomatics`_.   

About this Document
===================

Copyright/Licensing Information
-------------------------------

In general MS4W is licensed under an MIT/X style license with the
following terms:

Copyright (c) 2003-2013 Gateway Geomatics

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files
(the "Software"),to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Component Licensing
-------------------

MS4W contains several component packages that are provided under
their own licensing terms.

MapServer
#########

Copyright (c) 1996-2013 Regents of the University of Minnesota

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files
(the "Software"), to deal in the Software without restriction,
including without limitation the rights to use, copy, modify, merge,
publish, distribute, sublicense, and/or sell copies of the Software,
and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be
included in all copies of this Software or works derived from
this Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

GDAL
####

Refer to the GDAL license found at /ms4w/gdaldata/LICENSE.TXT

MrSID
#####

Portions of this computer program are copyright (c) 1995-2013
LizardTech, Inc.
All rights reserved. MrSID is protected by U.S. Patent No. 5,710,835.
Foreign Patents Pending.

FreeType
########

Portions of this software are copyright © 2013 The FreeType Project
(www.freetype.org).  All rights reserved.

Apache
######

Refer to the Apache license found at /ms4w/Apache/LICENSE-APACHE.txt

PHP
###

Refer to the PHP license found at /ms4w/Apache/php/license.txt