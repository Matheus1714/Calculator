![calc image](../img/logo.png)

# Calculator

# Tech/framework used

**Back-end** built with:
* [NodeJS](https://nodejs.org/en/)

**Database** built with:
* [Postgresql](https://www.postgresql.org/)

# Configure

## Database

Install postgresql using this [link](https://www.postgresql.org/download/).

Enter the route using the terminal(Codes for Windows 10):

```sh
$ cd C:\Program Files\PostgreSQL\13\bin
```

Access the postgres

```sh
$ .\psql -U postgres -h localhost
```

Create database postgres

```SQL
CREATE DATABASE DBCALC;
```

Create file with name .env and write

```SQL
USER_NAME=YOUR_PASSWORD_POSGRES
HOST_NAME=localhost
DB_NAME=DBCALC
DB_PASSWORD=1234
PORT_DB=5432
```

## Local Server

Install `npm` packages

```sh
$ npm i
```

# Usage Server

Write the code for start the local server

```sh
$ npm run dev
```