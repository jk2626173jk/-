var item_html="<li class='buy_item'>1.吹風機 <div class='price'>100 $ </div><div class='del_btn' id='del_id'>X</div></li>";
var total_html="<li class='buy_item total'>總價 <div class='price'>500</div> </li>";
var shop={};
shop.name="購物清單";
shop.list=[
  {name: "吹風機",price: 300},
  {name: "麥克筆",price: 9000},
  {name: "筆記型電腦",price: 54555},
  {name: "Iphone 9",price: 32000},
  {name: "神奇海螺",price: 5000}
];

// var total_price=0;

function showlist(){
  $("#items_list").html("");
  var total_price=0;
  for(var i=0;i<shop.list.length;i++){
    var item=shop.list[i];
    var current_item_html=
        item_html.replace("1",i+1)
                 .replace("吹風機",item.name)
                 .replace("100",item.price)
                 .replace("del_id",i);
    // var total_price=0;
    total_price+=parseInt(item.price);
    var current_total_price=
        total_html.replace("500",total_price);
    // $("#items_list").append(current_total_price);
    $("#items_list").append(current_item_html);
    $("#"+i).click(
    function(){
      // showlist();
      shop.list.splice(parseInt($(this).attr("id")),1);
      showlist();
      // remove(parseInt($(this).attr("id")));
      console.log(i);
      // remove(id);
    });
  }
  $("#items_list").append(current_total_price);
}

showlist();

$(".addbtn").click(
function()
{
  shop.list.push(
  {
    name:$("#input_name").val(),
    price:$("#input_price").val()
  });
  $("#input_name").val("");
  $("#input_price").val("");
  showlist();
  
});