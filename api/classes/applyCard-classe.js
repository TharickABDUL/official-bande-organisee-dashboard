let db, config

module.exports = (_db, _config) => {
  db = _db
  config = _config
  return applyCard
}

let applyCard = class {

  static add(message, peopleID, advertisementsID) {

    return new Promise((next) => {

      if (message != undefined && message.trim() != '') {

        message = message.trim()

        db.query('SELECT * FROM informationJob WHERE message = ? AND peopleID = ? AND advertisementsID = ?', [message, peopleID, advertisementsID])
          .then((result) => {
            if (result[0] != undefined) {
              next(new Error(config.errors.noMessageValue)) //deja postuler
            } else {
              return db.query('INSERT INTO informationJob(message,peopleID,advertisementsID) VALUES(?,?,?)', [message, peopleID, advertisementsID])
            }
          })
          .then(() => {
            return db.query('SELECT * FROM informationJob WHERE message = ? AND peopleID = ? AND advertisementsID = ?', [message, peopleID, advertisementsID])
          })
          .then((result) => {
            next({
              id: result[0].id,
              message: result[0].message,
              peopleID: result[0].peopleID,
              advertisementsID: result[0].advertisementsID
            })
          })
          .catch((err) => next(err))
      } else {
        next(new Error(config.errors.noMessageValue))
      }


    })
  }
}

