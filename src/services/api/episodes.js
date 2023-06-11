import http from '@services/http';

export default {
  getListEpisode: () => {
    return http.requestToServer({
      url: '/shows/82/episodes',
      method: 'GET'
    });
  },
  getListEpisodeBySeasonId: (seasonId) => {
    return http.requestToServer({
      url: `/season/${ seasonId }/episodes`,
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