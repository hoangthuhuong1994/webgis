ECHO "Stopping PostgreSQL Server..."
@ECHO ON

"%~dp0\bin\pg_ctl" -D "%~dp0/data" stop