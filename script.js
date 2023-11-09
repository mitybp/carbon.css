copyLinkImport = () => {
    const linkElement = document.querySelector("#copyLinkImport");
    navigator.clipboard.writeText(
      '<link rel="stylesheet" type="text/css" href="https://carboncss.pages.dev/api/carbon.min.css">'
    );
    document.getElementById("copyLinkImport").innerHTML =
      "<i class='ph ph-check'></i>";
    setTimeout(() => {
      document.getElementById("copyLinkImport").innerHTML =
        "<i class='ph ph-clipboard'><i/>";
    }, 2000);
  };

  const toggleThemeButton = document.getElementById("toggleThemeButton");
  toggleTheme = () => {
    if (document.body.classList.contains("light")) {
      toggleThemeButton.innerHTML = "<i class='ph-fill ph-moon'><i/>";
    } else {
      toggleThemeButton.innerHTML = "<i class='ph-fill ph-sun'><i/>";
    }
  };