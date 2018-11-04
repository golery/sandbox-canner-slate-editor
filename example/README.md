An example of how to use golery-editor

# USE LOCAL DEV VERSION OF GOLERY-EDITOR
**/main:**
`yarn link`
`yarn build.dev`
 
Build only dist/index.dev.js with source map. It's faster.

**/example/package.json:**
`yarn link golery-editor`

Use local version

**/example/src:**

`import from  from "golery-editor/dist/index.dev.js";`

has source map

**/example**

`yarn dev`

Access at localhost:8080


# MORE
**Build**
/main:
yarn build - Build both index.dev.js with source map and index.min.js for production
yarn build.dev - Build only index.dev.js, much faster

**Package.json**
/example:

`"golery-editor": "*"`

Use latest version.
If you don't want to use link version
/example:
`yarn unlink`
then use published version
`yarn add golery-editor`
or use local version (still needs yarn upgrade golery-editor)
`yarn install ../main`

# PUBLISHED VERSION AND TEST PRODUCTION VERSION
**/main:**
`: yarn build`

`: yarn publish`
 
Build and publish to npm dist/index.min.js 


**/example/package.json:**

`depedency {
 "golery-editor": "*",
}`

`yarn upgrade golery-editor`

**/example/src:**

`import from  from "golery-editor/dist/index.min.js";`


**/example**

`yarn dev`

Access at localhost:8080
