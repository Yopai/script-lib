//-------------------------------------
function xget(root, expr, type) {
    var xpr = document.evaluate(expr, root, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
    if (type === 1) {
       if (xpr.snapshotLength) {
          result = xpr.snapshotItem(0);
       }
       else {
          result = null;
       }
    }
    else {
       result = [];
       for (i=0; i<xpr.snapshotLength; i++) {
           result[i] = xpr.snapshotItem(i);
       }
    }
    return result;
}
