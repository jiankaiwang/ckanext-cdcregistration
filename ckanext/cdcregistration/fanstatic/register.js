/*
* desc : print the desired content of html
* param@appType : 新增/變更
* param@acc : 帳號 (英文數字)
* param@fullName : UTF-8 格式字串
* param@getDate : yyyy-MM-DD
* param@org : 要加入的組織
* param@email : 使用的 email
*/
function printDiv(
  appType,
  acc,
  fullName,
  getDate,
  org,
  email
) {
  // get the inner content
  var oldPage = document.body.innerHTML;
  var oldTitle = document.title;

  // reset the content for printing
  var content = "";
  content += "<html><head><title>帳號開通變更申請單</title></head><body>";
  content += '<h1 style="font-weight: bold; text-align: center;">組織名稱</h1>';
  content += '<h3 style="font-weight: bold; text-align: center;">開放資料平台帳號申請/異動單</h3>';
  content += '<table class="table table-header table-hover table-bordered text-center" style="width: 100%;">';
  content += '<col width="30" /><col width="70" />';
  content += '<thead>';
  content += '<tr ><th scope="col">項目</th><th scope="col">內容</th></tr>';
  content += '</thead>';
  content += '<tbody>';
  content += '<tr><th scope="col" >類型</th><th scope="col">' + appType + '</th></tr>';
  content += '<tr><th scope="col" >帳號</th><th scope="col">' + acc + '</th></tr>';
  content += '<tr><th scope="col" >全名</th><th scope="col">' + fullName + '</th></tr>';
  content += '<tr><th scope="col" >日期</th><th scope="col">' + getDate + '</th></tr>';
  content += '<tr><th scope="col" >單位</th><th scope="col">' + org + '</th></tr>';
  content += '<tr><th scope="col" >郵件</th><th scope="col">' + email + '</th></tr>';
  content += '<tr><th scope="col" >申請人簽章</th><th scope="col"></th></tr>';
  content += '<tr><th scope="col" >系統權責審核</th><th scope="col"></th></tr>';
  content += '<tr><th scope="col" >資訊室權限設定</th> <th scope="col"></th></tr>';
  content += '</tbody>';
  content += '</table>';
  content += '<hr />';
  content += '<table class="table table-header table-hover table-bordered text-center" style="width: 100%;">';
  content += '<col width="30" /><col width="70" />';
  content += '<thead>';
  content += '<tr><th scope="col">項目</th><th scope="col">內容</th></tr>';
  content += '</thead>';
  content += '<tbody>';
  content += '<tr><th scope="col">帳號開通</th><th scope="col" style="text-align: left;">資訊室負責人</th></tr>';
  content += '<tr><th scope="col">業務</th><th scope="col" style="text-align: left;">業務負責</th></tr>';
  content += '</tbody>';
  content += '</table>';
  content += '<h5 style="text-align: right;">開放資料平台帳號申請/異動單 Ver.1.0</h5>';
  content += "</body></html>";
  document.body.innerHTML = content;
  document.title = '開放資料帳號申請-變更單 - ' + fullName;

  // print Page
  window.print();

  // restore the content for showing
  document.body.innerHTML = oldPage;
  document.title = oldTitle;
}
