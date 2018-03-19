class StreetviewElement {
    constructor(element, flagElement) {
        this.flagElement = flagElement;
        this.element = element;
    }

    resetRestrictions() {
        this.allowMove();
        this.allowPan();
        this.allowZoom();
        this.removeMoveLimit();
    }

    setMoveLimit(moves, remainingElement) {
        console.log({moves});
        if (moves === 0)
            this.restrictMove();
        remainingElement.style.display = 'inline-block';
        remainingElement.innerHTML = `Moves: <b>${moves}</b>`;
        this.panorama.addListener('position_changed', () => {
            remainingElement.innerHTML = `Moves: <b>${--moves}</b>`;
            if (moves === 0)
                this.restrictMove();
        });
    }

    removeMoveLimit() {
        google.maps.event.clearListeners(this.panorama, 'position_changed');
    }

    restrictPan() {
        // this.element.querySelector('.gm-compass').style.display = 'none';
        // this.element.querySelector('.widget-scene').style.pointerEvents = 'none';
    }

    allowPan() {
        // this.element.querySelector('.gm-compass').style.display = 'block';
        // this.element.querySelector('.widget-scene').style.pointerEvents = 'all';
    }

    restrictZoom() {
        // this.element.querySelector('div.gmnoprint.gm-bundled-control.gm-bundled-control-on-bottom > div.gmnoprint > div').style.display = 'none';
        this.panorama.setOptions({scrollwheel: false});
    }

    allowZoom() {
        // this.element.querySelector('div.gmnoprint.gm-bundled-control.gm-bundled-control-on-bottom > div.gmnoprint > div').style.display = 'block';
        this.panorama.setOptions({scrollwheel: true});
    }

    restrictMove() {
        this.panorama.setOptions({linksControl: false});
        this.panorama.setOptions({clickToGo: false});
        this.flagElement.style.display = 'none';
    }

    allowMove() {
        this.panorama.setOptions({linksControl: true});
        this.panorama.setOptions({clickToGo: true});
        this.flagElement.style.display = 'block';
    }

    setLocation(lat, lon) {
        document.querySelector('.logg').innerText = 'setLocation';

        if (this.panorama !== undefined) {
            this.panorama.setPosition({lat: lat, lng: lon});
        } else {
            this.panorama = new google.maps.StreetViewPanorama(
                this.element, {
                    position: {lat: lat, lng: lon},
                    // position: { lat: 42.345573, lng: -71.098326 },
                    addressControl: false,
                    linksControl: false,
                    panControl: false,
                    enableCloseButton: false,
                    showRoadLabels: false,
                    motionTracking: false,
                    fullscreenControl: false,
                    motionTrackingControl: false,
                    zoomControl: false,
                    scrollwheel: false,
                    clickToGo: false,
                    // pov: {
                    //     heading: 0,
                    //     pitch: 0,
                    // },
                    // zoom: 0
                });
        }
    }
}
