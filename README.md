# Sound Effects for the Captain is Dead

A simple HTML page which has a responsive web design to render nicely on mobile and desktop.
The page consists of buttons which when pressed use Javascript to play the mp3 files in the assets directory.

The top text "The Captain is Dead!" plays the sound: ./assets/deadjim.mp3.

The grid layout of buttons is:

```
| Alert | Damage |
| External Scanners |
| Comm System |
| Shields |
| Torpedo tube |
| Teleporter |
| Jump Core |
| Win | Lose |
```

The button name to mp3 name links are as follows:

- Button Alert - ./assets/alert.mp3
- Damage - ./assets/damage.mp3
- External Scanners - ./assets/scanners.mp3
- Comm System - ./assets/comms.mp3
- Shields - ./assets/shields.mp3
- Torpedo tube - ./assets/torpedo.mp3
- Teleporter - ./assets/teleporter.mp3
- Jump Core - ./assets/warpcore.mp3
- Win - ./assets/warpaway.mp3
- Lose - ./assets/warpcore-collapsed.mp3

The page uses HTML, simple CSS and Javascript.
No Javascript frameworks, or node/npm libraries are required.

The final static HTML page can be rendered by running `npx serve .`
