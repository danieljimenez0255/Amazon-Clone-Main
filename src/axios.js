import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-stripe.cloudfunctions.net/api", //API (cloud function) URL
});

export default instance;
