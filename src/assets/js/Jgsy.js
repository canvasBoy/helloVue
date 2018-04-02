/**
 * @extends Jgsy
 *
 * 集选择器，遍历，http请求
 * new Jgsy('??') 创建名字为 ?? 的函数
 * 使用中可用 new Jgsy('??') 更改函数的名字
 */
;new Jgsy("$$");

function Jgsy(){

  if(this == window){
    return;
  }

  /**
   * 切换函数名
   */
  if(Jgsy.$penName){
    eval('window.' + Jgsy.$penName + '="";');
    Jgsy.$penName = arguments[0];
  }else{
    Jgsy.$penName = arguments[0];
  }

  eval('window.' + Jgsy.$penName + '=' + function(doc){
      // console.log(this)

      /**
       * 选择器
       *
       * @param Jgsy.$penName {string} 变量名字 
       * 
       * 若要在选择的字符上加上父级元素可以设置 Jgsy.$penName 的documentParents属性等于父级选择器字符，
       * 或者用关键字 new，如 new Jgsy.$penName('父级选择器')
       */
      if(this.constructor == arguments.callee){
        arguments.callee.documentParents = doc;
        console.info('\n用new关键字执行了函数\n');
        console.log("arguments.callee.documentParents =",arguments.callee.documentParents);
        return ;
      }

      if(arguments.callee.documentParents != undefined && typeof arguments.callee.documentParents == 'string'){
        console.log('@ONEcustom >> className =',$$.documentParents + ' ' + doc);
        var dom = document.querySelectorAll($$.documentParents + ' ' + doc);
        if(dom.length <= 1){
          dom = document.querySelector($$.documentParents + ' ' + doc);
        }
      }else{
        console.log('@TWOcustom >> className =', doc);
        if(doc == '' || doc == null){
          return null;
        }
        var dom = document.querySelectorAll(doc);
        if(dom.length <= 1){
          dom = document.querySelector(doc);
        }
      }

      dom.forArr = function(){
        /**
         * @extends forArr 遍历执行方法
         *
         * @param $air {string} 执行的事件
         * @param $fn {function} 执行的行数
         * @param $this {object} 函数里this的指向
         */

        /**
         * 对传入的参数进行重新赋值
         */
        var $arr = [],$air,$fn,$this;
        for(var $z=0; $z<arguments.length; $z++){
          $arr.push(arguments[$z]);
        }
        var $isAir = false;
        for(var $j=0; $j<$arr.length; $j++){
          if((typeof $arr[$j] == 'string' || $arr[$j] == '') && !$air){
            $air = $arr[$j];
            $isAir = true;
          }else if(typeof $arr[$j] === 'function'){
            $fn = $arr[$j];
          }else if(typeof $arr[$j] === 'object'){
            // console.log(arguments[0] instanceof HTMLElement)
            $this = $arr[$j];
          }
        }
        $air = $isAir ? $air : '';

        /**
         * 判断this（dom）是一个还是多个
         */
        if(this.length){
          for(var $i=0; $i<this.length; $i++){
            $switchAir($air, $fn, this[$i], $this);
          }
        }else{
          $switchAir($air, $fn, this, $this);
        }
      }

      /**
       * ************遍历方法添加要执行的属性
       */
      function $switchAir($air,$fn,$this_dom,$this){

        $this = $this ? $this : $this_dom;

        /**
         * 用字符串执行
         */
        $air ? eval("$this_dom." + $air + " = function(){\
              $fn.call($this);\
            };") : $fn.call($this);

        /**
         * 在此添加遍历可执行的事件 ----- Not in this way
         *
        switch($air){
          case 'onclick':
          case 'click':
            $this_dom.onclick = function(){
              $fn.call($this);
            };
            break;
          default:
            $fn.call($this);
        }
        */
      }

      return dom;
    }
  );

  /**
   * @extends Jgsy.$penName.xhrHttp 网络请求
   * @param {obect} XHR 请求所需数据
   *
   * var XHR = {
   *   method : 'post',           请求方式     默认 "post"
   *   url : 'index.html',        地址
   *   isAsyn : true,             是否异步     默认 true
   *   header : [],               请求头       默认XML格式["Content-Type" , "application/x-www-form-urlencoded;charset=utf-8"]
   *   setTime : 5000,            设置超时     可不设置
   *   paramVal : 'Uid',          请求发送参数  
   *   okFun : function(){'...'}, 请求成功的函数
   *   noFun : function(){'...'}  请求失败的函数
   * };
   *
   * => Jgsy.$penName.xhrHttp(XHR);
   */
  eval(Jgsy.$penName + '.xhrHttp =' + function (XHR){
    var xhr;
    if(window.XMLHttpRequest){
      xhr=new XMLHttpRequest();
    }else if(window.ActiveXObject){
      xhr=new new ActiveXObject("Microsoft.XMLHTTP");
    }else{
      return '浏览器没有内置请求!';
    }

    if(XHR.setTime){
      var timedont = false,
      timer = setTimeout(function(){
                xhr.abort();
                doEorre();
                clearTimeout(timer);
      },XHR.setTime);
    }

    xhr.onreadystatechange=function(){
      if(xhr.readyState !==4){ return;}
      if(xhr.status===200){
        var header=xhr.getAllResponseHeaders();
        console.log('响应头',header)
        doResponse(xhr);
      }else{
        alert("响应异常");
        doEorre(xhr);
      }
    };
    xhr.open(XHR.method ? XHR.method : "post" , XHR.url, XHR.isAsyn ? XHR.isAsyn : true);
    xhr.setRequestHeader(XHR.header[0] ? XHR.header[0] : "Content-Type" , XHR.header[1] ? XHR.header[1] : "application/x-www-form-urlencoded;charset=utf-8");
    xhr.send(XHR.paramVal ? XHR.paramVal : '');

    function doResponse(data){//请求成功调用函数
      data=JSON.parse(data.response);
      console.log('@请求成功！')
      console.log('data',data);
      XHR.okFun();
    }

    function doEorre(data){//请求错误调用函数

      console.log('Edata',data)
      if( data.status == "error"){
        console.log('@请求错误！');
        // hint('请求错误！');
      }else if(timedont){
        console.log('@请求超时！');
        // hint('请求超时！');
      }else{
        console.log('@未知错误！');
        // hint('未知错误！');
      }
      XHR.noFun();
    }
  });
}