import {Text} from './text.js';

class app {
    constructor() {
      this.setWebgl();
        WebFont.load({
            google: {
              families: ['Hind:700']
            },
            fontactive: () => {
              
              window.addEventListener('resize', this.resize.bind(this), false);
              this.resize();

              requestAnimationFrame(this.animate.bind(this));
            }
          });
        }
        
        setWebgl(){
          this.renderer = new PIXI.Renderer({
            width: document.body.clientWidth,
            height: document.body.clientHeight,
            antialias: true,
            transparent: false,
            resolution: (window.devicePixelRatio > 1) ? 2 : 1,
            autoDensity: true,
            powerPreference: "high-performance",
            backgroundColor: 0xffffff,
          });
          document.body.appendChild(this.renderer.view);

          this.stage = new PIXI.Container();
        }

        resize() {
          this.stageWidth = documet.body.clientWidth;
          this.stageHeight = documet.body.clientHeight;

          this.renderer.resize(this.stageWidth, this.stageHeight);
        }
}

window.onload = () => {
    new app ();
};