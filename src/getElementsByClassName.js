// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// You should use document.body, element.childNodes, and element.classList

// document.body - https://developer.mozilla.org/en-US/docs/Web/API/Document/body
// element.childNodes - https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes
// element.classList - https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

/*
<div> // nodes[0]
  <div></div> // nodes[0].childNodes[0]
  <div> // nodes[0].childNodes[1]
    <div class="targetClassName"></div> // nodes[0].childNodes[1].childNodes[0]
  </div>
</div>
*/

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var body = document.body;
  var output = getChildNodes(body, className);
  // grabbing the document.body or equivalent and stuffing this in a variable
  console.log('getElementsByClassName Output:', output);
  return output;
};

// helper function to loop through nodes
var getChildNodes = function (html, className) {
  var output = [];
  if (html.classList !== undefined) {
    if (html.classList.contains(className)) {
      // push to output array
      output.push(html);
    }
  }
  var nodes = html.childNodes;
  // for each html.childNode
  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];
    // if has class in classList
    // https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/contains

    if (node.classList !== undefined) {
      if (node.classList.contains(className)) {
        // push to output array
        output.push(node);
      }
    }
    // if has childNodes
    if (node.childNodes.length > 0) {
      // run getChildNodes name on the child nodes
      for (var j = 0; j < node.childNodes.length; j++) {
        var childNodes = getChildNodes(node.childNodes[j], className);
        if (childNodes.length > 0) {
          output.push(childNodes);
        }
      }
    }
  }
  console.log('getChildNodes:', output);
  return output.flat();
};
