# Intro to Git


### Learning Goals
- Use `git clone` to get code from GitHub
- Use `git commit` and  `git push` to save code back to GitHub
- Use `git branch` to work on your own copy of a project
- Merge branches together using Pull Requests


### Vocabulary
* `git`
    * Saves different versions of code
        * So that we can recover code
        * So that we can collaborate on code
* GitHub
    * Where we post these git repositories to share them
* `clone`
    * Gets code *from* a remote server
* `git commit`
    * Saves our code
    * `git add <file> (or .)`
    * You **must** include a message `git commit -m "Added xyz" `
* `push`
    * Sends code *to* a remote server
* `branch`
    * Create a seperate "version" of the code to work with
* `checkout`
    * Select a branch (version) of the code to work with

### Resources
* https://github.com/Joshua-Miles/lecture-exercises-080519

### Assessments

#### Self Assessment I: Cloning
* Create a new repository at: <https://github.com/new>
  * Use "elevator-pitch" as the repository name
  * Make sure you check "Initialize with README"
* Clone the repository in your terminal by writing `git clone GITHUB_URL` in the terminal, using the link you get from clicking the green "clone" button in GitHub
* Change into this directory by writing `cd elevator-pitch`
* Open the folder with a code editor (e.g. write `code .` in the terminal)
* Write "My name is YOUR_NAME" inside of `README.md`

#### Self Assessment II: Branching
* Write `git branch <your name>` to create your own copy of the code
* Write `git checkout <your name>` to "open" (or "select") your copy of the code
* Write `git push` to send your changes back to GitHub on your branch
* When it gives you an error telling you to try another command (e.g. `git push --set-upstream origin <your name>`), copy and paste _that_ command into your terminal and run it.

#### Self Assessment III: Pushing

- Write `git add .` so that `git` will find all of your changes
- Write `git commit -m "done"` to "save" all of your changes with the message "done"
- Write `git push` to send your changes back to GitHub
  - You may get prompted to run another command. Just copy, paste, and run it.

#### Self Assessment IV: Pull Requests
* Go back to view your repository in GitHub
* Click the "New Pull Request" button
* Select **master** as the "base" and your name as the "compare".
* Click create pull request
* Click "Files Changed" to see what you changed.
