let summaryContainer = document.getElementById("summary-container");

function getData() {
  fetch("./data.json")
    .then((res) => res.json())
    .then((data) => displaySummaryData(data));
}

getData();

function displaySummaryData(data) {
  let summaryContent = data.map((item) => {
    return ` <div class="flex flex-row justify-between bg-[${item.bgColor}] p-3 rounded-lg">
          <div class="flex flex-row gap-3"><img src=${item.icon} alt="icon-reaction"> <span class="text-[${item.textColor}]">${item.category}</span></div>
          <span> <strong>${item.score}</strong> <span class="text-[#303B59] font-bold">/ 100</span></span>
        </div>`;
  });

  console.log(summaryContent, "summary content");
  summaryContainer.innerHTML = summaryContent.join("");
}
