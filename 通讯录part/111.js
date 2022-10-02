var linkmanList = [
    { name: "xixi", phone: "10086" },
    { name: "猪猪", phone: "10086" },
    { name: "五仁", phone: "10086" },
    { name: "王二", phone: "10086" },
    { name: "张三", phone: "10086" },
    { name: "嗷嗷", phone: "10086" },
    { name: "哈哈", phone: "10086" },
    { name: "xixi", phone: "10086" },
    { name: "猪猪", phone: "10086" },
    { name: "五仁", phone: "10086" },
    { name: "王二", phone: "10086" },
    { name: "张三", phone: "10086" },
    { name: "嗷嗷", phone: "10086" },
    { name: "哈哈", phone: "10086" },
    { name: "xixi", phone: "10086" },
    { name: "猪猪", phone: "10086" },
    { name: "五仁", phone: "10086" },
    { name: "王二", phone: "10086" },
    { name: "张三", phone: "10086" },
    { name: "嗷嗷", phone: "10086" },
    { name: "哈哈", phone: "10086" },
]
//联系人列表

let linkman = 0;
let linkmanStr = "";//需要输入的html
for(linkman in linkmanList) {
    linkmanStr += '<p class="linkmanitem"><a href=tel:'+linkmanList[linkman].phone+'>'+linkmanList[linkman].name+''
    +linkmanList[linkman].phone+'</p>';
}
//使用<a href=tel:电话号码></a> 即可实现打电话
document.getElementById('linkmanlist').innerHTML = linkmanStr;

