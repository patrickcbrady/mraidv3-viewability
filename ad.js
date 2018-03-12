if (typeof mraid === 'undefined') {
    console.warn("ERROR: no MRAID Object");
    initViewabilityChart();
}
else {
    var initialState = mraid.getState();
    if (initialState === 'loading') {
        mraid.addEventListener('ready', initViewabilityChart);
    }
    else if (initialState === 'default') {
        initViewabilityChart();
    }
}