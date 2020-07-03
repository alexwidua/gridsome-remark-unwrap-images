const visit = require('unist-util-visit')

module.exports = function unwrapImage() {
	return function transform(tree) {
		visit(tree, `paragraph`, (node, index, parent) => {
			const hasOnlyImagesNodes = node.children.every((child) => {
				// gridsome images are html blocks
				// https://github.com/gridsome/gridsome/blob/master/packages/transformer-remark/lib/plugins/image.js#L42-L45
				return child.type === 'html' && child.url
			})

			if (!hasOnlyImagesNodes) {
				return
			}

			parent.children.splice(index, 1, ...node.children)

			return index
		})
	}
}
