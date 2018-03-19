/*
* @Author: naoyeye
* @Date:   2018-03-19 12:45:19
* @Last Modified by:   naoyeye
* @Last Modified time: 2018-03-19 13:00:38
*/
window.distribution = { weighted: 0, uniform: 1 }
document.addEventListener('DOMContentLoaded', init());

async function init() {
  console.log('init')
    // let map = decodeURI(location.hash.substring(1));
    // window.addEventListener('hashchange', () => {
    //     location.reload();
    // });
    let map = ''
    if (map === '')
        map = 'world';

    console.log("Map: ", map);

    let mapManager = new MapManager();
    await mapManager.initialize();
    map = await mapManager.getMap(map);

    let game = new Game(map, document.querySelector('.estimator'), { weighted: 0, uniform: 1 });

    game.setRules()

    // let svElement = new StreetviewElement(document.querySelector('.streetview'));

    // streetview = new Streetview(maps.world);
    // let location = await streetview.randomValidLocation();

    // svElement.setLocation(...location);
    // console.log({ location });
}

function goHome() {
    location.href = '../';
}