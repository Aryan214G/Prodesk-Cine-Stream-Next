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

6) Explain this error:
## Error Type
Recoverable Error

## Error Message
Hydration failed because the server rendered HTML didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used:

- A server/client branch `if (typeof window !== 'undefined')`.
- Variable input such as `Date.now()` or `Math.random()` which changes each time it's called.
- Date formatting in a user's locale which doesn't match the server.
- External changing data without sending a snapshot of it along with the HTML.
- Invalid HTML tag nesting.

It can also happen if the client has a browser extension installed which messes with the HTML before React loaded.

https://react.dev/link/hydration-mismatch

  ...
    <InnerScrollAndFocusHandlerOld focusAndScrollRef={{scrollRef:null, ...}} cacheNode={{rsc:{...}, ...}}>
      <ErrorBoundary errorComponent={undefined} errorStyles={undefined} errorScripts={undefined}>
        <LoadingBoundary name="favorites/" loading={null}>
          <HTTPAccessFallbackBoundary notFound={undefined} forbidden={undefined} unauthorized={undefined}>
            <RedirectBoundary>
              <RedirectErrorBoundary router={{...}}>
                <InnerLayoutRouter url="/favorites" tree={[...]} params={{}} cacheNode={{rsc:{...}, ...}} ...>
                  <SegmentViewNode type="page" pagePath="favorites/...">
                    <SegmentTrieNode>
                    <ClientPageRoot Component={function Favorites} serverProvidedParams={{...}}>
                      <Favorites params={Promise} searchParams={Promise}>
                        <div>
                          <h1>
                          <div className="grid">
                            <MovieCard movie={{adult:false, ...}}>
+                             <div className="movie-card">
                            ...
                  ...
                ...
      ...



    at div (unknown:0:0)
    at MovieCard (components/MovieCard.jsx:42:9)
    at Favorites/<.children<.children< (app/favorites/page.js:21:25)
    at Favorites (app/favorites/page.js:19:31)

## Code Frame
  40 |
  41 |     return (
> 42 |         <div className="movie-card">
     |         ^
  43 |             <div className="movie-poster">
  44 |                 {movie.poster_path ? (
  45 |                     <img

Next.js version: 16.2.10 (Turbopack)

# Sprint 11 prompts

1) I am adding Jest and React Testing Library to a Next.js project. Explain what each dependency does and why it is needed. Don't just give setup steps, teach me the purpose of each.

2) Explain how Jest executes a React Testing Library test. I want to understand what render(), screen, expect(), and jest-dom are for.

3) Help me write tests for my SearchBar React component. First explain what behaviors should be tested, then guide me through writing the tests instead of giving the entire solution immediately.

