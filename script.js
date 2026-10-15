'use strict';

// Relative URLs work both from file:// and a static web server.
const soundButtons = document.querySelectorAll('[data-sound]');
const stopButton = document.querySelector('#stop-sound');
const status = document.querySelector('#playback-status');
let currentPlayback = null;

function stopPlayback(message = 'Sound stopped.') {
  if (currentPlayback) {
    currentPlayback.audio.pause();
    currentPlayback.audio.currentTime = 0;
    currentPlayback.button.classList.remove('is-playing');
    currentPlayback = null;
  }
  stopButton.disabled = true;
  status.textContent = message;
}

function playSound(button) {
  stopPlayback();

  // A new audio instance makes repeat presses restart the effect immediately.
  const audio = new Audio(`./assets/${button.dataset.sound}.mp3`);
  const playback = { audio, button };
  currentPlayback = playback;
  stopButton.disabled = false;
  status.textContent = `Loading: ${button.textContent}.`;

  audio.addEventListener('playing', () => {
    if (currentPlayback === playback) {
      button.classList.add('is-playing');
      status.textContent = `Playing: ${button.textContent}.`;
    }
  });

  audio.addEventListener('ended', () => {
    if (currentPlayback === playback) stopPlayback('Ready for your command.');
  }, { once: true });

  function handlePlaybackError() {
    // Ignore errors from effects that have already been stopped or replaced.
    if (currentPlayback === playback) {
      stopPlayback(`Unable to play ${button.textContent}. Check that the audio file is available.`);
    }
  }

  audio.addEventListener('error', handlePlaybackError, { once: true });
  audio.play().catch(handlePlaybackError);
}

soundButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    playSound(button);
  });
});
stopButton.addEventListener('click', () => stopPlayback());
