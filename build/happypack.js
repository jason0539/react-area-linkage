/**
 * Created by pomy on 20/07/2017.
 */

let HappyPack = require('happypack');
let os = require('os');
let happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

module.exports = function (opts) {
    return {
        id: opts.id,
        threadPool: happyThreadPool,
        verbose: true,
        loaders: opts.loaders,
    };
};
