# Collaborative Project Best Practices Guide

## Table of Contents
1. [Committing](#committing)
2. [Branching](#branching)
3. [Rebasing](#rebasing)
4. [Pull Requests to Main](#pull-requests-to-main)
5. [Communication](#communication)
6. [Linting](#linting)
7. [Testing](#testing)
8. [Code review guidelines](#review-guidelines)
9. [Bugs](#bugs)
10. [Security](#security)
11. [Comments](#comments)
12. [Backlog & planning](#backlog)
13. [CI/CD](#CI/CD)

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

- **Meetings**: On mondays 18.00 team meetings. Bi-Weekly srint change ceremonies

- **Document Important Decisions** This helps in the future to track changes!

### Linting <a name="linting"></a>
- **Linting**: Your code will be linted using ESlint 

- **Linters** needs to be passed in order to merge.

- **More details**: To be anounced

### Testing <a name="testing"></a>
- **Test your own code**: Before merging the code to main your code needs to be tested. Testing is to be included in PR to main. 

- **Testing**: Testing is to be done with Jest/React-testing-tool. <- Proposed toolset

- **More details**: To be anounced

### **Code Review Guidelines** <a name="review-guidelines"></a>

   - **Code Review Checklist**: 
    - code readability: Code follows current linting rules
    - adherence to coding standards: Reasonable variable names etc. 

   - **Reviewer Responsibilities**:
    - Review carefully but there is no need to test it on your own machine if unitests and linting are passing
    - Provide concrete feedback. If somehting is to be improved tag lines etc.
    - Respect the author's work we are here still learning things :).

   - **Author Responsibilities**: 
    - Be open to feedback. The best ideas are born when cooperating
    - make requested changes or explain youe solution if you think its better
    - Address comments in 2 days, the project goes on

### **Bugs** <a name="bugs"></a>

   - **How to report bugs**: Create a ticket and notify group on telegram. Try to estimate how critical the bug is since it affects on the fixing time


### **Security Best Practices** <a name="security"></a>

   - **Security Guidelines**: 
     - Try to write secure code
     - Do not add API keys to github.
     - Environmental variables is safe space for keys
     - Do not install unsecure packest from npm. etc
     - npm shows some flags about security of the packages, take a look on those if they require some action.

### **Commenting code** <a name="comments"></a>

   - **Rules**: 
    1. Rule: Do not comment code. Add notes to commits
    2. Execption to rule 1. If something aboslutely requires commenting you may do it but it should not be added to main

### **Backlog and Planning** <a name="backlog"></a>

   - **Backlog**: Backlog can be found from [Trello](https://trello.com/b/6FLJUeRF/kikis-home-box)

### **Continous intergation and continous deployment** <a name="CI/CD"></a>

   - **CI**: At the moment we have access GitHub's free organization resources. This means that we have access to some online runners. More information about organizations and their offered properties can be found on [here](https://github.com/organizations/Kiki-s-homebox/billing/plans)
