**Contributions** are what makes the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

- If you have any suggestions for the projects, like reporting a bug, improving UI, or improving the README.md file, feel free to **open an issue** to discuss it, or directly create a pull request with the necessary changes.
- Please make sure you check your spelling and grammar.
- Create individual PR for each suggestion.

# Follow these steps to contribute

#### 1. Fork this repository
```sh
Make sure you UNCHECK the copy only main branch while forking the repository
```
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

```
cd backend
cp .env.example .env
```
This command creates a new .env file from the .env.example file. You will fill in the values in the newly created .env file.

#### 5. Start the development environment:

   ```shell
   npm run dev // for all
   now open the local host
   ```
#### 6. Switch to the branch you want to contribute to:
```shell
   git checkout <branch_name> // (frontend,backend,dashboard,design)
``` 

#### 7. After you have added your changes (Also add appropriate comments), follow the following command chain

- `git status -s or git status` // Shows the changed files
- `git add --all or git add .`  // Will add all the files to staging area
- `git commit -m "feat/docs/fix: <EXPLAIN-YOUR_CHANGES>"`

> **Note**: Replace `<EXPLAIN-YOUR_CHANGES>` with the changes you have made. Also, follow the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) for writing commit messages
- `git push origin <branch_name>`
> **Note**: Replace `<branch_name>` with branch name you had selected before.

#### 8. After this go to your forked GitHub repository and go to `Pull Request` section. Now you might be able to see a pop up saying **Pull Request**. Click on the popup and you will be redirected to pull request page

#### 9. Now fill in the form template of the pull request and give the necessary description.

#### 10. Click on **Submit**

#### 11. Hurray! You just made your first contribution to this project 🎉

#### 12. **Wait** for your pull request to be reviewed and merged.
