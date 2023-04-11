function checkINN(inn) {
    const innPattern = /^\d{10}$|^\d{12}$/;

    if (inn.match(innPattern)) {
        return true;
    } else {
        return false;
    }
}

// Пример использования
const innInput = prompt("Введите ИНН:");
if (checkINN(innInput)) {
    console.log("ИНН введен верно.");
} else {
    console.log("ИНН введен неверно.");
}



const moveSmallBlock = () => {
    const smallBlock = document.querySelector('.smallBlock');


    let currentLeft = parseInt(smallBlock.style.left) || 0;


    if (currentLeft <= 500 - 50) {
        smallBlock.style.left = `${currentLeft + 1}px`;

        setTimeout(moveSmallBlock, 10);
    }
}

window.onload = () => {
    moveSmallBlock();
}

