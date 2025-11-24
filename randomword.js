class ScratchFetch {
    constructor() {
    }

    getInfo() {
        return {
            "id": "Fetch",
            "name": "Fetch",
            "blocks": [
                {
                    "opcode": "fetchURL",
                    "blockType": "reporter",
                    "text": "get random word"
                }
            ],
        };
    }

    fetchURL() {
        return fetch("https://random-word-api.vercel.app/api?words=1").then(response => response.json()).then(data => data[0])
    }
}

Scratch.extensions.register(new ScratchFetch())
