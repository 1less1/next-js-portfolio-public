# Publishing Changes to Public Repository

#### 1. Add a new remote repository
``` bash
git remote add private https://github.com/1less1/next-js-portfolio.git
```

#### 2. Fetch the latest changes from the remote repository
``` bash
git fetch private
```

#### 3. Merge the fetched changes into your current branch
``` bash
git merge -X theirs private/main --allow-unrelated-histories --no-commit
```

#### 4. Open the .gitignore file in nano editor
``` bash
nano .gitignore
```

#### 5. Add the following line to the .gitignore file:
```
next_frontend/public/
```

#### 6. Reset the index
``` bash
git reset
```

#### 7. Add all changes to the staging area
``` bash
git add .
```

#### 8. Commit the changes with a message
``` bash
git commit -m "Public release update"
```

#### 9. Push the changes to the remote repository
``` bash
git push
```