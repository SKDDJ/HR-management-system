-- Create user.
CREATE USER shiyiming PASSWORD 'shiyiming';

-- Create tablespace.
CREATE TABLESPACE human_resource_space LOCATION '/opt/homebrew/var/postgresql@13/tablespace';


GRANT CREATE ON TABLESPACE human_resource_space TO shiyiming;

-- Create database.
CREATE DATABASE human_resource WITH TABLESPACE = human_resource_space OWNER shiyiming;

-- -- Create schema.
-- CREATE SCHEMA caiyuwang AUTHORIZATION caiyuwang;
-- -- Set search path.
-- SET SEARCH_PATH TO caiyuwang,
--   public;
