// App Data that is derived from other app data

export function getAppEndpoint ( app ) {
    // console.log('app', app)

    if(app.category !== Object(app.category)) {
        console.warn('app has no categories', app)
    }

    if (app.category.slug === 'homebrew') return `/formula/${app.slug}`

    if (app.category.slug === 'games') return `/game/${app.slug}`

    return `/app/${app.slug}`
}

export function getVideoEndpoint ( video ) {

    return `/tv/${video.slug}`
}


