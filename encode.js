function encode (value) {

// Collapse ᏣᎳᎩ to uppercase
  value = value.toUpperCase()

// Collapse quotes to the same one
// “” -> " -> $
// curly singles to '
// , -> "

	value = value.replace(/Ꭳ/g,"-")
  value = value.replace(/Ꮟ/g,"Y")
  value = value.replace(/Ᏺ/g,"|")


	return value
	}
