var profilepic = document.getElementById('profilepic');
profilepicSource = profilepic.src;
var changeFlag = true;
alternateProfilePic = 'https://imgflip.com/s/meme/Heavy-Breathing-Cat.jpg';

function MoveImg() {
  console.log(typeof profilepic);
  //alert(image.style.left);
  if (changeFlag) {
    profilepic.src = profilepicSource;
  } else {
    profilepic.src = alternateProfilePic;
  }
  changeFlag = !changeFlag;
}

function sourceProfilePic() {
  
}
