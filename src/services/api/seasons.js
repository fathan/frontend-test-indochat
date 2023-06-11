import http from '@services/http';

export default {
  getListSeason: () => {
    return http.requestToServer({
      url: '/shows/82/seasons',
      method: 'GET'
    });
  }
};