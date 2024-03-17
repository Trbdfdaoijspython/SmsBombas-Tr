function console_title(x) {
    if (process.platform == 'win32') {
        process.title = x + " / Sms v1.0 - github.com/fastuptime";
    } else {
        process.stdout.write('\x1b]2;' + x + " / Sms v1.0 - github.com/fastuptime" + '\x1b\x5c');
    }
}

module.exports = console_title;
