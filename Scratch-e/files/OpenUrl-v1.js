class OpenUrlExtension {
    constructor(runtime) {
        this.runtime = runtime;
    }

    getInfo() {
        return {
            id: "openUrlv1",
            name: "打开新标签页",
            blocks: [
                {
                    opcode: "openLink",
                    blockType: "button",
                    text: "🏠 主页"
                },
                {
                    opcode: "openHelp",
                    blockType: "button",
                    text: "📖 帮助文档"
                },
                {
                    opcode: "open",
                    blockType: "command",
                    text: "打开网址 [URL]",
                    arguments: {
                        URL: {
                            type: "string",
                            defaultValue: "https://www.example.com"
                        }
                    }
                }
            ],
            menus: {
                openHelp: {
                    acceptReport: true,
                    items: ["help"]
                }
            },
            hasPrimitives: true
        };
    }

    open(args) {
        const url = args.URL;
        if (url && typeof url === 'string' && this.isValidUrl(url)) {
            window.open(url, '_blank');
        } else {
            console.error('无效的URL');
            throw new Error('提供的URL无效');
        }
    }

    openLink() {
        window.open('https://li2012china.github.io', '_blank');
    }

    openHelp() {
        window.open('https://li2012china.github.io/li2012China.js', '_blank');
    }

    isValidUrl(string) {
        try {
            new URL(string);
            return true;
        } catch (e) {
            return false;
        }
    }
}

// 注册扩展
if (typeof Scratch !== 'undefined' && typeof Scratch.extensions !== 'undefined' && typeof Scratch.extensions.register === 'function') {
    Scratch.extensions.register(new OpenUrlExtension(Scratch.runtime));
} else {
    console.error('Scratch环境未定义或不完整');
}
// By li2012China or 李EEEEE呀-MC.