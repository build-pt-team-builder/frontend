class ResourceTab {
  constructor(tabElement){
    this.tabElement = tabElement;

    this.tabData = this.tabElement.dataset.tab;

    if(this.tabData == 'all'){
      this.cards = document.querySelectorAll(".resource-card");
    } else {
      this.cards = document.querySelectorAll(`.resource-card[data-tab=${this.tabData}]`);
    }

    this.cards = Array.from(this.cards).map(card => new ResourceCard(card));

    this.tabElement.addEventListener('click', this.selectTab.bind(this));
  }

  selectTab(){

    const tabs = document.querySelectorAll(".resource-tab");

    tabs.forEach(tab => tab.classList.remove("active-tab"))

    const cards = document.querySelectorAll(".resource-card");

    cards.forEach(card => card.setAttribute("style", 'display: none'));

    this.tabElement.classList.add("active-tab");

    this.cards.forEach(card => card.selectCard());
  }
}

class ResourceCard {
  constructor(cardElement){
    this.cardElement = cardElement;
  }
  selectCard(){
    this.cardElement.setAttribute("style", 'display: flex');
  }

}

let tabs = document.querySelectorAll(".resource-tab").forEach(tab => new ResourceTab(tab));
