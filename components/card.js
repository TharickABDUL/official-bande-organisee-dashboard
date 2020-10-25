import axios from "axios";

const url = "http://localhost:3000/api/v2/card";
const urlCard = "http://localhost:3000/api/v2/adminPageCard";
const urlEntreprise = "http://localhost:3000/api/v2/adminPageEntreprise";
const urlUtilisateur = "http://localhost:3000/api/v2/modifiedAndCreateAccount";
const urlApplyCard = "http://localhost:3000/api/v2/applyCard";

class card {

  static getCard() {
    return axios.get(url);
  }

  static getCardMax(max) {
    return axios.get(urlCard + '?max=' + max);
  }

  static getCardid(id) {
    return axios.get(url + '/' + id);
  }

  static deleteCard(idAdvertisements) {
    return axios.delete(urlCard + '/' + idAdvertisements);
  }

  static getEntreprise() {
    return axios.get(urlEntreprise);
  }

  static insertEntreprise(nameCompanies) {
    return axios.post(urlEntreprise, {
      nameCompanies
    })
  }



  static deleteEntreprise(idCompanies) {
    return axios.delete(urlEntreprise + '/' + idCompanies);
  }

  static deleteUtilisateur(idPeople) {
    return axios.delete(urlUtilisateur + '/' + idPeople);
  }

  static getUtilisateur() {
    return axios.get(urlUtilisateur);
  }

  static insertUtilisateur(mailPeople, namePeople, phonePeople, statusPeople) {
    return axios.post(urlUtilisateur, {
      mailPeople, namePeople, phonePeople, statusPeople
    })
  }

  static insertCard(titleAdvertisements, shortDescription, fullDescription, wages, place, TypeOfJob, hourWeek, CompaniesID, image) {
    return axios.post(urlCard, {
      titleAdvertisements,
      shortDescription,
      fullDescription,
      wages,
      place,
      TypeOfJob,
      hourWeek,
      CompaniesID,
      image
    })
  }

  static insertMessage(message, peopleID, advertisementsID) {
    return axios.post(urlApplyCard, {
      message,
      peopleID,
      advertisementsID
    })
  }


  static modifyUtilisateur(idPeople, mailPeople, namePeople, phonePeople, statusPeople) {
    return axios.put(urlUtilisateur + '/' + idPeople, {
      mailPeople, namePeople, phonePeople, statusPeople
    });
  }

  static modifyEntreprise(idCompanies, nameCompanies) {
    return axios.put(urlEntreprise + '/' + idCompanies, {nameCompanies});
  }

  static modifyCard(idAdvertisements, titleAdvertisements, shortDescription, fullDescription, wages, place, TypeOfJob, hourWeek, CompaniesID, image) {
    return axios.put(urlCard + '/' + idAdvertisements, {
      titleAdvertisements,
      shortDescription,
      fullDescription,
      wages,
      place,
      TypeOfJob,
      hourWeek,
      CompaniesID,
      image
    });
  }
}

export default card;
