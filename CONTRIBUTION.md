# Contribution:

Even though this was a small task of my internship with simple JavaScript, I think we take take it to next level. If you wish to contribute to this Repository, It's easy to get started...

## Getting Started

I have discussed possible cases you can contribute to this Repo below. If this is your first contribution, I heartily welcome you to the Open-Source community, you're gonna have lots of fun while learning amazing things along the way. This is going to be an amazing & long-lasting phase in your technical journey.

Before you get right into contributing, you can get started by getting simply setting up this repo in your local system. You can run & experiment with this mini-project on your local machine *( like your PC )* and to do so,

- You have to [**fork**](https://github.com/iamwatchdogs/Stop_Watch_and_Countdown_Timer/fork "Let's fork this repo") this repository. *( Basically, it creates your own clone of this repository )*
- Then clone it into your local machine by copying your forked repo's URL by using one of the git commands. *( Make sure you have [git](https://git-scm.com/ "Let's Download & install git") installed in your system )*
```bash
git clone https://github.com/<Your_GitHub_Name>/Stop_Watch_and_Countdown_Timer/
```
- Now you have this mini-project with all the files in your system.

<br>

> **Note** :
> 
> - You can also get this repo into your local machine by just clicking the **Download ZIP** *(or)*
> 
> - You can either get this repo by downloading the **Source Code** from the releases.
>
> I **would not** suggest those options,. as are for the **end-users**. 
> 
> But you as a fellow contributing developer, `should not` use those approaches to set up the repo in your local system.
> 
> Because this will **slow down** your whole process of working on an issue and contributing to the repo.

As of this part, you have this Repo hot & ready in your local machine. Before you get working on any Idea or issue or if you're a complete beginner, I got you covered. I have laid out the possible cases in which you might be present in either of these two cases, these two cases can guide you through your contribution.

### Case-1: You have an idea/Found a bug

If you have an amazing idea to improve this mini-project *(or)*, some bug must be resolved. You can get started by sharing your idea *(or)* the bug you found by [**Creating an Issue**](https://github.com/iamwatchdogs/Stop_Watch_and_Countdown_Timer/issues/new "Let's create an issue"). Let me know about your idea *(or)* the bug you found and notify others what you're about to do so that they can help you with your contribution. After posting your issue, I'll verify and assign the issue to you so that you can get started with your idea for this project.

### Case-2: You're willing to contribute but don't know how 

First-of-all, I appreciate your willingness to contribute to an Open-Source. So, If you're interested in contributing to an Open-Source Repo such as this one. You can get the [**Issue menu**](https://github.com/iamwatchdogs/Stop_Watch_and_Countdown_Timer/issues "Let's go to issue menu"), you might find some issue which you're capable *(or)* interested to work on. If you can't find one or feel they're too advanced, then you can go with `good first issue` as it beginner-friendly. Once you have selected your issue, you can just text in the conversation something like, *"Hey there @maintainer-name, I'm interested to work on this issue. Can you assign me this task ?"*, if no one is working on that issue I'll assign you the issue so that you can get started with it. Say if someone is already assigned to the issue you choose, All you need to do is communicate with the person who is already working on the issue and sort things out. It can end as an equal division of the work or handling different workloads depending upon your skillset, the key element required here is good communication & coordination. Let's just say, If some guy is already assigned but has no response nor any progress, then you can ping the maintainer *( for this repo, I'm the maintainer )* like *"Hey there @maintainer-name, I'm willing to work on this issue but it is already assigned to @the-other-guy-name and he's not responding nor do I find any progress related to this issue. Can you assign me this issue ?"*. Then the maintainer will make sure whatever you said is true or false and then assign you the issue so that you can work on it.

## Contributing Practically

After you're assigned the issue, then you can go ahead and work with your idea by forking & cloning your forked repo into your local machine. **Before** You get started with your work, make sure you work on a different branch other than the `main` branch. You can create a new branch using the following git command:
```bash
git checkout -b <branch_name>
```
> **For example**
```bash
# If you're working on a feature
git checkout -b feature

# If you're working on a bug
git checkout -b bug-fix
```

Then you can get started with the issue, and **Remember** for every change *( it can be adding or deleting files/lines )* you have to make a `commit` to save your changes in your current branch. For that, you can use the following git command:
```bash
# Remember to add before you commit your changes
git add .
git commit -m "message"
```
> For example:
```bash
# If you're adding a new file
git add .
git commit -m "Added <file_name>"

# If you've deleted a file
git add .
git commit -m "Removed <file_name>"

# If you've made some changes in a file
git add .
git commit -m "Changed <specific_changes>"  
# It can be like, 
git commit -m "Changed <Changed the classes of div tags>"
```

After you're done & satisfied with all of you're changes then you can push those changes back to your remote repository *( the one you've **forked** )*. You can do that by using a simple git command:
```bash
git push origin <branch_name>
```
> For example:
```bash
# If you've worked on a new feature on the 'feature' branch
git push origin feature

#If you've worked on a bug on the 'bug-fix' branch
git push origin bug-fix
```

And after all of this process, You'll make a [**Pull request**](https://github.com/iamwatchdogs/Stop_Watch_and_Countdown_Timer/compare "Let's make a PR") to update those changes into the original Repository *( the one which you forked from... )*. When You have made your pull request, I'll check out your changes and review your code. If I'm okay with your updates/fixes, I'll merge it into the original Repository (or) else I'll chat with you to set some things right before I merge it into the Original Repository. In most the cases, I would be less likely to delete your Pull request but no need to worry as you as a contributor will not send me such a bad Pull request.

I hope this gave you an idea about how you can get started by contributing to an Open-Source Repository such as this mini-project. Have fun contributing !!!...