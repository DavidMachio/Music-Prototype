import "./Home.css";

export const printHome = () => {
  const divApp = document.querySelector("#app");
  divApp.innerHTML = "";
  const mainHome = document.createElement("main");
  const title = document.createElement("h2");
  mainHome.className = "mainhome";
  title.className = 'title'


  title.textContent = "Home";

  mainHome.append(title);
  divApp.appendChild(mainHome);
};
