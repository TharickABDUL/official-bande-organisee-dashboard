let db, config

module.exports = (_db, _config) => {
    db = _db
    config = _config
    return Jobs
}


let Jobs = class {

    static getByID(id) {
        return new Promise((next) => {
            db.query('SELECT * FROM jobs WHERE id = ?', [id])
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

                db.query('SELECT * FROM jobs LIMIT 0, ?', [parseInt(max)])
                    .then((result) => next(result))
                    .catch((err) => next(err))

            } else if (max != undefined) {
                next(new Error(config.errors.wrongMaxValue))
            } else {
                db.query('SELECT * FROM jobs', [max])
                    .then((result) => next(result))
                    .catch((err) => next(err))
            }
        })


    }

    static add(nameClient) {
        return new Promise((next) => {

            if (nameClient != undefined && nameClient.trim() != '') {

                 nameClient = nameClient.trim()

                db.query('SELECT * FROM jobs WHERE nameClient = ?', [nameClient])
                    .then((result) => {

                        if (result[0] != undefined) {
                            next(new Error(config.errors.nameAlreadyTaken))
                        } else {

                            return db.query('INSERT INTO jobs(nameClient)' +
                                ' VALUES(?)', [nameClient])

                        }


                    })
                    .then(() => {
                        return db.query('SELECT * FROM jobs WHERE nameClient' +
                            ' = ?', [nameClient])

                    })
                    .then((result) => {
                        next({
                            id: result[0].id,
                            name: result[0].name
                        })
                    })
                    .catch((err) => next(err))


            } else {
                next(new Error(config.errors.noNameValue))
            }


        })
    }

    static update(id, nameClient) {
        return new Promise((next) =>{

            if (nameClient != undefined && nameClient.trim() != '') {

                nameClient = nameClient.trim()
                db.query('SELECT * FROM jobs WHERE id = ?', [id])
                    .then((result) => {
                        if (result[0] != undefined) {

                            return db.query('SELECT * FROM jobs WHERE' +
                                ' nameClient = ? AND id != ?', [nameClient, id])
                        } else {
                            next(new Error(config.errors.wrongID))
                        }
                    })
                    .then((result) => {
                        if (result[0] != undefined) {

                            next(new Error(config.errors.sameName))
                        } else {
                            return db.query('UPDATE jobs SET nameClient = ? WHERE id = ?', [nameClient, id])
                        }
                    })
                    .then(() => {
                        next(true)
                    })
                    .catch((err) => next(err))

            } else {
                next(new Error(config.errors.noNameValue))
            }

        })
    }

    static delete(id) {
        return new Promise((next) =>{
            db.query('SELECT * FROM jobs WHERE id = ?', [id])
                .then((result)=> {
                    if (result[0] != undefined) {
                        return db.query('DELETE FROM jobs WHERE id = ?', [id])

                    } else {
                       next(new Error (config.errors.wrongID))
                    }
                })
                .then(() => next(true))
                .catch((err) => next(err))

        })
    }
}

