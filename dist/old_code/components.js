class Header extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <div class="w-full h-auto min-h-16 bg-zinc-900 bg-opacity-100 flex items-center justify-between p-4">
        <div>
            <a href="index.html" class="nav-element">
                Home
            </a>
        </div>
        <a href="index.html">
            <h1 class="font-bold text-xl text-white">Portfolio Website</h1>
        </a>
        </div>
      `;
    }
  }

  customElements.define('main-header', Header)

  class devConsole extends HTMLElement{
    connectedCallback(){
      this.innerHTML = `
        <div id="devConsole" class="w-screen h-screen z-30 fixed top-0 bg-opacity-60 bg-black flex justify-center items-center">
        <div class="bg-zinc-700 rounded-lg p-4 flex items-center flex-col">
            <h1 class="text-center text-xl font-bold p-2 text-white">Dev Console</h1>
            <h3 class="text-center text-white">Congrats! You found the Dev Console, have a reward!</h3>
            <span class="h-2 block" style="height: 15px"></span>
            <a href="https://youtu.be/dQw4w9WgXcQ" class="navigation-button text-xl pl-8 pr-8 mt-4 mb-4 w-full text-center">
                Reward
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

