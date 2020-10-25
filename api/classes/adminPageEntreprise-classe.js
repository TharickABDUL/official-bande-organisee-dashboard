let db, config

module.exports = (_db, _config) => {
  db = _db
  config = _config
  return adminPageEntreprise
}

let adminPageEntreprise = class {

  static getAll(max) {
    return new Promise((next) => {

      if (max != undefined && max > 0) {

        db.query('SELECT * FROM companies LIMIT 0, ?', [parseInt(max)])
          .then((result) => next(result))
          .catch((err) => next(err))

      } else if (max != undefined) {
        next(new Error(config.errors.wrongMaxValue))
      } else {
        db.query('SELECT * FROM companies', [max])
          .then((result) => next(result))
          .catch((err) => next(err))
      }
    })
  }

  static add(nameCompanies) {
    return new Promise((next) => {

      if (nameCompanies != undefined && nameCompanies.trim() != '') {

        nameCompanies = nameCompanies.trim()
        db.query('SELECT * FROM companies WHERE nameCompanies = ?', [nameCompanies])
          .then((result) => {
            if (result[0] != undefined) {
              next(new Error(config.errors.noMessageValue)) //deja postuler
            } else {
              return db.query('INSERT INTO companies(nameCompanies) VALUES(?)', [nameCompanies])
            }
          })
          .then(() => {
            return db.query('SELECT * FROM companies WHERE nameCompanies = ?', [nameCompanies])
          })
          .then((result) => {
            next({
              id: result[0].id,
              nameCompanies: result[0].nameCompanies,
            })
          })
          .catch((err) => next(err))
      } else {
        next(new Error(config.errors.noMessageValue))
      }


    })
  }

  static delete(id) {
    return new Promise((next) =>{
      db.query('SELECT * FROM companies WHERE idCompanies = ?', [id])
        .then((result)=> {
          if (result[0] != undefined) {
            return db.query('DELETE FROM companies WHERE idCompanies = ?', [id])
          } else {
            next(new Error (config.errors.wrongID))
          }
        })
        .then(() => next(true))
        .catch((err) => next(err))
    })
  }

  static update(id, nameCompanies) {
    return new Promise((next) =>{

      if (nameCompanies != undefined && nameCompanies.trim() != '') {

        nameCompanies = nameCompanies.trim()
        db.query('SELECT * FROM companies WHERE idCompanies = ?', [id])
          .then((result) => {
            if (result[0] != undefined) {
              return db.query('SELECT * FROM companies WHERE' +
                ' nameCompanies = ? AND idCompanies != ?', [nameCompanies, id])
            } else {
              next(new Error(config.errors.wrongID))
            }
          })
          .then((result) => {
            if (result[0] != undefined) {

              next(new Error(config.errors.sameName))
            } else {
              return db.query('UPDATE companies SET nameCompanies = ? WHERE idCompanies = ?', [nameCompanies, id])
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




}
