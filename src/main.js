// import router from './routes';
import Home from './pages/Home';
import Header from './layout/Header';

// window.addEventListener('load', router);
// window.addEventListener('hashchange', router);

const header = document.getElementById("header");
const mainHtml = document.getElementById("container");
header.innerHTML = Header();
mainHtml.innerHTML = Home();
