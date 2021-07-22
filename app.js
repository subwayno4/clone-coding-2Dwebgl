class app {
    constructor() {

        WebFont.load({
            google: {
              families: ['Hind:700']
            }
          });
    }
}

window.onload = () => {
    new app ();
};