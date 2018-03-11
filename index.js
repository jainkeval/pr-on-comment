module.exports = (robot) => {
  // Your code here
  robot.log('Yay! The app was loaded!')

  // example of probot responding 'Hello World' to a new issue being opened
  robot.on('issue_comment.created', async context => {
    const {owner, repo} = context.repo()
    const content = context.payload.comment.body
    const issueno = context.payload.issue.number
    const issue_title = context.payload.issue.title
    const sender = context.payload.sender.login
    // console.log(owner);
    // console.log(sender);
    // console.log(repo);
    // console.log(content);
    // console.log(issueno);

    let head_index = content.indexOf("\"head\"");
    let length = content.length;

    // console.log(head_index);
    // console.log(length);

    let semicolumn = content.slice(head_index,length).indexOf(";");
    let branch_name = content.slice(head_index+9,head_index + semicolumn - 1);
    let head_name = sender + ":" + branch_name;
    // console.log(head_name);

    if (content.indexOf("Create PR") >= 0){
    return context.github.pullRequests.create({
      owner: owner,
      repo: repo,
      title: issue_title,
      issue: issueno,
      head: head_name,
      base: "master",
      maintainer_can_modify: false
    });
  }
})
}
