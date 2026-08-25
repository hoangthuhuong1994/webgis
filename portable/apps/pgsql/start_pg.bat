ECHO "Starting PostgreSQL Server..."
@ECHO ON

@SET PATH="%~dp0\bin";%PATH%
@SET PGDATA=%~dp0\data

@SET PGDATABASE=postgres
@SET PGUSER=postgres
@SET PGPORT=5093

@SET PGLOCALEDIR=%~dp0\share\locale
"%~dp0\bin\pg_ctl" -D "%~dp0/data" -l "%~dp0/logfile.txt" start