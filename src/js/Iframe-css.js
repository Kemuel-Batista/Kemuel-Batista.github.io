window.onload = function() {
  let frameElement = document.getElementById("myiFrame");
  let doc = frameElement.contentDocument;
  doc.body.innerHTML = doc.body.innerHTML + '<style>.map-container-app {width:45%;}</style>';
}