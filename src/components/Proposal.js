import React, { useEffect }  from 'react';
import '../style/proposal.css'

const Proposal = () => {
  const className = 'pycon'
  return(
    <div>
      <div className={`${className}-proposal`}>
				<p>PyCon Taiwan 2021 正式開始徵稿，接受包括議程（talk）與課程（tutorial）的稿件！</p>
				<h2>重要日期</h2>
				<ul>
					<li>議程、課程 開放徵稿：2 月 21 日</li>
					<li>議程、課程 投稿截止：4 月 18 日  (23:59:59<a href="/">AoE</a>)</li>
					<li>公告完整議程： 6 月 中旬（暫定）</li>
				</ul>
				<p>
					演講（talk）預設將會被錄影、編輯。之後 PyCon Taiwan 會把錄影編輯後上傳至<a href="/">pyvideo.org</a>，除非講者特別要求。參考<a href="/">錄影釋出</a>。<br/>
					每一位講者皆需購買會議門票（<a href="/">Everyone Contributes Policy</a>）
				</p>
				<h2>如何提交您的稿件</h2>
				<p>
					您需要先在 tw.pycon.org<a href="/">註冊</a>一個新的帳號。在啟用您的帳號之後，就可以填寫講者資訊，並從<a href="/">My PyCon</a>頁面中建立新的投搞。<br/>
					我們強烈建議您儘早送出您的投稿。<br/>
					因應 COVID-19 疫情，今年演講與專業課程開放您自行選擇是否採取遠端進行，即使後續疫情穩定，實體會議確定舉辦，您也可以依照自身狀況選擇是否親自前來。
				</p>
				<h2>稿件提交指南</h2>
				<h3>演講（Talk）</h3>
				<p>
					我們接受 Python 相關的各類投稿，包括學術報告、商用專案以及案例研究等，或是社群經營、溝通、心理健康、失敗經驗等軟議題。<br/>
					若您在金融科技（FinTech）、機器學習（Machine Learning）、物聯網（IoT）、硬體（Sensors, RaspberryPi, Gadgets）等相關領域上有卓越成就與發現，我們誠摯歡迎您的投稿。如果講師有任何關於 Python 的應用、使用 Python 解決問題或如何主持您的社群圈的經驗，也都邀請您投稿到 PyCon Taiwan。當然我們也非常歡迎適合進階者內容的投稿，例如探討 Python 內部運作等。另外，如果您的演講是關於特定的 Python 套件，請確保它已被廣泛使用，或者您可以考慮將重點放在相關的最佳實踐上，這類主題會有更多的受眾。<br/>
					在考慮不同的主題時，您可能會有興趣回顧過去幾年在 PyCon Taiwan 的演講主題
				</p>
				<ul>
					<li><a href="/">PyCon Taiwan 2020</a></li>
					<li><a href="/">PyCon Taiwan 2019</a></li>
					<li><a href="/">PyCon Taiwan 2018</a></li>
					<li><a href="/">PyCon Taiwan 2017</a></li>
				</ul>
				<p>
					您可以投稿長度為<b>15 分鐘</b>、<b>30 分鐘</b>或<b>45 分鐘</b>的演講，根據您自己評估所需的時間而決定。需要注意的是，議程的時間長度將會包含開場與 Q&A 的時間。<br/>
					議程可以使用的語言為：<b>英文、中文、台語</b>。<br/>
					若您是第一次投稿 PyCon Taiwan，請您參考「<a href="/">如何投稿演講</a>」一文，以了解更多相關規範以及協助您組織投稿的想法。
					此外，我們會邀請部分未錄取 PyCon Taiwan 的講者到在地社群進行分享，PyCon Taiwan 將提供部分交通補助。
				</p>
				<h3>專業課程（Tutorial）</h3>
				<p>
					同演講，我們對專業課程的主題並不做任何限制。專業課程為一個半小時的活動，不額外收費，將與 PyCon Taiwan 同時進行，場地待定。投稿課程的方針基於演講，所以請先閱讀「<a href="/">如何投稿演講</a>」一文，除了該文中的事項外，我們對課程投稿本身有額外的規範，請參見「<a href="/">如何投稿專業課程</a>」一文。
				</p>
				<h2>審稿流程</h2>
				<p>在投稿截止與公告完整議程之間是審稿的時段，每篇演講和專業課程的稿件將會由 PyCon Taiwan 的審稿委員會進行評分與評論。審稿分成三個階段：</p>
				<ul>
					<li>第一階段審稿：審稿者會依據投稿內容給予評分與評論，此階段大約為期二到三週，在此階段我們不會看到您的名字。</li>
					<li>修稿階段：根據第一階段審稿者的評論與建議，您可以修改稿件，此階段大約為期一到二週。</li>
					<li>第二階段審稿：審稿者會依據修改後的內容重新評分與評論，此階段大約為期二週。</li>
				</ul>
				<h2>修稿階段</h2>
				<p>
					在第一與第二階段審稿之間的修稿階段，您可以依據審稿者給予的評論，修改您的稿件。若您想強調您根據某個評論進行了某個更改，您可以在「補充說明」欄位中指明評論的編號以及說明您所做的修改，例如：「#4: 修改了 xxx 段落的時間分配」。或是如果您對於某個評論持反對意見，也可以依照同樣的方式向審稿者回覆。
					如果您有任何疑問，請發送電子郵件至 program@pycon.tw
				</p>
				<h3>不適當的言語或圖像</h3>
				<p>請注意，PyCon Taiwan 的聽眾來自不同文化背景，某些團體認為有趣的笑話對於其他團體來說可能是無禮的。如果您想在演講過程加入一些幽默的圖像或用詞，請再三檢視是否會有冒犯的可能，並請參考我們的行為準則。</p>
			</div>
    </div>
  );
}

export default Proposal;
