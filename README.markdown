#What it does
This plugin allows you to take a single html list and break it up into any given number of columns. Also supports nested list items.

#How to use
HTML:

``` html
<div id="list">
  <ul>
    <li>List Item 1</li>
    <li>List Item 2</li>
    <li>List Item 3</li>
    <li>List Item 4</li>
    <li>List Item 5</li>
    <li>List Item 6</li>
    <li>List Item 7</li>
    <li>List Item 8</li>
    <li>List Item 9</li>
    <li>List Item 10</li>
  </ul>
</div>
```

JavaScript:

``` javascript
jQuery( function ($) {
  $('#list > ul').columnizeList({
    columns: 2,
    wrapper_class: 'columnizedList',
    nested_item_class: 'nestedItem'
  });
});
```

html output:

``` html
<div id="list">
  <div class="columnizedList'>
    <ul>
      <li>List Item 1</li>
      <li>List Item 2</li>
      <li>List Item 3</li>
      <li>List Item 4</li>
      <li>List Item 5</li>
    </ul>
    <ul>
      <li>List Item 6</li>
      <li>List Item 7</li>
      <li>List Item 8</li>
      <li>List Item 9</li>
      <li>List Item 10</li>
    </ul>
  </div>
</div>
```


## TODO
- Keep nested lists as actual nested lists instead of using classes.
- Allow an infinit number of nested lists.

