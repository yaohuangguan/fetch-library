const getText = () => {
  fetch("test.txt")
    .then(res => {
      if (!res.ok) {
        throw Error(res.status);
      }
      return res.text();
    })
    .then(data => {
      document.getElementById("output").innerHTML = data;
    })
    .catch(err => console.log(err));
};

const getJSON = () => {
  fetch("posts.json")
    .then(res => {
      if (!res.ok) {
        throw Error(res.status);
      }
      return res.json();
    })
    .then(data => {
      let output = "";
      data.forEach(post => {
        output += `<li>${post.title}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(err => console.log(err));
};
const getAPI = () => {
  fetch("https://api.github.com/users")
    .then(res => {
      if (!res.ok) {
        throw Error(res.status);
      }
      return res.json();
    })
    .then(data => {
      let output = "";
      data.forEach(user => {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById("output").innerHTML = output;
    })
    .catch(err => console.log(err));
};

document.getElementById("button1").addEventListener("click", getText);
document.getElementById("button2").addEventListener("click", getJSON);
document.getElementById("button3").addEventListener("click", getAPI);
