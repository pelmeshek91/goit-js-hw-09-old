const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");let r=null;const a={start(){r=setInterval((()=>{const t=document.querySelector("body");let e=`#${Math.floor(16777215*Math.random()).toString(16)}`;t.style.backgroundColor=e}),1e3),t.setAttribute("disabled","disabled"),e.removeAttribute("disabled")},stop(){clearInterval(r),e.setAttribute("disabled","disabled"),t.removeAttribute("disabled")}};t.addEventListener("click",(t=>{t.preventDefault(),a.start()})),e.addEventListener("click",(t=>{t.preventDefault(),a.stop()}));
//# sourceMappingURL=01-color-switcher.d3583461.js.map
