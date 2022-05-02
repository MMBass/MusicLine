<!-- markdownlint-disable-next-line -->

<h1 align="center">MusicLine </h1>

<div align="center">

</div>

## Setup

Install the npm packages.

```sh
npm i
```
In serverAxios.ts 'baseUrl' put whatever server link you have. For example:

```sh
 https://{project-name}.herokuapp.com/
```
Start dev server on localhost  for production run
```sh
 npm run dev
```
For production version run 
```sh
 npm run build
 npm run preview
```

<br>
<br>

## Deploy to github pages

### *Make sure you have set the repo, and the gh-pages option in github settings is on

### 1. Push the project folder (not the build) to the main branche

### 2. Replace the hompage in package.json to your repo name
```json
   "homepage": "https://<user-name>.github.io/<repo-name>/",
```

### 3. In vite.config file change the base to your repository name
```js
   base: '/<REPO-NAME>/',
```
### 4. Then just run 
```sh
   npm run deploy
```
Thats will build the app & create gh-pages branche (if doasn't exist) & add & commit & push the dist to branch gh-pages.