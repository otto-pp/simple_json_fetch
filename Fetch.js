import fetch from "node-fetch";

async function getADDR() {
  try {
    const response = await fetch('https://my-json-server.typicode.com/typicode/demo/db');

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    const str = await response.json();
    // console.log(testSTR)
    return str;
  } catch (err) {
    console.log(err);
  }
}
async function parseJSON() {
  var res = await getADDR();
  var post = res.posts
  var comment = res.comments.find(item => item.id === 1)
  getAllPost(post)
  getFirstComment(comment)
}

function getAllPost(post){
  console.log(post)
}
function getFirstComment(obj) {
  console.log(obj)
}
parseJSON()

