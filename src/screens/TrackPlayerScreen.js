import React, {useEffect} from 'react';
import MainPlayer from './MainPlayer';

import TrackPlayer, {usePlaybackState} from 'react-native-track-player';

import {useSelector} from 'react-redux';
import {
  useTrackPlayerEvents,
  TrackPlayerEvents,
  STATE_PLAYING,
} from 'react-native-track-player';
const events = [
  TrackPlayerEvents.PLAYBACK_STATE,
  TrackPlayerEvents.PLAYBACK_ERROR,
];

import playlist from './playlist.json';

const TrackPlayerScreen = () => {
  const playbackState = usePlaybackState();

  const currentSong = useSelector(state => state.video.currentVideo);
  // const upNextSongs = useSelector(state => state.video.upNextVideos);
  useTrackPlayerEvents(events, event => {
    if (event.type === TrackPlayerEvents.PLAYBACK_ERROR) {
      console.warn('An error occurred while playing the current track.');
    }
    if (event.type === TrackPlayerEvents.PLAYBACK_STATE) {
      setState(playbackState);
    }
  });
  useEffect(() => {
    setup();
    return () => {
      TrackPlayer.reset();
      console.log('umount');
    };
  }, [currentSong]);

  async function setup() {
    console.log('setup player');
    await TrackPlayer.setupPlayer();
    await TrackPlayer.updateOptions({
      stopWithApp: true,
      capabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
        TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
        TrackPlayer.CAPABILITY_STOP,
      ],
      compactCapabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
      ],
    });
    // await TrackPlayer.add(upNextSongs);
    await TrackPlayer.add(currentSong);
    await TrackPlayer.play();
  }

  async function togglePlayback() {
    const currentTrack = await TrackPlayer.getCurrentTrack();
    if (currentTrack == null) {
      return false;
    } else {
      if (playbackState === TrackPlayer.STATE_PAUSED) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  }

  function getStateName(state) {
    switch (state) {
      case TrackPlayer.STATE_NONE:
        return 'None';
      case TrackPlayer.STATE_PLAYING:
        return 'Playing';
      case TrackPlayer.STATE_PAUSED:
        return 'Paused';
      case TrackPlayer.STATE_STOPPED:
        return 'Stopped';
      case TrackPlayer.STATE_BUFFERING:
        return 'Buffering';
    }
  }

  async function skipToNext() {
    try {
      console.log('next');
      await TrackPlayer.skipToNext();
      // await TrackPlayer.reset();
      // await TrackPlayer.add(playlistData[1]);
      // await TrackPlayer.play();
    } catch (_) {}
  }

  async function skipToPrevious() {
    try {
      await TrackPlayer.skipToPrevious();
    } catch (_) {}
  }

  return (
    <>
      <MainPlayer
        onNext={skipToNext}
        onPrevious={skipToPrevious}
        onTogglePlayback={togglePlayback}
      />
    </>
  );
};

export default TrackPlayerScreen;
