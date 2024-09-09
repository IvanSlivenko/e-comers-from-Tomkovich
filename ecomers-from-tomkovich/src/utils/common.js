export const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

export const buildUrl = ( url, params) => {
    let urlWithParams = url;
    Object.entries(params).forEach(([key, value], i) =>{
        const sign = !i ? '?' : "&";
        urlWithParams += `${sign}${key}=${value}`
    })

    return urlWithParams;
}

export const createrandomNumbername = () => {
    return Math.floor(Math.random() * 6);
}

export const getCurrentProduct = (id, CustomeDate) => {
    console.log(CustomeDate,'-------------------CustomeDate');
    if (!CustomeDate || CustomeDate.length === 0) {
        // Перевіряємо, чи існує CustomeApyDate і чи він не порожній
        console.error("CustomeApyDate is not defined or empty");
        return null;
      }
    let currentProduct = '';  // Оголошуємо змінну через let
    for (let i = 0; i < CustomeDate.length; i++) {
        const element = CustomeDate[i];
        
        // Використовуємо == для перевірки рівності
        if (element.id == id) {
            currentProduct = element;

                       
            return currentProduct;  // Повертаємо знайдене значення і виходимо з функції
        }
    }
    
    return null;  // Якщо не знайдено, повертаємо null або інше значення
}