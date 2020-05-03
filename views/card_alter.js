const template = document.createElement('template')

template.innerHTML = `
  <style>
    .user-card {
      align-items: center;
      background-color: #f9f9f9;
      border-bottom: 5px solid purple;
      display: flex;
      justify-content: space-between;
      margin-bottom: 30px;
      width: 100%;
    }
    .user-card__img {
      display: flex;
      width: 200px;
    }
    .user-card__img img {
      height: auto;
      margin: 0;
      max-width: 100%;
      padding: 0;
    }
    .user-card__info {
      width: calc(100% - 250px);
    }
    .user-card h3 {
      color: #333;
      display: block;
      font-size: 28px;
      margin: 0 0 16px;
      text-decoration: none;
    }
    .hidden-info {
      display: block;
      max-height: 0;
      overflow: hidden;
      transition: all 0.2s linear;
    }
    .hidden-info.show-info {
      max-height: 100px;
    }
    .user-card p {
      display: flex;
      margin: 0 0 4px 0;
      width: 100%;
    }
    .user-card p + p {
      margin: 0 0 16px 0;
    }
    .user-card a {
      color: purple;
      padding-left: 4px;
      text-decoration: none;
    }
    .user-card .button {
      background-color: purple;
      border: none;
      border-radius: 10px;
      color: white;
      curser: pointer;
      display: block;
      padding: 8px 16px;
      text-decoration: none;
      width: fit-content;
    }
  </style>

  <section class="user-card">
    <div class="user-card__img"><img src="" alt="Avatar Image"></div>
    <div class="user-card__info">
      <h3></h3>
      <div class="hidden-info">
        <p>Call:<a href="tel:<slot name='phone' />"><slot name='phone' /></a></p>
        <p>Message:<a href="<slot name='message' />"><slot name='message' /></a></p>
      </div>
      <buttom id="jsToggleInfo" class="button">More Info</buttom>
    </div>
  </section>
`

class UserCard extends HTMLElement {
  constructor() {
    super()
    // initially set the info to hidden
    this.isInfoShown = false
    // set up the shadow DOM and attach the template varible from above
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
    // add the name and the avatar image for the user
    this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name')
    this.shadowRoot.querySelector('img').src = this.getAttribute('avatar')
  }
  
  toggleInfo() {
    // set info shown to the opposite 
    this.isInfoShown = !this.isInfoShown
    // toggle the class used to show and hide the text
    this.shadowRoot.querySelector('.hidden-info').classList.toggle('show-info')
    // conditionally render text for user feedback
    this.shadowRoot.querySelector('#jsToggleInfo').textContent = this.isInfoShown ? 'Less Info' : 'More Info'   
  }
  
  // life cycle method for the component being added to the page
  connectedCallback() {
    this.shadowRoot.querySelector('#jsToggleInfo').
    addEventListener('click', () => this.toggleInfo())
  }
  
  // life cycle method for the component being removed to the page
  disconnectedCallback() {
    this.shadowRoot.querySelector('#jsToggleInfo').
    removeEventListener()
  }
}

// tying the component functionality to the DOM element on page
window.customElements.define('user-card', UserCard)