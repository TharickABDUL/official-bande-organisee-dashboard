let db, config

module.exports = (_db, _config) => {
    db = _db
    config = _config
    return card
}


let card = class {

    static getByID(id) {
        return new Promise((next) => {
            db.query('SELECT * FROM advertisements INNER JOIN companies on idCompanies = CompaniesID WHERE idAdvertisements =' +
              ' ? ', [id])
                .then((result) => {
                    if (result[0] != undefined) {
                        next(result[0])
                    } else {
                        next(new Error(config.errors.wrongID))
                    }
                })
                .catch((err) => next(err))
        })
    }

    static getAll(max) {
        return new Promise((next) => {

            if (max != undefined && max > 0) {

                  db.query('SELECT * FROM advertisements INNER JOIN companies on idCompanies = CompaniesID', [parseInt(max)])
                    .then((result) => next(result))
                    .catch((err) => next(err))

            } else if (max != undefined) {
                next(new Error(config.errors.wrongMaxValue))
            } else {
                  db.query('SELECT * FROM advertisements INNER JOIN companies on idCompanies = CompaniesID', [max])
                    .then((result) => next(result))
                    .catch((err) => next(err))
            }
        })


    }

}

