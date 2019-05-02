const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
const path = require('path');
module.exports = {
    configureWebpack: config => {
        if (process.env.NODE_ENV !== 'production') return;
        // 在生产环境下
        return {
            plugins: [
                new PrerenderSPAPlugin({
                    //  Required - The path to the webpack-outputted app to prerender.
                    staticDir: path.join(__dirname,'dist'),
                    // Required - Routes to render.
                    routes: ['/', '/aboutnew','/about','/jddkjd'],
                    // The actual renderer to use. (Feel free to write your own)
                    // Available renderers: https://github.com/Tribex/prerenderer/tree/master/renderers
                    renderer: new Renderer({
                        // Optional - Any values you'd like your app to have access to via `window.injectProperty`.
                        inject: {
                            foo: 'bar'
                        },
                        // Other puppeteer options.
                        // (See here: https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#puppeteerlaunchoptions)
                        headless: false, // Display the browser window when rendering. Useful for debugging.
                        // Optional - Wait to render until the specified element is detected using `document.querySelector`
                        renderAfterDocumentEvent: 'render-event' 
                    })
                }),
            ],
        };
    }
}