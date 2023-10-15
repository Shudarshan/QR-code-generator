$("button").click(() => {
  const qrText = $("#Qrtext").val();
  const Dimension = $("#dimension").val();
  const qrImg = $("#qrImg");
  const download = $("#download");
  const errorContainer = $("#errorContainer");
  // console.log(typeof(dimension))
  var dimension = parseInt(Dimension,10);
  if(dimension > 400) {
    dimension=(dimension%400);
    console.log(">400")
  }
  if(dimension < 200 ) {
      dimension = 200;
      console.log("<200")
    }
  


  // Reset error messages
  errorContainer.text("");
  errorContainer.hide();

  if (!qrText.trim() && !Dimension.trim()) {
    // Display error for both QR text and dimension missing
    errorContainer.text("Both QR text and dimension are required fields.");
    errorContainer.show();
  } else if (!qrText.trim()) {
    // Display error for missing QR text
    errorContainer.text("QR text is required.");
    errorContainer.show();
  } else if (!Dimension.trim()) {
    // Display error for missing dimensions
    errorContainer.text("Dimension is required.");
    errorContainer.show();
  } else {
    // Generate the QR code and download link
    qrImg.attr(
      "src",
      "http://chart.apis.google.com/chart?cht=qr&chl=" +
        qrText +
        "&chs=" +
        (dimension%400) +
        "x" +
        (dimension%400)
    );
    download.attr(
      "href",
      "http://chart.apis.google.com/chart?cht=qr&chl=" +
        qrText +
        "&chs=" +
        dimension +
        "x" +
        dimension
    );

    // Show the QR code and download link
    qrImg.show();
    download.show();
  }
});
