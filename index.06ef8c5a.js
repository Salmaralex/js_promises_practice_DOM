function e(e,n){var t=document.createElement("div");t.className=n,t.textContent=e,t.dataset.qa="notification",document.body.appendChild(t)}var n=document.getElementsByClassName("logo")[0],t=new Promise(function(e,t){n.addEventListener("click",function(){e("First promise was resolved")}),setTimeout(function(){t(Error("First promise was rejected"))},3e3)}),o=function(n){e(n,"success")},c=new Promise(function(e){n.addEventListener("click",function(){e("Second promise was resolved")}),n.addEventListener("contextmenu",function(n){n.preventDefault(),e("Second promise was resolved")})}),i=new Promise(function(e){var t=new Set(["click","contextmenu"]),o=function(){0===t.size&&e("Third promise was resolved")};n.addEventListener("click",function(e){t.has("click")&&(t.delete("click"),o())}),n.addEventListener("contextmenu",function(e){t.has("contextmenu")&&(t.delete("contextmenu"),o())})});t.then(o).catch(function(n){e(n,"error")}),c.then(o),i.then(o);
//# sourceMappingURL=index.06ef8c5a.js.map
