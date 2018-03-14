function init(cb) {
    injectMRAIDTag();
    setTimeout(cb, 0);
}

function main() {
    if (isValidEnvironment()) {
        fallback();
    }
    else {
        fallback();
    }
}

function injectMRAIDTag() {
    var script = document.createElement("script");
    script.src = "mraid.js";
    document.head.appendChild(script);
}

function isValidEnvironment() {
    if (typeof mraid === "undefined") return false;
    return (isVersionValid() && isEnvObjectPresent());
}

function isVersionValid() {
    return parseInt(mraid.getVersion()) >= 3;
}

function isEnvObjectPresent() {
    return typeof window.MRAID_ENV === 'object'
}

function getFallbackReason() {
    var reasons = [];
    if (!isEnvObjectPresent()) reasons.push("MRAID_ENV object is not present");
    if (!isVersionValid()) reasons.push("MRAID Version is not 3 or higher");
    return reasons.join(" and ");
}

function fallback(reason) {
    clearBody();
    displayMessage("Environment is not MRAIDV3 Compatible because " + getFallbackReason());
}

function displayMessage(msg) {
    var div = getBlankDiv();
    var p = document.createElement("p");
    p.style.position = "relative";
    var node = document.createTextNode(msg);
    p.appendChild(node);
    div.appendChild(p);
    document.body.appendChild(div);
    vCenterElement(p);
}

function vCenterElement(el) {
    var parentRect = el.parentElement.getBoundingClientRect();
    var elRect = el.getBoundingClientRect();
    var elTop = (parentRect.height / 2) - (elRect.height / 2);
    el.style.top = elTop + "px";
}

function clearBody () {
    var body = document.body;
    while (body.firstChild) {
        body.removeChild(body.firstChild);
    }
}

function getBlankDiv() {
    var div = document.createElement("div");
    var pageHeight = window.innerHeight;
    var pageWidth = window.innerWidth;
    div.style.width = pageWidth + "px";
    div.style.height = pageHeight + "px";
    div.style.backgroundColor = "rgba(255,255,255,1)";
    return div;
}

init(main);