timerID = setInterval('clock()',0.01); //0.00001秒毎にclock()を実行

function clock() {
	document.getElementById("view_year").innerHTML = getyear();
	document.getElementById("view_month").innerHTML = getmon();
	document.getElementById("view_day").innerHTML = getday();
	document.getElementById("view_hour").innerHTML = geth();
	document.getElementById("view_min").innerHTML = getmin();
	document.getElementById("view_sec").innerHTML = getsec();
	document.getElementById("view_pd").innerHTML = postDay();
	document.getElementById("view_ph").innerHTML = postHour();
	document.getElementById("view_pm").innerHTML = postMin();
	document.getElementById("view_ps").innerHTML = postSec();
}

function getPost() {
	var now = new Date();
	var year = now.getFullYear();
	var mon = now.getMonth()+1; //１を足すこと
	var day = now.getDate();
	var hour = now.getHours();
	var min = now.getMinutes();
	var sec = now.getSeconds();
	window.open('https://twitter.com/share?url=https://0505Keitan.github.io/tools/nowtime.html&hashtags=nowTime&text=今は' + year + '年' + mon + '月' + day + '日' + hour + '時' + min + '分' + sec + '秒です！', '_blank', 'width=450,height=500');
}

function postIma() {
var now = new Date();
    //カウントダウンしたい日を設定
    var anyDate = new Date("2018/12/31 23:59:59");
    //日数を計算
    var ms = anyDate - now;
        //時間を取得
        var ha = Math.floor(ms / 3600000);
        var haa = ha % 24;
        //分を取得
        var ma = Math.floor((ms - ha * 3600000) / 60000);
        //秒を取得
        var sa = Math.round((ms - ha * 3600000 - ma * 60000) / 1000);
// ※ 月は0～11までで指定
var anyDays = new Date(2019,11,31);
 
// 1日のマイクロ秒で除算をすると
// 開催日までの日数が算出できる
remainDay = Math.floor((anyDays - now) / (24*60*60*1000));
 
// 開催前日の場合は残り0日になってしまうのを防止
remainDay++;
 
        
	window.open('https://twitter.com/share?url=https://0505Keitan.github.io/tools/nowtime.html&hashtags=nowTime&text=2019年はあと' + remainDay + '日' + haa + '時間' + ma + '分' + sa + '秒', '_blank', 'width=450,height=500');
}

function getyear() {
	var now = new Date();
	var year = now.getFullYear();
	var y = year + "年";
	return y;
}

function getmon() {
	var now = new Date();
	var mon = now.getMonth()+1;
	var m = mon + "月";
	return m;
}

function getday() {
	var now = new Date();
	var day = now.getDate();
	var d = day + "日";
	return d;
}

function geth() {
	var now = new Date();
	var hour = now.getHours();
	var h = hour + "時";
	return h;
}

function getmin() {
	var now = new Date();
	var min = now.getMinutes();
	var m = min + "分";
	return m;
}

function getsec() {
	var now = new Date();
	var sec = now.getSeconds();
	var s = sec + "秒";
	return s;
}

// ここからカウントダウン

function postDay() {
	var now = new Date();
 
// 開催日を設定
// ※ 月は0～11までで指定
var anyDay = new Date(2019,11,31);
 
// 1日のマイクロ秒で除算をすると
// 開催日までの日数が算出できる
remainDay = Math.floor((anyDay - now) / (24*60*60*1000));
 
// 開催前日の場合は残り0日になってしまうのを防止
remainDay++;
var pd = remainDay + "日";
return pd;
}

function postHour() {
	var now = new Date();
    //カウントダウンしたい日を設定
    var anyDate = new Date("2019/12/31 23:59:59");
    //日数を計算
    var ms = anyDate - now;
        //時間を取得
        var ha = Math.floor(ms / 3600000);
        var haa = ha % 24;
        //分を取得
        var ma = Math.floor((ms - ha * 3600000) / 60000);
        //秒を取得
        var sa = Math.round((ms - ha * 3600000 - ma * 60000) / 1000);
 
        //HTML上に出力
        var ph = haa + "時間";
        return ph;
}

function postMin() {
	var now = new Date();
    //カウントダウンしたい日を設定
    var anyDate = new Date("2019/12/31 23:59:59");
    //日数を計算
    var ms = anyDate - now;
        //時間を取得
        var ha = Math.floor(ms / 3600000);
        var haa = ha % 24;
        //分を取得
        var ma = Math.floor((ms - ha * 3600000) / 60000);
        //秒を取得
        var sa = Math.round((ms - ha * 3600000 - ma * 60000) / 1000);
 
        //HTML上に出力
        var pm = ma + "分";
        return pm;
}

function postSec() {
	var now = new Date();
    //カウントダウンしたい日を設定
    var anyDate = new Date("2019/12/31 23:59:59");
    //日数を計算
    var ms = anyDate - now;
        //時間を取得
        var ha = Math.floor(ms / 3600000);
        var haa = ha % 24;
        //分を取得
        var ma = Math.floor((ms - ha * 3600000) / 60000);
        //秒を取得
        var sa = Math.round((ms - ha * 3600000 - ma * 60000) / 1000);
 
        //HTML上に出力
        var ps = sa + "秒";
        return ps;
}


