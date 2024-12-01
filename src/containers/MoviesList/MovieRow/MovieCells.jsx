import React, { memo } from 'react';

export const EpisodeCell = memo(({ episode_id }) => {
  return <div className="episodeCell">EPISODE {episode_id}</div>;
});

export const TitleCell = memo(({ titleWithEpisode }) => {
  return <div className="titleCell">{titleWithEpisode}</div>;
});

export const ReleaseDateCell = memo(({ release_date }) => {
  return <div className="releaseDateCell">{release_date}</div>;
});
