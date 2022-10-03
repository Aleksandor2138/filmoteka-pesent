export default function getRefs() {
  return {

    //  footer-modal
    footerModalOpen: document.querySelector('.footer-modal-open'),
    footerModalClose: document.querySelector('.close'),
    modal: document.querySelector('[data-modal]'),
    backdrop: document.querySelector('.backdrop'),
    bodyEl: document.querySelector('body'),

    // top.js
    scrollUp: document.querySelector('.top'),
    scrollUpSvgPath: document.querySelector('.top__svg--path'),
  };
}
