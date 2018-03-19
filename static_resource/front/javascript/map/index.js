// Todo:
// Map editor maken
// Style return home button
// Photosphere gamemode toevoegen
// Load size van voorpagina verminderen


import Streetview from './Streetview';
import Game from './Game';

import MapManager from './MapManager';


class MapApp {
    constructor(distribution) {
        this.distribution = { weighted: 0, uniform: 1 };
        this.init()
    }

    async init() {

        console.log('location.hash - ', window.location.hash)

        let map = decodeURI(window.location.hash.substring(1));
        window.addEventListener('hashchange', () => {
            window.location.reload();
        });
        if (map === '') {
          map = 'world';
        }

        alert('hahha')

        console.log("Map: ", map);

        document.querySelector('.logg').innerText = '1';

        let mapManager = new MapManager();
        document.querySelector('.logg').innerText = '2';

        await mapManager.initialize();
        document.querySelector('.logg').innerText = '3';
        

        map = await mapManager.getMap(map);
        document.querySelector('.logg').innerText = '4';


        let game = new Game(map, document.querySelector('.estimator'), this.distribution);

        document.querySelector('.logg').innerText = '5';
        game.setRules()

        document.querySelector('.logg').innerText = '6';


        // let svElement = new StreetviewElement(document.querySelector('.streetview'));

        // streetview = new Streetview(maps.world);
        // let location = await streetview.randomValidLocation();

        // svElement.setLocation(...location);
        // console.log({ location });
    }
}

export default MapApp


var app = new MapApp();

$('#start-btn').click(() => {
    game.setRules()
})


function goHome() {
    window.location.href = '../';
}
