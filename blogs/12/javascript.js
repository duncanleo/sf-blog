
function unindentImages() {
    var images = document.getElementsByTagName('img')
    
    for (var i=0; i<images.length; ++i) {
        var image = images[i]
        image.parentElement.className = "image-p"
    }
    
    var iframes = document.getElementsByTagName('iframe')
    
    // Right now, we have a static height for any iframe content.
    var videoHeight = "56vw"
    var margin = "0px"
    
    for (var i=0; i<iframes.length; ++i) {
        var wrapper = document.createElement('div');
        wrapper.style.marginLeft = margin
        wrapper.style.marginRight = margin
        wrapper.style.height = videoHeight
        var iframe = iframes[i];
        wrapper.appendChild(iframe.cloneNode(true));
        iframe.parentNode.replaceChild(wrapper, iframe)
    }
}

unindentImages();