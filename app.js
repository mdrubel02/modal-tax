const buyerDetleis=document.getElementById('detail-submit-btn').addEventListener('click', function(){
    console.log('clicked');
    
    buyerInfo();
})

function buyerInfo(){
    const buyerDetleisInfo =document.getElementById('buyer-details-input');
    const buyerDetleisInfoText=buyerDetleisInfo.value ;
    console.log(buyerDetleisInfoText);
    buyerDetleisInfo.value='';
    const voiceInfo=document.getElementById('buyer-info');
    voiceInfo.innerText=buyerDetleisInfoText;
}

// mian amount 


const addButton=document.getElementById('add-details-btn');

addButton.addEventListener('click',function(){
    const itemName=document.getElementById('item-name-input');
    const itemPrice=document.getElementById('item-price-input');
    const itemQuantity=document.getElementById('item-quantity-input');
    const tableInfo=document.getElementById('info-table');

    const totalPrice=parseInt(itemPrice.value) * parseInt(itemQuantity.value);

    //Element create 

    const tableRow=document.createElement('tr');
    const tableHead=document.createElement('th');
    const tableData1=document.createElement('td');
    const tableData2=document.createElement('td');
    const tableData3=document.createElement('td');
    //create calls 
    tableData3.classList.add('item-total');
    //create Element add innerText
    tableHead.innerText=itemName.value;
    tableData1.innerText=itemPrice.value;
    tableData2.innerText=itemQuantity.value ;
    tableData3.innerText=totalPrice;

    // add create Elemnent tableRow

    tableRow.appendChild(tableHead);
    tableRow.appendChild(tableData1);
    tableRow.appendChild(tableData2);
    tableRow.appendChild(tableData3);

    //add by html tag er shte create tag
    tableInfo.appendChild(tableRow);
    calculateSubTotal();
})

function calculateSubTotal(){
    let subTotal=0

    const cost =document.getElementsByClassName('item-total');
    for(let i =0; i <cost.length; i++){
        const subTotalPrice= cost[i];
        const allPrice=parseInt(subTotalPrice.innerText);
        subTotal=subTotal+allPrice;
        // console.log(subTotal);
    }
    return subTotal;
}
