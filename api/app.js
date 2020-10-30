const express = require('express')
const {success, error, checkAndChange} = require('./functions')

const mysql = require('promise-mysql')
var cors = require('cors')

const morgan = require('morgan')('dev')
const config = require('./config')
const bodyParser = require('body-parser')

mysql.createConnection({
  host: config.db.host,
  database: config.db.database,
  user: config.db.user,
  password: config.db.password
}).then((db) => {
  console.log('Connected')

  const app = express()

  let CardRouter = express.Router()
  let applyCardRouter = express.Router()
  let modifiedAndCreateAccountRouter = express.Router()
  let adminPageCardRouter = express.Router()
  let adminPageEntrepriseRouter = express.Router()

  let Card = require('./classes/card-classe')(db, config)
  let applyCard = require('./classes/applyCard-classe')(db, config)
  let modifiedAndCreateAccount = require('./classes/modifiedAndCreateAccount-classe')(db, config)
  let adminPageCard = require('./classes/adminPageCard-classe')(db, config)
  let adminPageEntreprise = require('./classes/adminPageEntreprise-classe')(db, config)

  app.use(cors())
  app.use(morgan)
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));

  //======================= CLASSE CARD=========================
  CardRouter.route('/')
    .get(async (req, res) => {
      let allCard = await Card.getAll(req.query.max)
      res.json(checkAndChange(allCard))
    })
  CardRouter.route('/:id')
    .get(async (req, res) => {
      let card = await Card.getByID(req.params.id)
      res.json(checkAndChange(card))
    })
  //=======================CLASSE APPLY-CARD=========================
  applyCardRouter.route('/')

    // Ajoute un membre avec son nom
    .post(async (req, res) => {
      let ApplyCardForJob = await applyCard.add(req.body.message, req.body.peopleID, req.body.advertisementsID)
      res.json(checkAndChange(ApplyCardForJob))
    })
  //============ CLASSE MODIFIED AND CREATE ACCOUNT (info perso) =============

  modifiedAndCreateAccountRouter.route('/:id')

    .put(async (req, res) => {
      let UpdatePeople = await modifiedAndCreateAccount.update(req.params.id, req.body.mailPeople, req.body.namePeople, req.body.phonePeople, req.body.statusPeople)
      res.json(checkAndChange(UpdatePeople))
    })
    .delete(async (req, res) => {
      let deletePeople = await modifiedAndCreateAccount.delete(req.params.id)
      res.json(checkAndChange(deletePeople))
    })

  modifiedAndCreateAccountRouter.route('/')

    .get(async (req, res) => {
      let allPeople = await modifiedAndCreateAccount.getAll(req.query.max)
      res.json(checkAndChange(allPeople))
    })
    // Ajoute un membre avec son nom
    .post(async (req, res) => {
      let addPeople= await modifiedAndCreateAccount.add(req.body.mailPeople, req.body.namePeople, req.body.phonePeople, req.body.statusPeople)
      res.json(checkAndChange(addPeople))
    })

  //======================= CLASSE ADMIN PAGE CARD=========================
  adminPageCardRouter.route('/:id')

    .get(async (req, res) => {
      let job = await adminPageCard.getByID(req.params.id)
      res.json(checkAndChange(job))
    })


    .put(async (req, res) => {
      let updateJob = await adminPageCard.update(req.params.id, req.body.titleAdvertisements, req.body.shortDescription, req.body.fullDescription, req.body.wages, req.body.place, req.body.TypeOfJob, req.body.hourWeek, req.body.CompaniesID, req.body.image)
      res.json(checkAndChange(updateJob))
    })


    .delete(async (req, res) => {
      let deleteCard = await adminPageCard.delete(req.params.id)
      res.json(checkAndChange(deleteCard))
    })

  adminPageCardRouter.route('/')

    .get(async (req, res) => {
      let allJobs = await adminPageCard.getAll(req.query.max)
      res.json(checkAndChange(allJobs))
    })

    // Ajoute un membre avec son nom
    .post(async (req, res) => {
      let addJob = await adminPageCard.add(req.body.titleAdvertisements, req.body.shortDescription, req.body.fullDescription, req.body.wages, req.body.place, req.body.TypeOfJob, req.body.hourWeek, req.body.CompaniesID, req.body.image)
      res.json(checkAndChange(addJob))
    })


//======================= CLASSE ADMIN PAGE ENTREPRISE =========================
  adminPageEntrepriseRouter.route('/:id')
    .delete(async (req, res) => {
      let deleteEntreprise = await adminPageEntreprise.delete(req.params.id)
      res.json(checkAndChange(deleteEntreprise))
    })

    .put(async (req, res) => {
      let updateEntreprise = await adminPageEntreprise.update(req.params.id, req.body.nameCompanies)
      res.json(checkAndChange(updateEntreprise))
    })

  adminPageEntrepriseRouter.route('/')
    .get(async (req, res) => {
      let allEntreprise = await adminPageEntreprise.getAll(req.query.max)
      res.json(checkAndChange(allEntreprise))
    })

    // Ajoute une entreprise avec son nom
    .post(async (req, res) => {
      let addJob = await adminPageEntreprise.add(req.body.nameCompanies)
      res.json(checkAndChange(addJob))
    })

  app.use(config.rootAPI + 'card', CardRouter)
  app.use(config.rootAPI + 'ApplyCard', applyCardRouter)
  app.use(config.rootAPI + 'modifiedAndCreateAccount', modifiedAndCreateAccountRouter)
  app.use(config.rootAPI + 'adminPageCard', adminPageCardRouter)
  app.use(config.rootAPI + 'adminPageEntreprise', adminPageEntrepriseRouter)

  app.listen(config.port, () => console.log('Started on port ' + config.port))


}).catch((err) => {
  console.log('erreur during database conncetion')

  console.log(err.message)
})
