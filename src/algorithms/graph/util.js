const pathTo = function (nodeFrom, src, target) {
  if (!(target in nodeFrom))
    throw new Error("Target node doesn't exist in any of the paths");

  const path = [];
  let v = target;

  while (v !== src) {
    path.push(v);
    v = nodeFrom[v];
  }

  path.push(src);
  return path.reverse();
};

module.exports = { pathTo };
