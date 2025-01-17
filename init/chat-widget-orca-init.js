(function (window, document) {
    if (
      typeof window.ChatWidgetOrca === "undefined" ||
      !window.ChatWidgetOrca.baseUrl ||
      !window.ChatWidgetOrca.appId
    ) {
      console.error("Invalid ChatWidgetOrca configuration.");
      return;
    }
  
    var config = window.Orca;
    var iframe = document.createElement("iframe");
    iframe.src = config.baseUrl + "?appId=" + config.appId;
    iframe.style.position = "fixed";
    iframe.style.bottom = "1rem";
    iframe.style.right = "1rem";
    iframe.style.zIndex = "9999";
    iframe.style.border = "none";
    iframe.style.background = "transparent";
    iframe.style.colorScheme = "none";
  
    document.body.appendChild(iframe);
  
    function updateIframeSize(width, height) {
      iframe.style.width = width;
      iframe.style.height = height;
    }
  
    window.addEventListener("message", function (event) {
      if (event.data && event.data.type === "resize") {
        updateIframeSize(event.data.size.width, event.data.size.height);
      }
    });
  })(window, document);
  