function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var nodeList = document.querySelectorAll('.ranked-list li');
  for (let i = 0; i < nodeList.length; i++) {
    let li = nodeList[i];
    li.innerHTML = parseInt(li.innerHTML) + n;
  }
}

function deepestChild() {
  let resultNode = null;
  let deepestDepth = -1;

  let fnFindDeepestChild = (node, depth) => {
    for (var i = 0; i < node.childNodes.length; i++) {
      let child = node.childNodes[i];
      if (child.nodeType !== 1) { continue; } // only process element nodes

      if (depth > deepestDepth) {
        resultNode = child;
        deepestDepth = depth;
      }

      fnFindDeepestChild(child, depth + 1);
    }
  };
  fnFindDeepestChild(document.querySelector('#grand-node'), 0);
  return resultNode;
}
