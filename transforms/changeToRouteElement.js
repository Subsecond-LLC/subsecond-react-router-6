S('JSXElement.Route').each((route) => {
  const childElement = route.children('JSXElement');

  if (childElement.length > 0) {
    const childElementText = childElement.text();
    childElement.text('');
    route.text(
      (old) =>
        `${old.slice(0, 6)} element={${childElementText}} ${old.slice(6)}`
    );
    return;
  }

  const component = route.find('JSXAttribute.component');

  if (component.length > 0) {
    const componentName = component.children().eq(1).children().text();
    component.text(`element={<${componentName} />}`);
    return;
  }

  const render = route.find('JSXAttribute.render');

  if (render.length > 0) {
    const withoutFunction = render.find('JSXElement').eq(0);

    if (withoutFunction.type() === 'JSXElement') {
      render.text(`element={${withoutFunction.text()}}`);
      return;
    }
  }

  // Check log:34 for all Route element edge cases this codemod couldn't fix
  console.log(route);
});
