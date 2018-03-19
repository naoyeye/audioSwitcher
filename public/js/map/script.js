/*
* @Author: naoyeye
* @Date:   2018-03-19 12:45:19
* @Last Modified by:   naoyeye
* @Last Modified time: 2018-03-19 17:58:28
*/
window.distribution = { weighted: 0, uniform: 1 }
document.addEventListener('DOMContentLoaded', init);



async function init() {
    document.querySelector('.logg').innerText = 'DOMContentLoaded'
    document.querySelector('.logg').innerText = 'init'
    let map = decodeURI(window.location.hash.substring(1));
    // window.addEventListener('hashchange', () => {
    //     window.location.reload();
    // });
    // let map = ''
    console.log("Map 1: ", map);
    if (map === '') {
      map = 'world';
    }

    console.log("Map: ", map);

    document.querySelector('.logg').innerText = '1'
    let mapManager = new MapManager();
    document.querySelector('.logg').innerText = '2'
    await mapManager.initialize();
    document.querySelector('.logg').innerText = '3'
    map = await mapManager.getMap(map);
    document.querySelector('.logg').innerText = '4'
    let game = new Game(map, document.querySelector('.estimator'), { weighted: 0, uniform: 1 });
    document.querySelector('.logg').innerText = '5'

    game.setRules()
    document.querySelector('.logg').innerText = '6'

    // let svElement = new StreetviewElement(document.querySelector('.streetview'));

    // streetview = new Streetview(maps.world);
    // let location = await streetview.randomValidLocation();

    // svElement.setLocation(...location);
    // console.log({ location });
    // 
    // 
    $('.next-round-button').click(() => {
        game.nextRoundButton()
    })
}

function goHome() {
    window.location.href = '../';
}