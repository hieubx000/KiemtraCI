class ShortArea {
    $container
    $title
    $labelInput
    $input
    $button;
    $pickSortDomain
    $text
    setActiveBtn;
    domainSubscribe;
    domainValue;
    constructor() {
        this.$container = document.createElement("div")
        this.$container.classList.add("short-area")

        this.$title = document.createElement("H2")
        this.$title.innerHTML = "Link Shortener"

        this.$labelInput = document.createElement("span")
        this.$labelInput.innerHTML = "Enter a Link:"

        this.$input = document.createElement("input")
        this.$input.type = "text";
        this.$input.placeholder = "example.com";

        this.$button = document.createElement("button")
        this.$button.classList.add("btn")
        this.$button.innerHTML = "->"
        this.$button.addEventListener("click", this.handleClick)

        this.$pickSortDomain = document.createElement("div")
        const labelShortDomain = document.createElement("span")
        labelShortDomain.innerHTML = "Short domain:"
        const shrtcoButton = document.createElement("button")
        shrtcoButton.addEventListener("click", this.handleDomain)
        shrtcoButton.innerHTML = "shrtco.de"
        shrtcoButton.value = "shrtco"
        const qrButton = document.createElement("button")
        qrButton.innerHTML = "9qr.de"
        const shinyButton = document.createElement("button")
        shinyButton.innerHTML = "shiny.link"
        this.$pickSortDomain.appendChild(labelShortDomain)
        this.$pickSortDomain.appendChild(shrtcoButton)
        this.$pickSortDomain.appendChild(qrButton)
        this.$pickSortDomain.appendChild(shinyButton)

        this.$text = document.createElement("p")
        this.$text.innerHTML = "With this free Link Shortener you can make Links shorter and easier to remember. Just enter a Link into the form and click on the above Button to generate a short Link. When visiting the short-Link, the short-Link will immediately redirect you to the long Link."

        this.domainValue = null;
    }

    // handleDomain = (evt) => {
    //     evt.preventDefault();
    //     this.domainValue = this.value
    // }

    handleClick = (evt) => {
        evt.preventDefault();
        if (this.domainSubscribe) {
            this.domainSubscribe();
        }

        db.collection("link")
            .add({
                changeAt: firebase.firestore.FieldValue.serverTimestamp(),
                value: this.$input.value
            })
    }

    render() {
        this.$container.appendChild(this.$title)
        const InputArea = document.createElement("div")
        InputArea.appendChild(this.$labelInput)
        InputArea.appendChild(this.$input)
        InputArea.appendChild(this.$button)

        this.$container.appendChild(InputArea)
        this.$container.appendChild(this.$pickSortDomain)
        this.$container.appendChild(this.$text)

        return this.$container
    }
}
export { ShortArea }