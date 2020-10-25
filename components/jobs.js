import axios from "axios";

const url = "http://localhost:3000/api/v1/jobs";

class jobs {

  static getJobs() {
   return axios.get(url);

  }

  // static methode create

  static insertJobs(nameClient) {
    return axios.post(url, {
      nameClient
    })
  }
  static putJobs(put,id) {
    return axios.put(url,put);
  }
  // static methode delete
  static deleteJobs(id) {
    return axios.delete(url+'/'+id);
  }


}

export default jobs;
