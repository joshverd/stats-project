# stats-project
A demo is hosted on [https://stats.joshverd.com](stats.joshverd.com)

Built this weekend by hand using React, SCSS, and JavaScript. Most source code files are in `./src`.

This only contains the Problem Statement and three sub-questions. The solutions will be turned in as a hard copy.

### Directory/File List
 - `./public` - All files in here are exposed to the public internet when backend server is run
 - `./src` - The source code for the front-end. When the build script is run, these files are compiled and put in to `./public`
 - `./config.js` - The backend config

### Running
Enter the `stats-project` directory and run the following commands:
```
npm i
npm start
```

### To build for production
This will populate the `./public` directory with the compiled version of `./src`
```
npm run build
```
