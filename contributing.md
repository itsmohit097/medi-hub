**Contributions** are what makes the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

- If you have any suggestions for the projects, like reporting a bug, improving UI, or improving the README.md file, feel free to **open an issue** to discuss it, or directly create a pull request with the necessary changes.
- Please make sure you check your spelling and grammar.
- Create individual PR for each suggestion.

# Follow these steps to contribute

#### 1. Fork this repository

#### 2. Clone your forked repository
```sh
git clone https://github.com/itsmohit097/medi-hub.git
```
#### 3. Change the directory and install dependencies :
```shell
   cd frontend
   npm install or npm i

   cd backend
   npm install or npm i

   cd dashboard
   npm install or npm i
``` 
#### 4. Start the development environment:

   ```shell
   npm run dev // for all
   now open the local host
   ```
#### 4. Switch to the branch you want to contribute to:
```shell
   git checkout <branch_name> // (frontend,backend,dashboard,design)
``` 
#### 5. Now create a new branch inside the switched branch
```shell
   git checkout -b fix-issue-<ISSUE-NUMBER>
``` 

#### 6. After you have added your changes, follow the following command chain

- `git status -s` // Shows the changed files
- `git add --all`  // Will add all the files to staging area
- `git commit -m "feat/docs/fix: <EXPLAIN-YOUR_CHANGES>"`

> **Note**: Replace `<EXPLAIN-YOUR_CHANGES>` with the changes you have made. Also, follow the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) for writing commit messages
- `git push origin fix-issue-<ISSUE-NUMBER>` (branch you have created)

#### 7. After this go to your forked GitHub repository and go to `Pull Request` section. Now you might be able to see a pop up saying **Pull Request**. Click on the popup and you will be redirected to pull request page

#### 8. Now fill in the form template of the pull request and give the necessary description.

#### 9. Click on **Submit**

#### 10. Hurray! You just made your first contribution to this project 🎉

#### 11. **Wait** for your pull request to be reviewed and merged.