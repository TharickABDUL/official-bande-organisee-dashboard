let db, config

module.exports = (_db, _config) => {
    db = _db
    config = _config
    return modifiedAndCreateAccount
}


let modifiedAndCreateAccount = class {

    static add(mailPeople, namePeople, phonePeople, statusPeople) {
        return new Promise((next) => {

            if (mailPeople != undefined && mailPeople.trim() != '' &&
              namePeople != undefined && namePeople.trim() != '' &&
              phonePeople != undefined && phonePeople.trim() != '' &&
              statusPeople != undefined && statusPeople.trim() != '') {

              mailPeople = mailPeople.trim()
              namePeople = namePeople.trim()
              phonePeople = phonePeople.trim()
              statusPeople = statusPeople.trim()


              db.query('SELECT * FROM People WHERE mailPeople = ? AND namePeople = ? AND phonePeople = ? AND statusPeople = ?', [mailPeople, namePeople, phonePeople, statusPeople])
                    .then((result) => {
                        if (result[0] != undefined) {
                            next(new Error(config.errors.nameAlreadyTaken))
                        } else {
                            return db.query('INSERT INTO People(mailPeople,namePeople,phonePeople,statusPeople) VALUES(?,?,?,?)', [mailPeople, namePeople, phonePeople, statusPeople])
                        }
                    })
                    .then(() => {
                        return db.query('SELECT * FROM People WHERE mailPeople = ? AND namePeople = ? AND phonePeople = ? AND statusPeople = ?', [mailPeople, namePeople, phonePeople, statusPeople])
                    })
                    .then((result) => {
                        next({
                          id: result[0].id,
                          mailPeople: result[0].mailPeople,
                          namePeople: result[0].namePeople,
                          phonePeople: result[0].phonePeople,
                          statusPeople: result[0].statusPeople
                        })
                    })
                    .catch((err) => next(err))
            } else {
                next(new Error(config.errors.noNameValue))
            }
        })
    }

  static getAll(max) {
    return new Promise((next) => {

      if (max != undefined && max > 0) {

        db.query('SELECT * FROM People LIMIT 0, ?', [parseInt(max)])
          .then((result) => next(result))
          .catch((err) => next(err))

      } else if (max != undefined) {
        next(new Error(config.errors.wrongMaxValue))
      } else {
        db.query('SELECT * FROM People', [max])
          .then((result) => next(result))
          .catch((err) => next(err))
      }
    })
  }



    static update(id, mailPeople, namePeople, phonePeople, statusPeople) {
        return new Promise((next) =>{

          if (mailPeople != undefined && mailPeople.trim() != '' &&
            namePeople != undefined && namePeople.trim() != '' &&
            phonePeople != undefined && phonePeople.trim() != '' &&
            statusPeople != undefined && statusPeople.trim() != '') {

            mailPeople = mailPeople.trim()
            namePeople = namePeople.trim()
            phonePeople = phonePeople.trim()
            statusPeople = statusPeople.trim()

                db.query('SELECT * FROM People WHERE idPeople = ?', [id])
                    .then((result) => {
                        if (result[0] != undefined) {
                            return db.query('SELECT * FROM People WHERE mailPeople = ? AND namePeople = ? AND phonePeople = ? AND statusPeople = ? AND idPeople != ?', [mailPeople, namePeople, phonePeople, statusPeople, id])
                        } else {
                            next(new Error(config.errors.wrongID))
                        }
                    })
                    .then((result) => {
                        if (result[0] != undefined) {

                            next(new Error(config.errors.sameName))
                        } else {
                            return db.query('UPDATE People SET mailPeople = ?, namePeople = ?, phonePeople = ?, statusPeople = ? WHERE idPeople = ?', [mailPeople, namePeople, phonePeople, statusPeople, id])
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
            db.query('SELECT * FROM People WHERE idPeople = ?', [id])
                .then((result)=> {
                    if (result[0] != undefined) {
                        return db.query('DELETE FROM People WHERE idPeople = ?', [id])

                    } else {
                       next(new Error (config.errors.wrongID))
                    }
                })
                .then(() => next(true))
                .catch((err) => next(err))

        })
    }
}

