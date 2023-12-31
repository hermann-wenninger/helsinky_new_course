---
mainImage: ../../../images/part-11.svg
part: 11
letter: e
lang: zh
---

<div class="content">

<!-- This part has focus on building a simple, effective, and robust CI system that helps developers to work together, maintain code quality, and deploy safely. What more could one possibly want? In the real world, there are more fingers in the pie than just developers and users. Even if that weren't true, even for developers, there's a lot more value to be gained from CI systems than just the things above.-->
 这部分的重点是建立一个简单、有效和强大的CI系统，帮助开发人员一起工作，保持代码质量，并安全部署。还能有什么要求呢？在现实世界中，除了开发人员和用户之外，还有更多的手指参与其中。即使这不是真的，即使对开发人员来说，从CI系统中获得的价值也远不止上述内容。

### Visibility and Understanding

<!-- In all but the smallest companies, decisions on what to develop are not made exclusively by developers. The term 'stakeholder' is often used to refer to people, both inside and outside the development team, who may have some interest in keeping an eye on the progress of the development. To this end, there are often integrations between git and whatever project management/bug tracking software the team is using.-->
 除了最小的公司之外，所有的公司都不是完全由开发人员来决定开发什么。术语"利益相关者"经常被用来指开发团队内部和外部的人，他们可能对关注开发的进展有一些兴趣。为此，git和团队正在使用的任何项目管理/bug跟踪软件之间经常会有集成。

<!-- A common use of this is to have some reference to the tracking system in git pull requests or commits. This way, for example, when you're working on issue number 123, you might name your pull request <code>BUG-123: Fix user copy issue</code> and the bug tracking system would notice the first part of the PR name and automatically move the issue to <code>Done</code> when the PR is merged.-->
 这方面的一个常见用途是在git拉动请求或提交中对跟踪系统有一些参考。这样一来，例如，当你在处理123号问题时，你可以将你的拉动请求命名为<code>BUG-123。修复用户拷贝问题</code>，错误跟踪系统会注意到PR名称的第一章节，并在PR被合并时自动将问题移至<code>Done</code>。

### Notifications

<!-- When the CI process finishes quickly, it can be convenient to just watch it execute and wait for the result. As projects become more complex, so too does the process of building and testing the code. This can quickly lead to a situation where it takes long enough to generate the build result that a developer may want to begin working on another task. This in turn leads to a forgotten build.-->
 当CI过程快速完成时，只看它执行并等待结果是很方便的。随着项目变得更加复杂，构建和测试代码的过程也变得更加复杂。这可能很快就会导致这样一种情况：生成构建结果需要足够长的时间，以至于开发人员可能想开始处理另一项任务。这反过来又导致了一个被遗忘的构建。

<!-- This is especially problematic if we're talking about merging PRs that may affect another developer's work, either causing problems or delays for them. This can also lead to a situation where you think you've deployed something but haven't actually finished a deployment, this can lead to mis-communication with teammates and customers (e.g. "Go ahead and try that again, the bug should be fixed").-->
 如果我们谈论的是合并可能影响另一个开发者的工作的PR，这就特别有问题，可能会给他们带来问题或延误。这也可能导致这样一种情况：你认为你已经部署了一些东西，但实际上还没有完成部署，这可能导致与队友和客户的错误沟通（例如，"继续，再试一次，这个错误应该被修复"）。

<!-- There are several solutions to this problem ranging from simple notifications to more complicated processes that simply merge passing code if certain conditions are met. We're going to discuss notifications as a simple solution since it's the one that interferes with the team workflow the least.-->
 对于这个问题有几种解决方案，从简单的通知到更复杂的流程，如果满足某些条件，就简单地合并传递代码。我们将把通知作为一个简单的解决方案来讨论，因为它是对团队工作流程干扰最小的一个。

<!-- By default, GitHub Actions sends an email on a build failure. This can be changed to send notifications regardless of build status and can also be configured to alert you on the GitHub web interface. Great. But what if we want more. What if for whatever reason this doesn't work for our use case.-->
 默认情况下，GitHub Actions会在构建失败时发送一封邮件。这可以改变为无论构建状态如何都会发送通知，也可以配置为在GitHub网页界面上提醒你。很好。但如果我们想要更多呢？如果由于某种原因，这对我们的用例不适用呢。

<!-- There are integrations for example to various messaging applications such as [Slack](https://slack.com/intl/en-fi/) or [Discord](https://discord.com/), to send notifications. These integrations still decide what to send and when to send it based on logic from GitHub.-->
 有一些集成，例如与各种消息应用的集成，如[Slack](https://slack.com/intl/en-fi/)或[Discord](https://discord.com/)，来发送通知。这些集成仍然根据GitHub的逻辑来决定发送什么和何时发送。

</div>

<div class="tasks">

### Exercise 11.18

<!-- We have set up a channel <i>fullstack\_webhook</i> to the course Discord group at [https://study.cs.helsinki.fi/discord/join/fullstack](https://study.cs.helsinki.fi/discord/join/fullstack) for testing a messaging integration.-->
 我们在[https://study.cs.helsinki.fi/discord/join/fullstack](https://study.cs.helsinki.fi/discord/join/fullstack)的课程 Discord 小组中设立了一个频道 <i>fullstack\_webhook</i>，用于测试消息集成。

<!-- Register now to Discord if you have not already done that. You will also need a <i>Discord webhook</i> in this exercise. You find the webhook in the pinned message of the channel <i>fullstack\_webhook</i>. Please do not commit the webhook to GitHub!-->
 如果你还没有注册，现在就注册到 Discord。在这个练习中，你还需要一个<i>Discord webhook</i>。你可以在频道<i>fullstack/_webhook</i>的钉子信息中找到webhook。请不要把webhook提交到GitHub!

#### 11.18 Build success/failure notification action

<!-- You can find quite a few of third party actions from [GitHub Action Marketplace](https://github.com/marketplace?type=actions) by using the search phrase [discord](https://github.com/marketplace?type=actions&query=discord). Pick one for this exercise. My choice was [discord-webhook-notify)](https://github.com/marketplace/actions/discord-webhook-notify) since it has quite many stars and a decent documentation.-->
 你可以通过使用[GitHub Action Marketplace](https://github.com/marketplace?type=actions)中的搜索词[discord](https://github.com/marketplace?type=actions&query=discord)找到不少第三方动作。为这次练习选一个。我的选择是[discord-webhook-notify)](https://github.com/marketplace/actions/discord-webhook-notify)，因为它有相当多的星星和一个体面的文档。

<!-- Setup the action so that it gives two types of notifications:-->
 设置这个动作，让它给出两种类型的通知。
<!-- - A success indication if a new version gets deployed-->
 - 如果一个新的版本被部署，一个成功指示
<!-- - An error indication if a build fails-->
 - 构建失败时的错误提示

<!-- In the case of an error, the notification should be a bit more verbose to help developers finding quickly which is the commit that caused it.-->
 在出错的情况下，通知应该更详细一点，以帮助开发者迅速找到导致错误的提交。

<!-- See [here](https://docs.github.com/en/actions/learn-github-actions/expressions#status-check-functions) how to check the job status!-->
 参见[这里](https://docs.github.com/en/actions/learn-github-actions/expressions#status-check-functions)如何检查工作状态!

<!-- Your notifications may look like the following:-->
 你的通知可能如下所示：下面这样。

![Releases](../../images/11/20x.png)

</div>

<div class="content">

### Metrics

<!-- In the previous section, we mentioned that as projects get more complicated, so too, do their builds, and the duration of the builds increases. That's obviously not ideal: The longer the feedback loop, the slower the development.-->
 在上一节中，我们提到随着项目变得越来越复杂，它们的构建也越来越复杂，构建的时间也越来越长。这显然是不理想的。反馈回路越长，开发速度就越慢。

<!-- While there are things that can be done about this increase in build times, it's useful to have a better view of the overall picture. It's useful to know how long a build took a few months ago versus how long it takes now. Was the progression linear or did it suddenly jump? Knowing what caused the increase in build time can be very useful in helping to solve it. If the build time increased linearly from 5 minutes to 10 minutes over the last year, maybe we can expect it to take another few months to get to 15 minutes and we have an idea of how much value there is in spending time speeding up the CI process.-->
 虽然有一些事情可以解决构建时间增加的问题，但对整体情况有一个更好的认识是很有用的。了解几个月前的构建时间和现在的构建时间，是非常有用的。进展是线性的还是突然跳跃的？知道是什么导致了构建时间的增加，对于帮助解决这个问题非常有用。如果构建时间在去年从5分钟线性增加到10分钟，也许我们可以预计再过几个月就会达到15分钟，我们就可以知道花时间加快CI过程有多大价值。

<!-- Metrics can either be self-reported (also called 'push' metrics, where each build reports how long it took) or the data can be fetched from the API afterward (sometimes called 'pull' metrics). The risk with self-reporting is that the self-reporting itself takes time and may have a significant impact on "total time taken for all builds".-->
 指标可以是自我报告的（也称为"推"指标，即每次构建都报告它花了多长时间），也可以是事后从API中获取数据（有时称为"拉"指标）。自我报告的风险在于，自我报告本身需要时间，可能会对 "所有构建的总时间 "产生重大影响。

<!-- This data can be sent to a time-series database or to an archive of another type. There are plenty of cloud services where you can easily aggregate the metrics, one good option is [Datadog](https://www.datadoghq.com/).-->
 这些数据可以被发送到一个时间序列数据库或另一种类型的档案。有很多云服务，你可以很容易地汇总这些指标，一个好的选择是[Datadog](https://www.datadoghq.com/)。

### Periodic tasks

<!-- There are often periodic tasks that need to be done in a software development team. Some of these can be automated with commonly available tools and some you will need to automate yourself.-->
在软件开发团队中经常有一些定期任务需要完成。其中有些可以用常用的工具自动完成，有些你需要自己来自动完成。

<!-- The former category includes things like checking packages for security vulnerabilities. Several tools can already do this for you. Some of these tools would even be free for certain types (e.g. open source) projects. GitHub provides one such tool, [Dependabot](https://dependabot.com/).-->
前一类包括检查软件包的安全漏洞等事情。一些工具已经可以为你做到这一点。其中一些工具甚至对某些类型的项目（如开放源代码）是免费的。GitHub提供了一个这样的工具，[Dependabot](https://dependabot.com/)。

<!-- Words of advice to consider: If your budget allows it, it's almost always better to use a tool that already does the job than to roll your own solution. If security isn't the industry you're aiming for, for example, use Dependabot to check for security vulnerabilities instead of making your own tool.-->
 需要考虑的建议的话。如果你的预算允许，使用一个已经完成工作的工具几乎总是比推出你自己的解决方案要好。例如，如果安全不是你的目标行业，那么使用Dependabot来检查安全漏洞，而不是制作你自己的工具。

<!-- What about the tasks that don't have a tool? You can automate these yourself with GitHub Actions too. GitHub Actions provides a scheduled trigger that can be used to execute a task at a particular time.-->
 那那些没有工具的任务呢？你也可以自己用GitHub Actions来实现这些任务的自动化。GitHub Actions 提供了一个预定的触发器，可以用来在特定时间执行任务。

</div>

<div class="tasks">

### Exercises 11.19-11.21

#### 11.19 Periodic health check

<!-- We are pretty confident now that our pipeline prevents bad code from being deployed. However, there are many sources of errors. If our application would e.g. depend on a database that would for some reason become unavailable, our application would most likely crash. That's why it would be a good idea to set up <i>a periodic health check</i> that would regularly do an HTTP GET request to our server. We quite often refer to this kind of request as a <i>ping</i>.-->
 我们现在很有信心，我们的管道可以防止不良代码被部署。然而，错误的来源有很多。如果我们的应用依赖于一个数据库，而这个数据库由于某种原因变得不可用，我们的应用就很可能崩溃。这就是为什么建立一个定期的健康检查<i></i>是个好主意，它将定期对我们的服务器进行HTTP GET请求。我们经常把这种请求称为<i>ping</i>。

<!-- It is possible to [schedule](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#schedule) GitHub actions to happen regularly.-->
可以[安排](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#schedule)GitHub动作定期发生。

<!-- Use now the action [url-health-check](https://github.com/marketplace/actions/url-health-check) or any other alternative and schedule a periodic health check ping to your deployed software. Try to simulate a situation where your application breaks down and ensure that the check detects the problem. Write this periodic workflow to an own file.-->
现在使用[url-health-check](https://github.com/marketplace/actions/url-health-check)或任何其他行动，安排定期健康检查ping到你部署的软件。试着模拟你的应用发生故障的情况，并确保检查能发现问题。把这个定期工作流程写到一个自己的文件中。

<!-- **Note** that unfortunately it takes quite long until GitHub Actions starts the scheduled workflow for the first time. For me, it took nearly one hour. So it might be a good idea to get the check working firstly by triggering the workflow with git push. When you are sure that the check is properly working, then switch to a scheduled trigger.-->
 **注意**，不幸的是，直到GitHub Actions第一次启动预定的工作流，需要相当长的时间。对我来说，这花了将近一个小时。所以最好先用git push触发工作流，让检查工作正常进行。当你确定检查工作正常时，再切换到预定触发器。

<!-- **Note also** that once you get this working, it is best to drop the ping frequency (to max once in 24 hours) or disable the rule altogether since otherways your health check may consume [all your](https://devcenter.heroku.com/articles/free-dyno-hours) monthly free hours.-->
 **也注意**，一旦你得到这个工作，最好降低ping频率（最多24小时一次）或完全禁用该规则，因为否则你的健康检查可能会消耗[你所有的](https://devcenter.heroku.com/articles/free-dyno-hours)每月空闲时间。

#### 11.20 Your own pipeline

<!-- Build a similar CI/CD-pipeline for some of your own applications. Some of the good candidates are the phonebook app that was built in parts 2 and 3 of the course, or the blogapp built in parts 4 and 5, or the redux anecdotes built in part 6. You may also use some app of your own for this exercise.-->
为你自己的一些应用建立一个类似的CI/CD管道。一些好的候选程序是在课程的第2和第3章节建立的电话簿应用，或在第4和第5章节建立的博客应用，或在第6章节建立的redux名言警句。你也可以在这个练习中使用你自己的一些应用。

<!-- You most likely need to do some restructuring to get all the pieces together. A logical first step is to store both the frontend and backend code in the same repository. This is not a requirement but it is recommended since it makes things much more simple.-->
你很可能需要做一些结构调整，以使所有的部分都在一起。合理的第一步是将前端和后端代码存储在同一个仓库里。这不是一个要求，但建议这样做，因为它使事情更简单。

<!-- One possible repository structure would be to have the backend at the root of the repository and the frontend as a subdirectory. You can also "copy paste" the structure of the example app of this part or try out the [example app](https://github.com/fullstack-hy2020/create-app) mentioned in [part 7](/en/part7/class_components_miscellaneous#frontend-and-backend-in-the-same-repository).-->
 一种可能的版本库结构是将后端放在版本库的根目录下，前端作为一个子目录。你也可以 "复制粘贴 "本章节的示例程序的结构，或者试试[第7章节](/en/part7/class_components_miscellaneous#frontend-and-backend-in-the-same-repository)中提到的[示例程序](https://github.com/fullstack-hy2020/create-app)。

<!-- It is perhaps best to create a new repository for this exercise and simply copy and paste the old code there. In real life, you most likely would do this all in the old repository but now "a fresh start" makes things easier.-->
 也许最好为这个练习创建一个新的仓库，并简单地复制和粘贴旧代码。在现实生活中，你很可能会在旧版本库中完成这些工作，但现在 "重新开始 "使事情变得更容易。

<!-- This is a long and perhaps quite a tough exercise, but this kind of situation where you have a "legacy code" and you need to build   proper deployment pipeline is quite common in real life!-->
这是一个漫长的，也许是相当艰难的练习，但这种情况下，你有一个 "遗留的代码"，你需要建立适当的部署管道，在现实生活中是很常见的!

<!-- Obviously, this exercise is not done in the same repository as the previous exercises. Since you can return only one repository to the submission system, put a link of the <i>other</i> repository to the one you fill into the submission form.-->
 很明显，这个练习并不像前面的练习那样在同一个版本库中进行。因为你只能向提交系统返回一个版本库，所以把<i>另一个</i>版本库的链接放到你填写的提交表格中。

#### 11.21 Protect your main branch and ask for pull request

<!-- Protect the main branch of the repository where you did the previous exercise. This time prevent also the administrators from merging the code without a review.-->
 保护你之前练习的版本库的主分支。这次也要防止管理员在没有审核的情况下合并代码。

<!-- Do a pull request and ask GitHub user [mluukkai](https://github.com/mluukkai) to review your code. Once the review is done, merge your code to the main branch. Note that the reviewer needs to be a collaborator in the repository. Ping us in Discord to get the review, it is best to send a private message and to include the collaboration invite link to the message.-->
 做一个拉动请求，请GitHub用户[mluukkai](https://github.com/mluukkai)和/或 中的任何一个来审查你的代码。一旦审查完毕，就把你的代码合并到主分支。注意，审查者需要是版本库中的合作者。在 Discord 中与我们联系以获得审查，最好是发送私人信息，并在信息中加入合作邀请链接。

<!-- Then you are done!-->
 然后你就完成了!

</div>

<div class="content">

### Submitting exercises and getting the credits

<!-- Exercises of this part are submitted via [the submissions system](https://studies.cs.helsinki.fi/stats/courses/fs-cicd) just like in the previous parts, but unlike parts 0 to 7, the submission goes to different "course instance". Remember that you have to finish <i>all the exercises</i> to pass this part!-->
 这一部分的练习是通过[提交系统](https://studies.cs.helsinki.fi/stats/courses/fs-cicd)提交的，就像前面几部分一样，但与0到7部分不同的是，提交到不同的 "课程实例"。请记住，你必须完成<i>所有的练习</i>才能通过这一部分!

<!-- Your solutions are in two repositories (pokedex and your own project), and since you can return only one repository to the submission system, put a link of the <i>other</i> repository to the one you fill into the submission form!-->
 你的解决方案在两个仓库中（pokedex和你自己的项目），由于你只能向提交系统返回一个仓库，请将<i>另一个</i>仓库的链接放在你填写的提交表格中

<!-- Once you have completed the exercises and want to get the credits, let us know through the exercise submission system that you have completed the course:-->
 一旦你完成了练习并想获得学分，通过练习提交系统让我们知道你已经完成了课程。

![Submissions](../../images/11/21.png)

<!-- Note that the "exam done in Moodle" note refers to the [Full Stack Open course's exam](/en/part0/general_info#sign-up-for-the-exam), which has to be completed before you can earn credits from this part.-->
 注意，"在Moodle中完成的考试 "说明是指[全栈开放课程的考试](/en/part0/general_info#sign-up-for-the-exam)，在你从这部分获得学分之前必须完成。

<!-- **Note** that you need a registration to the corresponding course part for getting the credits registered, see [here](/en/part0/general_info#parts-and-completion) for more information.-->
 **注意**你需要注册相应的课程部分以获得注册的学分，更多信息见[这里](/en/part0/general_info#parts-and-completion)。

<!-- You can download the certificate for completing this part by clicking one of the flag icons. The flag icon corresponds to the certificate's language.-->
 你可以通过点击其中一个标志图标来下载完成这部分的证书。旗帜图标与证书的语言相对应。

</div>
