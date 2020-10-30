[![Build Status](http://img.shields.io/travis/badges/badgerbadgerbadger.svg?style=flat-square)](https://travis-ci.org/badges/badgerbadgerbadger)
[![Coverage Status](http://img.shields.io/coveralls/badges/badgerbadgerbadger.svg?style=flat-square)](https://coveralls.io/r/badges/badgerbadgerbadger)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)


# Official bande organisée dashboard
<p align="center"><a target="_blank" rel="noopener noreferrer" href="https://camo.githubusercontent.com/06b2f979b4fbab8f1822cab69783700f0afa1f90/68747470733a2f2f6e7578746a732e6f72672f6d6574615f3430302e706e67"><img align="center" src="https://camo.githubusercontent.com/06b2f979b4fbab8f1822cab69783700f0afa1f90/68747470733a2f2f6e7578746a732e6f72672f6d6574615f3430302e706e67" data-canonical-src="https://nuxtjs.org/meta_400.png" style="max-width:100%;"></a></p>

## This repo is a project created of job b0ard create with Tharick during the 3rd year at Epitech. https://github.com/TharickABDUL



### Built With

The project work with a web app made with nodejs/css. And a mobil applications for QR code. 

* [Express.js](https://www.mysql.com/)
* [Node.js](https://www.mysql.com/)
* [mysql](https://www.mysql.com/)
* [NuxtJS](https://nuxtjs.org/)




## Getting Started
### Prerequisites
* npm / node.js
* webstorm

```sh
npm install npm@latest -g
```

### Installation

2. Clone the repo
```sh
git clone https://github.com/AlbertLanne/official-bande-organisee-dashboard.git
```
3. Install NPM packages
```sh
cd ProductionMonitoringMysql && npm install
```
4. Import in your database the BBD.sql file.

5. Setup on api/config.js the login of your database by remplacing the 

```JS
  "db": {
    "host": "IP-mysql.services.clever-cloud.com",
    "database": "myDataBaseName",
    "user": "myUserName",
    "password": "myPasswordName"
  },
```



## Project setup

![Alt text](markdown/structur_bdd_local.svg "routes api")

### Compiles and hot-reloads for development with nodemon

```
# Install dependecies & for the api

# serve with hot reload at localhost:8000
npm run dev

# api at localhost:4000
npm run start

```


---

## Routes of the API

![Alt text](markdown/route.svg "classe api")

---
## Structure of the API
### Class diagram

![Alt text](markdown/apiPOO.svg "routes api")


## Front end

![Alt text](markdown/front.svg "front")

