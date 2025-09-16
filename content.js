(function () {
  function addCopyButton() {
    if (document.getElementById("copy-symbols-btn")) return;

    // Find the span with text "Back to all backtest results"
    const backtestSpan = Array.from(document.querySelectorAll("span"))
      .find(span => span.textContent.trim() === "Back to all backtest results");

    if (!backtestSpan) return;

    // Create button
    const btn = document.createElement("button");
    btn.id = "copy-symbols-btn";
    btn.innerText = "Copy Symbols";
    btn.style.marginLeft = "10px";
    btn.style.padding = "6px 12px";
    btn.style.background = "#007bff";
    btn.style.color = "#fff";
    btn.style.border = "none";
    btn.style.borderRadius = "4px";
    btn.style.cursor = "pointer";
    btn.style.fontSize = "13px";

    btn.onclick = () => {
      const rows = document.querySelectorAll("table tbody tr td:first-child a");
      if (!rows.length) {
        alert("No symbols found yet. Please click on the chart to load results.");
        return;
      }
      const symbols = Array.from(rows).map(a => a.textContent.trim());
      navigator.clipboard.writeText(symbols.join(", ")).then(() => {
        alert(`${symbols.length} symbols copied (comma-separated)!`);
      });
    };

    // Insert button right after the span
    backtestSpan.insertAdjacentElement("afterend", btn);
  }

  // Watch DOM until span + table are available
  const observer = new MutationObserver(() => {
    if (
      document.querySelector("table tbody tr td:first-child a") &&
      Array.from(document.querySelectorAll("span"))
        .some(span => span.textContent.trim() === "Back to all backtest results")
    ) {
      addCopyButton();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();
