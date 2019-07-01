module.exports = {
    "skipWaiting": true,
    "globDirectory": "./",
    "globIgnores": [
        //"node_modules/**/*",
        "package*",
        "workbox-config.js"
    ],
    "globPatterns": [
        "**/*.{js,html,json,md,xml,png,ico,lock}"
    ],
    "swDest": "sw.js"
};
