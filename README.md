# YouTube to MP3 Auto Helper (Firefox Extension)

A simple Firefox extension that automatically opens an MP3 converter page when you visit a YouTube video.

This extension detects whether the current tab is a valid YouTube watch page, extracts the **video ID**, and opens the converter in a new tab automatically.

> 🛠 Built with the help of ChatGPT (99%)

## ✨ Features

- Automatically detects YouTube video pages
- Extracts the **video ID** from the URL
- Opens the converter page: https://mp3api.ytjar.info/?id=VIDEO_ID

## 📁 Project Structure

./
│
├── manifest.json # Main extension configuration
└── content.js # Script that runs on YouTube pages


### 📜 `manifest.json`
The core configuration file for the extension. It defines:
- Extension name and version
- Required permissions

### ⚙️ `content.js`
The main script that runs automatically on YouTube video pages. It:
1. Reads the current page URL
2. Checks if it matches a valid YouTube watch URL
3. Extracts the video ID from the `v=` parameter
4. Opens the MP3 converter in a new tab


## 🔍 Supported URL Format

The extension works on URLs like:

https://www.youtube.com/watch?v=VIDEO_ID

Examples of valid URLs:
- https://www.youtube.com/watch?v=dQw4w9WgXcQ
- https://www.youtube.com/watch?v=dQw4w9WgXcQ&t=30s


## 🧪 How to Load the Extension (Temporary)

1. Open Firefox
2. Go to: `about:debugging#/runtime/this-firefox`
3. Click **Load Temporary Add-on**
4. Select the `manifest.json` file from your extension folder
5. Open any YouTube video
6. Open the extension
7. Click convert
8. On the newly opened tab, click generate, then download


## 🔐 Permissions Used

| Permission | Purpose |
|-----------|---------|
| `tabs` | Allows opening a new tab for the converter |


## ⚠️ Notes

This extension does not collect, store, or transmit any user data. It simply reads the current YouTube URL and opens a related converter page.

---

Happy building and exploring browser extensions 🚀.