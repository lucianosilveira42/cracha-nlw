function ShowMeSomething() {
  alert(links.instagram)
}

const LinksSocialMedia = {
  github: 'lucianosilveira42',
  youtube: 'lucianoSilveira42',
  facebook: 'lucian42',
  instagram: 'lucianosilveira.42'
}

//function ChangeSocialMediaLinks() {
//  for (let li of sociallinks.children) {
//    const social = li.getAttribute('class')
//    li.children[0].href = `https://${social}.com/${LinkSocialMedia[social]}`
//  }
//}

//ChangeSocialMediaLinks()

function GetGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`
  fetch(url)
    .then(Response => Response.json())
    .then(data => {
      UserName.textContent = data.name
      UserBio.textContent = data.bio
      UserLink.href = data.html_url
      UserImage.src = data.avatar_url
      UserLogin.textContent = data.login
    })
}

GetGitHubProfileInfos()
