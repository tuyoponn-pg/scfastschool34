const musicList = [
  "https://embed.music.apple.com/jp/album/%E8%93%AC%E8%8E%B1%E4%BC%9D%E8%AA%AC/1437764534?i=1437764535&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1437764535&amp;theme=auto",
  "https://embed.music.apple.com/jp/album/%E6%A1%9C%E8%8A%B1%E4%B9%8B%E6%81%8B%E5%A1%9A-japanese-flower/1437764534?i=1437764537&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1437764537&amp;theme=auto",
  "https://embed.music.apple.com/jp/album/%E5%B0%91%E5%A5%B3%E7%A7%98%E5%B0%81%E5%80%B6%E6%A5%BD%E9%83%A8/1437764350?i=1437764682&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1437764682&amp;theme=auto",
  "https://embed.music.apple.com/jp/album/%E6%9C%88%E3%81%AE%E5%A6%96%E9%B3%A5-%E5%8C%96%E7%8C%AB%E3%81%AE%E5%B9%BB/1437764350?i=1437764687&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1437764687&amp;theme=auto",
  "https://embed.music.apple.com/jp/album/%E5%B9%BB%E6%83%B3%E3%81%AE%E6%B0%B8%E9%81%A0%E7%A5%AD/1437764350?i=1437764691&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1437764691&amp;theme=auto",
  "https://embed.music.apple.com/jp/album/%E7%AB%A5%E7%A5%AD-innocent-treasures/1437764720?i=1437764721&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1437764721&amp;theme=auto",
  "https://embed.music.apple.com/jp/album/%E3%83%B4%E3%82%A9%E3%83%A4%E3%83%BC%E3%82%B8%E3%83%A51969/1437764720?i=1437764724&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1437764724&amp;theme=auto",
  "https://embed.music.apple.com/jp/album/%E6%B0%B8%E5%A4%9C%E3%81%AE%E5%A0%B1%E3%81%84-imperishable-night/1437764720?i=1437764726&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1437764726&amp;theme=auto",
  "https://embed.music.apple.com/jp/album/%E3%83%92%E3%83%AD%E3%82%B7%E3%82%B236%E5%8F%B7-neo-super-express/1437764407?i=1437764771&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1437764771&amp;theme=auto",
  "https://embed.music.apple.com/jp/album/%E3%81%8A%E5%AE%87%E4%BD%90%E3%81%95%E3%81%BE%E3%81%AE%E7%B4%A0%E3%81%84%E5%B9%A1/1437764407?i=1437764776&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1437764776&amp;theme=auto",
  "https://embed.music.apple.com/jp/album/%E6%9C%88%E3%81%BE%E3%81%A7%E5%B1%8A%E3%81%91%E4%B8%8D%E6%AD%BB%E3%81%AE%E7%85%99/1437764407?i=1437764777&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1437764777&amp;theme=auto",
  "https://embed.music.apple.com/jp/album/%E3%83%AC%E3%83%88%E3%83%AD%E3%82%B9%E3%83%9A%E3%82%AF%E3%83%86%E3%82%A3%E3%83%96%E4%BA%AC%E9%83%BD/1437764407?i=1437764778&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1437764778&amp;theme=auto",
  "https://embed.music.apple.com/jp/album/%E3%83%A9%E3%82%AF%E3%83%88%E3%82%AC%E3%83%BC%E3%83%AB-%E5%B0%91%E5%A5%B3%E5%AF%86%E5%AE%A4/1437764407?i=1437764779&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1437764779&amp;theme=auto",
  "https://embed.music.apple.com/jp/album/%E5%8D%83%E5%B9%B4%E5%B9%BB%E6%83%B3%E9%83%B7-history-of-the-moon/1437764407?i=1437764780&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1437764780&amp;theme=auto",
  "https://embed.music.apple.com/jp/album/%E6%9C%88%E9%9D%A2%E3%83%84%E3%82%A2%E3%83%BC%E3%81%B8%E3%82%88%E3%81%86%E3%81%93%E3%81%9D/1437764339?i=1437764340&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1437764340&amp;theme=auto",
  "https://embed.music.apple.com/jp/album/%E8%A1%9B%E6%98%9F%E3%83%88%E3%83%AA%E3%83%95%E3%83%8D/1437765163?i=1437765164&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1437765164&amp;theme=auto",
  "https://embed.music.apple.com/jp/album/%E5%A4%A9%E9%B3%A5%E8%88%B9%E7%A5%9E%E7%A4%BE/1437765163?i=1437765168&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1437765168&amp;theme=auto",
  "https://embed.music.apple.com/jp/album/%E5%A4%9C%E7%A9%BA%E3%81%AE%E3%83%A6%E3%83%BC%E3%83%95%E3%82%A9%E3%83%BC%E3%83%AD%E3%83%9E%E3%83%B3%E3%82%B9/1437765163?i=1437765169&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1437765169&amp;theme=auto",
  "https://embed.music.apple.com/jp/album/%E6%84%9F%E6%83%85%E3%81%AE%E6%91%A9%E5%A4%A9%E6%A5%BC-cosmic-mind/1437765163?i=1437765172&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1437765172&amp;theme=auto",
  "https://embed.music.apple.com/jp/album/%E7%B7%91%E3%81%AE%E3%82%B5%E3%83%8A%E3%83%88%E3%83%AA%E3%82%A6%E3%83%A0/1437763229?i=1437763232&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1437763232&amp;theme=auto",
  "https://embed.music.apple.com/jp/album/%E3%83%8F%E3%83%BC%E3%83%88%E3%83%95%E3%82%A7%E3%83%AB%E3%83%88%E3%83%95%E3%82%A1%E3%83%B3%E3%82%B7%E3%83%BC/1437763229?i=1437763234&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1437763234&amp;theme=auto",
  "https://embed.music.apple.com/jp/album/%E5%85%AD%E5%8D%81%E5%B9%B4%E7%9B%AE%E3%81%AE%E6%9D%B1%E6%96%B9%E8%A3%81%E5%88%A4-fate-of-sixty-years/1437763229?i=1437763235&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1437763235&amp;theme=auto",
  "https://embed.music.apple.com/jp/album/%E3%82%A4%E3%82%B6%E3%83%8A%E3%82%AE%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88/1437763229?i=1437763237&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1437763237&amp;theme=auto",
  "https://embed.music.apple.com/jp/album/%E5%A6%96%E6%80%AA%E8%A3%8F%E5%8F%82%E9%81%93/1437763229?i=1437763239&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1437763239&amp;theme=auto",
  "https://embed.music.apple.com/jp/album/%E3%82%A2%E3%83%B3%E3%83%8E%E3%82%A6%E3%83%B3x-unfound-adventure/1437763229?i=1437763392&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1437763392&amp;theme=auto",
  "https://embed.music.apple.com/jp/album/%E4%BB%96%E6%84%9B%E3%82%82%E7%84%A1%E3%81%84%E4%BA%8C%E4%BA%BA%E3%81%AE%E5%8D%9A%E7%89%A9%E8%AA%8C/1437763055?i=1437763056&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1437763056&amp;theme=auto",
  "https://embed.music.apple.com/jp/album/%E5%87%8D%E3%82%8A%E4%BB%98%E3%81%84%E3%81%9F%E6%B0%B8%E9%81%A0%E3%81%AE%E9%83%BD/1437763055?i=1437763057&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1437763057&amp;theme=auto",
  "https://embed.music.apple.com/jp/album/dr-%E3%83%AC%E3%82%A4%E3%83%86%E3%83%B3%E3%82%B7%E3%83%BC%E3%81%AE%E7%9C%A0%E3%82%8C%E3%81%AA%E3%81%8F%E3%81%AA%E3%82%8B%E7%9E%B3/1437763055?i=1437763058&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1437763058&amp;theme=auto",
  "https://embed.music.apple.com/jp/album/%E4%B9%9D%E6%9C%88%E3%81%AE%E3%83%91%E3%83%B3%E3%83%97%E3%82%AD%E3%83%B3/1437763055?i=1437763059&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1437763059&amp;theme=auto",
  "https://embed.music.apple.com/jp/album/%E3%82%B7%E3%83%A5%E3%83%AC%E3%83%87%E3%82%A3%E3%83%B3%E3%82%AC%E3%83%BC%E3%81%AE%E5%8C%96%E7%8C%AB/1437763055?i=1437763451&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1437763451&amp;theme=auto",
  "https://embed.music.apple.com/jp/album/%E3%83%94%E3%83%A5%E3%82%A2%E3%83%92%E3%83%A5%E3%83%BC%E3%83%AA%E3%83%BC%E3%82%BA-%E5%BF%83%E3%81%AE%E5%9C%A8%E5%87%A6/1437763055?i=1437763455&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1437763455&amp;theme=auto",
  "https://embed.music.apple.com/jp/album/%E3%83%90%E3%83%BC-%E3%82%AA%E3%83%BC%E3%83%AB%E3%83%89%E3%82%A2%E3%83%80%E3%83%A0/1437763436?i=1437763437&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1437763437&amp;theme=auto",
  "https://embed.music.apple.com/jp/album/%E7%87%95%E7%9F%B3%E5%8D%9A%E7%89%A9%E8%AA%8C%E3%81%8C%E9%80%A3%E3%82%8C%E3%81%A6%E3%81%8D%E3%81%9F%E9%97%87/1437763436?i=1437763438&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1437763438&amp;theme=auto",
  "https://embed.music.apple.com/jp/album/%E3%82%A2%E3%82%A6%E3%83%88%E3%82%B5%E3%82%A4%E3%83%80%E3%83%BC%E3%82%AB%E3%82%AF%E3%83%86%E3%83%AB/1437763436?i=1437763440&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1437763440&amp;theme=auto",
  "https://embed.music.apple.com/jp/album/%E6%97%A7%E4%B8%96%E7%95%8C%E3%81%AE%E5%86%92%E9%99%BA%E9%85%92%E5%A0%B4/1437763436?i=1437763443&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1437763443&amp;theme=auto",
  "https://embed.music.apple.com/jp/album/%E4%BA%A1%E5%A4%B1%E3%81%AE%E3%82%A8%E3%83%A2%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3/1437763436?i=1437763445&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1437763445&amp;theme=auto",
  "https://embed.music.apple.com/jp/album/%E4%BA%8C%E6%97%A5%E9%85%94%E3%81%84%E3%81%AE%E5%90%8C%E5%BA%8A%E7%95%B0%E5%A4%A2/1437763436?i=1437763446&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1437763446&amp;theme=auto",
  "https://embed.music.apple.com/jp/album/%E4%B8%83%E5%A4%95%E5%9D%82%E3%81%AB%E6%9C%9D%E3%81%8C%E6%9D%A5%E3%82%8B/1756212029?i=1756212030&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1756212030&amp;theme=auto",
  "https://embed.music.apple.com/jp/album/%E4%B8%8D%E7%AD%89%E5%BC%8F%E3%81%AE%E3%83%86%E3%82%A3%E3%83%B3%E3%82%AB%E3%83%BC%E3%83%99%E3%83%AB/1756212029?i=1756212031&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1756212031&amp;theme=auto",
  "https://embed.music.apple.com/jp/album/%E7%A6%81%E6%96%AD%E3%81%AE%E6%89%89%E3%81%AE%E5%90%91%E3%81%93%E3%81%86%E3%81%AF-%E3%81%93%E3%81%AE%E4%B8%96%E3%81%8B%E3%81%82%E3%81%AE%E4%B8%96%E3%81%8B/1756212029?i=1756212032&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1756212032&amp;theme=auto",
  "https://embed.music.apple.com/jp/album/%E3%82%AF%E3%83%AC%E3%82%A4%E3%82%B8%E3%83%BC%E3%83%90%E3%83%83%E3%82%AF%E3%83%80%E3%83%B3%E3%82%B5%E3%83%BC%E3%82%BA/1756212029?i=1756212035&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1756212035&amp;theme=auto",
  "https://embed.music.apple.com/jp/album/%E7%A7%98%E5%8C%BF%E3%81%95%E3%82%8C%E3%81%9F%E3%83%95%E3%82%A9%E3%83%BC%E3%82%B7%E3%83%BC%E3%82%BA%E3%83%B3%E3%82%BA/1756212029?i=1756212039&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1756212039&amp;theme=auto",
  "https://embed.music.apple.com/jp/album/%E5%A4%9C%E3%81%98%E3%82%83%E3%81%AA%E3%81%8F%E3%81%A6%E3%82%82%E3%81%8A%E5%8C%96%E3%81%91%E3%81%AF%E3%81%84%E3%82%8B%E3%81%8B%E3%82%89/1756212029?i=1756212040&amp;itscg=30200&amp;itsct=music_box_player&amp;ls=1&amp;app=music&amp;mttnsubad=1756212040&amp;theme=auto"
];
function showDailyMusic() {
  const today = new Date();
  const index = today.getDay() % musicList.length;
  showMusic(musicList[index]);
}
function showRandomMusic() {
  const index = Math.floor(Math.random() * musicList.length);
  showMusic(musicList[index]);
}
function showMusic(url) {
  const musicBox = document.getElementById('music-box');
  musicBox.innerHTML = `
    <iframe allow="autoplay *; encrypted-media *;" frameborder="0"
      height="150" style="width:100%;max-width:660px;overflow:hidden;background:transparent;"
      sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
      src="${url}">
    </iframe>
  `;
}
// 日替わりで表示
document.addEventListener('DOMContentLoaded', showDailyMusic);
// ランダムで表示
// document.addEventListener('DOMContentLoaded', showRandomMusic);