import { LinkGenerated } from "./linkGennerated.js";
import { ShortArea } from "./shortArea.js";

class ShortCode {
    $container;
    $logo
    $title
    $textCl;
    $shortArea
    $notification;
    $linkGenerated;
    $clearHistory
    constructor() {
        this.$container = document.createElement("div")
        this.$container.classList.add("short-Code")
        this.$logo = document.createElement("div")

        this.$title = document.createElement("div")
        this.$title.classList.add("titleShortCode")
        const textAt = document.createElement("H3")
        textAt.innerHTML = "The"
        this.$textCl = document.createElement("H3")
        this.$textCl.classList.add("textCL")
        this.$textCl.innerHTML = " privacy-friendly "
        const textBf = document.createElement("H3")
        textBf.innerHTML = " URL Shortener"
        this.$title.appendChild(textAt)
        this.$title.appendChild(this.$textCl)
        this.$title.appendChild(textBf)

        this.$shortArea = new ShortArea()

        this.$notification = document.createElement("span")
        this.$notification.classList.add("noti")
        this.$notification.innerHTML = "By using shrtcode you agree to our Terms of Service."

        this.$linkGenerated = new LinkGenerated()

    }
    render() {
        this.$container.appendChild(this.$logo)
        this.$container.appendChild(this.$title)
        this.$container.appendChild(this.$shortArea.render())
        this.$container.appendChild(this.$notification)
        this.$container.appendChild(this.$linkGenerated.render())
        return this.$container
    }
}
export { ShortCode }