const baseURL = 'https://api.unsplash.com';
const client_id = 'YfwF2ycjzWXGpVBqpmN9-CmkNqo6v7uHoTtcVQqtDQg';

//https://api.unsplash.com/photos/?client_id=YfwF2ycjzWXGpVBqpmN9-CmkNqo6v7uHoTtcVQqtDQg
export const getPhotosURL = (pageNo) =>
  `${baseURL}/photos/?client_id=${client_id}&page=${pageNo}`;

//https://api.unsplash.com/search/photos/?client_id=YfwF2ycjzWXGpVBqpmN9-CmkNqo6v7uHoTtcVQqtDQg&query=office
export const searchPhotosURL = (searchParam, pageNo) =>
  `${baseURL}/search/photos/?client_id=${client_id}&query=${searchParam}&page=${pageNo}`;
