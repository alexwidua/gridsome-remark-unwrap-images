<img src="icon.svg" align="right" width="200" height="145" />

# gridsome-remark-unwrap-images

`gridsome-remark-unwrap-images` unwraps transformed gridsome images from its paragraph tag, allowing for advanced styling such as medium-width paragraphs and full-width images (Medium-style articles).

The plugin is a port of [gatsby-remark-unwrap-images](https://github.com/cedricdelpoux/gatsby-remark-unwrap-images).

## Install

```bash
npm install gridsome-remark-unwrap-images
```

## Usage

Configure `gridsome.config.js` to use the plugin.

```js
module.exports = {
	siteName: 'Gridsome Blog',
	siteDescription: 'A simple Gridsome blog',

	transformers: {
		remark: {
			plugins: [
				// Add remark-unwrap-images plugin
				'gridsome-remark-unwrap-images'
			]
		}
	}
}
```

## :warning: Caveat

The image must be in a separate line with one line space to the next content block; otherwise the image is still wrapped in a `<p>` tag.

#### :white_check_mark: Image is unwrapped

**Markdown input**

```md
I'm a paragraph.

![I'm an image](image.jpg)
```

**HTML output**

```html
<div>
	<p>I'm a paragraph.</p>
	<img alt="I'm an image" src="image.jpg" />
</div>
```

#### :x: Image gets wrapped (default)

**Markdown input**

```md
I'm a paragraph.
![I'm an image](image.jpg)
```

**HTML output**

```html
<div>
	<p>
		I'm a paragraph.
		<img alt="I'm an image" src="image.jpg" />
	</p>
</div>
```

## License

See the [LICENSE](./LICENSE) file for details.
