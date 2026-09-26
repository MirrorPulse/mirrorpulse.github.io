import { existsSync, readdirSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'

const root = join(process.cwd(), 'dist', 'cfsharp')
const required = ['index.html']

if (!existsSync(root)) {
  throw new Error('dist/cfsharp is missing')
}

for (const file of required) {
  if (!existsSync(join(root, file))) {
    throw new Error(`dist/cfsharp/${file} is missing`)
  }
}

function countFiles(directory) {
  return readdirSync(directory).reduce((count, entry) => {
    const path = join(directory, entry)
    return count + (statSync(path).isDirectory() ? countFiles(path) : 1)
  }, 0)
}

console.log(`CfSharp documentation bundle verified (${countFiles(root)} file(s))`)
console.log(`Bundle root: ${relative(process.cwd(), root)}`)
