export default class {
  #cw = null;

  bittyInit() {
    this.api.fn.setProp("--load-hider", "1");
    window.addEventListener("message", (event) => {
      if (event.isTrusted === true && event.origin === window.location.origin) {
        this.api.forward(event, "updateSpeaker");
      }
    })
  }

  async updateSpeaker(event, el) {
    const url = `/slides/${event.data}/speaker.html`;
    const resp = await this.api.getFragment(url);
    if (resp.ok) {
      el.replaceChildren(resp.ok);
    }
  }


  openWindow(event, el) {
    const params = `scrollbars=no,resizable=yes,status=no,location=no,toolbar=no,menubar=no,width=800,top=20,left=20`
      this.#cw = window.open(
          "/speaker.html",
          "speaker_notes",
          params
        );
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
    this.#cw.postMessage(slide);
  }
};
