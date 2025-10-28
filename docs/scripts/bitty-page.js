export default class {
  #cw = null;

  bittyInit() {
    this.api.fn.setProp("--load-hider", "1");
  }

  openWindow(event, el) {
    const params = `scrollbars=no,resizable=yes,status=no,location=no,toolbar=no,menubar=no,width=800,top=20,left=20`
      this.#cw = window.open(
          "/speaker.html",
          "speaker_notes",
          params
        );
    console.log(event);
  }

  async switch(event, el) {
    const slide = event.target.dataset.slide;
    const url = `/slides/${slide}/index.html`;
    const resp = await this.api.getFragment(url);
    if (resp.ok) {
      el.replaceChildren(resp.ok);
    } else {
      el.innerHTML = resp.error;
    }
    // this.#cw.postMessage(slide);
  }

};
