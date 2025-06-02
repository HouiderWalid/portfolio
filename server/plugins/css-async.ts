export default defineNitroPlugin((nitroApp) => {

    // this prevents css from blocking render
    nitroApp.hooks.hook('render:response', response => {
        if (response.body) {
            response.body = response.body.replace(
                /<link\s+.*?rel="stylesheet".*?href="(.*?)".*?>/g,
                '<link rel="preload" as="style" href="$1" onload="this.onload=null;this.rel=\'stylesheet\'">'
            );
        }
    })
})