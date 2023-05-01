-- Create user.
CREATE USER shiym PASSWORD 'shiym';

-- Create tablespace.
CREATE TABLESPACE human_resource_space RELATIVE LOCATION 'tablespace/human_resource_space';

GRANT CREATE ON TABLESPACE human_resource_space TO shiym;

-- Create database.
CREATE DATABASE human_resource WITH TABLESPACE = human_resource_space OWNER shiym;

-- -- Create schema.
-- CREATE SCHEMA caiyuwang AUTHORIZATION caiyuwang;
-- -- Set search path.
-- SET SEARCH_PATH TO caiyuwang,
--   public;