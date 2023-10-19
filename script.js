copyLinkImport = () => {
  document.getElementById("copyLinkImport").innerHTML =
    "<i class='ph ph-check'></i>";
  setTimeout(() => {
    document.getElementById("copyLinkImport").innerHTML =
      "<i class='ph ph-clipboard'><i/>";
  }, 2000);
};
