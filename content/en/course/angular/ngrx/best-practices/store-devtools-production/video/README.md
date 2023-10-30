# short text

- Are you using angular and ngrx for state management - 0:00 - 0:18
- If you are using NGRX you are probably using `@ngrx/store-devtools` and the 
`Redux Devtools Extension` to debug your state - 0:18 - 0:45
- When you build your app for production the store devtools is still working, and it's best to remove it in production - 0:45 - 1:11
- you can remove devtools in production by generating an environment for dev and prod - 1:11 - 2:11
- but the devtools is still included in the production bundle if you use this solution - 2:11 - 3:12
- we can use file replacement in angular.json to completly remove store devtools from our bundle in production 3:12 - end