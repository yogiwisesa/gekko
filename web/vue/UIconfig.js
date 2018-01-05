// This config is used in both the
// frontend as well as the web server.

// see https://github.com/askmike/gekko/blob/stable/docs/installing_gekko_on_a_server.md

const CONFIG = {
    headless: true,
    api: {
        host: '127.0.0.1',
        port: 3000,
    },
    ui: {
        ssl: true,
        host: 'giwtradingbot.herokuapp.com',
        port: 443,
        path: '/' // change this if you are serving from something like `example.com/gekko`
    },
    adapter: 'sqlite'
}

if(typeof window === 'undefined')
  module.exports = CONFIG;
else
  window.CONFIG = CONFIG;
