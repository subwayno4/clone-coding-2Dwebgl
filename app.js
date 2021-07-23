import {Text} from './text.js';

class app {
    constructor() {
      this.setWebgl();
        WebFont.load({
            google: {
              families: ['Hind:700']
            },
            fontactive: () => {
              this.Text = new Text();
              this.Text.setText(
                'A',
                2,
                document.body.clientWidth,
                document.body.clientHeight,
              );
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
}

window.onload = () => {
    new app ();
};