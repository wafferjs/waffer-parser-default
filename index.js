const fs = require('fs-extra')

const parse = async (file) => {
  const buf = await fs.readFile(file)
  const ext = '.' + file.split('.').slice(-1)[0];

  return { content: buf, ext }
}

module.exports = server => {
  return { parse, ext: null }
}
