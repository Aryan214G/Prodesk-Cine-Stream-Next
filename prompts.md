# Prompts.md

1. what is next.js? how is it different from react? help me convert my react project to next.js using the app router.

2. this is my react project structure:

src
├── App.css
├── App.jsx
├── assets
├── components
├── index.css
├── main.jsx
├── pages
└── services

help me reorganize this into a next.js project structure.

3. after copying my project into next.js i got "module not found: can't resolve 'axios'". why is this happening and how do i fix it?

4. why doesn't import.meta.env work in next.js? how do i use environment variables instead?

5. after removing app.jsx while migrating to next.js, my favorites state is undefined. why is this happening and what's the recommended way to share state between pages?

6. which files in my project need "use client"? explain how to identify client components in next.js.

7. how do i replace react-router-dom with next.js app router? what changes do i need to make to links and routes?


# Sprint 10 prompts

1) What is redux and how do I set it up?
2) What is a slice?
3) What is a reducer?
4) Okay I have set up favoritesSlice.js, and imported its reducer into store.js. What do I do next?

5) I got this error when I tried running the app:
## Error Type
Runtime TypeError

## Error Message
__TURBOPACK__imported__module__$5b$project$5d2f$context$2f$FavoritesContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFavorites"]() is undefined


    at Home (app/page.js:15:53)

## Code Frame
  13 |     const [loading, setLoading] = useState(false);
  14 |     const loaderRef = useRef(null);
> 15 |     const { favorites, setFavorites } = useFavorites();
     |                                                     ^
  16 |     
  17 |     const loadPopularMovies = async (page) => {
  18 |

Next.js version: 16.2.10 (Turbopack)


