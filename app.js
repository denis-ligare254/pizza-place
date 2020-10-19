var price , crust_price, topping_price ;
let total = 0;
function Getpizza( name,size,crust,topping, total ){
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}
$(document).ready(function(){
  $("button.proceed").click(function(event){
   let p_name = $(".name option:selected").val();
   let p_size = $("#size option:selected").val();
   let p_crust = $("#crust option:selected").val();
   let ptopping = [];
   $.each($("input[name='toppings']:checked"), function(){            
       ptopping.push($(this).val());
   });
   console.log(ptopping.join(", "));

   switch(p_size){
    case "0":
      price =0;
    break;
    case "large":
       price = 1500;
       console.log(price);
     break;
     case "medium":
       price = 900;
       console.log("The price is "+price);
     break;
     case "small":
       price = 500;
       console.log(price);
     default:
       console.log("error"); 
   }
   switch(p_crust){
      case "0":
        crust_price = 0;
      break;
      case "Neapolitan":
        crust_price = 400;
      break;
      case "Chicago Deep-dish":
        crust_price = 450;
      break;
      case "Flatbread/Focaccia":
        crust_price = 300;
      break;
      default:
        console.log("No price"); 
    }
    let topping_value = ptopping.length*50;
    console.log("toppins value" + topping_value);

    if((p_size == "0") && (p_crust == "0")){
      console.log("nothing selected");
      $("button.proceed").show();
      $("#info").show();
      $("div.choice").hide();
      alert("select pizza price and crust before you continue"); 
    }
    else{
      $("button.proceed").hide();
      $("#info").hide();
      $("div.choice").slideDown(1000);
    }

    total = price + crust_price + topping_value;
    console.log(total);
    let checkoutTotal =0;
    checkoutTotal = checkoutTotal + total;

    $("#pizzaname").html($(".name option:selected").val());
    $("#pizzasize").html( $("#size option:selected").val());
    $("#pizzacrust").html($("#crust option:selected").val());
    $("#pizzatopping").html(ptopping.join(", "));
    $("#totals").html(total);
    

    $("button.addPizza").click(function(){
      let p_name = $(".name option:selected").val();
      let p_size = $("#size option:selected").val();
      let p_crust = $("#crust option:selected").val();
      let ptopping = [];
      $.each($("input[name='toppings']:checked"), function(){            
          ptopping.push($(this).val());
      });
      console.log(ptopping.join(", "));
      switch(p_size){
        case "0":
          price =0;
        break;
        case "large":
           price = 1200;
           console.log(price);
         break;
         case "medium":
           price = 850;
           console.log("The price is "+price);
         break;
         case "small":
           price = 600;
           console.log(price);
         default:
           console.log("error"); 
       }
       switch(p_crust){
          case "0":
            crust_price = 0;
          break;
          case "Crispy":
            crust_price = 400;
          break;
          case "Stuffed":
            crust_price = 450;
          break;
          case "Gluten-free":
            crust_price = 300;
          break;
          default:
            console.log("No price"); 
        }
        let topping_value = ptopping.length*50;
        console.log("toppins value" + topping_value);
        total = price + crust_price + topping_value;
        console.log(total);

        checkoutTotal = checkoutTotal + total;
        console.log(checkoutTotal);
      var newOrder = new Getpizza(p_name, p_size, p_crust,ptopping,total);

      $("#ordersmade").append('<tr><td id="pizzaname">'+newOrder.name +'</td><td id="pizzasize">' + newOrder.size + '</td><td id="pizzacrust">'+newOrder.crust + '</td><td id="pizzatopping">'+newOrder.topping+'</td><td id="totals">'+newOrder.total+'</td></tr>');
      console.log(newOrder);
    });
    
    $("button#checkout").click(function(){ 
      $("button#checkout").hide();
      $("button.addPizza").hide();
      $("button.deliver").slideDown(1000);
      $("#deliveryprice").slideDown(1000);
      console.log("Your total bills is sh. "+checkoutTotal);
      $("#pizzatotal").append("Your bill is sh. "+checkoutTotal);
    });

    
    $("button.deliver").click(function(){
      $(".pizzatable").hide();
      $(".choice h2").hide();
      $(".pick-up").slideDown(1000);
      $("#deliveryprice").hide();
      $("button.deliver").hide();
      $("#pizzatotal").hide();
      let deliveryamount= checkoutTotal+150;
      console.log("You will pay sh. "+deliveryamount+" on pick-up");
      $("#totalbill").append("Your bill plus pick-up fee is: "+deliveryamount);
    });

    $("button#final-order").click(function(event){
      event.preventDefault();

      $("#pizzatotal").hide();
      $(".pick-up").hide();
      $("button#final-order").hide();
      let deliceryamount= checkoutTotal+150;
      console.log("Final Bill is: "+deliceryamount);
      let person = $("input#name").val();
      let phone = $("input#phone").val();
      let location = $("input#location").val();

      if ($("input#name").val() && $("input#phone").val() && $("input#location").val()!=""){
  
        $("#finallmessage").append(person+", We have recieved your order and it will be delivered to you at "+location+ ". Prepare sh. "+deliceryamount);
        $("#totalbill").hide();
        $("#finallmessage").slideDown(1000);
      }
      else {
        alert("Please fill in the details for pick-up!");
        $(".pick-up").show();
        $("button#final-order").show();
      }
    });
   event.preventDefault();
  });
});