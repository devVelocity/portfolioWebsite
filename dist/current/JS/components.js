class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <div class="w-full flex p-6 sticky z-20" style="height: 70px" id="nav-menu">
          <div id="nav-mobile-button" @click="console.log('hi')">
            <span class="nav-mobile-line"></span>
            <span class="nav-mobile-line"></span>
            <span class="nav-mobile-line"></span>
          </div>
          <div id="nav-desktop-buttons">
              <a href="index.html" class="nav-element">
                  Home
              </a>
              <a href="#skills" class="nav-element">
                  Skills
              </a>
              <a href="#projects" class="nav-element">
                  Projects
              </a>
          </div>
          <a href="index.html" id="nav-menu-title">
              <h1 class="font-bold text-xl text-white">Portfolio Website</h1>
          </a>
        </div>
      `;
    }
  }

  // customElements.define('main-header', Header)

  // Sticky Background Fading

  document.addEventListener('scroll', (e) => {
    if(document.documentElement.scrollTop <= 1){
      document.getElementById('nav-menu').style.background = "rgba(20,20,20,1)"
    }else{
      document.getElementById('nav-menu').style.background = "rgba(20,20,20,1)"
    }
  })

  class devConsole extends HTMLElement{
    connectedCallback(){
      this.innerHTML = `
        <div id="devConsole" class="w-screen h-screen z-30 fixed top-0 bg-opacity-60 bg-black flex justify-center items-center">
        <div class="bg-zinc-700 rounded-lg p-4 flex items-center flex-col" style="max-width: 500px; margin-left: 20px; margin-right: 40px">
            <h1 class="text-center text-xl font-bold p-2 text-white">Dev Console</h1>
            <h3 class="text-center text-white">Congrats! You found the (Work In Progress) Dev Console. While the Dev Console has yet to developed, heres a video you can watch in the meantime</h3>
            <span class="h-2 block" style="height: 15px"></span>
            <a href="https://youtu.be/dQw4w9WgXcQ" class="navigation-button text-xl pl-8 pr-8 mt-4 mb-4 w-full text-center">
                Watch Video
            </a>
            <a href="#" onclick="devConsoleClose()" class="navigation-button nav-red text-xl pl-8 pr-8 w-full text-center">
                Close
            </a>
        </div>
        </div>

      `
    }
  }

  customElements.define('dev-console', devConsole)

