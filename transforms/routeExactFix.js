S('JSXElement.Route').each((route) => {
  const exact = route.find('JSXAttribute.exact');

  if (exact.length > 0) {
    exact.text('');
    return;
  }

  // You might have to add a * to the non exact routes now
  // Check through them and make sure in the log:11
  console.log(route);
});
