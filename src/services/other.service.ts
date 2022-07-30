import axios from 'axios';

class OtherServices {
  async rFetchExperiments() {
    const response = await axios
      .get('rFetchExperiments')
      .then((res) => res)
      .catch((err) => err.response);
    return response;
  }
  async rSubmitSelection() {
    const response = await axios
      .get('rSubmitSelection')
      .then((res) => res)
      .catch((err) => err.response);
    return response;
  }
}

export default new OtherServices();
