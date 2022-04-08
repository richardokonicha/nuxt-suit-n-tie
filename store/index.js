const store = () => ({
  videos: [],
});

export const mutation = {
  // return {
  //   setVideos: (state, videos) => {
  //     state.videos = videos;
  //   },
  // };
  SET_VIDEOS(state, videos) {
    state.videos = videos;
  },
};

// export const mutation = () => {
//   return {
//     setVideos: (state, videos) => {
//       state.videos = videos;
//     },
//   };
// };
