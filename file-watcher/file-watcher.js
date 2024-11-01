const fs = require("fs");
const path = require("path");

const sciezkaWatcher = './file-watcher';
const logSciezka = path.join(sciezkaWatcher, "plikWatcher.log");
function logEvent(tresc) {
    const logTresc = `${new Date().toISOString()} - ${tresc}\n`;
    fs.appendFileSync(logSciezka, logTresc);
    console.log(logTresc.trim());
}
if (!fs.existsSync(logSciezka)) {
    fs.writeFileSync(logSciezka, '');
}
let lastEvent;
let timer;
fs.watch(sciezkaWatcher, (eventType, filename) => {
    if (filename) {
        if (filename === 'plikWatcher.log') {
            return;
        }

        if (eventType === 'rename') {
            lastEvent = `Dodano lub usunięto plik: ${filename}`;
        } else if (eventType === 'change') {
            lastEvent = `Zmiana w pliku: ${filename}`;
        }

        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(() => {
            logEvent(lastEvent);
            lastEvent = '';
        }, 1000);
    }
});

console.log(`Monitoruję zmiany w folderze: ${sciezkaWatcher}`);
