export default class HandGestureController {
  #view;
  #service;
  constructor({ view, service }) {
    this.#service = service;
    this.#view = view;
  }
  async init() {
    await this.#service.initializeDetector();
  }

  static async initialize(deps) {
    const controller = new HandGestureController(deps);
    return controller.init();
  }
}
