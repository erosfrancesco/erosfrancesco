# Work in progress

## Asset loader
Used in ATBBattleScene class. \n <br>
Possible asset types (See Phaser loader):
- image
- spritesheet
- audio

```
baseUrl: '../assets/',
image: [{
  key: 'guzma',
  src: './sprites/Guzma.png'
}, {
  key: 'background',
  src: './backgrounds/hip_hop_streets.png'
}],
spritesheet: [{
   key: 'FFVICast', 
   params: { frameWidth: 680 / 4, frameHeight: 756 / 4 }, 
   src: 'ffviCast.png'
}]
```
