const state = {
  name: "",
  gameChoice: "",
};

document.getElementById("yes-button").onclick = async function () {
  var pageHTML = `
      <div id="top2">
      <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" class="bi bi-joystick" transform="rotate(45)" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 2a2 2 0 0 1-1.5 1.937v5.087c.863.083 1.5.377 1.5.726 0 .414-.895.75-2 .75s-2-.336-2-.75c0-.35.637-.643 1.5-.726V3.937A2 2 0 1 1 10 2z"></path> <path d="M0 9.665v1.717a1 1 0 0 0 .553.894l6.553 3.277a2 2 0 0 0 1.788 0l6.553-3.277a1 1 0 0 0 .553-.894V9.665c0-.1-.06-.19-.152-.23L9.5 6.715v.993l5.227 2.178a.125.125 0 0 1 .001.23l-5.94 2.546a2 2 0 0 1-1.576 0l-5.94-2.546a.125.125 0 0 1 .001-.23L6.5 7.708l-.013-.988L.152 9.435a.25.25 0 0 0-.152.23z"></path> </g></svg>
        <div id="title2">
          <h1>Choose Your Game</h1>
          <h5>Pick your choice of game!</h5>
        </div>
        <svg fill="#ffffff" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="video-game-controller" enable-background="new 0 0 32 32" xml:space="preserve" transform="rotate(-45)" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17 10V6h-2v4H2v16h28V10H17zM28 24H4V12h24V24z"></path> <polygon points="9,22 11,22 11,19 14,19 14,17 11,17 11,14 9,14 9,17 6,17 6,19 9,19 "></polygon> <rect x="18" y="17" width="2" height="2"></rect> <rect x="24" y="17" width="2" height="2"></rect> <rect x="21" y="14" width="2" height="2"></rect> <rect x="21" y="20" width="2" height="2"></rect> </g></svg>
      </div>
      <div id="games">
        <div class="card" id="puzzle">
          <div class="card-inner">
            <div class="card-front">
              <p>Puzzle Games</p>
            </div>
            <div class="card-back">
              <iframe src="https://www.youtube.com/embed/HzZhbhoTJMA?autoplay=1&mute=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen> </iframe>
              <button class="button" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                  <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      fill="none"
                      d="M12.75 6V3.75H11.25V6L9 6C6.10051 6 3.75 8.3505 3.75 11.25V17.909C3.75 19.2019 4.7981 20.25 6.09099 20.25C6.71186 20.25 7.3073 20.0034 7.74632 19.5643L10.8107 16.5H13.1893L16.2537 19.5643C16.6927 20.0034 17.2881 20.25 17.909 20.25C19.2019 20.25 20.25 19.2019 20.25 17.909V11.25C20.25 8.3505 17.8995 6 15 6L12.75 6ZM18.75 11.25C18.75 9.17893 17.0711 7.5 15 7.5L9 7.5C6.92893 7.5 5.25 9.17893 5.25 11.25V17.909C5.25 18.3735 5.62652 18.75 6.09099 18.75C6.31403 18.75 6.52794 18.6614 6.68566 18.5037L10.1893 15H13.8107L17.3143 18.5037C17.4721 18.6614 17.686 18.75 17.909 18.75C18.3735 18.75 18.75 18.3735 18.75 17.909V11.25ZM6.75 12.75V11.25H8.25V9.75H9.75V11.25H11.25V12.75H9.75V14.25H8.25V12.75H6.75ZM15 10.875C15 11.4963 14.4963 12 13.875 12C13.2537 12 12.75 11.4963 12.75 10.875C12.75 10.2537 13.2537 9.75 13.875 9.75C14.4963 9.75 15 10.2537 15 10.875ZM16.125 14.25C16.7463 14.25 17.25 13.7463 17.25 13.125C17.25 12.5037 16.7463 12 16.125 12C15.5037 12 15 12.5037 15 13.125C15 13.7463 15.5037 14.25 16.125 14.25Z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                  </g></svg><span>  Play it</span>
              </button>
            </div>
          </div>
        </div>
        <div class="card" id="RPG">
          <div class="card-inner">
            <div class="card-front">
              <p>RPGs</p>
            </div>
            <div class="card-back">
              <iframe src="https://www.youtube.com/embed/S-KuleopEus?si=Xs8UIEpL4p9S6mjY&controls=0&start=12&autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen> </iframe>
              <button class="button" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                  <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      fill="none"
                      d="M12.75 6V3.75H11.25V6L9 6C6.10051 6 3.75 8.3505 3.75 11.25V17.909C3.75 19.2019 4.7981 20.25 6.09099 20.25C6.71186 20.25 7.3073 20.0034 7.74632 19.5643L10.8107 16.5H13.1893L16.2537 19.5643C16.6927 20.0034 17.2881 20.25 17.909 20.25C19.2019 20.25 20.25 19.2019 20.25 17.909V11.25C20.25 8.3505 17.8995 6 15 6L12.75 6ZM18.75 11.25C18.75 9.17893 17.0711 7.5 15 7.5L9 7.5C6.92893 7.5 5.25 9.17893 5.25 11.25V17.909C5.25 18.3735 5.62652 18.75 6.09099 18.75C6.31403 18.75 6.52794 18.6614 6.68566 18.5037L10.1893 15H13.8107L17.3143 18.5037C17.4721 18.6614 17.686 18.75 17.909 18.75C18.3735 18.75 18.75 18.3735 18.75 17.909V11.25ZM6.75 12.75V11.25H8.25V9.75H9.75V11.25H11.25V12.75H9.75V14.25H8.25V12.75H6.75ZM15 10.875C15 11.4963 14.4963 12 13.875 12C13.2537 12 12.75 11.4963 12.75 10.875C12.75 10.2537 13.2537 9.75 13.875 9.75C14.4963 9.75 15 10.2537 15 10.875ZM16.125 14.25C16.7463 14.25 17.25 13.7463 17.25 13.125C17.25 12.5037 16.7463 12 16.125 12C15.5037 12 15 12.5037 15 13.125C15 13.7463 15.5037 14.25 16.125 14.25Z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                  </g></svg><span>  Play it</span>
              </button>
            </div>
          </div>
        </div>
        <div class="card" id="racing">
          <div class="card-inner">
            <div class="card-front">
              <p>Racing</p>
            </div>
            <div class="card-back">
              <iframe src="https://www.youtube.com/embed/AJm-cwt0Ba8?si=brUFAB2ZADbQvmWU&autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <button class="button" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                  <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      fill="none"
                      d="M12.75 6V3.75H11.25V6L9 6C6.10051 6 3.75 8.3505 3.75 11.25V17.909C3.75 19.2019 4.7981 20.25 6.09099 20.25C6.71186 20.25 7.3073 20.0034 7.74632 19.5643L10.8107 16.5H13.1893L16.2537 19.5643C16.6927 20.0034 17.2881 20.25 17.909 20.25C19.2019 20.25 20.25 19.2019 20.25 17.909V11.25C20.25 8.3505 17.8995 6 15 6L12.75 6ZM18.75 11.25C18.75 9.17893 17.0711 7.5 15 7.5L9 7.5C6.92893 7.5 5.25 9.17893 5.25 11.25V17.909C5.25 18.3735 5.62652 18.75 6.09099 18.75C6.31403 18.75 6.52794 18.6614 6.68566 18.5037L10.1893 15H13.8107L17.3143 18.5037C17.4721 18.6614 17.686 18.75 17.909 18.75C18.3735 18.75 18.75 18.3735 18.75 17.909V11.25ZM6.75 12.75V11.25H8.25V9.75H9.75V11.25H11.25V12.75H9.75V14.25H8.25V12.75H6.75ZM15 10.875C15 11.4963 14.4963 12 13.875 12C13.2537 12 12.75 11.4963 12.75 10.875C12.75 10.2537 13.2537 9.75 13.875 9.75C14.4963 9.75 15 10.2537 15 10.875ZM16.125 14.25C16.7463 14.25 17.25 13.7463 17.25 13.125C17.25 12.5037 16.7463 12 16.125 12C15.5037 12 15 12.5037 15 13.125C15 13.7463 15.5037 14.25 16.125 14.25Z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                  </g></svg><span>  Play it</span>
              </button>
            </div>
          </div>
        </div>
        <div class="card" id="Strategy">
          <div class="card-inner">
            <div class="card-front">
              <p>Endless Runner</p>
            </div>
            <div class="card-back">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/7ghSziUQnhs?si=j983OOjWCSQSTUdK&amp;start=24&autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <button class="button" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                  <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      fill="none"
                      d="M12.75 6V3.75H11.25V6L9 6C6.10051 6 3.75 8.3505 3.75 11.25V17.909C3.75 19.2019 4.7981 20.25 6.09099 20.25C6.71186 20.25 7.3073 20.0034 7.74632 19.5643L10.8107 16.5H13.1893L16.2537 19.5643C16.6927 20.0034 17.2881 20.25 17.909 20.25C19.2019 20.25 20.25 19.2019 20.25 17.909V11.25C20.25 8.3505 17.8995 6 15 6L12.75 6ZM18.75 11.25C18.75 9.17893 17.0711 7.5 15 7.5L9 7.5C6.92893 7.5 5.25 9.17893 5.25 11.25V17.909C5.25 18.3735 5.62652 18.75 6.09099 18.75C6.31403 18.75 6.52794 18.6614 6.68566 18.5037L10.1893 15H13.8107L17.3143 18.5037C17.4721 18.6614 17.686 18.75 17.909 18.75C18.3735 18.75 18.75 18.3735 18.75 17.909V11.25ZM6.75 12.75V11.25H8.25V9.75H9.75V11.25H11.25V12.75H9.75V14.25H8.25V12.75H6.75ZM15 10.875C15 11.4963 14.4963 12 13.875 12C13.2537 12 12.75 11.4963 12.75 10.875C12.75 10.2537 13.2537 9.75 13.875 9.75C14.4963 9.75 15 10.2537 15 10.875ZM16.125 14.25C16.7463 14.25 17.25 13.7463 17.25 13.125C17.25 12.5037 16.7463 12 16.125 12C15.5037 12 15 12.5037 15 13.125C15 13.7463 15.5037 14.25 16.125 14.25Z"
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                    ></path>
                  </g></svg><span>  Play it</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div id="bottom">
      </div>
    `;

  if (document.getElementById("name").value == "") {
    alert("Please enter your name");
    document.getElementById("name").style.outline = "10px solid red";
  } else {
    state.name = document.getElementById("name").value;
    state.playGame = true;

    document.getElementById("main").innerHTML = pageHTML;
    document.getElementById("bottom").style.paddingBottom = "100rem";

    const mediaQuery = window.matchMedia("(min-width: 1800px)");

    function handleScreenSizeChange(event) {
      if (event.matches) {
        document.getElementById("main").style.marginTop="-57rem"
      }
    }

    handleScreenSizeChange(mediaQuery);

    Array.from(document.getElementsByClassName("button")).forEach((element) => {
      element.addEventListener("click", async () => {
        const outerDiv = element.closest("div[id]");
        if (outerDiv) {
          state.gameChoice = outerDiv.id;

          var user = {
            name: state.name,
            gameChoice: state.gameChoice,
          };

          load(user);
        }
      });
    });
  }
};

async function load(user) {
  const firstHtml = `
        <div id="loader">
            <div class="box-of-star4">
                <div class="star star-position1"></div>
                <div class="star star-position2"></div>
                <div class="star star-position3"></div>
                <div class="star star-position4"></div>
                <div class="star star-position5"></div>
                <div class="star star-position6"></div>
                <div class="star star-position7"></div>
            </div>
            <div data-js="astro" class="astronaut">
                <div class="head"></div>
                <div class="arm arm-left"></div>
                <div class="arm arm-right"></div>
                <div class="body">
                    <div class="panel"></div>
                </div>
                <div class="leg leg-left"></div>
                <div class="leg leg-right"></div>
                <div class="schoolbag"></div>
            </div>
        <div id="loading-text">
        <p>Loading...</p>
        </div>
        </div>
    `;

    const secondHTml=`
<div class="main_wrapper">
  <div class="main">
    <div class="antenna">
      <div class="antenna_shadow"></div>
      <div class="a1"></div>
      <div class="a1d"></div>
      <div class="a2"></div>
      <div class="a2d"></div>
      <div class="a_base"></div>
    </div>
    <div class="tv">
      <div class="cruve">
        <svg
          xml:space="preserve"
          viewBox="0 0 189.929 189.929"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          class="curve_svg"
        >
          <path
            d="M70.343,70.343c-30.554,30.553-44.806,72.7-39.102,115.635l-29.738,3.951C-5.442,137.659,11.917,86.34,49.129,49.13
        C86.34,11.918,137.664-5.445,189.928,1.502l-3.95,29.738C143.041,25.54,100.895,39.789,70.343,70.343z"
          ></path>
        </svg>
      </div>
      <div class="display_div">
        <div class="screen_out">
          <div class="screen_out1">
            <div class="screen">
              <span class="notfound_text"> NOT FOUND</span>
            </div>
          </div>
        </div>
      </div>
      <div class="lines">
        <div class="line1"></div>
        <div class="line2"></div>
        <div class="line3"></div>
      </div>
      <div class="buttons_div">
        <div class="b1"><div></div></div>
        <div class="b2"></div>
        <div class="speakers">
          <div class="g1">
            <div class="g11"></div>
            <div class="g12"></div>
            <div class="g13"></div>
          </div>
          <div class="g"></div>
          <div class="g"></div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="base1"></div>
      <div class="base2"></div>
      <div class="base3"></div>
    </div>
  </div>
  <div class="text_404">
    <div class="text_4041">4</div>
    <div class="text_4042">0</div>
    <div class="text_4043">4</div>
  </div>
</div>
    `

  document.getElementById("main").innerHTML = firstHtml;
  const response = await fetch("/api/data", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  setTimeout(function () {
    document.getElementById("main").innerHTML = secondHTml;
    document.getElementById("main").style.position ="relative"
    
    const mediaQuery = window.matchMedia("(min-width: 1800px)");

    function handleScreenSizeChange(event) {
      if (event.matches) {
        document.getElementById("main").style.marginTop="0rem"
      }
    }

    handleScreenSizeChange(mediaQuery);

    document.getElementById("main").innerHTML +=`
    <button type="button" class="button1" onclick="refresh();">
<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
  fill="currentColor"
  class="bi bi-arrow-repeat"
  viewBox="0 0 16 16"
>
  <path
    d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"
  ></path>
  <path
    fill-rule="evenodd"
    d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
  ></path>
</svg>
Refresh
</button>
`
  }, 1000);
}

function refresh(){
    const firstHtml = `
          <div id="loader">
              <div class="box-of-star4">
                  <div class="star star-position1"></div>
                  <div class="star star-position2"></div>
                  <div class="star star-position3"></div>
                  <div class="star star-position4"></div>
                  <div class="star star-position5"></div>
                  <div class="star star-position6"></div>
                  <div class="star star-position7"></div>
              </div>
              <div data-js="astro" class="astronaut">
                  <div class="head"></div>
                  <div class="arm arm-left"></div>
                  <div class="arm arm-right"></div>
                  <div class="body">
                      <div class="panel"></div>
                  </div>
                  <div class="leg leg-left"></div>
                  <div class="leg leg-right"></div>
                  <div class="schoolbag"></div>
              </div>
          <div id="loading-text">
          <p>Loading...</p>
          </div>
          </div>
      `;
  

      const secondHTml=`
  <div class="main_wrapper">
    <div class="main">
      <div class="antenna">
        <div class="antenna_shadow"></div>
        <div class="a1"></div>
        <div class="a1d"></div>
        <div class="a2"></div>
        <div class="a2d"></div>
        <div class="a_base"></div>
      </div>
      <div class="tv">
        <div class="cruve">
          <svg
            xml:space="preserve"
            viewBox="0 0 189.929 189.929"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            class="curve_svg"
          >
            <path
              d="M70.343,70.343c-30.554,30.553-44.806,72.7-39.102,115.635l-29.738,3.951C-5.442,137.659,11.917,86.34,49.129,49.13
          C86.34,11.918,137.664-5.445,189.928,1.502l-3.95,29.738C143.041,25.54,100.895,39.789,70.343,70.343z"
            ></path>
          </svg>
        </div>
        <div class="display_div">
          <div class="screen_out">
            <div class="screen_out1">
              <div class="screen">
                <span class="notfound_text"> NOT FOUND</span>
              </div>
            </div>
          </div>
        </div>
        <div class="lines">
          <div class="line1"></div>
          <div class="line2"></div>
          <div class="line3"></div>
        </div>
        <div class="buttons_div">
          <div class="b1"><div></div></div>
          <div class="b2"></div>
          <div class="speakers">
            <div class="g1">
              <div class="g11"></div>
              <div class="g12"></div>
              <div class="g13"></div>
            </div>
            <div class="g"></div>
            <div class="g"></div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="base1"></div>
        <div class="base2"></div>
        <div class="base3"></div>
      </div>
    </div>
    <div class="text_404">
      <div class="text_4041">4</div>
      <div class="text_4042">0</div>
      <div class="text_4043">4</div>
    </div>
  </div>
      `
  
    document.getElementById("main").innerHTML = firstHtml;
    const mediaQuery = window.matchMedia("(min-width: 1800px)");

    function handleScreenSizeChange(event) {
      if (event.matches) {
        document.getElementById("loader").style.marginTop="-50rem"
      }
    }
  
    handleScreenSizeChange(mediaQuery);
  
    setTimeout(function () {
      document.getElementById("main").innerHTML = secondHTml;
      document.getElementById("main").style.position ="relative"
      document.getElementById("main").innerHTML +=`
      <button type="button" class="button1" onclick="refresh();">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    class="bi bi-arrow-repeat"
    viewBox="0 0 16 16"
  >
    <path
      d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"
    ></path>
    <path
      fill-rule="evenodd"
      d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
    ></path>
  </svg>
  Refresh
  </button>
  `

    }, 3000);
}