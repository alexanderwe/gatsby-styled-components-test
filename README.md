# Test for styled-components issue

Run

```sh
yarn install
# and then
yarn workspace site serve
```

to see the issue:

The css is loaded slightly after the page has loaded causing a weird behavior. Maybe reload some times to see the flickering of the text.

The "green" styles are visible right at page load, whereas the "red" styles are loaded delayed.

Red styles are specified in `./packages/gatsby-theme-test/src/components/layout.js`

Green styles are specified in `./site/src/pages/index.js`
