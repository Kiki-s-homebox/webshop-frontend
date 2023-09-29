# Collaborative Project Best Practices Guide

## Table of Contents
1. [Committing](#committing)
2. [Branching](#branching)
3. [Rebasing](#rebasing)
4. [Pull Requests to Main](#pull-requests-to-main)
5. [Communication](#communication)
6. [Testing](#testing)

### Committing <a name="committing"></a>
- **Meaningful Commit Messages**: Write clear and descriptive commit messages.
  ```shell
  Good: "Taskname: Update user login validation"
  Avoid: "Fixed stuff"
  ```

- **Atomic Commits**: Keep commits focused on a single task or change. For example one checklist item in trello

- **No Debug Code**: Avoid committing debugging statements or commented-out code. These can be pushed to git but are not allowed on pull requests.
  
- **Regular Commits**: Commit your work frequently to avoid large, hard-to-review changes.

### Branching <a name="branching"></a>
- **Descriptive Branch Names**: Use task names from trello as branch names. 
  ```shell
  Good with subtask: Taskname-subtaskname 
  Good without subtask: Taskname
  Avoid generic names ex.: new-feature
  ```

- **Task Branches**: Create separate feature branches for each new trello task. This keeps changes isolated and simplifies merging.

- **Sub-task names** are not mandatory unless they are big enough. If a subtask change contains more than 200 lines of code create a new branch for them as well!

- **Main Branch**: Is protected to to prevent direct pushes. Code to main goes through pull requests. See [Pull Requests to Main](#pull-requests-to-main).

### Rebasing <a name="rebasing"></a>
- **Rebase Instead of Merge**: Use `git rebase` to incorporate changes from the main branch into your feature branch, instead of merging. This keeps your history linear and makes it easier to resolve conflicts. Remeber to pull code before this operation.
  ```shell
  git checkout feature-branch
  git rebase main
  ```

- **Resolve Conflicts**: If conflicts occur during a rebase, resolve them promptly. Communicate with team members if any questions to raise. This makes sure
that you do not remove other peoples work!

### Pull Requests to Main <a name="pull-requests-to-main"></a>
- **Open Pull Requests (PRs)**: Create a PR when you're ready to merge your changes into the main branch. Include a clear title == branchname == ticket and description of what the PR accomplishes. Write notes if something is needed to consider while reviewing
  
- **Code Review**: Request code reviews from at least one (1) team member(s). Address feedback and make necessary changes before merging. Your code needs to be acceped again if there is need to make modifications

- **Pass CI/CD**: Ensure that all Continuous Integration/Continuous Deployment checks pass before merging. There will be at least two phases. linting and unit testing.

- **Squash Commits**: Squash and rebase your branch commits into a single, well-organized commit before merging into the main branch, where you will describle changes on high level.

### Communication <a name="communication"></a>
- **Telegram/Chat**: Maintain open communication channels with team members. Use TG to discuss project-related matters. Ask always if you are unsure about anything!

- **Meetings**: On mondays 18.00 team meetings. 

- **Document Important Decisions** This helps in the future to track changes!

### Linting <a name="linting"></a>
- **Linting**: Your code will be linted using ESlint 

- **Linters** needs to be passed in order to merge.

- **More details**: To be anounced

### Testing <a name="testing"></a>
- **Test your own code**: Before merging the code to main your code needs to be tested. Testing is to be included in PR to main. 

- **Testing**: Testing is to be done with Jest/React-testing-tool.

- **More details**: To be anounced
