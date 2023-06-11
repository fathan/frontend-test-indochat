import http from '@services/http';

export default {
  getListSeason: (showId = 82) => {
    return http.requestToServer({
      url: `/shows/${ showId }/seasons`,
      method: 'GET'
    });
  }
};