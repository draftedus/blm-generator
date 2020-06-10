# Black Lives Matter <script> generator form
This application is meant to be used in combination with the [BLM Banner](https://github.com/draftedus/blm-banner) project

It allows users to generate the injection script with a different company name and colors.

### Customize the DOM Injection Root

If you'd like to embed this script on your own site, but don't want to use an element with the `id="root"`, you can pass the element ID you'd like the script to inject into via the `data-inject-id` tag on the script.

```javascript
<script src="dist/blm.generator.js" data-inject-id="blmRoot"></script>
```

NOTE: For now, you need to make sure that the element you're injecting into exists by the time this script is invoked. Generally this means putting the script at the bottom of the `<body>`

### Development

First things first, run `npm ci` in order to install the dependencies you will need to develop the project.



In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the bundle for production using `rollup` to the `dist` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.
