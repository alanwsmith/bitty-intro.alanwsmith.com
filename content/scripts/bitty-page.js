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

  sendMessage(_event, _el) {
    this.#cw.postMessage("here1");
  }
};
