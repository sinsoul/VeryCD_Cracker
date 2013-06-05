//Author:	SinSoul
//E-mail:	nh6080@gmail.com

var FileCount=0;
function GetJmpPage(callback,url,name,size) 
{
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(data) 
  {
	if (xhr.readyState == 4) 
	{
	  if (xhr.status == 200) 
	  {
		
		if(name!=null)
		{
			if(xhr.responseText.length<1024)
			{
				UseAicili();
				return;
			}
			callback(xhr.responseText,name,size);
			FileCount--;
			if(FileCount>0)
			{
				var count_msg = document.createElement("script");
				count_msg.setAttribute("id","count_msg_"+FileCount);
				count_msg.innerHTML = '$("#count_msg").text("VeryCD Crack:下载链接抓取中，剩余资源个数:'+FileCount+'");'
									+'$("#count_msg_'+FileCount+'").remove();';
				document.body.appendChild(count_msg);
			}
			else
			{
				var count_msg = document.createElement("script");
				count_msg.setAttribute("id","count_msg_"+FileCount);
				count_msg.innerHTML = '$("#count_msg").text("电驴资源 - VeryCD Cracker - SinSoul");'
									+'$("#VeryCD_Cracker tbody").append(\'<tr><td align="left" class="post2"><input type="checkbox" id="checkall_EM51a46b7fc0209" class="forminput" onclick="checkAll(\\\'EM51a46b7fc0209\\\',this.checked)" checked=""> <label for="checkall_EM51a46b7fc0209">全选</label> <input type="button" value="下载选中的文件" class="button downall" onclick="download(\\\'EM51a46b7fc0209\\\',0,1)"> <span id="updateflashEM51a46b7fc0209"><object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="136" height="20" id="ed2kcopy_EM51a46b7fc0209" align="middle" class="copyflash" onload="em_size(&quot;EM51a46b7fc0209&quot;);"><param name="allowScriptAccess" value="always"><param name="allowFullScreen" value="false"><param name="movie" value="/cp2flash.swf"><param name="quality" value="high"><param name="bgcolor" value="#ffffff"><param name="wmode" value="transparent"><param name="FlashVars" value="flashID=EM51a46b7fc0209"><embed src="/cp2flash.swf" wmode="transparent" quality="high" bgcolor="#ffffff" width="136" height="20" name="ed2kcopy_EM51a46b7fc0209" align="middle" allowscriptaccess="always" allowfullscreen="false" flashvars="flashID=EM51a46b7fc0209" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></object></span><script type="text/javascript">changeUpdateFlash("EM51a46b7fc0209");new MultiCheckBox("EM51a46b7fc0209");</script></td><td align="center" class="emulesize post2" id="size_EM51a46b7fc0209"></td></tr>\');'
									+'$("#count_msg_'+FileCount+'").remove();';
				document.body.appendChild(count_msg);
			}
		}
		else
		{
			callback(xhr.responseText);
		}
	  } 
	  else 
	  {
		callback(null);
	  }
	}
  };
  xhr.open('GET', url, true);
  xhr.send();
}

function GetDownloadAddr(PageText,SourceName,FileSize)
{
	var page_id=Math.floor(Math.random()*1024);
	var page_document = document.createElement("div");	
	page_document.setAttribute("style","display: none;");
	page_document.setAttribute("id",page_id);
	page_document.innerHTML = PageText.substring(PageText.search(/<body>/),PageText.search(/<\/body>/));
	document.body.appendChild(page_document);
	var script = document.createElement("script");
	script.setAttribute("id","script_"+page_id);
	SourceName = SourceName.replace(/\'/g, "’");
	console.log("资源名称:"+SourceName);
	console.log("文件大小:"+FileSize);
	script.innerHTML = 'var FileLink=$("[style=\'background-color:#EEF2F7;padding:5px;line-height:1.8;\']").attr("href");'
						+'console.log("下载链接:"+FileLink);'
						+'$("#VeryCD_Cracker tbody").append(\'<tr><td class="post"><input type="checkbox" class="forminput" value="\'+FileLink+\'" name="EM51a46b7fc0209" onclick="em_size(\\\'EM51a46b7fc0209\\\');" checked="checked" style="cursor: pointer;"><a href="\'+FileLink+\'">'+SourceName+'</a></td><td align="center" class="post">'+FileSize+'</td></tr>\');'
						+'$("#'+page_id+'").remove();'
						+'$("#script_'+page_id+'").remove();';
	document.body.appendChild(script);
}

function GetGdajieJmpAddr(PageText)
{
	var page_id=Math.floor(Math.random()*1024);
	var page_document = document.createElement("div");	
	page_document.setAttribute("style","display: none;");
	page_document.setAttribute("id",page_id);

	page_document.innerHTML = PageText.substring(PageText.search(/<body>/),PageText.search(/<\/body>/));
	document.body.appendChild(page_document);
	var script = document.createElement("script");
	script.innerHTML = '$("#emuleFile tbody tr td font a").each(function(){window.postMessage({ type: "DOWNLOAD_PAGE_ADDR", text: $(this).attr("href"),name: $(this).text(),size: $(this).parent().parent().next().text()}, "*")});$("#'+page_id+'").remove();';//'$("#emuleFile tbody tr.odd td font a").each(function(){console.log($(this).attr("href"));});';
	document.body.appendChild(script);

};

function GetAiciliDownloadAddr(PageText)
{
	var page_id=Math.floor(Math.random()*1024);
	var page_document = document.createElement("div");	
	page_document.setAttribute("style","display: none;");
	page_document.setAttribute("id",page_id);
	page_document.innerHTML = PageText.substring(PageText.search(/<table id="emuleFile">/),PageText.search(/<\/table>/));
	document.body.appendChild(page_document);
	
	
	var script = document.createElement("script");
	script.setAttribute("id","script_"+page_id)
	script.innerHTML = '$("#emuleFile tbody tr:last").remove();'
						+'$("#emuleFile tbody tr:first").remove();'
						+'$("#emuleFile tbody tr").each(function(){'
						//+'console.log($(this).children("td:eq(2)").text());'
						+'var FileName=$(this).children("td:eq(1)").children("a").text();'
						+'var FileLink=$(this).children("td:eq(1)").children("a").attr("href");'
						+'var FileSize=$(this).children("td:eq(2)").text();'
						+'$("#VeryCD_Cracker tbody").append(\'<tr><td class="post"><input type="checkbox" class="forminput" value="\'+FileLink+\'" name="EM51a46b7fc0209" onclick="em_size(\\\'EM51a46b7fc0209\\\');" checked="checked" style="cursor: pointer;"><a href="\'+FileLink+\'">\'+FileName+\'</a></td><td align="center" class="post">\'+FileSize+\'</td></tr>\');'
						+'});'
						+'$("#'+page_id+'").remove();'
						+'$("#count_msg").text("电驴资源 - VeryCD Cracker - SinSoul");'
						+'$("#VeryCD_Cracker tbody").append(\'<tr><td align="left" class="post2"><input type="checkbox" id="checkall_EM51a46b7fc0209" class="forminput" onclick="checkAll(\\\'EM51a46b7fc0209\\\',this.checked)" checked=""> <label for="checkall_EM51a46b7fc0209">全选</label> <input type="button" value="下载选中的文件" class="button downall" onclick="download(\\\'EM51a46b7fc0209\\\',0,1)"> <span id="updateflashEM51a46b7fc0209"><object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="136" height="20" id="ed2kcopy_EM51a46b7fc0209" align="middle" class="copyflash" onload="em_size(&quot;EM51a46b7fc0209&quot;);"><param name="allowScriptAccess" value="always"><param name="allowFullScreen" value="false"><param name="movie" value="/cp2flash.swf"><param name="quality" value="high"><param name="bgcolor" value="#ffffff"><param name="wmode" value="transparent"><param name="FlashVars" value="flashID=EM51a46b7fc0209"><embed src="/cp2flash.swf" wmode="transparent" quality="high" bgcolor="#ffffff" width="136" height="20" name="ed2kcopy_EM51a46b7fc0209" align="middle" allowscriptaccess="always" allowfullscreen="false" flashvars="flashID=EM51a46b7fc0209" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer"></object></span><script type="text/javascript">changeUpdateFlash("EM51a46b7fc0209");new MultiCheckBox("EM51a46b7fc0209");</script></td><td align="center" class="emulesize post2" id="size_EM51a46b7fc0209"></td></tr>\');'	
						+'$("#script_'+page_id+'").remove()';
	
	
	
	document.body.appendChild(script);
}

window.addEventListener("message", function(event) 
{
    if (event.source != window)
	{
		return;
	}
    if (event.data.type && (event.data.type == "JMP_PAGE_ADDR")) 
	{
		console.log("获取到的跳转页面:" + event.data.text);
		if(event.data.site=="gdajie")
		{
			console.log("使用逛电驴:"+event.data.site);
			GetJmpPage(GetGdajieJmpAddr,event.data.text,null,null);
			//UseAicili();
		}
		else if(event.data.site=="icili")
		{
			console.log("使用爱磁力:"+event.data.site);
			GetJmpPage(GetAiciliDownloadAddr,event.data.text,null,null);
		}
		
    }
	if (event.data.type && (event.data.type == "DOWNLOAD_PAGE_ADDR")) 
	{
		DownloadPageAddr=event.data.text;
		GetJmpPage(GetDownloadAddr,event.data.text,event.data.name,event.data.size);
	//	console.log("获取到的资源名称:" + event.data.name);
		console.log("获取到的下载页面:" + event.data.text);
		console.log("获取到的文件大小:" + event.data.size);
		FileCount++;
		console.log("资源计数:" + FileCount);
	}
}, false);

  
function Insert_jQuery(callback)
{
  var script=document.createElement("script");
  script.setAttribute("src","http://code.jquery.com/jquery-1.9.0.js");
  script.addEventListener('load',function()
  {
    var script = document.createElement("script");
    script.textContent = "window.jQ=jQuery.noConflict(true);("+callback.toString()+")();";
    document.body.appendChild(script);
  }, false);
  document.body.appendChild(script);
}

function main()
{
	
    if(document.getElementById('iptcomED2K').firstChild.textContent.substr(0,11)!='该内容尚未提供权利证明')
	{
        return;
	}
	$("iframe").remove();
	$("#iptcomED2K").children("div").remove();
	$("#iptcomED2K").html('<div class="emuletop" id="count_msg">VeryCD Cracker:开始分析下载页面...</div><div class="emulemain"><table cellpadding="2" cellspacing="1" width="100%" id="VeryCD_Cracker"><tbody></tbody></table></div>');
	var start_str='www.verycd.com/topics/';
	var start_loc=location.href.indexOf(start_str);
	start_loc+=start_str.length;
	var end_loc=location.href.indexOf('/',start_loc);
	
//	window.postMessage({ type: "JMP_PAGE_ADDR", text: "http://www.icili.com/emule/download/"+location.href.slice(start_loc,end_loc),site: "icili"}, "*");

	window.postMessage({ type: "JMP_PAGE_ADDR", text: "http://verycd.gdajie.com/topics/"+location.href.slice(start_loc,end_loc)+"/",site: "gdajie"}, "*");
}

function UseAicili()
{
	var script = document.createElement("script");
	script.setAttribute("id","script_UseAicili")
	script.innerHTML = '$("#iptcomED2K").children("div").remove();'
						+'$("#iptcomED2K").html(\'<div class="emuletop" id="count_msg">VeryCD Cracker:重新分析下载页面...</div><div class="emulemain"><table cellpadding="2" cellspacing="1" width="100%" id="VeryCD_Cracker"><tbody></tbody></table></div>\');'
						+'var start_str=\'www.verycd.com/topics/\';'
						+'var start_loc=location.href.indexOf(start_str);'
						+'start_loc+=start_str.length;'
						+'var end_loc=location.href.indexOf(\'/\',start_loc);'
						+'window.postMessage({ type: "JMP_PAGE_ADDR", text: "http://www.icili.com/emule/download/"+location.href.slice(start_loc,end_loc),site: "icili"}, "*");'
						+'$("#script_UseAicili").remove()';
	document.body.appendChild(script);
}
Insert_jQuery(main);


        
                                     