/* ১. [ ফাংশন নেম দিতে হবে seerToMon]: একটা ফাংশন এ প্যারামিটার হিসেবে নিবে সের। তারপর সেটাকে মন এ কনভার্ট করে কত মন হয় সেই সংখ্যা রিটার্ন করবে। শুধু সংখ্যাটা রিটার্ন করবে।  */
function seerToMon(seer) {
    if(seer<0) {
        return 'please input positive number';
    }
    const mon = seer / 40
    return mon
}
console.log(seerToMon(-100))

/* ২. [ ফাংশন নেম দিতে হবে totalSales]: তিনটা প্যারামিটার লাগবে। ভিডিও ভালো করে দেখবে। 
১ টি শার্টের দাম – ১০০ টাকা
১ টি প্যান্টের দাম – ২০০ টাকা 
১ টি জুতার দাম – ৫০০ টাকা 
এখন সে যদি বিভিন্ন সংখ্যার শার্ট, প্যান্ট বা জুতা বিক্রি করে তাহলে টোটাল কত বিক্রি হলো সেই সংখ্যা রিটার্ন করতে হবে। 
*/
function totalSales(shirt, pant, shoe) {
    if(shirt<0 || pant<0 || shoe<0){
        return 'input value do not negative'
    }
    const shirtPrice = shirt * 100
    const pantPrice = pant * 200
    const shoePrice = shoe * 500
    const total = shirtPrice + pantPrice + shoePrice
    return total
}
console.log(totalSales(2, 1, 1));
console.log(totalSales(5, -10, 15));
console.log(totalSales(2, 1, 1));

/* ৩. [ ফাংশন নেম দিতে হবে deliveryCost]: প্যারামিটার হিসাবে নিবে কয়টা টি-শার্ট ডেলিভারি করবে। 
যদি ১০০ বা তার কম টি-শার্ট পাঠাও তাহলে প্রত্যেকটা টিশার্ট এর জন্য খরচ ১০০ টাকা করে। 
যদি ১০০ এর বেশি কিন্তু ২০০ পর্যন্ত। তাহলে প্রথম ১০০ টা টি-শার্ট এর প্রত্যেকটা টিশার্ট এর জন্য খরচ ১০০ টাকা করে দিতে হবে। আর ১০০ এর বেশি যেগুলা আছে সেগুলা প্রতিটার জন্য ৮০ টাকা করে দিতে হবে। 
যদি ২০০ এর বেশি টি-শার্ট পাঠাও। তাহলে প্রথম ১০০ টা টি-শার্ট এর প্রত্যেকটা টিশার্ট এর জন্য খরচ ১০০ টাকা করে দিতে হবে। আর ১০১ থেকে ২০০ পর্যন্ত যেগুলা আছে সেগুলা প্রতিটার জন্য ৮০ টাকা করে দিতে হবে। ২০০ এর বেশি যতগুলা আছে সেগুলার সবগুলা প্রতিটা ৫০ টাকা করে দিতে হবে। 
এখন আমি একটা প্যারামিটার দিবো। সেটা যেকোন সংখ্যা হতে পারে। সেই সংখ্যা অনুসারে তুমি ফাংশন থেকে রিটার্ন দিবে কতটাকা ডেলিভার খরচ হবে। 
আমার ইনপুট প্যারামিটার সংখ্যাটা ১০০ এর কম হতে পারে। ১০০ থেকে ২০০ এর মধ্যে হতে পারে। আবার ২০০ এর বেশিও হতে পারে। তাই সব কেইস ভালো করে টেস্ট করে নিবে।  */
function deliveryCost(shirts){
    const first100 = 100;
    const secont100 = 80;
    const rest = 50;

    if(shirts>=0 && shirts<=100){
        return shirts * first100;
    }
    else if(shirts >100 && shirts<=200){
        const first100Cost = 100 * first100;
        const rest100Cost = (shirts - 100) * secont100;
        return first100Cost + rest100Cost
    }
    else if(shirts > 200) {
        const first100Cost = 100 * first100;
        const secont100Cost = 100 * secont100
        const restProduct = (shirts - 200) * rest;
        return restProduct + secont100Cost + first100Cost;
    }
    else{
        return 'Please input positive value'
    }
}
console.log(deliveryCost(-201));

// problem no #4 
function perfectFriend(arr) {
    if(arr.length === 0) {
        return "please enter a valid array.";
    }
    for (let i = 0; i < arr.length; i++){
        const name = arr[i];
        if(name.length === 5) {
            return name;
        }
    }
}
const friends = ["zubaeid", "zahid", "imrul0", "hasan0", "nayem0"];
console.log(perfectFriend(friends));