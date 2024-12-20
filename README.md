# next-js-portfolio

## About the Project
This portfolio website was coded from scratch using JavaScript as well as Tailwind and Standard CSS. It has a comic book theme and a lot of the custom graphics were made using Figma and Canva. The website showcases personal projects as well as some personality for code enthusiasts, lego lovers, and employers. I really enjoyed developing the website as I transitioned from a CMS (Wordpress) to learn JavaScript. Enjoy the source code!

### Built With:
* [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=JavaScript&logoColor=000&style=for-the-badge)](https://www.javascript.com/)
* [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-grey?style=for-the-badge&logo=tailwind-css&logoColor=38B2AC)](https://tailwindcss.com/)
* [![Next.js](https://img.shields.io/badge/Next.js-000000?logo=Next.js&logoColor=white&style=for-the-badge)](https://nextjs.org/)
* [![Node.js](https://img.shields.io/badge/Node.js-339933?logo=Node.js&logoColor=white&style=for-the-badge)](https://nodejs.org/en)
* [![MySQL](https://img.shields.io/badge/MySQL-00758F?logo=mysql&logoColor=white&style=for-the-badg)](https://www.mysql.com/)



## Frontend
The frontend follows the Next.js framework using the "App Router" architecture. This architecute utilizes the app directory as the primary entry point for creating routes, replacing the older Pages Router. The website is 90% statically generated **client side**!

### Key Features of the App Router (src/app):
- File-based Routing:
    - The app directory is used for defining routes and layouts. Each folder within app represents a route segment.
- Server Components by Default:
    - Components in the app directory are Server Components by default, enabling better performance and reduced client-side JavaScript.
- Layout and Template Management:
    - Nested layouts are defined in layout.js files, allowing you to share UI (e.g., navigation bars) across multiple pages.
- Improved Data Fetching:
    - With features like getServerSideProps and getStaticProps being replaced by direct asynchronous fetching in components, data handling is more intuitive.
- Colocation of Files:
- Files like loading.js, error.js, and layout.js can be colocated with their respective routes to manage loading states, error boundaries, and layout

### Next.js Modules
```bash
npm install swiper
npm install react-icons
```
- swiper - used for image carousels
- react icons - used for footer icons

## Backend
To serve the Lego Blog on the website dynamically, the backend is made up of Node.js and a MySQL database.

### Node.js Modules
```bash
npm install mysql2
npm install dotenv
npm install express
```
- mysql2 - used for MySQL integration
- dotenv - used for .env file compatibility
- express - used for API endpoints/routes

## Fonts
**Bangers** - google font for comic book punchlines (headers)

**Coda** - google font for comic book text (website info, navbar, captions, etc.)

**Nunito** - google font used for the default font for all website content

## Colors
- Blue = #94b6b7
- Purple = #8b7fa2
- Tan = #e2ddc6


## Hosting

### Localhost
```bash
npm run dev
```
- Website will be available in a browser at http://localhost:3000

### Local Network
```bash
ipconfig
npx next dev -H 0.0.0.0
```
- Website will be available in a browser at <u>http://yourIP:3000</u> (Great for testing Mobile Displays!)


## Docker
```bash
cd next_frontend && docker build -t nextjs-site .
docker run -p 3000:3000 nextjs-site
```

### Docker Compose
Builds and runs docker containers that will host the frontend, backend, and db 
```bash
docker-compose up -d
```

Stops all docker containers **without** removing the build or volumes   
```bash
docker-compose down
```

Stops all docker containers and deletes the current build (used to create a fresh deployment with website changes)
- **IMPORTANT**: Make sure to backup all db data from docker volumes before doing this!!!
```bash
docker-compose down --rmi all --volumes
```

## Desktop Screenshots

<div align="center">
  <img src="./screenshots/desktop_screenshot_one.png" alt="Desktop Screenshot One">
  <img src="./screenshots/desktop_screenshot_two.png" alt="Desktop Screenshot One">
</div>

## Mobile Screenshots

<div style="display: flex; justify-content: center; align-items: center; height: 100vh; gap: 10px;">
  <img src="./screenshots/mobile_screenshot_one.jpg" alt="Mobile Screenshot One" width="300">
  <img src="./screenshots/mobile_screenshot_two.jpg" alt="Mobile Screenshot Two" width="300">
</div>


