class LinkGenerated {
    $container;
    $noti;
    $link;
    $social
    constructor() {
        this.$container = document.createElement("div")
        this.$container.classList.add("linkGenerated")

        this.$noti = document.createElement("h6")
        this.$noti.classList.add("notiLink")
        this.$noti.innerHTML = "Link generated!"

        this.$link = document.createElement("div")
            // this.innerHTML
        this.$social = document.createElement("div")

        db.collection("link")
            .orderBy("changeAt")
            .onSnapshot(this.linkListener);
    }

    linkListener = (snapshot) => {
        snapshot.docChanges().forEach((change) => {
            console.log(change.doc.id);
        })
    }

    render() {
        this.$container.appendChild(this.$noti)
        this.$container.appendChild(this.$link)
        this.$container.appendChild(this.$social)

        return this.$container;
    }
}
export { LinkGenerated }