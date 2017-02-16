# penguin-pug-transform

> [Pug](https://pugjs.org) is a high performance template engine heavily influenced by Haml and implemented with JavaScript for Node.js and browsers.

This transform compiles pug templates located in `components/` of your penguin.js based website to valid penguin components.

## Usage

	$ npm i -S penguin-pug-transform

Include the transform in your `pack` and `serve` commands.

```json
{
  ...
  "scripts": {
    "serve": "penguin serve -t [ penguin-pug-transform ]",
    "pack": "penguin pack -t [ penguin-pug-transform ]"
  }
  ...
}
```

Then you can create pug templates of the following filename scheme: `components/<my-template>.pug`

## Example

`components/my_pug_component.pug`

```
div
  h1 This is my first pug component
  p I can use fields in here: #{fields['title-field']}
```

Now you can use this component in your page/object:

```html
<div data-component='MyPugComponent'></div>
```
