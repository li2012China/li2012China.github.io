class OpenUrlExtension {
    constructor(runtime) {
        this.runtime = runtime;
    }

    getInfo() {
        return {
            id: "openUrlv1",
            name: "打开标签页 V1",
            blocks: [
                {
                    opcode: "openHelp",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "打开说明",
                    arguments: {
                        URL: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "https://li2012china.github.io/li2012China.js"
                        }
                    }
                },
                {
                    opcode: "open",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "打开网址 [URL]",
                    arguments: {
                        URL: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "https://www.example.com"
                        }
                    }
                }
            ]
        };
    }

    open(args) {
        const url = args.URL;
        window.open(url, '_blank');
    }

    log(args) {
        console.log(args.MESSAGE);
    }

    openHelp(args) {
        const url = args.URL;
        window.open(url, '_blank');
    }
}

Scratch.extensions.register(new OpenUrlExtension());
