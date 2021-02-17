import { showElement, hideElement } from "../utils.js";
import {
  $confirmation,
  $lottoList,
  $lottoListLabel,
  $lottoTickets,
  $lottoNumbersToggleButton,
  $priceInput,
} from "../elements.js";

export default function LottoView() {
  this.getTicketLabelText = (num) => {
    return `총 ${num}개를 구매하였습니다.`;
  };

  this.getTicketTemplate = (num) => {
    return [...Array(num)]
      .map(() => `<span class="mx-1 text-4xl">🎟️ </span>`)
      .join("");
  };

  this.getTicketDetailTemplate = (lottoList) => {
    return `<div class="">
      ${lottoList
        .map(
          (lotto) => `<div class="d-flex flex-row items-center">
                    <div class="d-felx items-center mx-1 text-4xl mt-1">🎟️ </div>
                    <div class="ml-2 winning-numbers">
                      ${lotto.winningNumber.join(", ")}
                    </div> 
                </div>`
        )
        .join("")}
      </div>`;
  };

  this.paintLottoList = (lottoList, toggleChecked) => {
    $lottoListLabel.innerText = this.getTicketLabelText(lottoList.length);
    if (toggleChecked) {
      $lottoTickets.innerHTML = this.getTicketDetailTemplate(lottoList);
    } else {
      $lottoTickets.innerHTML = this.getTicketTemplate(lottoList.length);
    }
  };

  this.showConfirmation = (lottoList) => {
    showElement($confirmation);
    $lottoNumbersToggleButton.checked = false;
    this.paintLottoList(lottoList, false);
  };

  this.resetLottoView = () => {
    $priceInput.value = "";
    hideElement($confirmation);
  };
}
