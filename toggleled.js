class ScratchLED {
    constructor() {
    }

    getInfo() {
        return {
            "id": "LED",
            "name": "LED",
            "blocks": [
                {
                    "opcode": "fetchURL",
                    "blockType": "reporter",
                    "text": "toggle led"
                }
            ],
        };
    }

    fetchURL() {
        return fetch("http://192.168.4.1/api/led/toggle").then(response => response.json()).then(data => data[1])
    }
}

Scratch.extensions.register(new ScratchLED())
