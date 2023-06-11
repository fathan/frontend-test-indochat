import http from '@services/http';

export default {
  getListEpisode: (showId = 82) => {
    return http.requestToServer({
      url: `/shows/${ showId }/episodes`,
      method: 'GET'
    });
  },
  getListEpisodeBySeasonId: (seasonId) => {
    return http.requestToServer({
      url: `/seasons/${ seasonId }/episodes`,
      method: 'GET'
    });
  },
  getDetailEpisode: (episodeId) => {
    return http.requestToServer({
      url: `/episodes/${ episodeId }`,
      method: 'GET'
    });
  }
};