# Subsecond React Router 6

Codemod package for upgrading to react-router@6 for use with [subsecond.app](https://www.subsecond.app)

## Disclaimer

This library is still in active development and will require some manual work to apply to any codebase. Please use with caution and always do a thorough review of any changes.

## Transforms:

- `<Switch>` to `<Routes>`
- Change to `<Route element={...} />`
- `<Route exact>` fix
- useHistory to useNavigate
- `<Redirect>` to `<Navigate>`

There are still a quite a few edge cases to iron out and fixes to add, but this is a good start.