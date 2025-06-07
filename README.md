# Personal Blog Project - THD von Alexander

## Introduction
This is the source code for my personal blog – called **THD von Alexander**. The website is designed to share stories, experiences, university life,... and whatever I want.

## Project Structure
```plaintext
von-blog/
│
├── index.html         : Homepage  
├── blog.html          : Articles post listing page  
├── blog-post.html     : Articles post detail page  
├── stories.html       : Stories listing page  
├── story.html         : Story detail page  
├── about.html         : About me page  
├── contact.html       : Contact page  
│
├── styles/
│   └── main.css       : Main stylesheet  
│
├── scripts/
│   ├── main.js        : Shared JS (navigation, scroll, featured content, etc.)  
│   ├── blog.js        : Articles and story data management  
│   └── contact.js     : Contact form logic  
│
└── README.txt         : Project description and usage
```
## Main Features
- Responsive design for both desktop and mobile.
- Display and filter blog posts and stories.
- Detail pages for each blog post and story.
- Contact page sending user info and message to email with client-side validation.
- "Scroll to top" button.
- Light/Dark theme toggle.

## Usage
1. Clone or download the source code.
2. Open `index.html` in your browser to view the homepage.
3. Access other pages directly via their respective URLs (`blog.html`, `stories.html`, etc.).
4. In `contact.html`, I use [Formspree](https://formspree.io/) to receive messages from clients. You can create an account on Formspree, get the project ID after creating it, and paste it into the code. Messages from clients will be sent to the email you use to log in to Formspree. Alternatively, you can use other similar services.
5. In `blog.js`, you can update and replace your posts. Currently, I’m storing the posts directly as HTML inside the JavaScript file, but this is far from optimal. I’m still working on better approaches to manage posts more efficiently, such as saving them as Markdown files or using [Jekyll](https://jekyllrb.com/) for easier management and publishing.

## Author
**THD von Alexander**

## Contact
- Email: [tran.hoang.dat.2312@gmail.com](mailto:tran.hoang.dat.2312@gmail.com)  
- LinkedIn: [linkedin.com/in/hoangdat2612](https://www.linkedin.com/in/hoangdat2612/)  
- Facebook: [facebook.com/motlucemnganngo](https://www.facebook.com/motlucemnganngo)  
- GitHub: [github.com/datdaide1](https://github.com/datdaide1)
