// src/custom.d.ts
declare module "isotope-layout" {
  interface IsotopeOptions {
    itemSelector?: string;
    layoutMode?: string;
    percentPosition?: boolean;   // ✅ ADD THIS
    filter?: string | ((itemElem: Element) => boolean);
    // [key: string]: any;
  }

  class Isotope {
    constructor(element: string | HTMLElement, options?: IsotopeOptions);
    arrange(options?: IsotopeOptions): void;
    layout(): void;        // ✅ ADD THIS
    destroy(): void;
  }

  export default Isotope;
}


declare module "imagesloaded" {
  interface ImagesLoadedOptions {
    background?: boolean | string;
  }

  interface ImagesLoaded {
    on(
      event: "always" | "done" | "fail" | "progress",
      callback: () => void
    ): ImagesLoaded;
  }

  function imagesLoaded(
    elem: Element | Element[] | NodeListOf<Element> | string,
    options?: ImagesLoadedOptions
  ): ImagesLoaded;

  export default imagesLoaded;
}

