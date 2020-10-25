let db, config

module.exports = (_db, _config) => {
    db = _db
    config = _config
    return adminPageCard
}

let adminPageCard = class {
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

                db.query('SELECT * FROM advertisements LIMIT 0, ?', [parseInt(max)])
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

  // static add(nameClient) {
  //   return new Promise((next) => {
  //     if (nameClient != undefined && nameClient.trim() != '') {
  //       nameClient = nameClient.trim()
  //       db.query('SELECT * FROM adminPage WHERE nameClient = ?', [nameClient])
  //         .then((result) => {
  //
  //           if (result[0] != undefined) {
  //             next(new Error(config.errors.nameAlreadyTaken))
  //           } else {
  //
  //             return db.query('INSERT INTO adminPage(nameClient)' +
  //               ' VALUES(?)', [nameClient])
  //
  //           }


   static add(titleAdvertisements,shortDescription,fullDescription,wages,place,TypeOfJob,hourWeek,CompaniesID,image) {

      return new Promise((next) => {

            if (titleAdvertisements != undefined && titleAdvertisements.trim() != '' &&
              shortDescription != undefined && shortDescription.trim() != '' &&
              fullDescription != undefined && fullDescription.trim() != '' &&
              wages != undefined && wages.trim() != '' &&
              place != undefined && place.trim() != '' &&
              TypeOfJob != undefined && TypeOfJob.trim() != '' &&
              CompaniesID != undefined && CompaniesID.trim() != '' &&
              image != undefined && image.trim() != '') {

              titleAdvertisements = titleAdvertisements.trim()
              shortDescription = shortDescription.trim()
              fullDescription = fullDescription.trim()
              CompaniesID = CompaniesID.trim()
              TypeOfJob = TypeOfJob.trim()
              wages = wages.trim()

              db.query('SELECT * FROM advertisements WHERE titleAdvertisements = ? AND shortDescription = ? AND fullDescription = ? AND wages = ? AND place = ? AND TypeOfJob = ? AND hourWeek = ? AND CompaniesID = ? AND image = ?', [titleAdvertisements, shortDescription, fullDescription, wages, place, TypeOfJob, hourWeek, CompaniesID, image])
                    .then((result) => {

                        if (result[0] != undefined) {
                            next(new Error(config.errors.nameAlreadyTaken))
                        } else {
                            return db.query('INSERT INTO advertisements(titleAdvertisements,shortDescription,fullDescription,wages,place,TypeofJob,hourWeek,CompaniesID,image) VALUES(?,?,?,?,?,?,?,?,?)',[titleAdvertisements, shortDescription, fullDescription, wages, place, TypeOfJob, hourWeek, CompaniesID, image])
                        }
                    })
                    .then(() => {
                        return db.query('SELECT * FROM advertisements WHERE titleAdvertisements = ? AND shortDescription = ? AND fullDescription = ? AND wages = ? AND place = ? AND TypeOfJob = ? AND hourWeek = ? AND CompaniesID = ? AND image = ?', [titleAdvertisements, shortDescription, fullDescription, wages, place, TypeOfJob, hourWeek, CompaniesID, image])
                    })
                    .then((result) => {
                        next({
                          id: result[0].id,
                          titleAdvertisements: result[0].titleAdvertisements,
                          shortDescription: result[0].shortDescription,
                          fullDescription: result[0].fullDescription,
                          wages: result[0].wages,
                          place: result[0].place,
                          TypeOfJob: result[0].TypeOfJob,
                          hourWeek: result[0].hourWeek,
                          CompaniesID: result[0].CompaniesID,
                          image: result[0].image,
                        })
                    })
                    .catch((err) => next(err))
            } else {
                next(new Error(config.errors.noNameValue))
            }
        })
    }

    static update(id, titleAdvertisements,shortDescription,fullDescription,wages,place,TypeOfJob,hourWeek,CompaniesID,image) {
        return new Promise((next) =>{

          if (titleAdvertisements != undefined && titleAdvertisements.trim() != '' &&
            shortDescription != undefined && shortDescription.trim() != '' &&
            fullDescription != undefined && fullDescription.trim() != '' &&
            wages != undefined && wages.trim() != '' &&
            place != undefined && place.trim() != '' &&
            TypeOfJob != undefined && TypeOfJob.trim() != '' &&
            CompaniesID != undefined && CompaniesID.trim() != '' &&
            image != undefined && image.trim() != '') {

            titleAdvertisements = titleAdvertisements.trim()
            shortDescription = shortDescription.trim()
            fullDescription = fullDescription.trim()
            CompaniesID = CompaniesID.trim()
            TypeOfJob = TypeOfJob.trim()
            wages = wages.trim()

                db.query('SELECT * FROM advertisements WHERE idAdvertisements = ?', [id])
                    .then((result) => {
                        if (result[0] != undefined) {

                            return db.query('SELECT * FROM advertisements WHERE titleAdvertisements = ? AND shortDescription = ? AND fullDescription = ? AND wages = ? AND place = ? AND TypeOfJob = ? AND hourWeek = ? AND CompaniesID = ? AND image = ? AND idAdvertisements != ?', [titleAdvertisements, shortDescription, fullDescription, wages, place, TypeOfJob, hourWeek, CompaniesID, image, id])
                        } else {
                            next(new Error(config.errors.wrongID))
                        }
                    })
                    .then((result) => {
                        if (result[0] != undefined) {

                            next(new Error(config.errors.sameName))
                        } else {

                            return db.query('UPDATE advertisements SET titleAdvertisements = ?, shortDescription = ?, fullDescription = ?, wages = ?, place = ?, TypeOfJob = ?, hourWeek = ?, CompaniesID = ?, image = ?  WHERE idAdvertisements = ?', [titleAdvertisements, shortDescription, fullDescription, wages, place, TypeOfJob, hourWeek, CompaniesID, image, id])

                        }
                    })
                    .then(() => {
                        next(true)
                    })
                    .catch((err) => next(err))



            } else {
                next(new Error(config.errors.noMessageValue))
            }


        })
    }

    static delete(id) {
        return new Promise((next) =>{
              db.query('SELECT * FROM advertisements WHERE idAdvertisements = ?', [id])
                .then((result)=> {
                    if (result[0] != undefined) {
                        return db.query('DELETE FROM advertisements WHERE idAdvertisements = ?', [id])
                    } else {
                       next(new Error (config.errors.wrongID))
                    }
                })
                .then(() => next(true))
                .catch((err) => next(err))
        })
    }
}

