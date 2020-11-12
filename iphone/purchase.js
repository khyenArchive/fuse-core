function purchase() {
    let timestamp = +new Date();

    let url = "https://checkout.coupang.com/direct/checkout/" + timestamp + "?item[]=71834191703:1";

    window.open(url, '_blank');
}
