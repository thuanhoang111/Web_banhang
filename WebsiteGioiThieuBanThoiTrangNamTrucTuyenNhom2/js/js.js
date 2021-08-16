/*đăng ký*/
function kiemtratenDN(){
    var re = /^[a-z]\W*/;
    if(re.test(document.getElementById('txtDN').value.trim())==false){
        tendn.innerText="* bắt buộc,bắt đầu bằng ký tự ";
        return false;
    }else {
        tendn.innerText="*";
        return true;
    }
}
function Kiemtrapassword() {
    var re=/(?=.*\d){6,}/;
    if(re.test(document.getElementById('txtMK').value.trim())==false){
        mk.innerText="* phải có chữ số và ít nhất là 6 ký tự";
        return false;
    }else {
        mk.innerText="*";
        return true;
    }
}
function Xacnhanpassword() {
    if(document.getElementById('txtXNMK').value != document.getElementById('txtMK').value){
        XNMK.innerText="* xác nhận phải giống với phần đăng nhập ";
        return false;
    }else {
          XNMK.innerText="*";
     return true;
    }
}
function Kiemtrangaysinh() {

    var ns=new Date(document.getElementById('txtNS').value);
    var today=new Date();
    if(eval(today.getFullYear()-ns.getFullYear())<=10){
        ngaysinh.innerText="tuổi phải lớn hơn 10"
        return false;
    }else {
        ngaysinh.innerText="";
        return true;
    }
}
function kiemtrasodienthoai() {
    var re=/^(07\d{8})|(09\d{8})|(03\d{8})$/;
    if(re.test(document.getElementById('txtSDT').value.trim())==false){
        SDT.innerText="thông tin nhập vào sai:số điện thoại bắt đầu bằng 09,07,03 và 8 số"
        return false;
    }else {
        SDT.innerText="*";
        return true;
    }
}
function kiemtraemail() {
    var re=/^[a-zA-z0-9]+\@[a-zA-Z]{4,7}+\.[a-zA-Z]{3}$/;
    if(re.test(document.getElementById('txtemail').value.trim())==false){
        email.innerText="nhập sai định dạng email:example1231@gmail.com"
        return false;
    }else {
        email.innerText="";
        return true;
    }
}
function submitform() {
    if(kiemtratenDN()==false||Kiemtrangaysinh()==false
    ||Kiemtrapassword()==false||Xacnhanpassword()==false){
        alert("bạn chưa nhập đầy đủ và đúng thông tin !");
        return false;
    }
    alert("đăng ký thành công");
    return true;
}
/*đăng nhập*/
function kiemtratenDN1(){
    var re = /^[a-z]\W*/;
    if(re.test(document.getElementById('id_user').value.trim())==false){
        tbAdd1.innerText="* bắt buộc,bắt đầu bằng ký tự ";
        return false;
    }else {
        tbAdd1.innerText="*";
        return true;
    }
}
function Kiemtrapassword1() {
    var re=/(?=.*\d){6,}/;
    if(re.test(document.getElementById('pass_user').value.trim())==false){
        tbAdd2.innerText="* phải có chữ số và ít nhất là 6 ký tự";
        return false;
    }else {
        tbAdd2.innerText="*";
        return true;
    }
}
function submitform1() {
    if(kiemtratenDN1()==false||Kiemtrapassword1()==false){
        alert("bạn chưa nhập đầy đủ và đúng thông tin !");
        return false;
    }
    alert("đăng nhập thành công");
    return true;
}