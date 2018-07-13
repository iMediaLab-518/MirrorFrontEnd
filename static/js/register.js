// var uploadNeed = 10;
// console.lo
// window.onload = function(){
//     // var uploadInput = $('#file_upload');
//     var uploadInput = this.document.getElementById('file_upload');
//     var result,div;

//     if(typeof FileReader==='undefined'){
//         result.innerHTML = "抱歉，您的浏览器不支持 FileReader";
//         uploadInput.setAttribute('disabled','disabled');
//     }else{
//         // uploadInput.bind("change",readFile);
//         uploadInput.addEventListener('change',readFile,false);
//     }
    

//     function readFile(){    
//         if(this.files.length<uploadNeed){
//             alert("您选择的照片数量过少");
//         }
//         else{
//             for(var i=0;i<this.files.length;i++){
//                 if (!uploadInput['value'].match(/.jpg|.gif|.png|.bmp/i)){　　//判断上传文件格式
//                     return alert("上传的图片格式不正确，请重新选择")
//                 }
//                 uploadFile();
//                 var reader = new FileReader();
//                 reader.readAsDataURL(this.files[i])
//                 reader.onload = function(e){
//                     result = '<div id="result"><img src="'+this.result+'" alt=""/></div>';
//                     div = document.createElement('div');
//                     div.innerHTML = result;
//                     document.getElementById('upload').appendChild(div);  　　　　
//                 }
//             }
//         }
//     }


//     function uploadFile(){
//         // if(this.files.length<uploadNeed){
//         //     alert("您选择的照片数量过少");
//         // }
//         var upload = uploadInput.files;
//         if(upload.length<uploadNeed){
//             alert("您选择的照片数量过少");
//         }
//         else{
//             var fd = new FormData();
//             for(var i=0;i<upload.length;++i){
//                 var reader = new FileReader();
//                 reader.readAsDataURL(upload[i]);
//                 fd.append(i,upload[i]);
//                 console.log(fd);
//                 // $.ajax({
//                 //     url:"",
//                 //     type:"post",
//                 //     async:true,
//                 //     data:fd,
//                 //     complete:function(){
//                 //         alert("正在录入数据");
//                 //     },
//                 //     success:function(data){
//                 //         console.log(data);
//                 //     },
//                 //     error:function(error){
//                 //         console.log(error);
//                 //     }
    
//                 // })
//             }
//         }
        
//     }


// }

window.onload = function(){
    $('#nameInput').bind('change',function(){
        var text = this.value;
        console.log(text);
        if(text == ""){   
            $('.nameWarning').css("display","block");
        }
        else{
            $('.nameWarning').css("display","none");
        }
    });
    




    $('#nextBtn').bind('click',function(){
        var username = $('#nameInput').value;
        var data = {
            username:username,
        };
        // 发送名字请求
        $.ajax({
            url:"",
            type:'post',
            data:data,
            success:function(res){
                console.log(res);
            },
            error:function(err){
                console.log(err);
            }
        });

        // 调用树莓派识别接口
        $.ajax({
            url:"",
            type:'get',
            data:"",
            complete:function(){
                $('.waitAndResult').css("display","block");
            },
            success:function(res){
                console.log(res);
                $('.finishBtn').css("display","block");
                $('.message').html("录入成功");
                $('#icon').removeClass("fa-spinner");
                $('#icon').addClass("fa-check");
            },
            error:function(err){
                console.log(err);
            }
        });
    });
    $(".finishBtn").bind("click",function(){
        // 关闭网页
        window.opener = null;
        window.open('','_self');
        window.close();
    });
}