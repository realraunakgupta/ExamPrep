/* Force HTTPS for static Surge deployment */
if (location.protocol !== 'https:' && location.hostname.endsWith('surge.sh')) {
    location.replace(`https:${location.href.substring(location.protocol.length)}`);
}
