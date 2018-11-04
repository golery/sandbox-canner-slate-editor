An example of how to use golery-editor

# USE PUBLISHED VERSION OF GOLERY-EDITOR
**/main:**

`: yarn build`

`: yarn publish`
 
Build and publish to npm dist/index.min.js 


**/example/package.json:**

`depedency {
 "golery-editor": "^1.0.0",
}`

**yarn upgrade golery-editor**

**/example/src:**

`import from  from "golery-editor/dist/index.min.js";`


**/example**

`yarn dev`

Access at localhost:8080



# USE LOCAL DEV VERSION OF GOLERY-EDITOR
**/main:**

`: yarn build.dev`
 
Build dist/index.js with source map


**/example/package.json:**

`depedency {
 "golery-editor": "../main",
}`

Use local version

**/example/src:**

`import from  from "golery-editor/dist/index";`

has source map

**/example**

`yarn dev`

Access at localhost:8080


