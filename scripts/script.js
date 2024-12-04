(function () {
  const transakIframe = document.getElementById("transakIframe");
  const logoutButton = document.getElementById("logoutButton");

  const transakWidgetUrl =
    "https://global-stg.transak.com?apiKey=d79671a4-b021-4a4f-a444-6862a680a94b&environment=STAGING&themeColor=2c2c2c&productsAvailed=BUY&fiatAmount=65&fiatCurrency=EUR&network=ethereum&paymentMethod=sepa_bank_transfer&cryptoCurrencyCode=ETH&walletAddress=0xD902d7eBF7bc5eCa9EEA22a6Ee9F1A30EBeBEFeE&disableWalletAddressForm=true";

  // Set the iframe's src attribute to the Transak widget URL
  transakIframe.src = transakWidgetUrl;

  window.addEventListener("message", (event) => {
    if (event.source !== transakIframe.contentWindow) return;

    const { event_id, data } = event.data;

    console.log("Event ID:", event_id);
    console.log("Data:", data);

    // Display an alert with the event details
    alert(`Event: ${event_id}\nData: ${JSON.stringify(data, null, 2)}`);

    // Handle specific events
    switch (event_id) {
      case "TRANSAK_WIDGET_INITIALISED":
        // Handle widget initialization
        break;
      case "TRANSAK_ORDER_CREATED":
        // Handle order creation
        break;
      case "TRANSAK_ORDER_SUCCESSFUL":
        // Handle successful order
        break;
      case "TRANSAK_ORDER_CANCELLED":
        // Handle order cancellation
        break;
      case "TRANSAK_ORDER_FAILED":
        // Handle failed order
        break;
      case "TRANSAK_WALLET_REDIRECTION":
        // Handle wallet redirection
        break;
      case "TRANSAK_WIDGET_CLOSE_REQUEST":
        // Handle widget close request
        break;
      case "TRANSAK_WIDGET_CLOSE":
        // Handle widget close
        break;
      case "TRANSAK_USER_INFO_RECEIVED":
        // Handle user info received
        break;
      case "TRANSAK_GET_USER_REQUEST":
        // Handle get user request
        break;
      case "TRANSAK_LOGOUT_USER_REQUEST":
        // Handle logout user request
        break;
      default:
        // Handle other events
        break;
    }
  });

  // Logout button click event
  logoutButton.addEventListener("click", () => {
    if (transakIframe.contentWindow) {
      transakIframe.contentWindow.postMessage(
        { event_id: "TRANSAK_LOGOUT_USER_REQUEST" },
        "*"
      );
    }
  });
})();
