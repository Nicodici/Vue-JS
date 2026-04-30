const https = require('https')
const fs = require('fs')
const path = require('path')
const { pipeline } = require('stream')
const { promisify } = require('util')
const streamPipeline = promisify(pipeline)

const start = 2278
const end = 2499
const outDir = path.resolve(__dirname, '..', 'public', 'images', 'valentina')
fs.mkdirSync(outDir, { recursive: true })

async function downloadOne(i) {
  const url = `https://imetf.s3.amazonaws.com/Imagenes/8113/35988/Catalogos/39262/DSC0${i}.JPG`
  const dest = path.join(outDir, `DSC0${i}.JPG`)
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) return reject(new Error(`${url} -> HTTP ${res.statusCode}`))
      streamPipeline(res, fs.createWriteStream(dest))
        .then(() => resolve())
        .catch(reject)
    }).on('error', reject)
  })
}

;(async () => {
  console.log(`Saving images to ${outDir}`)
  for (let i = start; i <= end; i++) {
    try {
      process.stdout.write(`Downloading ${i}... `)
      await downloadOne(i)
      console.log('ok')
    } catch (err) {
      console.log('fail:', err.message)
    }
  }
  console.log('Done')
})()
