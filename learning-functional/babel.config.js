module.exports = function (api) {
    console.log('babel is coming...')
    console.log('===================')
    console.log('搞了几把半天, 好好学习了要')
    api.cache(true)
    const presets = [
        [
            '@babel/preset-env',
            {
                "targets": {
                    "esmodules": true
                }
            }
        ]
    ];
    return {
        presets
    };
}