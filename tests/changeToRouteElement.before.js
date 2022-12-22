return (
  <Routes>
    <Route path="/children">
      <Element />
    </Route>
    <Route render={() => <Element />} path="/render" />
    <Route component={Element} path="/component" />
  </Routes>
);
