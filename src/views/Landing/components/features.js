class Feature {
  constructor (featureElement) {
    this.featureElement = featureElement;
    this.featureTab = this.featureElement.querySelector(".feature-tab");
    this.featureDetail = this.featureElement.querySelector(".feature-details");
    this.featureDetail.setAttribute("style", "display: none");
    this.featureTab.addEventListener('click', this.expand.bind(this));
  };

  expand() {
    if (this.featureDetail.style.display === "none") {
    this.featureDetail.setAttribute("style", "display: block");
    } else {
      this.featureDetail.setAttribute("style", "display: none");
    }
  }
}

let features = document.querySelectorAll(".feature");
features.forEach(feature => new Feature(feature));
