// import modules (es6)
import StylizedMenuBackground from './phaser/stylizable-background.js';
import ColorMap from '../colorMap.js';


// Some settings
const _backgroundFFVITextureId     = 'FFVIBlueGradient';
const _backgroundFFVITextureWidth  = 256;
const _backgroundFFVITextureHeight = 256;



// return a FFVI-style background
const backgroundFFVIStyling = ({ scene, width, height, x, y }) => {

    if (!scene.textures.exists(_backgroundFFVITextureId)) {
        
        const canvas = scene.textures.createCanvas(_backgroundFFVITextureId, _backgroundFFVITextureWidth, _backgroundFFVITextureHeight);
        const grd = canvas.context.createLinearGradient(0, 0, 0, _backgroundFFVITextureHeight);

        grd.addColorStop(0, ColorMap.colors.aqua);
        grd.addColorStop(1, ColorMap.colors.navy);

        canvas.context.fillStyle = grd;
        canvas.context.fillRect(0, 0, _backgroundFFVITextureWidth, _backgroundFFVITextureHeight);

        canvas.refresh();
    }

    const background = scene.add.image(x, y, _backgroundFFVITextureId );
    background.setScale(width / _backgroundFFVITextureWidth, height / _backgroundFFVITextureHeight);
    
    return background;
}





export default class FFVIMenuBackground extends StylizedMenuBackground {
    constructor(options) {
        options.styling = backgroundFFVIStyling;
        super(options);
    }
}


