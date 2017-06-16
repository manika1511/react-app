import axios from 'axios';

function restClient() {
  this.baseUrl = "http://localhost:3000/";
}

restClient.prototype = {
  getRacks: function(val) {
      return axios.post(this.baseUrl + 'rack', {
        dc: val,
      });
  }
};

exports.restClient = new restClient();
