S('.useHistory').text('useNavigate');

S('VariableDeclarator.history')
  .filter((history) => history.find('.useNavigate').length === 1)
  .name('navigate');

S('CallExpression.history.push, CallExpression.history.go').name('navigate');

S('CallExpression.history.replace')
  .name('navigate')
  .text((old) => `${old.slice(0, -1)}, { replace: true })`);

S('CallExpression.history.goBack').text('navigate(-1)');
S('CallExpression.history.goForward').text('navigate(1)');

// there might be some more not covered
// Check log:18 for additional fixes
console.log(S('.history'));
