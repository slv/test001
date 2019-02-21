export const getPhotoList = state => (state.photos && state.photos.items) || [];

export const getPhotoLoading = state =>
  (state.photos && state.photos.loading) || false;
