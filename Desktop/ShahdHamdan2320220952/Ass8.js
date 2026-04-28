const display = document.getElementById('display');

// إضافة الرقم أو العملية للشاشة
function appendToDisplay(input) {
    if (display.innerText === '0') {
        display.innerText = input;
    } else {
        display.innerText += input;
    }
}

// مسح الشاشة
function clearDisplay() {
    display.innerText = '0';
}

// حذف آخر رمز
function deleteLast() {
    if (display.innerText.length > 1) {
        display.innerText = display.innerText.slice(0, -1);
    } else {
        display.innerText = '0';
    }
}

// إجراء الحسابات
function calculate() {
    try {
        // نستخدم eval لحساب النص البرمجي كعملية رياضية
        display.innerText = eval(display.innerText);
    } catch (error) {
        display.innerText = "خطأ";
    }
}

// ربط أزرار لوحة المفاتيح
document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (/[0-9]/.test(key)) appendToDisplay(key);
    if (['+', '-', '*', '/'].includes(key)) appendToDisplay(key);
    if (key === 'Enter') calculate();
    if (key === 'Backspace') deleteLast();
    if (key === 'Escape') clearDisplay();
});