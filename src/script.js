import { Octokit } from "octokit"

document.addEventListener("DOMContentLoaded", async () => {
    const reposContainer = document.getElementById("repos-list");
    
    
    const user = "octocat"

    const octokit = new Octokit({ });
    const webapp = window.Telegram.WebApp;
    
    const response = await octokit.request("GET /users/{owner}/repos/", {
        owner: user,
        headers: {
            "x-github-api-version": "2022-11-28",
        },
    })

    function addRepoElement(repoOwner, repoName) {
        const nodeRepo = document.createElement("li");
        nodeRepo.className = "repo-element";

        const nodeText = document.createElement("span");
        nodeText.className = "repo-name";
        nodeText.textContent = repoName

        const nodeButton = document.createElement("button");
        nodeButton.className = "repo-button";
        nodeButton.textContent = "Open";
        
        nodeButton.addEventListener("click", () => { location.href = `https://github.com/${repoOwner}/${repoName}` })

        nodeRepo.appendChild(nodeText);
        nodeRepo.appendChild(nodeButton);
        
        reposContainer.appendChild(nodeRepo);
    }
    
    for (let i=0; i<response.data.length; i++) { addRepoElement(user, response.data[i].name) }
    
    
    

    webapp.ready();     
    webapp.expand();
    const backButton = webapp.BackButton
    
    backButton.show();

    backButton.onClick(() => {
        if (history.length > 1) {
          history.back();
        } else {
          webapp.close();
        }
    })    
})