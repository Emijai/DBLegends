const cheat = (async () => {
        if (String(Function.prototype.call).includes('native')) {
            let call = Function.prototype.call;
            let iframe = document.createElement("iframe");
            document.body.append(iframe);
            iframe.style.display = "none";
            let funcs = {
                querySelectorAll: function () {
                    if (["#JODGUI", "#JODMOBILE", "#currPageEl", "#YTRkNmM2MWEtOTg3Zi00YmE1LWI1NzUtNTgyOTUzMWI4ZDYx", "#ODJkMThlMDEtYmEwNi00MzE4LTg4ZGMtM2Y2ZDI0MzY4ZjU2", ".cheatList", ".cheatName", "bG1mYW8=", "#aXQncyBjYXQgYW5kIG1vdXNlIGF0IHRoaXMgcG9pbnQ"].includes(arguments[0]))
                        return [];
                    return iframe.contentDocument.querySelectorAll.apply(document, arguments);
                },
                querySelector: iframe.contentDocument.querySelector.bind(document),
                includes: function () {
                    if (["Cheats", "Global", "Global Cheats", "Discord - oneminesraft2", "Auto Answer (Toggle)", "Auto Sell Dupes On Open", "Spam Buy Blooks", "Food Game", "Change Blook Ingame", "Get Daily Rewards", "Remove Name Limit", "Simulate Unlock", "Cheat ESP", "Gold Quest Cheats", "Cafe Cheats", "Crypto Hack Cheats", "Deceptive Dinos Cheats", "Tower Defense Cheats", "Tower Defense2 Cheats", "Factory Cheats", "Fishing Frenzy Cheats", "Flappy Blook Cheats", "Tower of Doom Cheats", "Crazy Kingdom Cheats", "Racing Cheats", "Battle Royale Cheats", "Blook Rush Cheats", "Monster Brawl Cheats", "Santa's Workshop Cheats"].includes(arguments[0]))
                        return false;
                    return iframe.contentWindow.String.prototype.call(this, arguments);
                },
                fetch: iframe.contentWindow.fetch.bind(window),
                btoa: iframe.contentWindow.btoa.bind(window),
                getItem: iframe.contentWindow.localStorage.getItem.bind(window.localStorage)
            }, funcNames = Object.keys(funcs);
