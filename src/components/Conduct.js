import React, { useEffect }  from 'react';
import '../style/proposal.css'

const Proposal = () => {
  const className = 'pycon'
  return(
    <div>
      <div className={`${className}-proposal`}>
        <p>
          PyCon Taiwan 是由臺灣 Python 程式語言社群所發起的大會，藉以促進社群中的意見討論與技術交流。為了提供歡樂、愉快、生氣蓬勃的環境並創造價值，PyCon Taiwan 製作此行為準則 (Code of Conduct)。本公約適用於參與者在 PyCon Taiwan 相關實體與數位場域中的一切言行。期望大家一起合作，讓 PyCon Taiwan 充滿互敬與互信。
        </p>
        <h2>行為準則</h2>
        <ul>
          <li>
            <p>
              參加者不可有騷擾言行：大會不容忍任何的騷擾或歧視。無分國籍、種族、語言、性別、性取向、年齡、身心狀況、信仰、職業、資歷、政治傾向、智力，每一位參加者都應該獲得同樣的尊重。
            </p>
          </li>
          <li>
            <p>
              彼此欣賞：每位參加者都應該抱持專業的態度與行為。Python 的使用者來自不同的專業分工、技術背景與應用領域。我們以非常多樣的方式使用並貢獻 Python 技術。任何貶低社群中其它成員的言行都是不適當的。
            </p>
          </li>
          <li>
            <p>
              體貼他人：任何形式的性暗示，都不適於大會中的任何場合。這些場合包含但不限於演講、開放空間、社群媒體。請避免源自刻板印象的言行。會議中請把手機調為靜音，或是其它不會影響他人的模式。
				    </p>
          </li>
        </ul>
        <p>
          研討會籌備團隊有權調整任何違反此準則的行為。僅需根據籌備團隊的裁決，違反準則者可能必須離開會場，並不得要求退費。
        </p>
        <p>
          本行為準則由 PyCon Taiwan 籌備團隊認可執行。
				</p>
			</div>
    </div>
  );
}

export default Proposal;
