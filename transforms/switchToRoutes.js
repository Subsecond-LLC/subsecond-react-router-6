// add file names to block here if another component is also named Switch
const fileBlockList = [];

S('JSXIdentifier.Switch, .Switch')
  .filter((sw) => !fileBlockList.some((block) => sw.fileName().includes(block)))
  .name('Routes');
