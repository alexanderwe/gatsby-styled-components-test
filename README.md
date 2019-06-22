# Test for styled-components issue

Run

```sh
yarn install
# and then
yarn workspace site server
```

to see the issue:

The css is loaded slightly after the page has loaded causing a weird behavior. Maybe reload some times to see the flickering of the text.
