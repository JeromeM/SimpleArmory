export function getUrl(region, realm, character, subSite) {
    if (region === undefined || realm === undefined || character === undefined) {
        console.log("getUrl called with undefined region, realm or character", region, realm, character);
        return '#/';
    }
    let url = '#' + getBaseUrl(region, realm, character);
    if (subSite && subSite !== '') {
        url += '/' + subSite;
    }

    return url;
}

export function getBaseUrl(region, realm, character) {
    if (!character) {
        return '';
    }

    return '/' + region.toLowerCase() + '/' +
        realm.toLowerCase()  + '/' +
        character.toLowerCase();
}

export function navigate(path, region, realm, character) {
    if (!window || !window.document) return;  

    if (region && realm && character) {
        window.document.location.hash = getUrl(region, realm, character, path)
    } else {      
        window.document.location.hash = "#/"
    }
}