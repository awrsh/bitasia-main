export type Currency = {
    alias: string;
    code: string;
    color: string;
    decimal: number;
    decimal_amount: number;
    decimal_irt: number;
    for_loan: boolean;
    for_stake: boolean;
    for_test: boolean;
    high_risk: boolean;
    id: number;
    image: string;
    max_withdraw_commission: string;
    min_withdraw: string;
    networks: string[];
    price_info: {
        price: string,
        time: string,
        change: number,
        min: string,
        max: string,
        mean: string,
        value: string,
        amount: string,
        market_value: string,
        market_amount: string
    }; // You can define a specific type for price_info if needed
    price_info_usdt: {
        price: string,
        time: string,
        change: number,
        min: string,
        max: string,
        mean: string,
        value: string,
        amount: string,
        market_value: string,
        market_amount: string
    }; // You can define a specific type for price_info_usdt if needed
    recommend_for_deposit_weight: number;
    show_high_risk: boolean;
    title: string;
    title_fa: string;
    tradable: boolean;
    withdraw_commission: number;
    withdraw_commission_type: string;
}
export type ResponseCurrency = {
    results: Currency[];
    count: number
    next: null | number
    previous: number | null
}