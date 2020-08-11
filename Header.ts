interface tagOptions {
    createNav(id: string): HTMLElement;
}
export class testing implements tagOptions {

    createNav(id: string) {
        var tag = document.createElement("nav");
        var text = document.createTextNode("Tutorix is the best e-learning platform");
        tag.appendChild(text);
        tag.id = id
        tag.className = "navbar navbar-expand-lg navbar-light bg-light"
        var element = document.body;
        element.appendChild(tag);
        return tag;
    }