# XMLParseAPI

Small **Express** API that processes zipped XML files.

## What it does
1. Accepts a `.zip` upload (Multer)
2. Extracts the archive
3. Reads the XML files and converts them to JSON objects
4. Converts the objects back to XML
5. Compresses the result into a new `.zip`

## Tech
- Node.js, Express
- Multer for uploads
- XML to JSON parsing and zip compression

## Run

```bash
npm install
node app.js
# POST a zip file to http://localhost:4000/
```
