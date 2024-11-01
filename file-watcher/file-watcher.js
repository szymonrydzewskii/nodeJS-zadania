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
fs.watch(sciezkaWatcher, (eventType, filename) => {
    if (filename) {
        if (filename === 'plikWatcher.log') {
            return;
        }

        if (eventType === 'rename') {
            lastEvent = `Dodano lub usunięto plik: ${filename}`;
            logEvent(lastEvent)
        } else if (eventType === 'change') {
            lastEvent = `Zmiana w pliku: ${filename}`;
            logEvent(lastEvent)
        }
    }
});

console.log(`Monitoruję zmiany w folderze: ${sciezkaWatcher}`);
