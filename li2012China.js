class OpenUrlExtension {
    constructor(runtime) {
        this.runtime = runtime;
    }

    getInfo() {
        return {
            id: "openUrl",
            name: "打开标签页",
            blocks: [
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

    getOpenAppCommand(app) {
        const commands = {
            Win: `cmd://run ${app}`,
            Mac: `open ${app}`,
            Linux: `xdg-open ${app}`
        };
        const platform = navigator.platform.toLowerCase();
        return commands[platform] || null;
    }
}

Scratch.extensions.register(new OpenUrlExtension());
//By li2012China with github. Just for scratch.
//未经允许，禁止转载！
