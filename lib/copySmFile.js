#! /usr/bin/env node

const fs = require("fs")

function copy(src, dest) {
    fs.writeFileSync(dest, fs.readFileSync(src));
}

function main(argv) {
    copy(argv[0], argv[1]);
}

main(process.argv.splice(2));