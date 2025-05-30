// scripts/prepare-examples.mjs
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { globby } from 'globby'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const PROJECT_ROOT = path.resolve(__dirname, '..')
const EXAMPLES_SRC = path.join(PROJECT_ROOT, 'examples')
const EXAMPLES_DEST = path.join(PROJECT_ROOT, 'app/code/examples')

// File extensions we want to include
const ALLOWED_EXTENSIONS = new Set(['.ts', '.tsx', '.js', '.jsx', '.vue', '.svelte', '.md'])

// Function to find all example files
async function findExampleFiles() {
  const files = await globby([
    '**/*.{ts,tsx,js,jsx,vue,svelte,md}',
    '!node_modules/**',
    '!**/code/**',
    '!.nuxt/**',
    '!dist/**'
  ], { 
    cwd: EXAMPLES_SRC,
    onlyFiles: true
  })

  return files
}

async function copyExampleFiles(files) {
  await fs.mkdir(EXAMPLES_DEST, { recursive: true })
  
  for (const relPath of files) {
    const srcPath = path.join(EXAMPLES_SRC, relPath)
    const destPath = path.join(EXAMPLES_DEST, relPath)
    
    try {
      // Create destination directory if it doesn't exist
      await fs.mkdir(path.dirname(destPath), { recursive: true })
      
      // Copy file
      await fs.copyFile(srcPath, destPath)
      console.log(`✅ Copied: ${relPath}`)
    } catch (error) {
      console.error(`❌ Error copying ${relPath}:`, error.message)
    }
  }
}

async function main() {
  try {
    // Clean destination
    await fs.rm(EXAMPLES_DEST, { recursive: true, force: true })
    
    // Find and copy all example files
    const exampleFiles = await findExampleFiles()
    console.log(`Found ${exampleFiles.length} example files to copy`)
    
    await copyExampleFiles(exampleFiles)
    console.log(`✅ Successfully copied example files to ${path.relative(PROJECT_ROOT, EXAMPLES_DEST)}/`)
  } catch (error) {
    console.error('❌ Error:', error)
    process.exit(1)
  }
}

main()